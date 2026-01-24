import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const BOOK_DEMO_URL = "https://example.com/book-demo";

export function CTASection() {
  return (
    <section className="py-24 bg-primary text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Modern teams move faster with visibility and control
        </h2>
        <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Replace email chaos, policy gaps, and slow approvals with one centralized, audit-ready workflow.
        </p>
        
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10 text-primary-foreground/90 font-medium">
          {["Free 30-day trial", "No payment info required", "Full feature access", "Dedicated onboarding support"].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <div className="bg-white/20 p-1 rounded-full">
                <Check className="w-4 h-4" />
              </div>
              {item}
            </div>
          ))}
        </div>

        <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 hover:text-primary rounded-full px-8 h-14 text-lg font-semibold shadow-lg hover:shadow-xl transition-all">
          <a href={BOOK_DEMO_URL} target="_blank" rel="noopener noreferrer">
            Book a Demo
          </a>
        </Button>
      </div>
    </section>
  );
}
