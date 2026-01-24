import { Link } from "wouter";
import { Linkedin, Twitter, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="md:col-span-1 space-y-6">
            <img src="/logo.png" alt="Autopilot Approvals" className="h-8 w-auto" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Replace inbox approvals with structured, policy-driven workflows.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/#how" className="text-sm text-muted-foreground hover:text-primary">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/#value" className="text-sm text-muted-foreground hover:text-primary">
                    Integrations
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/case-studies" className="text-sm text-muted-foreground hover:text-primary">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© 2025 Autopilot Approvals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
