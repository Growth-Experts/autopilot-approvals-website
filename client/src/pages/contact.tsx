import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  company: z.string().min(2, "Company name is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent",
      description: "We've received your message and will get back to you shortly.",
    });
    form.reset();
  }

  return (
    <div className="min-h-screen bg-white font-sans text-foreground flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <div className="grid lg:grid-cols-2 min-h-[calc(100vh-64px)]">
          {/* Left Side: Form */}
          <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16 lg:py-0">
            <div className="max-w-xl mx-auto w-full">
              <div className="mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
                  Get in touch!
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Ready to take control of your approval workflows? Fill out the form and our team will be in touch shortly.
                </p>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs font-bold uppercase tracking-wider text-muted-foreground">First Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Jane" {...field} className="bg-gray-50 border-gray-200 h-12" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Last Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Doe" {...field} className="bg-gray-50 border-gray-200 h-12" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Work Email</FormLabel>
                          <FormControl>
                            <Input placeholder="jane@company.com" {...field} className="bg-gray-50 border-gray-200 h-12" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="+1 (555) 000-0000" {...field} className="bg-gray-50 border-gray-200 h-12" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Company Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Acme Inc." {...field} className="bg-gray-50 border-gray-200 h-12" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your onboarding challenges..." 
                            className="min-h-[160px] bg-gray-50 border-gray-200 resize-none p-4"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" size="lg" className="w-full h-14 font-bold text-base uppercase tracking-wide bg-primary hover:bg-primary/90 text-white rounded-none">
                    Send Message
                  </Button>
                </form>
              </Form>
            </div>
          </div>

          {/* Right Side: Contact Info & Geometric Background */}
          <div className="bg-[#111111] relative overflow-hidden flex flex-col justify-center items-center text-white p-12 lg:p-24 min-h-[500px] lg:min-h-auto">
            {/* Geometric Background Lines */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
                <circle cx="400" cy="400" r="300" fill="none" stroke="white" strokeWidth="2" />
                <line x1="0" y1="0" x2="800" y2="800" stroke="white" strokeWidth="2" />
                <line x1="800" y1="0" x2="0" y2="800" stroke="white" strokeWidth="2" />
                <line x1="200" y1="0" x2="600" y2="800" stroke="white" strokeWidth="2" />
                <line x1="600" y1="0" x2="200" y2="800" stroke="white" strokeWidth="2" />
              </svg>
            </div>

            <div className="relative z-10 space-y-10 max-w-md w-full">
              <div className="flex items-start gap-6">
                <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-1">Email Us</h3>
                  <a href="mailto:info@autopilot.co.za" className="text-xl md:text-2xl font-medium hover:text-primary transition-colors">
                    info@autopilot.co.za
                  </a>
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
