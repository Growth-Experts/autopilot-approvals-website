import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/ui/CTASection";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Check } from "lucide-react";
import { FramedImagePlaceholder } from "@/components/ui/FramedImagePlaceholder";

export default function TalksureCaseStudy() {
  return (
    <div className="min-h-screen bg-white font-sans text-foreground flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Top Hero */}
        <section className="bg-gray-50 border-b border-gray-100 py-20">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-8">
            <Link href="/case-studies" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-4 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Case Studies
            </Link>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Talksure: Approvals inside Microsoft Teams
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Talksure replaced rigid ERP workflows with Autopilot’s flexible approval process, making procurement faster, cleaner, and far easier to manage for their 1,200+ employees.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="grid md:grid-cols-[2fr_1fr] gap-12">
              <div className="space-y-12">
                <div>
                  <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Prior to Autopilot, Talksure struggled with fragmented approval processes scattered across emails and rigid ERP systems. Managers found it difficult to track requests while on the move, leading to delays and compliance risks. The high cost of ERP licenses for every approver also strained the budget.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">The Solution</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Autopilot provided a seamless integration with Microsoft Teams, the environment where employees already worked. By moving approvals out of the ERP and into a user-friendly interface, Talksure democratized access to the approval process.
                  </p>
                  <ul className="space-y-3 bg-blue-50/50 p-6 rounded-xl border border-blue-100">
                    {[
                      "Reduced ERP licence costs for managers",
                      "Faster approvals without needing to log into finance systems",
                      "Significant time savings on manual rework",
                      "Mobile-friendly approvals used across the organization"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="font-medium text-foreground/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">The Results</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The shift to Autopilot has been transformative. Approval times have dropped significantly, and the audit trail is now automatic and comprehensive. Managers can approve requests from their phones via Teams, ensuring business never stops waiting for a signature.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 sticky top-24">
                  <h3 className="font-bold mb-4">At a Glance</h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Industry</p>
                      <p className="font-medium">Financial Services</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Company Size</p>
                      <p className="font-medium">1,200+ Employees</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Key Integration</p>
                      <p className="font-medium">Microsoft Teams</p>
                    </div>
                  </div>
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
