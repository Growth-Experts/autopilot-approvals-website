import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

export function CTASection() {
  return (
    <section className="bg-primary py-20 text-white">
      <div className="container mx-auto px-4 md:px-6 text-center space-y-10">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Modern teams move faster with visibility and control
          </h2>
          <p className="text-lg text-primary-foreground/90">
            Replace email chaos, policy gaps, and slow approvals with one centralized, audit-ready workflow.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm font-medium">
          {[
            "Purpose-built for approvals, not workarounds",
            "Quick setup with hands-on support",
            "Clear audit trails and accountability"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-blue-200" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="pt-4">
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-bold px-8 h-14 text-base shadow-xl">
            <a href="https://autopilotapprovals.com/book-demo" target="_blank" rel="noopener noreferrer">
              Book a Demo
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
