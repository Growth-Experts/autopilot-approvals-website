import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/ui/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";
import { FramedImagePlaceholder } from "@/components/ui/FramedImagePlaceholder";

const CASE_STUDIES = [
  {
    logo: "/talksure.png",
    title: "A smarter way to manage purchase requests",
    body: "As Talksure grew to over 1,200 employees, procurement became slower and harder to manage. Autopilot simplified the process, making it easier to raise requests, approve them quickly, and keep everything running smoothly.",
    link: "/case-studies/talksure",
    stat: "FASTER APPROVALS"
  },
  {
    logo: "/sa-canegrowers.png",
    title: "Approvals Built Directly into Teams",
    body: "How SA Canegrowers digitized key approval processes and improved control by integrating Autopilot into their daily Microsoft 365 workflow.",
    link: "/case-studies/sa-canegrowers",
    stat: "DIGITIZED APPROVALS"
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
                <Link key={i} href={study.link}>
                  <Card className="border-none shadow-sm hover:shadow-xl transition-all duration-300 bg-white overflow-hidden group cursor-pointer h-full flex flex-col">
                    <CardContent className="p-8 md:p-10 flex flex-col h-full">
                      
                      {/* Top: Logo + Arrow */}
                      <div className="flex items-start justify-between mb-8">
                        <div className="h-10 w-auto">
                           <img src={study.logo} alt="" className="h-full w-auto object-contain" />
                        </div>
                        <ArrowUpRight className="h-6 w-6 text-gray-300 group-hover:text-primary transition-colors duration-300" />
                      </div>

                      {/* Middle: Title + Body */}
                      <div className="space-y-4 mb-8 flex-grow">
                        <h3 className="text-2xl font-extrabold leading-tight text-foreground">
                          {study.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {study.body}
                        </p>
                      </div>

                      {/* Bottom: Divider + Stat */}
                      <div className="mt-auto pt-6 border-t border-gray-100">
                        <span className="text-sm font-bold tracking-wide uppercase text-[#3a82d3]">
                          {study.stat}
                        </span>
                      </div>

                    </CardContent>
                  </Card>
                </Link>
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
