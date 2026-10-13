import type { TourStep } from "./types";

const BASE = "/demo/approvals";

/** Arcade demo 98laBJppbYWQM0XYdWT2, converted from public/demo/approvals/steps.json. */
export const APPROVALS_TOUR_ASPECT_RATIO = 2628 / 1670;

export const approvalsTourSteps: TourStep[] = [
  {
    id: "intro",
    type: "card",
    title: "Explore a better way to manage approvals",
    subtitle: "Bring every approval into one visible, controlled process.",
    action: { label: "Get Started" },
    backgroundImage: `${BASE}/screenshot-413041_859.webp`,
  },
  {
    id: "initiate",
    type: "image",
    image: `${BASE}/screenshot-413041_859.webp`,
    alt: "Autopilot Initiate screen listing approval request types",
    caption:
      "Start any approval request from a single interface - with the right business rules applied automatically.",
    hotspot: { x: 0.4215, y: 0.5437 },
  },
  {
    id: "channels",
    type: "image",
    image: `${BASE}/screenshot-413048_281.webp`,
    alt: "Options for starting a request from MS Teams, email, document upload or manual capture",
    caption: "Use MS Teams, email, document upload, or manual capture to initiate requests.",
    hotspot: { x: 0.4906, y: 0.6618 },
    zoom: { level: 1.6138, left: -0.2937, top: -0.4525 },
  },
  {
    id: "ai-extract",
    type: "image",
    image: `${BASE}/screenshot-413069_406.webp`,
    alt: "Request form with fields populated by AI extraction",
    caption: "Let AI extract and populate data for you automatically.",
    hotspot: { x: 0.681, y: 0.7386 },
    zoom: { level: 1.5, left: -0.2636, top: -0.4357 },
  },
  {
    id: "data-checks",
    type: "video",
    video: `${BASE}/clip.mp4`,
    poster: `${BASE}/clip-poster.webp`,
    caption:
      "Ensure data accuracy and control by enabling data classification and data cross checks.",
    hotspot: { x: 0.7326, y: 0.757, placement: "top" },
    start: 0,
    end: 1,
    playbackRate: 2.5,
  },
  {
    id: "documents",
    type: "image",
    image: `${BASE}/screenshot-413078_593.webp`,
    alt: "Supporting documents attached to an approval request",
    caption:
      "Keep source documents with each request, speeding up review and ensuring a complete audit trail.",
    hotspot: { x: 0.7427, y: 0.6463, placement: "bottom" },
  },
  {
    id: "approvers",
    type: "image",
    image: `${BASE}/screenshot-413181_14.webp`,
    alt: "Approval flow showing the steps and approvers for a request",
    caption:
      "Automatically determine approval steps and approvers - and have them enforced by the system.",
    hotspot: { x: 0.5339, y: 0.7702, placement: "right" },
    zoom: { level: 1.2798, left: -0.0001, top: -0.2754 },
  },
  {
    id: "status",
    type: "image",
    image: `${BASE}/screenshot-413181_14.webp`,
    alt: "Close-up of who needs to act on a request",
    caption: "See who needs to act and where each request sits at a glance.",
    hotspot: { x: 0.373, y: 0.4942, placement: "top" },
    zoom: { level: 3.1157, left: -0.6992, top: -1.0468 },
  },
  {
    id: "actions",
    type: "image",
    image: `${BASE}/screenshot-413181_14.webp`,
    alt: "Close-up of the actions available on a request",
    // Double space is verbatim from the Arcade label.
    caption: "Act on requests instantly -  update, reassign, and keep things moving.",
    hotspot: { x: 0.7945, y: 0.6598, placement: "left" },
    zoom: { level: 2.1338, left: -1.0986, top: -0.9626 },
  },
  {
    id: "archive",
    type: "image",
    image: `${BASE}/screenshot-413206_203.webp`,
    alt: "Completed request being archived to a document repository",
    caption:
      "Once complete, archive the request - including full audit trail and supporting documents - to your document repository.",
    hotspot: { x: 0.6229, y: 0.4434, placement: "right" },
    zoom: { level: 1.6445, left: -0.4761, top: -0.4138 },
  },
  {
    id: "outro",
    type: "card",
    title: "Ready to bring visibility and control to your approvals?",
    subtitle: "Let us help you bring visibility and control to your approval processes.",
    action: { label: "Book a demo", href: "https://autopilotapprovals.com/book-demo" },
    backgroundImage: `${BASE}/screenshot-413206_203.webp`,
  },
];
