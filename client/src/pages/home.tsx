import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/ui/CTASection";
import { LogoStrip } from "@/components/ui/LogoStrip";
import { FeatureGrid } from "@/components/ui/FeatureGrid";
import { TestimonialGrid } from "@/components/ui/TestimonialGrid";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { Link } from "wouter";

import MessyInbox from "@/assets/messy-inbox.png";
import Approvals_integration from "@assets/Approvals integration.png";

import messy_inbox from "@assets/messy-inbox.jpg";
import HeroWorkflow from "@/assets/hero-workflow.png";

const BOOK_DEMO_URL = "https://example.com/book-demo";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-foreground">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-16 pb-20 md:pt-24 md:pb-32 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-blue-50/10 to-gray-100/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-[52px] leading-[1.02] md:text-7xl font-extrabold tracking-tight text-foreground">
              When approvals vanish, <span className="text-primary">accountability</span> goes with them
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              If your approvals live in inboxes, chats, and hallway conversations, visibility disappears and risk creeps in. Autopilot brings every decision into one visible, policy-driven workflow.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold px-10 h-12">
                <Link href="/book-demo">Book a Demo</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5 font-bold px-10 h-12">
                <a href="#value">Learn More</a>
              </Button>
            </div>

            <div className="mt-12">
              <div className="mx-auto w-full max-w-5xl border border-border bg-white shadow-[0_30px_80px_rgba(11,18,32,0.12)]">
                <div style={{ position: 'relative', paddingBottom: 'calc(48.75% + 41px)', height: 0, width: '100%' }}>
                  <iframe 
                    src="https://demo.arcade.software/qRerQvYI52xF5OjiqhYh?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true" 
                    title="Submit an approval request with one or more approvers" 
                    frameBorder="0" 
                    loading="lazy" 
                    allowFullScreen 
                    allow="clipboard-write" 
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', colorScheme: 'light' }} 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <LogoStrip />
      {/* Problem + Value */}
      <section className="py-20 md:py-32 bg-gray-50/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              Use one connected system for every approval
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Left: Problem */}
            <div className="bg-white border border-gray-100 p-10 md:p-12 space-y-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow" data-testid="section-problem">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">The approval bottleneck is real</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  When requests sit in inboxes or get lost in side-conversations, teams slow down. What starts as a simple “Can you approve this?” quickly becomes:
                </p>
                <ul className="space-y-4">
                  {[
                    "Vanishing requests buried in email threads",
                    "No ownership when everyone is CC’d",
                    "Policy gaps and inconsistent decisions",
                    "Slow turnarounds and stressful audit trails",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="h-2 w-2 bg-red-500 rounded-full" />
                      </div>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-lg font-semibold text-foreground pt-4 border-t border-gray-50">
                As your organization grows, so does the risk.
              </p>
            </div>

            {/* Right: Value */}
            <div id="value" className="bg-white border border-gray-100 p-10 md:p-12 space-y-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow" data-testid="section-value">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">Make every approval visible, auditable, and controlled</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Autopilot brings all requests into one structured, policy-driven flow. No more chasing staff, no more lost context, and no more manual rework.
                </p>

                <div>
                  <p className="font-semibold text-foreground mb-4">With Autopilot Approvals, you can:</p>
                  <ul className="space-y-3">
                    {[
                      "Automatically extract document details with AI-powered capture",
                      "Route requests by rules, roles, departments, or thresholds",
                      "Keep momentum with protected reassignment",
                      "Capture every decision in a timestamped audit trail",
                      "Approve from Web, Email, Microsoft Teams, or Mobile",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center text-center">
            <p className="text-xl font-bold text-primary" data-testid="text-fewer-emails">
              Fewer emails. Faster decisions. Stronger compliance.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-6 bg-primary hover:bg-primary/90 text-white font-bold px-10 h-12"
              data-testid="button-book-demo-problem-value"
            >
              <Link href="/book-demo">Book a Demo</Link>
            </Button>
          </div>
        </div>
      </section>
      {/* Microsoft Partner Section */}
      <section className="py-20 md:py-32 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <Badge className="bg-primary/5 text-primary border-primary/20 hover:bg-primary/10 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider gap-2">
                <Check className="h-3 w-3" />
                Strategic Partnership
              </Badge>
              
              <div className="space-y-6">
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight text-foreground">
                  Your Trusted <span className="text-primary">Microsoft Partner</span>
                </h2>
                
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    For over a decade, we've built solutions that live where you work. Our deep partnership ensures Autopilot evolves alongside Microsoft's latest innovations.
                  </p>
                  <p>
                    We integrate directly into <strong className="text-foreground">Microsoft Teams</strong> and <strong className="text-foreground">Office 365</strong>, removing friction by bringing workflows to the tools your team uses every day.
                  </p>
                  <p>
                    With <strong className="text-foreground">Microsoft CoPilot</strong>, we bring next-gen AI capabilities into your processes—automating decisions while keeping your data secure.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Card */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full transform translate-x-12 translate-y-12" />
              <div className="relative bg-white p-12 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-gray-100 w-full max-w-sm flex items-center justify-center aspect-[4/3] hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300">
                <img 
                  src="/src/assets/microsoft-partner-stacked.png" 
                  alt="Microsoft Partner" 
                  className="w-full h-auto object-contain max-w-[160px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Key Features That Matter</h2>
            <p className="text-lg text-muted-foreground">
              Autopilot Approvals turns complex approval chains into clear, compliant, and audit-ready workflows.
            </p>
          </div>
          <FeatureGrid />
        </div>
      </section>
      {/* Integrations Section */}
      <section id="integrations" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">Works with the tools your team already uses</h2>
              <ul className="space-y-8">
                {[
                  { title: "In Microsoft Teams", desc: "Approve, comment, or reassign requests directly inside Teams." },
                  { title: "SharePoint & Document Management", desc: "Autopilot automatically stores documents and audit trails in your central repository." },
                  { title: "Finance Systems", desc: "Sync approvals with platforms like Xero and QuickBooks (with more integrations coming)." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">
                      {i + 1}
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="pt-2" data-testid="section-microsoft-partner" />
            </div>
            <div className="flex justify-center">
              <img src={Approvals_integration} alt="Autopilot Integrations with Teams, Xero, SharePoint and more" className="w-full max-w-md object-contain" />
            </div>
          </div>
        </div>
      </section>
      {/* How It Works */}
      <section id="how" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <p
              className="text-xs md:text-sm font-extrabold tracking-[0.22em] text-muted-foreground uppercase"
              data-testid="text-how-eyebrow"
            >
              Made for people. Powered by process.
            </p>
            <h2 className="mt-5 text-3xl md:text-4xl font-bold text-foreground" data-testid="text-how-title">
              How Autopilot Approvals Works
            </h2>
            <p className="mt-4 text-lg text-muted-foreground" data-testid="text-how-subtitle">
              Effortlessly integrate and automate your approval workflows in four simple steps.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { title: "Define Your Workflow", desc: "Map roles, routing rules, thresholds, and escalation paths.", step: "01" },
              { title: "Submit Requests", desc: "Employees upload documents or complete request forms - with AI auto-filling key details.", step: "02" },
              { title: "Automated Approvals", desc: "Autopilot routes every request based on policy, sending reminders to keep things moving.", step: "03" },
              { title: "Track & Report", desc: "View the full audit trail instantly, export reports, and maintain compliance effortlessly.", step: "04" }
            ].map((item) => (
              <div key={item.step} className="flex flex-col items-center text-center group" data-testid={`card-how-step-${item.step}`}>
                <div
                  className="h-14 w-14 border border-border flex items-center justify-center text-xs font-extrabold tracking-widest text-muted-foreground bg-white group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors duration-300"
                  data-testid={`badge-how-step-${item.step}`}
                >
                  {item.step}
                </div>
                <h3 className="mt-5 text-base font-bold text-foreground" data-testid={`text-how-step-title-${item.step}`}>
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground" data-testid={`text-how-step-desc-${item.step}`}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Case Study Callout */}
      <section className="py-20 md:py-32 bg-[#0B1220] text-white relative overflow-hidden border-t border-white/10 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.5)] z-10">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-48 -left-48 h-[520px] w-[520px] bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-56 -right-48 h-[560px] w-[560px] bg-primary/10 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center space-y-6 mb-14">
              <Badge className="bg-primary/15 text-primary border border-primary/30 rounded-none px-4 py-1.5 text-sm font-bold uppercase tracking-wider">
                Case Study
              </Badge>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight max-w-4xl mx-auto" data-testid="text-case-study-title">
                Talksure: Approvals for 1,200+ employees now inside Microsoft Teams
              </h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto" data-testid="text-case-study-subtitle">
                Talksure replaced rigid ERP workflows with Autopilot’s flexible approval process, making procurement faster, cleaner, and far easier to manage.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Logo Card */}
              <div className="bg-white border border-white/20 p-12 md:p-16 flex flex-col items-center justify-center gap-8 min-h-[300px] shadow-[0_18px_60px_rgba(0,0,0,0.35)]" data-testid="card-case-study-logos">
                <img src="/talksure.png" alt="Talksure" className="w-48 h-auto object-contain" />
                <div className="w-12 h-px bg-white/15" />
                <img src="/logo.png" alt="Autopilot" className="w-40 h-auto object-contain" />
              </div>

              {/* Bullets */}
              <ul className="space-y-6" data-testid="list-case-study-bullets">
                {[
                  "Reduced ERP licence costs for managers",
                  "Faster approvals without needing to log into finance systems",
                  "Significant time savings on manual rework",
                  "Mobile-friendly approvals used across the organization"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4" data-testid={`row-case-study-bullet-${i}`}>
                    <div className="h-2 w-2 bg-primary mt-2.5 shrink-0" data-testid={`dot-case-study-bullet-${i}`} />
                    <span className="text-lg font-medium text-white/90" data-testid={`text-case-study-bullet-${i}`}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Button */}
            <div className="mt-16 text-center">
              <Button asChild size="lg" variant="outline" className="border-2 border-white/70 text-white hover:bg-white hover:text-[#0B1220] font-bold px-10 h-14 text-base rounded-none uppercase tracking-wide" data-testid="button-case-study-read-story">
                <Link href="/case-studies/talksure">Read Full Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 space-y-16">
          <div className="text-center max-w-3xl mx-auto">
             <h2 className="text-3xl md:text-4xl font-bold mb-12">Results that speak for themselves</h2>
          </div>
          
          <TestimonialGrid />
        </div>
      </section>
      <CTASection />
      <Footer />
    </div>
  );
}
