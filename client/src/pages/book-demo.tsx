import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Users, HelpCircle, Handshake } from "lucide-react";
import { InlineWidget } from "react-calendly";

export default function BookDemo() {
  return (
    <div className="min-h-screen bg-white font-sans text-foreground flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-16 px-6">
      <div>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Autopilot</h1>
          <p className="text-xl text-gray-600">Whether you need a full demonstration, technical assistance, or partnership information, we're here to help.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-7xl mx-auto items-stretch">
          {/* Left Column: Contact Info Blocks */}
          <div className="lg:col-span-4 flex flex-col gap-6 h-full">
            {/* General Inquiries */}
            <Card className="border-gray-100 shadow-md hover:shadow-lg transition-shadow flex-1">
              <CardHeader className="pb-3">
                <div className="w-10 h-10 bg-blue-100 rounded-none flex items-center justify-center text-primary mb-3">
                  <Users className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">General Inquiries</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p className="text-gray-600">For general questions about the company, licensing, or corporate information.</p>
                <div className="space-y-2 pt-1">
                  <div className="flex items-center gap-3 font-medium">
                    <Mail className="h-4 w-4 text-accent" />
                    <span>info@autopilot.co.za</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Technical Support */}
            <Card className="border-gray-100 shadow-md hover:shadow-lg transition-shadow flex-1">
              <CardHeader className="pb-3">
                <div className="w-10 h-10 bg-blue-100 rounded-none flex items-center justify-center text-primary mb-3">
                  <HelpCircle className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">Technical Support</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p className="text-gray-600">If you are a current client and require technical assistance or support.</p>
                <div className="space-y-2 pt-1">
                  <div className="flex items-center gap-3 font-medium">
                    <Mail className="h-4 w-4 text-accent" />
                    <span>support@autopilot.co.za</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Partnership */}
            <Card className="border-gray-100 shadow-md hover:shadow-lg transition-shadow flex-1">
              <CardHeader className="pb-3">
                <div className="w-10 h-10 bg-blue-100 rounded-none flex items-center justify-center text-primary mb-3">
                  <Handshake className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">Partnerships</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p className="text-gray-600">Interested in becoming an Implementation Partner?</p>
                <div className="space-y-2 pt-1">
                  <div className="flex items-center gap-3 font-medium">
                    <Mail className="h-4 w-4 text-accent" />
                    <span>partners@autopilot.co.za</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Calendly */}
          <div className="lg:col-span-8 flex flex-col h-full">
            <div
              className="bg-white p-4 md:p-6 rounded-none shadow-lg border border-gray-100 flex-1 h-full"
              data-testid="card-book-demo-calendly"
            >
              <h2 className="text-2xl font-bold mb-2">Schedule Your Live Demo</h2>
              <p className="text-gray-600 mb-6">Pick a time that works for you and we'll send a calendar invite immediately.</p>

              <div className="border border-gray-200 shadow-sm rounded-none overflow-hidden">
                <InlineWidget url="https://calendly.com/marklehrer-autopilot/30min" styles={{ height: "820px", width: "100%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      </main>
      <Footer />
    </div>
  );
}
