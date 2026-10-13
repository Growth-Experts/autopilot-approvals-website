import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type RefObject,
} from "react";
import { ArrowLeft, ArrowRight, Pause, Play, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import type {
  TooltipPlacement,
  TourCardStep,
  TourMediaStep,
  TourStep,
  TourVideoStep,
} from "./types";

export type { TourStep } from "./types";

const BRAND = "#2142E7";
const TOOLTIP_GAP = 22;
const EDGE_MARGIN = 8;
const FADE_MS = 250;
const ZOOM_MS = 800;
const ZOOM_EASE = "cubic-bezier(0.4, 0, 0.2, 1)";
const MEDIA_READY_TIMEOUT_MS = 8000;
const FONT_TIMEOUT_MS = 3000;

type LayerState = "active" | "under" | "hidden";

interface StageView {
  /** Step currently painted on the stage; lags `index` until its media has decoded. */
  shown: number;
  /** Layer kept fully opaque beneath the incoming one while it fades in. */
  under: string | null;
  /** Layer that was active before `shown`, used to decide whether to animate the zoom. */
  previous: string | null;
}

export interface ProductTourProps {
  steps: TourStep[];
  /** Width / height of the media frame. */
  aspectRatio?: number;
  /** Accessible name for the tour region. */
  label?: string;
  initialStep?: number;
  onStepChange?: (index: number) => void;
  className?: string;
}

export function ProductTour({
  steps,
  aspectRatio = 16 / 10,
  label = "Product tour",
  initialStep = 0,
  onStepChange,
  className,
}: ProductTourProps) {
  const [index, setIndex] = useState(() => clampIndex(initialStep, steps.length));
  const rootRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const stage = useElementSize(stageRef);
  const reduceMotion = usePrefersReducedMotion();
  const fontsReady = useFontsReady(rootRef);
  // Holding caption text until the webfont is ready avoids a visible fallback-to-webfont swap.
  const captionStyle: CSSProperties | undefined = fontsReady ? undefined : { visibility: "hidden" };
  const fadeMs = reduceMotion ? 0 : FADE_MS;

  const layers = useMemo(() => buildLayers(steps), [steps]);
  const media = useRef(new Map<string, HTMLImageElement | HTMLVideoElement>());
  const [view, setView] = useState<StageView>(() => ({
    shown: clampIndex(initialStep, steps.length),
    under: null,
    previous: null,
  }));

  const registrars = useRef(new Map<string, MediaRef>());
  const registrar = (key: string) => {
    let register = registrars.current.get(key);
    if (!register) {
      register = (el) => {
        if (el) media.current.set(key, el);
        else media.current.delete(key);
      };
      registrars.current.set(key, register);
    }
    return register;
  };

  const wrappers = useRef(new Map<string, HTMLDivElement>());
  const wrapperRefs = useRef(new Map<string, (el: HTMLDivElement | null) => void>());
  const wrapperRef = (key: string) => {
    let setRef = wrapperRefs.current.get(key);
    if (!setRef) {
      setRef = (el) => {
        if (el) wrappers.current.set(key, el);
        else wrappers.current.delete(key);
      };
      wrapperRefs.current.set(key, setRef);
    }
    return setRef;
  };

  const mediaReady = useCallback((key: string) => {
    const el = media.current.get(key);
    if (!el) return Promise.resolve();
    const ready =
      el instanceof HTMLImageElement
        ? el.decode().catch(() => undefined)
        : el.readyState >= 2
          ? Promise.resolve()
          : new Promise<void>((resolve) => {
              el.addEventListener("loadeddata", () => resolve(), { once: true });
              el.addEventListener("error", () => resolve(), { once: true });
            });
    return Promise.race([
      ready,
      new Promise<void>((resolve) => setTimeout(resolve, MEDIA_READY_TIMEOUT_MS)),
    ]);
  }, []);

  // A swap never interrupts a fade in progress, so each fade starts from a fully opaque frame.
  const opaque = useCallback((key: string) => {
    const deadline = performance.now() + FADE_MS + 1000;
    return new Promise<void>((resolve) => {
      const check = () => {
        const el = wrappers.current.get(key);
        if (!el || Number(getComputedStyle(el).opacity) >= 0.999 || performance.now() > deadline) {
          resolve();
        } else {
          requestAnimationFrame(check);
        }
      };
      check();
    });
  }, []);

  useEffect(() => {
    const from = steps[view.shown];
    const to = steps[index];
    if (!from || !to || index === view.shown) return;
    const fromKey = layerKey(from);
    const toKey = layerKey(to);
    let cancelled = false;
    const show = () => {
      if (cancelled) return;
      setView((v) => ({
        shown: index,
        under: fromKey === toKey ? v.under : fromKey,
        previous: fromKey,
      }));
    };
    if (fromKey === toKey) {
      show();
    } else {
      void mediaReady(toKey)
        .then(() => opaque(fromKey))
        .then(show);
    }
    return () => {
      cancelled = true;
    };
  }, [index, view.shown, steps, mediaReady, opaque]);

  useEffect(() => {
    const top = steps[view.shown];
    if (!view.under || !top) return;
    let cancelled = false;
    void opaque(layerKey(top)).then(() => {
      if (!cancelled) setView((v) => ({ ...v, under: null }));
    });
    return () => {
      cancelled = true;
    };
  }, [view.under, view.shown, steps, opaque]);

  useEffect(() => {
    for (const neighbour of [steps[view.shown + 1], steps[view.shown + 2], steps[view.shown - 1]]) {
      if (neighbour) void mediaReady(layerKey(neighbour));
    }
  }, [view.shown, steps, mediaReady]);

  const step = steps[view.shown];
  const activeKey = step ? layerKey(step) : null;
  const lastShown = useRef(new Map<string, TourStep>());
  useEffect(() => {
    if (step && activeKey) lastShown.current.set(activeKey, step);
  }, [step, activeKey]);
  const pendingStep = steps[index];
  const total = steps.length;
  const isFirst = index === 0;
  const isLast = index === total - 1;

  const goTo = useCallback(
    (next: number) => {
      const target = clampIndex(next, steps.length);
      setIndex(target);
      onStepChange?.(target);
    },
    [steps.length, onStepChange],
  );
  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const back = useCallback(() => goTo(index - 1), [goTo, index]);

  // Advancing unmounts the control that was clicked; keep focus in the tour so arrow keys keep working.
  const advanceFromStage = useCallback(() => {
    rootRef.current?.focus({ preventScroll: true });
    next();
  }, [next]);

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.altKey || event.ctrlKey || event.metaKey) return;
    const keyActions: Record<string, () => void> = {
      ArrowRight: next,
      ArrowLeft: back,
      Home: () => goTo(0),
      End: () => goTo(total - 1),
    };
    const action = keyActions[event.key];
    if (action) {
      event.preventDefault();
      action();
    }
  };

  if (!step) return null;

  const sheetText = step.type === "card" ? step.subtitle : step.caption;

  return (
    <div
      ref={rootRef}
      role="region"
      aria-roledescription="product tour"
      aria-label={label}
      tabIndex={0}
      onKeyDown={onKeyDown}
      className={cn(
        "relative w-full bg-white text-[#0B1220] outline-none focus-visible:ring-2 focus-visible:ring-[#2142E7] focus-visible:ring-offset-2",
        className,
      )}
    >
      <div
        ref={stageRef}
        className="relative w-full overflow-hidden bg-white select-none"
        style={{ aspectRatio }}
      >
        {layers.map((layer) => {
          const state: LayerState =
            layer.key === activeKey ? "active" : layer.key === view.under ? "under" : "hidden";
          // A layer under the fade keeps its last frame; hidden layers pre-position on the step
          // they're about to show, so activation never jumps.
          const layerStep =
            state === "active"
              ? step
              : state === "hidden" && pendingStep && layerKey(pendingStep) === layer.key
                ? pendingStep
                : (lastShown.current.get(layer.key) ?? layer.first);
          const register = registrar(layer.key);
          return (
            <div
              key={layer.key}
              ref={wrapperRef(layer.key)}
              aria-hidden={state !== "active"}
              inert={state !== "active"}
              className="absolute inset-0"
              style={{
                zIndex: state === "active" ? 2 : state === "under" ? 1 : 0,
                opacity: state === "hidden" ? 0 : 1,
                transition: state === "active" && fadeMs ? `opacity ${fadeMs}ms ease-out` : "none",
                pointerEvents: state === "active" ? undefined : "none",
              }}
            >
              {layerStep.type === "card" ? (
                <CardLayer
                  step={layerStep}
                  state={state}
                  reduceMotion={reduceMotion}
                  onAdvance={advanceFromStage}
                  mediaRef={register}
                />
              ) : (
                <MediaLayer
                  step={layerStep}
                  active={state === "active"}
                  animateZoom={state === "active" && view.previous === layer.key && !reduceMotion}
                  eager={layer.first === steps[0] || layer.first === steps[1]}
                  reduceMotion={reduceMotion}
                  mediaRef={register}
                />
              )}
            </div>
          );
        })}

        {step.type !== "card" && (
          <HotspotLayer
            key={step.id}
            step={step}
            stage={stage}
            reduceMotion={reduceMotion}
            fontsReady={fontsReady}
            onActivate={advanceFromStage}
          />
        )}
      </div>

      {sheetText &&
        (view.shown === total - 1 ? (
          <div className="md:hidden border-t border-[#0B1220]/10 bg-white px-4 py-3">
            <p className="text-sm leading-relaxed text-[#0B1220]" style={captionStyle}>
              {sheetText}
            </p>
          </div>
        ) : (
          <button
            type="button"
            onClick={next}
            className="group flex w-full cursor-pointer items-center gap-3 border-t border-[#0B1220]/10 bg-white px-4 py-3 text-left transition-colors hover:bg-[#2142E7]/5 active:bg-[#2142E7]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#2142E7] md:hidden"
          >
            <span className="flex-1 text-sm leading-relaxed text-[#0B1220]" style={captionStyle}>
              {sheetText}
              <span className="sr-only"> Next step</span>
            </span>
            <ArrowRight
              className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none"
              style={{ color: BRAND }}
              aria-hidden="true"
            />
          </button>
        ))}

      <ControlBar
        index={index}
        total={total}
        isFirst={isFirst}
        isLast={isLast}
        onBack={back}
        onNext={isLast ? () => goTo(0) : next}
      />

      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {`Step ${view.shown + 1} of ${total}. ${step.type === "card" ? step.title : step.caption}`}
      </p>
    </div>
  );
}

