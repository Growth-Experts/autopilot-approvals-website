import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const TIERS = [
  { name: "Tier 1", range: "101 – 1,000 workflows", price: "$1.00" },
  { name: "Tier 2", range: "1,001 – 5,000 workflows", price: "$0.70" },
  { name: "Tier 3", range: "5,001+ workflows", price: "$0.60" },
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-white font-sans text-foreground flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Band */}
        <section className="bg-primary text-white py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-4xl mx-auto space-y-6">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                Monthly Usage Fees
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-2xl mx-auto font-medium">
                One simple base fee. Pay per workflow as you scale.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 md:py-28 bg-gray-50/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-2xl mx-auto space-y-8">
              {/* Base License Card */}
              <div className="bg-white border border-gray-200 rounded-lg p-8 md:p-10 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-wider text-primary mb-4">
                  Base License
                </p>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-5xl md:text-6xl font-extrabold tracking-tight text-foreground">
                    $500
                  </span>
                  <span className="text-lg text-muted-foreground font-medium">
                    / month
                  </span>
                </div>
                <p className="text-muted-foreground">
                  Includes 1 – 100 workflows initiated per month.
                </p>
              </div>

              {/* Above Base Volume Card */}
              <div className="bg-white border border-gray-200 rounded-lg p-8 md:p-10 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-wider text-primary mb-2">
                  Above Base Volume
                </p>
                <p className="text-muted-foreground mb-8">
                  Per workflow initiated, based on total monthly volume.
                </p>

                <div className="space-y-0 divide-y divide-gray-100">
                  {TIERS.map((tier) => (
                    <div
                      key={tier.name}
                      className="flex items-center justify-between py-5 first:pt-0 last:pb-0"
                    >
                      <div>
                        <p className="font-semibold text-foreground">
                          {tier.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {tier.range}
                        </p>
                      </div>
                      <span className="text-2xl font-extrabold text-foreground">
                        {tier.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Custom Quote CTA */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6 text-center space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              Need a custom quote?
            </h2>
            <p className="text-muted-foreground text-lg max-w-lg mx-auto">
              Get in touch and we'll tailor a plan to your workflow volume.
            </p>
            <div className="pt-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-bold px-8 h-14 text-base"
              >
                <Link href="/contact">Talk to our team</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
