import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote: "Autopilot Approvals has transformed our internal processes. What used to take days now takes hours. The visibility and control are unmatched.",
    name: "Jane Doe",
    title: "Operations Manager, Tech Solutions Inc."
  },
  {
    quote: "The ease of setting up workflows and the clarity it provides are game-changers. Our team is more efficient, and we can make quicker, more informed decisions.",
    name: "John Smith",
    title: "Product Lead, Innovate Corp."
  },
  {
    quote: "Finally, an approvals solution that truly understands B2B needs. The customizable features and robust reporting have saved us countless hours.",
    name: "Emily White",
    title: "Marketing Director, Global Brands Inc."
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
