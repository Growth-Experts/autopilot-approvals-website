import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function BookDemo() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script if needed, though usually fine to leave for single page usage
      // But removing script tag might be safer to prevent duplicates if navigating back and forth
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-foreground">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Book a Demo
          </h1>
          <p className="text-lg text-muted-foreground">
            See how Autopilot can streamline your approval workflows.
          </p>
          
          <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div 
              className="calendly-inline-widget w-full" 
              data-url="https://calendly.com/marklehrer-autopilot/30min" 
              style={{ minWidth: '320px', height: '700px' }} 
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
