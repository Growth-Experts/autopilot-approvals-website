import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  FileSignature,
  BarChart2,
  Landmark,
  ShieldCheck,
  Plug,
  Sparkles,
} from "lucide-react";


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

        {/* Pricing Section */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto space-y-6">

              {/* Base License Card */}
              <div className="border border-gray-200 rounded-lg shadow-sm p-8">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Base License</p>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-extrabold text-foreground">$500</span>
                  <span className="text-lg text-muted-foreground font-medium">/ month</span>
                </div>
                <p className="text-muted-foreground">Includes 1 – 100 workflows initiated per month.</p>
              </div>

              {/* Above Base Volume Card */}
              <div className="border border-gray-200 rounded-lg shadow-sm p-8">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Above Base Volume</p>
                <p className="text-muted-foreground mb-8">Per workflow initiated, based on total monthly volume.</p>

                <div className="divide-y divide-gray-200">
                  <div className="flex items-center justify-between py-5">
                    <div>
                      <p className="font-semibold text-foreground">Tier 1</p>
                      <p className="text-sm text-muted-foreground">101 – 1,000 workflows</p>
                    </div>
                    <span className="text-2xl font-extrabold text-foreground">$1.00</span>
                  </div>
                  <div className="flex items-center justify-between py-5">
                    <div>
                      <p className="font-semibold text-foreground">Tier 2</p>
                      <p className="text-sm text-muted-foreground">1,001 – 5,000 workflows</p>
                    </div>
                    <span className="text-2xl font-extrabold text-foreground">$0.70</span>
                  </div>
                  <div className="flex items-center justify-between py-5">
                    <div>
                      <p className="font-semibold text-foreground">Tier 3</p>
                      <p className="text-sm text-muted-foreground">5,001+ workflows</p>
                    </div>
                    <span className="text-2xl font-extrabold text-foreground">$0.60</span>
                  </div>
                </div>
              </div>

              {/* Custom Quote */}
              <div className="text-center pt-4 space-y-4">
                <p className="text-xl font-semibold text-foreground">Need a custom quote?</p>
                <p className="text-muted-foreground">
                  We'll tailor a plan to your workflow volume.
                </p>
                <Button asChild className="bg-primary hover:bg-primary/90 text-white font-semibold px-8">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>

            </div>
          </div>
        </section>

        {/* Add-Ons Section */}
        <section className="py-20 md:py-28 bg-gray-50/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
                Additional Features
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                These integrations carry additional per-transaction costs. Available on request.
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
                <a href="https://autopilotapprovals.com/book-demo" target="_blank" rel="noopener noreferrer">Book a Demo</a>
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
