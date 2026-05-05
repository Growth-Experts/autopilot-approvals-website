import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { TrendingDown, Users, ArrowRight, DollarSign } from "lucide-react";

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function calcAutopilotCost(workflows: number): number {
  // Base: $500/month covers 1–100 workflows
  if (workflows <= 100) return 500;
  // Tier 1: 101–1,000 at $1.00 each
  if (workflows <= 1000) return 500 + (workflows - 100) * 1.0;
  // Tier 2: 1,001–5,000 at $0.70 each
  if (workflows <= 5000) return 500 + 900 * 1.0 + (workflows - 1000) * 0.7;
  // Tier 3: 5,001+ at $0.60 each
  return 500 + 900 * 1.0 + 4000 * 0.7 + (workflows - 5000) * 0.6;
}

function getPricingTierLabel(workflows: number): string {
  if (workflows <= 100) return "Base (1–100 workflows)";
  if (workflows <= 1000) return "Tier 1 (101–1,000 workflows)";
  if (workflows <= 5000) return "Tier 2 (1,001–5,000 workflows)";
  return "Tier 3 (5,001+ workflows)";
}

export default function ROICalculator() {
  const [managerCount, setManagerCount] = useState(5);
  const [licenseUsdPerUser, setLicenseUsdPerUser] = useState(150);
  const [monthlyWorkflows, setMonthlyWorkflows] = useState(75);

  const erpCostMonthly = managerCount * licenseUsdPerUser;
  const autopilotCostMonthly = calcAutopilotCost(monthlyWorkflows);
  const netSavingMonthly = erpCostMonthly - autopilotCostMonthly;
  const netSavingAnnual = netSavingMonthly * 12;
  const isPositive = netSavingMonthly > 0;

  return (
    <div className="min-h-screen bg-white font-sans text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="pt-16 pb-12 md:pt-24 md:pb-16 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-blue-50/10 to-gray-100/20">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            ERP License Savings Calculator
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
            How much are you <span className="text-primary">overpaying</span> for approvals?
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Finance teams pay for expensive ERP licenses just so managers can click "Approve" once a week.
            See your net saving after switching to Autopilot on Microsoft Teams.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

            {/* Inputs */}
            <div className="bg-white border border-gray-200 shadow-sm p-8 md:p-10 space-y-10">
              <h2 className="text-2xl font-bold">Your numbers</h2>

              {/* Slider 1 */}
              <div className="space-y-3">
                <div className="flex justify-between items-baseline">
                  <label className="text-sm font-semibold text-foreground">
                    Managers with ERP logins just to approve
                  </label>
                  <span className="text-2xl font-extrabold text-primary tabular-nums">
                    {managerCount}
                  </span>
                </div>
                <Slider
                  min={3}
                  max={100}
                  step={1}
                  value={[managerCount]}
                  onValueChange={([v]) => setManagerCount(v)}
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>3</span><span>100</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Users who log into SAP, Oracle, Xero, or similar only to approve requests.
                </p>
              </div>

              {/* Slider 2 */}
              <div className="space-y-3">
                <div className="flex justify-between items-baseline">
                  <label className="text-sm font-semibold text-foreground">
                    Monthly ERP license cost per user
                  </label>
                  <span className="text-2xl font-extrabold text-primary tabular-nums">
                    {formatCurrency(licenseUsdPerUser)}
                  </span>
                </div>
                <Slider
                  min={50}
                  max={1000}
                  step={5}
                  value={[licenseUsdPerUser]}
                  onValueChange={([v]) => setLicenseUsdPerUser(v)}
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>$50</span><span>$1,000</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Check your SAP, Oracle, Xero, or QuickBooks invoice for the per-seat cost.
                </p>
              </div>

              {/* Slider 3 */}
              <div className="space-y-3">
                <div className="flex justify-between items-baseline">
                  <label className="text-sm font-semibold text-foreground">
                    Monthly approval workflows
                  </label>
                  <span className="text-2xl font-extrabold text-primary tabular-nums">
                    {monthlyWorkflows.toLocaleString()}
                  </span>
                </div>
                <Slider
                  min={1}
                  max={5000}
                  step={10}
                  value={[monthlyWorkflows]}
                  onValueChange={([v]) => setMonthlyWorkflows(v)}
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>1</span><span>5,000+</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Total approval requests initiated per month (invoices, leave, procurement, etc.)
                </p>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-4">
              <div className="bg-primary text-white p-8 md:p-10 space-y-6">
                <h2 className="text-xl font-bold opacity-90">Your potential savings</h2>

                <div className="space-y-6">
                  {/* ERP cost removed */}
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 rounded-full p-2 shrink-0">
                      <TrendingDown className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium opacity-80">ERP licenses removed</p>
                      <p className="text-4xl font-extrabold tabular-nums mt-1">
                        {formatCurrency(erpCostMonthly)}<span className="text-lg font-medium opacity-70">/mo</span>
                      </p>
                      <p className="text-xs opacity-60 mt-1">{managerCount} managers × {formatCurrency(licenseUsdPerUser)}/seat</p>
                    </div>
                  </div>

                  {/* Autopilot cost */}
                  <div className="border-t border-white/20 pt-6 flex items-start gap-4">
                    <div className="bg-white/20 rounded-full p-2 shrink-0">
                      <DollarSign className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium opacity-80">Autopilot subscription</p>
                      <p className="text-4xl font-extrabold tabular-nums mt-1">
                        {formatCurrency(autopilotCostMonthly)}<span className="text-lg font-medium opacity-70">/mo</span>
                      </p>
                      <p className="text-xs opacity-60 mt-1">{getPricingTierLabel(monthlyWorkflows)}</p>
                    </div>
                  </div>

                  {/* Net saving */}
                  <div className="border-t border-white/20 pt-6 flex items-start gap-4">
                    <div className="bg-green-400/30 rounded-full p-2 shrink-0">
                      <TrendingDown className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium opacity-80">Net saving per month</p>
                      {isPositive ? (
                        <>
                          <p className="text-5xl font-extrabold tabular-nums mt-1">
                            {formatCurrency(netSavingMonthly)}
                          </p>
                          <p className="text-sm opacity-80 mt-2">{formatCurrency(netSavingAnnual)} saved per year</p>
                        </>
                      ) : (
                        <p className="text-sm opacity-70 mt-2">
                          Try increasing your ERP seat count or license cost — your Autopilot subscription will be offset as those numbers grow.
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Managers freed */}
                  <div className="border-t border-white/20 pt-6 flex items-start gap-4">
                    <div className="bg-white/20 rounded-full p-2 shrink-0">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium opacity-80">Managers freed from ERP logins</p>
                      <p className="text-4xl font-extrabold tabular-nums mt-1">{managerCount}</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-xs text-muted-foreground px-1">
                * ERP savings assume approval-only seats are fully removed. Autopilot cost based on published pricing. Actual results depend on your agreements.{" "}
                <Link href="/pricing" className="underline hover:text-primary">View full pricing →</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead magnet CTA */}
      <section className="py-16 md:py-20 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            You're overpaying for ERP licenses.
          </h2>
          <p className="text-lg text-muted-foreground">
            Move approvals to Microsoft Teams and reclaim those seats. We'll show you exactly how — same workflow, zero extra logins.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold px-10 h-12">
              <a href="https://calendly.com/marklehrer-autopilot/30min" target="_blank" rel="noopener noreferrer">
                See How It Works
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            See how{" "}
            <Link href="/case-studies/talksure" className="text-primary font-medium hover:underline">
              Talksure
            </Link>
            {" "}reduced ERP licence costs for 1,200+ employees by moving approvals to Teams.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