type MediaRef = (el: HTMLImageElement | HTMLVideoElement | null) => void;

function CardLayer({
  step,
  state,
  reduceMotion,
  onAdvance,
  mediaRef,
}: {
  step: TourCardStep;
  state: LayerState;
  reduceMotion: boolean;
  onAdvance: () => void;
  mediaRef: MediaRef;
}) {
  const showContent = state !== "hidden" || reduceMotion;
  const { action } = step;
  const buttonClass =
    "inline-flex items-center gap-2 rounded-[6px] px-4 py-2 text-xs font-bold text-white shadow-lg transition-colors sm:px-6 sm:py-3 sm:text-sm md:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220]";

  return (
    <div className="absolute inset-0">
      {step.backgroundImage && (
        <img
          ref={mediaRef}
          src={step.backgroundImage}
          alt=""
          aria-hidden="true"
          draggable={false}
          decoding="async"
          className="absolute inset-0 h-full w-full scale-110 object-cover blur-[6px]"
        />
      )}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(11,18,32,0.95)_0%,rgba(11,18,32,0.84)_55%,rgba(33,66,231,0.7)_100%)]" />
      <div
        className="relative flex h-full max-w-3xl flex-col justify-center gap-3 px-[7%] sm:gap-5"
        style={{
          opacity: showContent ? 1 : 0,
          transform: showContent ? "none" : "translateY(12px)",
          transition:
            state === "active" && !reduceMotion
              ? "opacity 450ms ease-out 100ms, transform 450ms ease-out 100ms"
              : "none",
        }}
      >
        <h2 className="text-lg font-extrabold leading-tight tracking-tight text-white sm:text-3xl lg:text-5xl">
          {step.title}
        </h2>
        {step.subtitle && (
          <p className="hidden max-w-xl text-base leading-relaxed text-white/80 md:block lg:text-lg">
            {step.subtitle}
          </p>
        )}
        <div className="mt-1 flex flex-wrap items-center gap-3 sm:mt-2">
          {action.href ? (
            <a
              href={action.href}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClass}
              style={{ backgroundColor: BRAND }}
            >
              {action.label}
            </a>
          ) : (
            <button
              type="button"
              onClick={onAdvance}
              className={buttonClass}
              style={{ backgroundColor: BRAND }}
            >
              {action.label}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function MediaLayer({
  step,
  active,
  animateZoom,
  eager,
  reduceMotion,
  mediaRef,
}: {
  step: TourMediaStep;
  active: boolean;
  animateZoom: boolean;
  eager: boolean;
  reduceMotion: boolean;
  mediaRef: MediaRef;
}) {
  const zoom = step.type === "image" ? step.zoom : undefined;

  return (
    <div
      className="absolute inset-0"
      style={{
        transformOrigin: "0 0",
        transform: zoom
          ? `translate(${zoom.left * 100}%, ${zoom.top * 100}%) scale(${zoom.level})`
          : "none",
        transition: animateZoom ? `transform ${ZOOM_MS}ms ${ZOOM_EASE}` : "none",
      }}
    >
      {step.type === "image" ? (
        <img
          ref={mediaRef}
          src={step.image}
          alt={step.alt}
          draggable={false}
          decoding="async"
          fetchPriority={eager ? "high" : "low"}
          className="h-full w-full object-cover"
        />
      ) : (
        <TourVideo step={step} active={active} reduceMotion={reduceMotion} mediaRef={mediaRef} />
      )}
    </div>
  );
}

function TourVideo({
  step,
  active,
  reduceMotion,
  mediaRef,
}: {
  step: TourVideoStep;
  active: boolean;
  reduceMotion: boolean;
  mediaRef: MediaRef;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(!reduceMotion);
  const setRefs = useCallback(
    (el: HTMLVideoElement | null) => {
      ref.current = el;
      mediaRef(el);
    },
    [mediaRef],
  );

  useEffect(() => {
    if (active) setPlaying(!reduceMotion);
  }, [active, reduceMotion]);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const rate = step.playbackRate ?? 1;
    const bounds = () => {
      const duration = Number.isFinite(video.duration) ? video.duration : 0;
      return { start: (step.start ?? 0) * duration, end: (step.end ?? 1) * duration };
    };
    const onMetadata = () => {
      video.defaultPlaybackRate = rate;
      video.playbackRate = rate;
      const { start } = bounds();
      if (start > 0) video.currentTime = start;
    };
    const onTimeUpdate = () => {
      const { start, end } = bounds();
      if (end <= start) return;
      if (video.currentTime < start || video.currentTime >= end) video.currentTime = start;
    };
    onMetadata();
    video.addEventListener("loadedmetadata", onMetadata);
    video.addEventListener("timeupdate", onTimeUpdate);
    return () => {
      video.removeEventListener("loadedmetadata", onMetadata);
      video.removeEventListener("timeupdate", onTimeUpdate);
    };
  }, [step]);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (playing && active) {
      video.play().catch(() => setPlaying(false));
    } else {
      video.pause();
    }
  }, [playing, active]);

  return (
    <>
      <video
        ref={setRefs}
        src={step.video}
        poster={step.poster}
        muted
        loop
        playsInline
        preload="auto"
        aria-label={step.caption}
        className="h-full w-full object-cover"
      />
      <button
        type="button"
        onClick={() => setPlaying((p) => !p)}
        aria-label={playing ? "Pause video" : "Play video"}
        className="absolute bottom-2 left-2 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#0B1220]/70 text-white transition-colors hover:bg-[#0B1220]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:bottom-3 sm:left-3"
      >
        {playing ? (
          <Pause className="h-4 w-4" aria-hidden="true" />
        ) : (
          <Play className="h-4 w-4" aria-hidden="true" />
        )}
      </button>
    </>
  );
}

