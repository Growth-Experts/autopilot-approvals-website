import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Check,
  FileSignature,
  BarChart2,
  Landmark,
  ShieldCheck,
  Plug,
  Sparkles,
} from "lucide-react";

const TIERS = [
  {
    name: "Essentials",
    volume: "Up to 1,000 workflows / mo",
    baseLabel: "From",
    price: "$500",
    unit: "/ month",
    rateNote: "$500 base + $1.00 per workflow above 100",
    highlight: false,
    features: [
      "1 – 100 workflows included",
      "101 – 1,000 workflows at $1.00 each",
      "Unlimited users",
      "Unlimited process types",
      "Unlimited external approvers",
      "Full audit trail & reporting",
    ],
  },
  {
    name: "Growth",
    volume: "Up to 5,000 workflows / mo",
    baseLabel: null,
    price: "$0.70",
    unit: "/ workflow above 1,000",
    rateNote: "Custom pricing available for your volume.",
    highlight: true,
    features: [
      "Everything in Essentials, plus:",
      "1,001 – 5,000 workflows at $0.70 each",
      "Lower cost per workflow at scale",
      "Unlimited users",
      "Unlimited process types",
      "Unlimited external approvers",
    ],
  },
  {
    name: "Enterprise",
    volume: "5,001+ workflows / mo",
    baseLabel: null,
    price: "$0.60",
    unit: "/ workflow above 5,000",
    rateNote: "Custom pricing available for your volume.",
    highlight: false,
    features: [
      "Everything in Growth, plus:",
      "5,001+ workflows at $0.60 each",
      "Lowest cost per workflow",
      "Unlimited users",
      "Unlimited process types",
      "Unlimited external approvers",
    ],
  },
];

const ADDONS = [
  {
    Icon: FileSignature,
    title: "DocuSign",
    desc: "Electronic signatures embedded directly in your approval flow.",
  },
  {
    Icon: BarChart2,
    title: "Power BI",
    desc: "Approval analytics and reporting dashboards for your team.",
  },
  {
    Icon: Landmark,
    title: "Bank Verification",
    desc: "Validate banking details as part of the approval process.",
  },
  {
    Icon: ShieldCheck,
    title: "DHA Verification",
    desc: "South African ID verification integrated into workflows.",
  },
  {
    Icon: Plug,
    title: "Custom Integrations",
    desc: "Connect Autopilot to your existing business systems.",
  },
  {
    Icon: Sparkles,
    title: "AI Data Extraction",
    desc: "Automatically extract structured data from uploaded documents.",
  },
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
                Simple, Usage-Based Pricing
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-2xl mx-auto font-medium">
                One base fee. Pay per workflow as you scale — the more you use, the less you pay per workflow.
              </p>
            </div>
          </div>
        </section>

        {/* Tier Cards */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                Autopilot plans start at just $500 / month
              </h2>
            </div>
            <p className="text-center text-muted-foreground mb-12">
              Volume and non-profit discounts are available
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
              {TIERS.map((tier) => (
                <div
                  key={tier.name}
                  className={`relative flex flex-col border rounded-lg shadow-sm overflow-hidden ${
                    tier.highlight
                      ? "border-primary"
                      : "border-gray-200"
                  }`}
                >
                  <div className={`text-xs font-bold uppercase tracking-widest text-center py-2 ${tier.highlight ? "bg-primary text-white" : "bg-transparent text-transparent select-none"}`}>
                    Most Popular
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    {/* Tier name & volume */}
                    <h3 className="text-2xl font-bold text-foreground mb-1">{tier.name}</h3>
                    <p className="text-sm text-muted-foreground mb-6">{tier.volume}</p>

                    {/* Price */}
                    <div className="mb-2">
                      {tier.baseLabel && (
                        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{tier.baseLabel} </span>
                      )}
                      <span className={`font-extrabold text-foreground ${tier.unit ? "text-4xl" : "text-2xl"}`}>{tier.price}</span>
                      {tier.unit && (
                        <span className="text-base text-muted-foreground font-medium"> {tier.unit}</span>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mb-8 leading-relaxed">{tier.rateNote}</p>

                    {/* CTA */}
                    <Button
                      asChild
                      size="lg"
                      className={`w-full font-bold mb-8 ${
                        tier.highlight
                          ? "bg-primary hover:bg-primary/90 text-white"
                          : "bg-foreground hover:bg-foreground/90 text-white"
                      }`}
                    >
                      <Link href="/contact">Get Quote</Link>
                    </Button>

                    {/* Features */}
                    <p className="text-sm font-semibold text-foreground mb-4">Plan includes:</p>
                    <ul className="space-y-3 flex-grow">
                      {tier.features.map((f) => (
                        <li key={f} className="flex items-start gap-3">
                          <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" strokeWidth={3} />
                          <span className="text-sm text-foreground">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-center text-sm text-muted-foreground">
              Each rate applies only to workflows in that band — your base cost never retroactively changes.
            </p>
          </div>
        </section>

        {/* Add-Ons Section */}
        <section className="py-20 md:py-28 bg-gray-50/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
                Extend your workflows
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                Autopilot integrates with the tools your team already uses. Add-ons are available on request.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {ADDONS.map(({ Icon, title, desc }) => (
                <div
                  key={title}
                  className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            <p className="mt-10 text-center text-muted-foreground">
              Don't see what you need?{" "}
              <Link href="/contact" className="text-primary font-semibold hover:underline">
                Talk to our team →
              </Link>
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-primary">
          <div className="container mx-auto px-4 md:px-6 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Ready to get started?
            </h2>
            <p className="text-blue-100 text-lg max-w-lg mx-auto">
              Get in touch and we'll tailor a plan to your workflow volume.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white hover:bg-gray-100 text-primary font-bold px-8 h-14 text-base"
              >
                <Link href="/contact">Talk to our team</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 font-bold px-8 h-14 text-base"
              >
                <Link href="/book-demo">Book a Demo</Link>
              </Button>
            </div>
            <p className="text-sm text-blue-100 pt-2">
              No setup fees. Month-to-month. Usage adjusts automatically.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
