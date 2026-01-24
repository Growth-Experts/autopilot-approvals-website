import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/ui/CTASection";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function LawdCaseStudy() {
  return (
    <div className="min-h-screen bg-white font-sans text-foreground flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gray-50 border-b border-gray-100 py-20">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-8">
            <Link href="/case-studies" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-4 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Case Studies
            </Link>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              LAWD: Slashing onboarding time by 40–50%
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              How a rapidly growing firm automated recruitment and onboarding to improve accountability and scale effortlessly.
            </p>
          </div>
        </section>
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
             <p className="text-muted-foreground italic">Full case study content coming soon.</p>
          </div>
        </section>
      </main>
      <CTASection />
      <Footer />
    </div>
  );
}