function HotspotLayer({
  step,
  stage,
  reduceMotion,
  fontsReady,
  onActivate,
}: {
  step: TourMediaStep;
  stage: Size;
  reduceMotion: boolean;
  fontsReady: boolean;
  onActivate: () => void;
}) {
  const { x, y } = displayedHotspot(step);
  // Let the zoom settle before the hotspot appears at its final position.
  const delay = step.type === "image" && step.zoom ? 650 : 250;
  const layerRef = useRef<HTMLDivElement>(null);

  // The fade is held by `fill: "forwards"` and never handed back to inline styles: swapping a
  // finished animation for a style one frame later is what made the bubble blink. `will-change`
  // keeps the layer composited after the fade so the text isn't re-rasterised when it ends.
  // Waiting for fonts keeps a late webfont swap from resizing the bubble once it's visible.
  useLayoutEffect(() => {
    const el = layerRef.current;
    if (!el || !fontsReady) return;
    if (reduceMotion || typeof el.animate !== "function") {
      el.style.opacity = "1";
      return;
    }
    const fade = el.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 300,
      delay,
      easing: "ease-out",
      fill: "forwards",
    });
    return () => fade.cancel();
  }, [delay, reduceMotion, fontsReady]);

  return (
    <div
      ref={layerRef}
      className="pointer-events-none absolute inset-0 z-10"
      style={{ opacity: 0, willChange: "opacity" }}
    >
      <button
        type="button"
        onClick={onActivate}
        aria-label={`Next step: ${step.caption}`}
        className="group pointer-events-auto absolute flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full focus-visible:outline-none md:h-10 md:w-10"
        style={{ left: `${x * 100}%`, top: `${y * 100}%` }}
      >
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full opacity-60 motion-safe:animate-ping"
          style={{ backgroundColor: BRAND }}
        />
        <span
          aria-hidden="true"
          className="absolute inset-[18%] rounded-full opacity-30"
          style={{ backgroundColor: BRAND }}
        />
        <span
          aria-hidden="true"
          className="relative h-3.5 w-3.5 rounded-full border-2 border-white shadow-[0_0_0_2px_rgba(33,66,231,0.35),0_4px_12px_rgba(11,18,32,0.35)] transition-transform group-hover:scale-125 group-focus-visible:ring-2 group-focus-visible:ring-white group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-[#2142E7] motion-reduce:transition-none md:h-4 md:w-4"
          style={{ backgroundColor: BRAND }}
        />
      </button>

      {stage.width > 0 && (
        <Tooltip
          caption={step.caption}
          anchor={{ x: x * stage.width, y: y * stage.height }}
          stage={stage}
          preferred={step.hotspot.placement}
          onActivate={onActivate}
        />
      )}
    </div>
  );
}

