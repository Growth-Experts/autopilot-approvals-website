import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

const BOOK_DEMO_URL = "https://example.com/book-demo";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const NavItems = () => (
    <>
      <Link href="/" className="text-base font-medium text-foreground/80 hover:text-primary transition-colors">
        Home
      </Link>
      <a href="/#features" className="text-base font-medium text-foreground/80 hover:text-primary transition-colors">
        Features
      </a>
      <Link href="/pricing" className="text-base font-medium text-foreground/80 hover:text-primary transition-colors">
        Pricing
      </Link>
      <Link href="/case-studies" className="text-base font-medium text-foreground/80 hover:text-primary transition-colors">
        Case Studies
      </Link>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Autopilot Approvals" className="h-7 md:h-9 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <NavItems />
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex">
          <Button asChild className="bg-primary hover:bg-primary/90 text-white font-semibold px-6">
            <Link href="/book-demo">
              Book a Demo
            </Link>
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 mt-8">
                <NavItems />
                <Button asChild className="bg-primary hover:bg-primary/90 text-white w-full">
                  <Link href="/book-demo">
                    Book a Demo
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
