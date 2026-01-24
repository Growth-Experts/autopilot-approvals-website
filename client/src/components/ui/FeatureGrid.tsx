import { Card, CardContent } from "@/components/ui/card";
import { Check, FileText, GitPullRequest, RotateCcw, ShieldCheck, MessageSquare, Clock, Archive } from "lucide-react";

const FEATURES = [
  {
    title: "AI-Powered Capture",
    description: "Upload a document and let Autopilot extract the details - reducing data entry errors and saving time.",
    icon: FileText
  },
  {
    title: "Policy-Based Routing",
    description: "Enforce your approval hierarchy consistently based on roles, departments, or financial thresholds.",
    icon: GitPullRequest
  },
  {
    title: "Protected Reassignment & Escalation",
    description: "Maintain SLAs while ensuring approvals only move to permitted peers or managers.",
    icon: ShieldCheck
  },
  {
    title: "Change Requests & Resubmits",
    description: "Correct issues without losing the original history or context.",
    icon: RotateCcw
  },
  {
    title: "One-Click Reject/Cancel",
    description: "Capture mandatory reasons for a clean, audit-ready trail.",
    icon: Check
  },
  {
    title: "Built-in Notes",
    description: "Keep conversations attached to the request - not lost in separate chats.",
    icon: MessageSquare
  },
  {
    title: "Audit-Ready Visibility",
    description: "Every action is recorded, timestamped, and accessible for audits.",
    icon: Clock
  },
  {
    title: "Automatic Archiving",
    description: "File documents and audit trails directly into your DMS or finance systems.",
    icon: Archive
  }
];

export function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {FEATURES.map((feature, i) => (
        <Card key={i} className="border-none shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
          <CardContent className="p-6 space-y-4">
            <div className="h-12 w-12 rounded-none bg-primary/10 flex items-center justify-center text-primary">
              <feature.icon className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-lg text-foreground">{feature.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {feature.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