function Tooltip({
  caption,
  anchor,
  stage,
  preferred,
  onActivate,
}: {
  caption: string;
  anchor: { x: number; y: number };
  stage: Size;
  preferred?: TooltipPlacement;
  onActivate: () => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const size = useElementSize(ref);
  const layout = layoutTooltip(anchor, size, stage, preferred);

  return (
    <button
      ref={ref}
      type="button"
      onClick={onActivate}
      className="group pointer-events-auto absolute hidden w-max max-w-[min(20rem,42%)] cursor-pointer rounded-[6px] bg-[#2142E7] px-4 py-3 text-left text-sm font-medium leading-snug text-white shadow-[0_12px_32px_rgba(11,18,32,0.3)] transition-colors hover:bg-[#1a35c2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#2142E7] motion-reduce:transition-none md:block"
      style={{
        left: layout.left,
        top: layout.top,
        visibility: size.width ? "visible" : "hidden",
      }}
    >
      {caption}
      <span className="sr-only"> Next step</span>
      <ArrowRight
        className="ml-1.5 inline-block h-3.5 w-3.5 -translate-y-px align-middle opacity-80 transition-transform group-hover:translate-x-0.5 group-hover:opacity-100 motion-reduce:transition-none"
        aria-hidden="true"
      />
      <span
        aria-hidden="true"
        className="absolute h-3 w-3 rotate-45 bg-[#2142E7] transition-colors group-hover:bg-[#1a35c2] motion-reduce:transition-none"
        style={layout.arrow}
      />
    </button>
  );
}

function ControlBar({
  index,
  total,
  isFirst,
  isLast,
  onBack,
  onNext,
}: {
  index: number;
  total: number;
  isFirst: boolean;
  isLast: boolean;
  onBack: () => void;
  onNext: () => void;
}) {
  const progress = ((index + 1) / total) * 100;
  const buttonClass =
    "inline-flex h-8 items-center gap-1.5 rounded-[6px] px-3 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2142E7]";

  return (
    <div className="relative border-t border-[#0B1220]/10 bg-white">
      <div
        role="progressbar"
        aria-label="Tour progress"
        aria-valuemin={1}
        aria-valuemax={total}
        aria-valuenow={index + 1}
        aria-valuetext={`Step ${index + 1} of ${total}`}
        className="absolute inset-x-0 top-0 h-[3px] -translate-y-full bg-[#0B1220]/10"
      >
        <div
          className="h-full transition-[width] duration-500 ease-out motion-reduce:transition-none"
          style={{ width: `${progress}%`, backgroundColor: BRAND }}
        />
      </div>
      <div className="flex h-[41px] items-center justify-between gap-2 px-2 sm:px-3">
        <button
          type="button"
          onClick={onBack}
          disabled={isFirst}
          className={cn(buttonClass, "text-[#0B1220] hover:bg-[#0B1220]/5")}
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back
        </button>
        <span className="text-xs font-medium tabular-nums text-[#0B1220]/60">
          {index + 1} / {total}
        </span>
        <button
          type="button"
          onClick={onNext}
          className={cn(buttonClass, "text-white hover:opacity-90")}
          style={{ backgroundColor: BRAND }}
        >
          {isLast ? (
            <>
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              Restart
            </>
          ) : (
            <>
              Next
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}

interface Size {
  width: number;
  height: number;
}

/** True once the element's own font family is loaded (or after a timeout), checked before first paint. */
function useFontsReady(ref: RefObject<HTMLElement | null>) {
  const [ready, setReady] = useState(false);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || !document.fonts) {
      setReady(true);
      return;
    }
    const family = getComputedStyle(el).fontFamily;
    const specs = [`400 14px ${family}`, `500 14px ${family}`];
    if (specs.every((spec) => document.fonts.check(spec))) {
      setReady(true);
      return;
    }
    let cancelled = false;
    const done = () => {
      if (!cancelled) setReady(true);
    };
    const timer = setTimeout(done, FONT_TIMEOUT_MS);
    void Promise.all(specs.map((spec) => document.fonts.load(spec))).then(done, done);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [ref]);
  return ready;
}

function usePrefersReducedMotion() {
  const [reduce, setReduce] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduce(query.matches);
    onChange();
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);
  return reduce;
}

function useElementSize(ref: RefObject<HTMLElement | null>): Size {
  const [size, setSize] = useState<Size>({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setSize({ width: el.offsetWidth, height: el.offsetHeight });
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);

  return size;
}

function clampIndex(index: number, length: number) {
  return Math.min(Math.max(index, 0), Math.max(length - 1, 0));
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), Math.max(min, max));
}

