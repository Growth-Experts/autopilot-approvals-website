import { cn } from "@/lib/utils";

const LOGOS = [
  "3Way Marketing",
  "SA Canegrowers",
  "Capsicum",
  "CBF",
  "Turnkey",
  "BRM",
  "Ndogo",
  "Tongaat Hulett"
];

export function LogoStrip() {
  return (
    <section className="py-12 bg-white border-b border-gray-50/50">
      <div className="container mx-auto px-4 md:px-6 text-center space-y-8">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
          Trusted by teams who value control, clarity, and compliance
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 opacity-60">
          {LOGOS.map((logo, i) => (
            <div key={i} className="flex items-center justify-center p-4 border border-dashed border-gray-200 rounded-lg h-16">
              <span className="text-sm font-bold text-gray-400">{logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
