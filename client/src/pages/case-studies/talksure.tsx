import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/ui/CTASection";
import { Link } from "wouter";
import { ArrowLeft, Check, TrendingUp, Users, DollarSign, Smartphone } from "lucide-react";
import { FramedImagePlaceholder } from "@/components/ui/FramedImagePlaceholder";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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
            <div className="flex gap-2 mb-4">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5">Financial Services</Badge>
              <Badge variant="outline" className="text-gray-600 border-gray-200">Procurement</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Talksure: A Smarter Way to Manage Purchase Requests
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              When Talksure passed the 1,200-employee mark, they needed a procurement process that could scale without slowing people down.
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
                  <p className="text-lg leading-relaxed text-foreground/80 mb-6">
                    As a fast-growing financial services business operating across South Africa and international markets, Talksure needed a way to manage purchase requests that could scale - without slowing people down or overloading finance.
                  </p>
                  <p className="text-lg leading-relaxed text-foreground/80">
                    They turned to Autopilot, with Greenlight supporting the implementation, to redesign procurement in a way that worked for real people, not just systems.
                  </p>
                </div>

                {/* The Results Box */}
                <div className="bg-blue-50/50 p-8 border border-blue-100">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <TrendingUp className="h-6 w-6 text-primary" />
                    The Results
                  </h2>
                  <p className="mb-6 font-medium">Here’s what changed once Autopilot was introduced:</p>
                  <ul className="space-y-4">
                    {[
                      "Purchase requests moved through the business faster",
                      "Managers could approve requests directly from Teams or mobile",
                      "Fewer errors from occasional users raising requests",
                      "Less manual intervention and rework for finance",
                      "Reduced ERP licensing costs for non-core users",
                      "Better visibility and reporting across procurement"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-primary font-bold border-t border-blue-100 pt-4">
                    Procurement stopped being a blocker and became a smooth, predictable process.
                  </p>
                </div>

                {/* Problem Section */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">When Solutions Become Problems</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Talksure had invested in a new ERP system, including its procurement module. On paper, it made sense. In practice, it created friction.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Occasional users struggled with a complex interface, leading to errors. Managers had to log into the ERP finance system just to approve requests, which introduced delays. Every requester and approver required a full ERP licence - an expensive solution for people who only needed to submit or approve the occasional purchase.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    When something went wrong, the workflow was rigid. Finance teams were forced to step in manually, rework requests, and keep things moving. The issue was usability.
                  </p>
                </div>

                {/* Solution Section */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">How Autopilot Solved It</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Autopilot’s role was to simplify the process without compromising governance. Rather than replacing the ERP, Autopilot became the front door to procurement - designed around how people already work.
                  </p>
                  
                  <div className="space-y-6 pl-4 border-l-4 border-primary/20">
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg text-foreground">Microsoft Teams Integration</h3>
                      <p className="text-muted-foreground">Purchase requests are initiated through the Autopilot Workflow app inside Microsoft Teams.</p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg text-foreground">Mobile Approvals</h3>
                      <p className="text-muted-foreground">Requests follow a clear approval flow, with managers approving directly in Teams or on mobile.</p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg text-foreground">Automated PO Creation</h3>
                      <p className="text-muted-foreground">Once approved, Power Automate automatically creates the purchase order in the ERP.</p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg text-foreground">Instant Visibility</h3>
                      <p className="text-muted-foreground">A PDF of the approved PO is generated and shared with the requester for visibility and record-keeping.</p>
                    </div>
                  </div>
                  
                  <p className="mt-8 text-lg font-medium text-foreground">
                    The ERP remains the system of record. Autopilot removes the friction that sits around it.
                  </p>
                </div>

                {/* Outcomes Section */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">Outcomes: Saving Time and Money</h2>
                  <div className="grid sm:grid-cols-2 gap-6 mb-8">
                     <div className="p-6 bg-gray-50">
                        <Users className="h-8 w-8 text-primary mb-3" />
                        <h3 className="font-bold mb-2">Easier for Employees</h3>
                        <p className="text-sm text-muted-foreground">Procurement became intuitive and easy to use.</p>
                     </div>
                     <div className="p-6 bg-gray-50">
                        <Smartphone className="h-8 w-8 text-primary mb-3" />
                        <h3 className="font-bold mb-2">Faster Approvals</h3>
                        <p className="text-sm text-muted-foreground">Approvals happen without chasing or delays.</p>
                     </div>
                     <div className="p-6 bg-gray-50">
                        <DollarSign className="h-8 w-8 text-primary mb-3" />
                        <h3 className="font-bold mb-2">Cost Avoidance</h3>
                        <p className="text-sm text-muted-foreground">The business avoided unnecessary ERP licence costs.</p>
                     </div>
                     <div className="p-6 bg-gray-50">
                        <TrendingUp className="h-8 w-8 text-primary mb-3" />
                        <h3 className="font-bold mb-2">Better Tracking</h3>
                        <p className="text-sm text-muted-foreground">Procurement activity became easier to track and manage.</p>
                     </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed italic border-l-4 border-gray-200 pl-4">
                    "The process finally matched the pace of the business."
                  </p>
                </div>

                {/* Conclusion */}
                <div className="border-t border-gray-100 pt-8">
                   <h2 className="text-2xl font-bold mb-4">What This Proves</h2>
                   <p className="text-muted-foreground leading-relaxed mb-4">
                     If your ERP is powerful but painful to use, the problem isn’t the system - it’s the experience around it. Autopilot helps you keep control while giving your people a workflow they actually want to use.
                   </p>
                   <p className="text-muted-foreground leading-relaxed font-medium">
                     Let’s fix the friction, without ripping everything out.
                   </p>
                </div>

              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                <div className="bg-white p-6 border border-gray-100 shadow-lg sticky top-24">
                  <div className="h-12 mb-6">
                    <img src="/talksure.png" alt="Talksure Logo" className="h-full w-auto object-contain" />
                  </div>
                  <h3 className="font-bold mb-4 border-b border-gray-100 pb-2">At a Glance</h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="text-muted-foreground text-xs uppercase tracking-wider font-semibold">Industry</p>
                      <p className="font-medium">Financial Services</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs uppercase tracking-wider font-semibold">Challenge</p>
                      <p className="font-medium">Slow ERP procurement process & high licensing costs</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs uppercase tracking-wider font-semibold">Solution</p>
                      <p className="font-medium">Autopilot + Microsoft Teams</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs uppercase tracking-wider font-semibold">Partner</p>
                      <p className="font-medium">Greenlight</p>
                    </div>
                  </div>
                  <Button className="w-full mt-6 bg-primary hover:bg-primary/90 text-white font-bold rounded-none">
                    Download PDF
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