/** Same element key for consecutive steps on one image, so the zoom animates instead of crossfading. */
function layerKey(step: TourStep) {
  if (step.type === "card") return `card:${step.id}`;
  return step.type === "image" ? `image:${step.image}` : `video:${step.id}`;
}

/** One persistent stage layer per distinct image, video or card, in first-appearance order. */
function buildLayers(steps: TourStep[]) {
  const layers = new Map<string, { key: string; first: TourStep }>();
  for (const step of steps) {
    const key = layerKey(step);
    if (!layers.has(key)) layers.set(key, { key, first: step });
  }
  return Array.from(layers.values());
}

/** Hotspot position within the frame once the step's zoom is applied. */
function displayedHotspot(step: TourMediaStep) {
  const zoom = step.type === "image" ? step.zoom : undefined;
  const { x, y } = step.hotspot;
  if (!zoom) return { x, y };
  return {
    x: clamp(x * zoom.level + zoom.left, 0, 1),
    y: clamp(y * zoom.level + zoom.top, 0, 1),
  };
}

function fits(placement: TooltipPlacement, anchor: { x: number; y: number }, tip: Size, stage: Size) {
  switch (placement) {
    case "right":
      return anchor.x + TOOLTIP_GAP + tip.width <= stage.width - EDGE_MARGIN;
    case "left":
      return anchor.x - TOOLTIP_GAP - tip.width >= EDGE_MARGIN;
    case "bottom":
      return anchor.y + TOOLTIP_GAP + tip.height <= stage.height - EDGE_MARGIN;
    case "top":
      return anchor.y - TOOLTIP_GAP - tip.height >= EDGE_MARGIN;
  }
}

