import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/ui/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { FramedImagePlaceholder } from "@/components/ui/FramedImagePlaceholder";

const CASE_STUDIES = [
  {
    title: "Streamlining Procurement with Microsoft Teams",
    body: "How Talksure centralized purchase requests inside Teams, reduced ERP licence costs, and sped up approvals across 1,200 employees.",
    link: "/case-studies/talksure"
  },
  {
    title: "Cutting Onboarding Time by 40–50%",
    body: "See how LAWD automated recruitment and onboarding, improved accountability, and scaled processes during rapid growth.",
    link: "/case-studies/lawd"
  },
  {
    title: "Faster, Paperless Reseller Onboarding",
    body: "How Syntech replaced manual forms with a fully digital workflow, reducing onboarding from 10 days to 1 day.",
    link: "/case-studies/syntech"
  },
  {
    title: "Approvals Built Directly into Teams",
    body: "How SA Canegrowers digitized key approval processes and improved control by integrating Autopilot into their daily Microsoft 365 workflow.",
    link: "/case-studies/sa-canegrowers"
  }
];

export default function CaseStudiesIndex() {
  return (
    <div className="min-h-screen bg-white font-sans text-foreground flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Band */}
        <section className="bg-primary text-white py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                  Better Approvals. Stronger Operations.
                </h1>
                <p className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-xl">
                  Explore how organizations use Autopilot to replace email chaos with structured, visible approval workflows that move faster and stay audit-ready.
                </p>
              </div>
              <div>
                <FramedImagePlaceholder className="w-full bg-white/10 border-white/20 shadow-none" label="Case Studies Hero" />
              </div>
            </div>
          </div>
        </section>

        {/* Index Grid */}
        <section className="py-20 bg-gray-50/50">
          <div className="container mx-auto px-4 md:px-6 space-y-12">
            <h2 className="text-3xl font-bold tracking-tight text-center">Case Studies</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {CASE_STUDIES.map((study, i) => (
                <Card key={i} className="border-none shadow-sm hover:shadow-lg transition-all duration-300 bg-white overflow-hidden group">
                  <div className="aspect-[2/1] bg-gray-100 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground/20 font-bold text-4xl">
                      CASE STUDY
                    </div>
                  </div>
                  <CardContent className="p-8 space-y-6">
                    <h3 className="text-2xl font-bold leading-tight group-hover:text-primary transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {study.body}
                    </p>
                    <Button asChild variant="outline" className="mt-4 border-primary text-primary hover:bg-primary hover:text-white">
                      <Link href={study.link}>Read More</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <CTASection />
      <Footer />
    </div>
  );
}
