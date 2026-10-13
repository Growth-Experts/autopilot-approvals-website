import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProductTour } from "@/components/product-tour/ProductTour";
import {
  APPROVALS_TOUR_ASPECT_RATIO,
  approvalsTourSteps,
} from "@/components/product-tour/approvals-tour";

export default function DemoTest() {
  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);
    return () => meta.remove();
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-foreground">
      <Navbar />
      <section className="pt-16 pb-20 md:pt-24 md:pb-32 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-blue-50/10 to-gray-100/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Test page
            </p>
            <h1 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
              Product tour preview
            </h1>
            <p className="mt-4 text-base md:text-lg text-muted-foreground">
              The self-hosted approvals tour used on the home page. Click the pulsing dot or the
              caption, use Next/Back, or the arrow keys.
            </p>
          </div>

          <div className="mt-12 w-full max-w-6xl mx-auto">
            <div className="w-full border border-border bg-white shadow-[0_30px_80px_rgba(11,18,32,0.12)]">
              <ProductTour
                steps={approvalsTourSteps}
                aspectRatio={APPROVALS_TOUR_ASPECT_RATIO}
                label="Autopilot Approvals Introduction"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
