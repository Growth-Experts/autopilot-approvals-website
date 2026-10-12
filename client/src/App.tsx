import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Contact from "@/pages/contact";
import CaseStudiesIndex from "@/pages/case-studies/index";
import TalksureCaseStudy from "@/pages/case-studies/talksure";
import SaCanegrowersCaseStudy from "@/pages/case-studies/sa-canegrowers";
import BookDemo from "@/pages/book-demo";
import Pricing from "@/pages/pricing";
import ROICalculator from "@/pages/roi-calculator";
import { lazy, Suspense } from "react";

import ScrollToTop from "@/components/layout/ScrollToTop";

const DemoTest = lazy(() => import("@/pages/demo-test"));

function DemoTestRoute() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <DemoTest />
    </Suspense>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/book-demo" component={BookDemo} />
      <Route path="/contact" component={Contact} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/case-studies" component={CaseStudiesIndex} />
      <Route path="/case-studies/talksure" component={TalksureCaseStudy} />
      <Route path="/case-studies/sa-canegrowers" component={SaCanegrowersCaseStudy} />
      <Route path="/roi-calculator" component={ROICalculator} />
      <Route path="/demo-test" component={DemoTestRoute} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ScrollToTop />
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
