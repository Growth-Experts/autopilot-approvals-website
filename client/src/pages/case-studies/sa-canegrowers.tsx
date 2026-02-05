import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/ui/CTASection";
import { Link } from "wouter";
import { ArrowLeft, Check, TrendingUp, ShieldCheck, Workflow, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function SaCanegrowersCaseStudy() {
  return (
    <div className="min-h-screen bg-white font-sans text-foreground flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Top Hero */}
        <section className="bg-gray-50 border-b border-gray-100 py-20">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-8">
            <Link
              href="/case-studies"
              className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-4 transition-colors"
              data-testid="link-back-case-studies"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Case Studies
            </Link>

            <div className="flex gap-2 mb-4" data-testid="list-case-study-tags">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5" data-testid="tag-industry">
                Agriculture
              </Badge>
              <Badge variant="outline" className="text-gray-600 border-gray-200" data-testid="tag-solution">
                Approvals
              </Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight" data-testid="text-title">
              SA Canegrowers: Simplifying Approvals Inside Microsoft Teams
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed" data-testid="text-subtitle">
              A customer story from Autopilot on bringing structure and control into approvals without pulling teams out of their natural workflow.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="grid md:grid-cols-[2fr_1fr] gap-12">
              <div className="space-y-12">
                {/* Introduction */}
                <div>
                  <p className="text-lg leading-relaxed text-foreground/80 mb-6" data-testid="text-intro-1">
                    When SA Canegrowers came to Autopilot, it was clear they weren’t looking for “another system.” They were looking for a better way to manage approvals and information - one that actually fit into how their people worked day to day.
                  </p>
                  <p className="text-lg leading-relaxed text-foreground/80" data-testid="text-intro-2">
                    As a South Africa–based agricultural organisation, their teams were already deeply embedded in Microsoft 365. But their existing information management solution wasn’t keeping up. Processes were fragmented, approvals were clunky, and critical workflows lived outside the tools employees used most.
                  </p>
                  <p className="mt-6 text-lg leading-relaxed text-foreground/80" data-testid="text-intro-3">
                    Autopilot focused on one question: how do you bring structure and control into approvals without pulling people out of their natural workflow?
                  </p>
                </div>

                {/* The Results Box */}
                <div className="bg-blue-50/50 p-8 border border-blue-100" data-testid="box-results">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2" data-testid="text-results-title">
                    <TrendingUp className="h-6 w-6 text-primary" />
                    The Results
                  </h2>
                  <p className="mb-6 font-medium" data-testid="text-results-lede">
                    Once Autopilot for Microsoft Teams was rolled out, the change was immediate:
                  </p>
                  <ul className="space-y-4" data-testid="list-results">
                    {[
                      "Autopilot was deployed organisation-wide in just a few days",
                      "Key approval processes were digitised and managed directly inside Microsoft Teams",
                      "Employees could work within a single, familiar workspace",
                      "Enterprise-grade controls and compliance were maintained",
                      "Manual, inconsistent processes were replaced with reliable, standardised workflows",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3" data-testid={`row-result-${i}`}>
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground/90" data-testid={`text-result-${i}`}>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-muted-foreground leading-relaxed italic border-l-4 border-blue-100 pl-4" data-testid="quote-results">
                    “Autopilot is a remarkably powerful tool when it comes to helping us manage and digitize our business processes in a single workspace.” — John Moll
                  </p>
                  <p className="mt-6 text-primary font-bold border-t border-blue-100 pt-4" data-testid="text-results-close">
                    Approvals stopped being a bottleneck, and started flowing.
                  </p>
                </div>

                {/* Problem Section */}
                <div>
                  <h2 className="text-3xl font-bold mb-6" data-testid="text-problem-title">When Solutions No Longer Fit the Way People Work</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4" data-testid="text-problem-1">
                    SA Canegrowers already had an information management solution in place. The problem wasn’t a lack of tools; it was a lack of fit.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4" data-testid="text-problem-2">
                    Processes lived outside of employees’ daily workflows. Approvals required context-switching. Systems felt disconnected from how work actually happened.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6" data-testid="text-problem-3">
                    The organisation needed workflows that worked with people, not against them.
                  </p>

                  <div className="space-y-3 pl-4 border-l-4 border-primary/20" data-testid="list-needs">
                    {[
                      "A solution that integrated seamlessly with Microsoft 365",
                      "A way to manage approvals without adding complexity",
                      "Better consistency and governance across processes",
                    ].map((item, i) => (
                      <p key={i} className="text-muted-foreground" data-testid={`text-need-${i}`}>
                        {item}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Solution Section */}
                <div>
                  <h2 className="text-3xl font-bold mb-6" data-testid="text-solution-title">How Autopilot Solved It</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6" data-testid="text-solution-1">
                    Our approach was simple: meet people where they already work.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6" data-testid="text-solution-2">
                    Because Autopilot runs natively inside Microsoft Teams, SA Canegrowers didn’t need to retrain teams or force behavioural change. Instead, approvals became part of everyday collaboration.
                  </p>

                  <div className="space-y-6 pl-4 border-l-4 border-primary/20" data-testid="list-solution-pillars">
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg text-foreground" data-testid="text-pillar-1-title">Approvals inside Teams</h3>
                      <p className="text-muted-foreground" data-testid="text-pillar-1-desc">
                        Approval workflows were embedded directly into Teams, so employees could initiate and manage processes without leaving their workspace.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg text-foreground" data-testid="text-pillar-2-title">Controls and compliance</h3>
                      <p className="text-muted-foreground" data-testid="text-pillar-2-desc">
                        Controls and compliance were built into the workflow itself, maintaining enterprise-grade governance without adding friction.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg text-foreground" data-testid="text-pillar-3-title">Fast rollout</h3>
                      <p className="text-muted-foreground" data-testid="text-pillar-3-desc">
                        Rollout was fast, simple, and scalable across the organisation.
                      </p>
                    </div>
                  </div>

                  <p className="mt-8 text-lg font-medium text-foreground" data-testid="text-solution-close">
                    Autopilot handled the structure. Teams focused on the work.
                  </p>
                </div>

                {/* Outcomes Section */}
                <div>
                  <h2 className="text-3xl font-bold mb-6" data-testid="text-outcomes-title">Outcomes: Control Without Complexity</h2>
                  <div className="grid sm:grid-cols-2 gap-6 mb-8" data-testid="grid-outcomes">
                    <div className="p-6 bg-gray-50" data-testid="card-outcome-1">
                      <Workflow className="h-8 w-8 text-primary mb-3" />
                      <h3 className="font-bold mb-2">Faster approvals</h3>
                      <p className="text-sm text-muted-foreground">More efficient approval processes with less manual intervention.</p>
                    </div>
                    <div className="p-6 bg-gray-50" data-testid="card-outcome-2">
                      <Users className="h-8 w-8 text-primary mb-3" />
                      <h3 className="font-bold mb-2">Improved visibility</h3>
                      <p className="text-sm text-muted-foreground">Better visibility across workflows and less reliance on chasing.</p>
                    </div>
                    <div className="p-6 bg-gray-50" data-testid="card-outcome-3">
                      <ShieldCheck className="h-8 w-8 text-primary mb-3" />
                      <h3 className="font-bold mb-2">Governance built-in</h3>
                      <p className="text-sm text-muted-foreground">Consistent execution and enterprise-grade compliance without complexity.</p>
                    </div>
                    <div className="p-6 bg-gray-50" data-testid="card-outcome-4">
                      <TrendingUp className="h-8 w-8 text-primary mb-3" />
                      <h3 className="font-bold mb-2">Predictable processes</h3>
                      <p className="text-sm text-muted-foreground">Approvals teams can trust: trackable, reliable, and standardised.</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed italic border-l-4 border-gray-200 pl-4" data-testid="quote-outcomes">
                    “Approvals became something teams could trust - predictable, trackable, and easy to manage.”
                  </p>
                </div>

                {/* More About */}
                <div className="border-t border-gray-100 pt-8" data-testid="section-more-about">
                  <h2 className="text-2xl font-bold mb-4">More About the Partners</h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="p-6 bg-gray-50" data-testid="card-partner-1">
                      <h3 className="font-bold mb-2">SA Canegrowers</h3>
                      <p className="text-sm text-muted-foreground">
                        A South Africa–based agricultural organisation supporting and representing growers across the industry.
                      </p>
                    </div>
                    <div className="p-6 bg-gray-50" data-testid="card-partner-2">
                      <h3 className="font-bold mb-2">Autopilot for Microsoft Teams</h3>
                      <p className="text-sm text-muted-foreground">
                        Autopilot helps organisations replace manual or fragmented processes with automated, compliant workflows - all inside Microsoft Teams.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Conclusion */}
                <div className="border-t border-gray-100 pt-8" data-testid="section-conclusion">
                  <h2 className="text-2xl font-bold mb-4">What This Proves</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    If your processes live outside the tools your teams use every day, friction is inevitable. Autopilot shows what’s possible when approvals, governance, and automation are built into the flow of work, not bolted on afterward.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4 font-medium">
                    If internal processes are slowing your teams down, there’s a better way to work - without ripping everything out.
                  </p>
                  <p className="text-muted-foreground leading-relaxed font-medium">
                    Let’s remove the friction and bring structure back into the flow.
                  </p>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                <div className="bg-white p-6 border border-gray-100 shadow-lg sticky top-24" data-testid="card-at-a-glance">
                  <div className="h-12 mb-6">
                    <img src="/sa-canegrowers.png" alt="SA Canegrowers Logo" className="h-full w-auto object-contain" />
                  </div>
                  <h3 className="font-bold mb-4 border-b border-gray-100 pb-2">At a Glance</h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="text-muted-foreground text-xs uppercase tracking-wider font-semibold">Industry</p>
                      <p className="font-medium">Agriculture</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs uppercase tracking-wider font-semibold">Challenge</p>
                      <p className="font-medium">Fragmented approvals outside daily tools</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs uppercase tracking-wider font-semibold">Solution</p>
                      <p className="font-medium">Autopilot inside Microsoft Teams</p>
                    </div>
                  </div>
                  <Button
                    asChild
                    className="w-full mt-6 bg-primary hover:bg-primary/90 text-white font-bold rounded-none"
                    data-testid="button-request-demo"
                  >
                    <Link href="/book-demo">Request a demo</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <CTASection />
      <Footer />
    </div>
  );
}