const OPPOSITE: Record<TooltipPlacement, TooltipPlacement> = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left",
};

function layoutTooltip(
  anchor: { x: number; y: number },
  tip: Size,
  stage: Size,
  preferred?: TooltipPlacement,
) {
  const order: TooltipPlacement[] = preferred
    ? [preferred, OPPOSITE[preferred], "right", "left", "bottom", "top"]
    : ["right", "left", "bottom", "top"];
  const placement = order.find((p) => fits(p, anchor, tip, stage)) ?? order[0];

  let left: number;
  let top: number;
  if (placement === "right" || placement === "left") {
    left = placement === "right" ? anchor.x + TOOLTIP_GAP : anchor.x - TOOLTIP_GAP - tip.width;
    top = anchor.y - tip.height / 2;
  } else {
    left = anchor.x - tip.width / 2;
    top = placement === "bottom" ? anchor.y + TOOLTIP_GAP : anchor.y - TOOLTIP_GAP - tip.height;
  }
  left = clamp(left, EDGE_MARGIN, stage.width - tip.width - EDGE_MARGIN);
  top = clamp(top, EDGE_MARGIN, stage.height - tip.height - EDGE_MARGIN);

  const arrowInset = 14;
  const arrow: CSSProperties =
    placement === "right" || placement === "left"
      ? {
          top: clamp(anchor.y - top, arrowInset, tip.height - arrowInset) - 6,
          [placement === "right" ? "left" : "right"]: -6,
        }
      : {
          left: clamp(anchor.x - left, arrowInset, tip.width - arrowInset) - 6,
          [placement === "bottom" ? "top" : "bottom"]: -6,
        };

  return { left, top, arrow };
}
