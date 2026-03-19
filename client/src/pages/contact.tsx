import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Mail, Phone, Users, Headphones, Handshake } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white font-sans text-foreground flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Header */}
        <div className="bg-gray-50 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a2e5a] mb-4">
            Contact Autopilot
          </h1>
          <p className="text-lg text-gray-600 max-w-lg mx-auto">
            Whether you need a full demonstration, technical assistance, or partnership
            information, we're here to help.
          </p>
        </div>

        {/* Two column layout */}
        <div className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-10">
          {/* Left: Contact Cards */}
          <div className="flex flex-col gap-6">
            {/* General Inquiries */}
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                <Users className="h-5 w-5 text-[#1a2e5a]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">General Inquiries</h3>
              <p className="text-gray-500 text-sm mb-4">
                For general questions about the company, licensing, or corporate information.
              </p>
              <div className="space-y-2">
                <a href="mailto:info@autopilot.co.za" className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#1a2e5a]">
                  <Mail className="h-4 w-4 text-[#1a2e5a]" />
                  info@autopilot.co.za
                </a>
                <a href="tel:+27011234567" className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#1a2e5a]">
                  <Phone className="h-4 w-4 text-[#1a2e5a]" />
                  +27 (0) 11 123 4567
                </a>
              </div>
            </div>

            {/* Technical Support */}
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                <Headphones className="h-5 w-5 text-[#1a2e5a]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Technical Support</h3>
              <p className="text-gray-500 text-sm mb-4">
                If you are a current client and require technical assistance or support.
              </p>
              <a href="mailto:support@autopilot.co.za" className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#1a2e5a]">
                <Mail className="h-4 w-4 text-[#1a2e5a]" />
                support@autopilot.co.za
              </a>
            </div>

            {/* Partnerships */}
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                <Handshake className="h-5 w-5 text-[#1a2e5a]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Partnerships</h3>
              <p className="text-gray-500 text-sm mb-4">
                Interested in becoming an implementation Partner?
              </p>
              <a href="mailto:partners@autopilot.co.za" className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#1a2e5a]">
                <Mail className="h-4 w-4 text-[#1a2e5a]" />
                partners@autopilot.co.za
              </a>
            </div>
          </div>

          {/* Right: Schedule Demo */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h2 className="text-xl font-bold text-[#1a2e5a] mb-1">Schedule Your Live Demo</h2>
            <p className="text-sm text-gray-500 mb-4">
              Pick a time that works for you and we'll send a calendar invite immediately.
            </p>
            <div className="w-full" style={{ minHeight: 600 }}>
              <iframe
                src="https://calendly.com/marklehrer-autopilot/30min"
                width="100%"
                height="600"
                style={{ border: "none" }}
                title="Schedule a demo"
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
