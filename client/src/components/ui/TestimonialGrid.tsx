import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote: "All the ‘noise’ is stripped out – Autopilot is clear and intuitive and has great visibility on different roles and workflow stages. There is no bloat; you see only what you need to.",
    name: "Lynda Hunter",
    title: "Pilotfish"
  },
  {
    quote: "We found significant time and cost savings by eliminating license fees, enhanced efficiency, centralized reporting, improved transparency, and ability to manage users without license limitations in Microsoft Teams.",
    name: "Gavin de Jager",
    title: "Talksure"
  },
  {
    quote: "The support and documentation from Autopilot is amazing - they go above and beyond documenting what they have done, even in the backend. They are on par with Fortune 500 companies in support.",
    name: "Brendan Antunez",
    title: "Sr. IT Manager - CLARK+ELBING LLP"
  }
];

export function TestimonialGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {TESTIMONIALS.map((t, i) => (
        <Card key={i} className="border-gray-100 bg-gray-50/50 hover:bg-white transition-colors duration-300">
          <CardContent className="p-8 space-y-6">
            <Quote className="h-8 w-8 text-primary/20" />
            <p className="text-base text-foreground font-medium italic leading-relaxed">
              "{t.quote}"
            </p>
            <div>
              <p className="font-bold text-sm text-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.title}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
