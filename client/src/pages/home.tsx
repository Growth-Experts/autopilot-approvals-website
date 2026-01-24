import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/ui/CTASection";
import { LogoStrip } from "@/components/ui/LogoStrip";
import { FeatureGrid } from "@/components/ui/FeatureGrid";
import { FramedImagePlaceholder } from "@/components/ui/FramedImagePlaceholder";
import { TestimonialGrid } from "@/components/ui/TestimonialGrid";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, PlayCircle } from "lucide-react";
import { Link } from "wouter";

import MessyInbox from "@/assets/messy-inbox.png";
import Approvals_integration from "@assets/Approvals integration.png";

import messy_inbox from "@assets/messy-inbox.jpg";

const BOOK_DEMO_URL = "https://example.com/book-demo";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-foreground">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-16 pb-20 md:pt-24 md:pb-32 overflow-x-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8">
              <Badge variant="secondary" className="px-4 py-1.5 rounded-full text-primary bg-primary/10 hover:bg-primary/20 font-medium">
                Powered by Autopilot
              </Badge>
              <h1 className="md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground text-[50px]">
                When approvals vanish, <span className="text-primary block mt-2">accountability</span> goes with them
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                If your approvals live in inboxes, chats, and hallway conversations, visibility disappears and risk creeps in. Autopilot brings every decision into one visible, policy-driven workflow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold px-8 h-12">
                  <Link href="/book-demo">Book a Demo</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5 font-bold px-8 h-12">
                  <a href="#value">Learn More</a>
                </Button>
              </div>
            </div>
            <div className="relative lg:static">
               {/* Decorative blob behind */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent blur-3xl rounded-full opacity-50 -z-10" />
              
              {/* Desktop: Image anchored to right edge of viewport */}
              <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[55vw] h-[120%]">
                 <img 
                   src="/approvals-app.png" 
                   alt="Autopilot Dashboard" 
                   className="w-full h-full object-contain object-right"
                 />
              </div>

              {/* Mobile: Standard stacking */}
              <div className="lg:hidden w-full translate-x-[10%]">
                <img 
                  src="/approvals-app.png" 
                  alt="Autopilot Dashboard" 
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <LogoStrip />
      {/* Problem Section */}
      <section className="py-20 md:py-32 bg-gray-50/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="order-2 lg:order-1">
                <img src={messy_inbox} alt="Email Chaos" className="w-full h-auto rounded-lg shadow-xl" />
             </div>
             <div className="order-1 lg:order-2 space-y-6">
               <h2 className="text-3xl md:text-4xl font-bold">The approval bottleneck is real</h2>
               <p className="text-lg text-muted-foreground">
                 When requests sit in inboxes or get lost in side-conversations, teams slow down. What starts as a simple “Can you approve this?” quickly becomes:
               </p>
               <ul className="space-y-4">
                 {[
                   "Vanishing requests buried in email threads",
                   "No ownership when everyone is CC’d",
                   "Policy gaps and inconsistent decisions",
                   "Slow turnarounds and stressful audit trails"
                 ].map((item, i) => (
                   <li key={i} className="flex items-start gap-3">
                     <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                       <div className="h-2 w-2 bg-red-500 rounded-full" />
                     </div>
                     <span className="font-medium">{item}</span>
                   </li>
                 ))}
               </ul>
               <p className="text-lg font-semibold text-foreground pt-2">
                 As your organization grows, so does the risk.
               </p>
             </div>
          </div>
        </div>
      </section>
      {/* Value Section */}
      <section id="value" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="space-y-8">
               <h2 className="text-3xl md:text-4xl font-bold">Make every approval visible, auditable, and controlled</h2>
               <p className="text-lg text-muted-foreground">
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
                     "Approve from Web, Email, Microsoft Teams, or Mobile"
                   ].map((item, i) => (
                     <li key={i} className="flex items-start gap-3">
                       <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                       <span className="text-muted-foreground">{item}</span>
                     </li>
                   ))}
                 </ul>
               </div>

               <p className="text-xl font-bold text-primary">
                 Fewer emails. Faster decisions. Stronger compliance.
               </p>

               <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold px-8">
                  <a href="#how">See How It Works</a>
               </Button>
             </div>
             <div>
                <FramedImagePlaceholder className="w-full shadow-xl" label="Structured Workflow" />
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
      <section className="py-20 md:py-32 bg-white">
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
            </div>
            <div className="flex justify-center">
              <img src={Approvals_integration} alt="Autopilot Integrations with Teams, Xero, SharePoint and more" className="w-full max-w-md object-contain" />
            </div>
          </div>
        </div>
      </section>
      {/* How It Works */}
      <section id="how" className="py-20 md:py-32 bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-6 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">How Autopilot Approvals Works</h2>
            <p className="text-lg text-gray-400">
              Effortlessly integrate and automate your approval workflows in four simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Define Your Workflow", desc: "Map roles, routing rules, thresholds, and escalation paths.", step: "01" },
              { title: "Submit Requests", desc: "Employees upload documents or complete request forms - with AI auto-filling key details.", step: "02" },
              { title: "Automated Approvals", desc: "Autopilot routes every request based on policy, sending reminders to keep things moving.", step: "03" },
              { title: "Track & Report", desc: "View the full audit trail instantly, export reports, and maintain compliance effortlessly.", step: "04" }
            ].map((item, i) => (
              <div key={i} className="relative group">
                <div className="text-6xl font-black text-white/20 absolute -top-4 -left-4 select-none group-hover:text-white/30 transition-colors">
                  {item.step}
                </div>
                <div className="relative space-y-4 pt-8 pl-4">
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Case Study Callout */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
           <div className="max-w-5xl mx-auto">
             {/* Header */}
             <div className="text-center space-y-6 mb-16">
               <Badge className="bg-orange-500 hover:bg-orange-600 text-white rounded-none px-4 py-1.5 text-sm font-bold uppercase tracking-wider">
                 Case Study
               </Badge>
               <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tight leading-tight max-w-4xl mx-auto">
                 Talksure: Approvals for 1,200+ employees now inside Microsoft Teams
               </h2>
               <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                 Talksure replaced rigid ERP workflows with Autopilot’s flexible approval process, making procurement faster, cleaner, and far easier to manage.
               </p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
               {/* Logo Card */}
               <div className="bg-gray-50 border border-gray-100 p-12 md:p-16 flex flex-col items-center justify-center gap-8 min-h-[300px]">
                 <img src="/talksure.png" alt="Talksure" className="w-48 h-auto object-contain" />
                 <div className="w-12 h-px bg-gray-200" />
                 <img src="/logo.png" alt="Autopilot" className="w-40 h-auto object-contain" />
               </div>

               {/* Bullets */}
               <ul className="space-y-6">
                 {[
                   "Reduced ERP licence costs for managers",
                   "Faster approvals without needing to log into finance systems",
                   "Significant time savings on manual rework",
                   "Mobile-friendly approvals used across the organization"
                 ].map((item, i) => (
                   <li key={i} className="flex items-start gap-4">
                     <div className="h-2 w-2 rounded-full bg-orange-500 mt-2.5 shrink-0" />
                     <span className="text-lg font-medium text-foreground">{item}</span>
                   </li>
                 ))}
               </ul>
             </div>

             {/* Button */}
             <div className="mt-16 text-center">
               <Button asChild size="lg" variant="outline" className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-white font-bold px-10 h-14 text-base rounded-none uppercase tracking-wide">
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
             
             {/* Video Placeholder */}
             <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center group cursor-pointer mb-20">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                <PlayCircle className="h-20 w-20 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 relative z-10" />
                <span className="sr-only">Play Video</span>
             </div>
          </div>
          
          <TestimonialGrid />
        </div>
      </section>
      <CTASection />
      <Footer />
    </div>
  );
}
