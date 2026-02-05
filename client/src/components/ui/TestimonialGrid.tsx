import { Card, CardContent } from "@/components/ui/card";

const TESTIMONIALS = [
  {
    quote:
      "All the ‘noise’ is stripped out – Autopilot is clear and intuitive and has great visibility on different roles and workflow stages. There is no bloat; you see only what you need to.",
    name: "Lynda Hunter",
    title: "Pilotfish",
  },
  {
    quote:
      "We found significant time and cost savings by eliminating license fees, enhanced efficiency, centralized reporting, improved transparency, and ability to manage users without license limitations in Microsoft Teams.",
    name: "Gavin de Jager",
    title: "Talksure",
  },
  {
    quote:
      "The support and documentation from Autopilot is amazing - they go above and beyond documenting what they have done, even in the backend. They are on par with Fortune 500 companies in support.",
    name: "Brendan Antunez",
    title: "Sr. IT Manager - CLARK+ELBING LLP",
  },
];

export function TestimonialGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-testid="grid-testimonials">
      {TESTIMONIALS.map((t, i) => (
        <Card
          key={i}
          className="border border-gray-100 bg-white shadow-[0_18px_50px_rgba(11,18,32,0.06)] hover:shadow-[0_22px_65px_rgba(11,18,32,0.10)] transition-shadow duration-300 rounded-none"
          data-testid={`card-testimonial-${i}`}
        >
          <CardContent className="p-10 flex flex-col min-h-[320px]">
            <div className="flex items-center gap-1 text-[#C07A4E]" data-testid={`rating-testimonial-${i}`}>
              {Array.from({ length: 5 }).map((_, s) => (
                <span key={s} className="text-sm leading-none" aria-hidden="true">
                  ★
                </span>
              ))}
              <span className="sr-only">5 out of 5 stars</span>
            </div>

            <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground" data-testid={`text-testimonial-quote-${i}`}>
              “{t.quote}”
            </p>

            <div className="mt-auto pt-10 flex items-center gap-4" data-testid={`footer-testimonial-${i}`}>
              <div
                className="h-10 w-10 border border-gray-200 bg-gray-50 flex items-center justify-center text-sm font-bold text-foreground"
                aria-hidden="true"
                data-testid={`avatar-testimonial-${i}`}
              >
                {t.name
                  .split(" ")
                  .slice(0, 2)
                  .map((p) => p[0])
                  .join("")
                  .toUpperCase()}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-bold text-foreground" data-testid={`text-testimonial-name-${i}`}>
                  {t.name}
                </p>
                <p className="text-xs text-muted-foreground" data-testid={`text-testimonial-title-${i}`}>
                  {t.title}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
