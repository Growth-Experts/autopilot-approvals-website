import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="md:col-span-1 space-y-6">
            <img src="/logo.png" alt="Autopilot Approvals" className="h-8 w-auto" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Replace inbox approvals with structured,{" "}<span className="whitespace-nowrap">policy-driven workflows.</span>
            </p>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/#features" className="text-sm text-muted-foreground hover:text-primary">
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="/#integrations"
                    className="text-sm text-muted-foreground hover:text-primary"
                    data-testid="link-footer-integrations"
                  >
                    Integrations
                  </a>
                </li>
                <li>
                  <Link href="/pricing" className="text-sm text-muted-foreground hover:text-primary">
                    Pricing
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
                  <Link href="/book-demo" className="text-sm text-muted-foreground hover:text-primary">
                    Book a Demo
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© 2026 Autopilot Approvals. All rights reserved.</p>
          <div className="flex gap-4">
            <a
              href="https://cdn.autopilot.co.za/legal/Autopilot%20Client%20Terms%20%20Conditions%2020160224.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              Terms of Service
            </a>
            <a
              href="https://cdn.autopilot.co.za/legal/teams/Autopilot%20Privacy%20Policy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
