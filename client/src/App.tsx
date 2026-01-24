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

import ScrollToTop from "@/components/layout/ScrollToTop";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/case-studies" component={CaseStudiesIndex} />
      <Route path="/case-studies/talksure" component={TalksureCaseStudy} />
      <Route path="/case-studies/sa-canegrowers" component={SaCanegrowersCaseStudy} />
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
