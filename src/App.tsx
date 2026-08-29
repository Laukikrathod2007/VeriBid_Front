import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TrustBand } from "./components/TrustBand";
import { HowItWorks } from "./components/HowItWorks";
import { UseCaseTabs } from "./components/UseCaseTabs";
import { ProductStory } from "./components/ProductStory";
import { FeaturesGrid } from "./components/FeaturesGrid";
import { WorkflowComparison } from "./components/WorkflowComparison";
import { ContradictionDetector } from "./components/ContradictionDetector";
import { BidDocumentAnimation } from "./components/BidDocumentAnimation";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { DocsPage } from "./components/DocsPage";

export default function App() {
  const [view, setView] = useState<"landing" | "docs">("landing");

  if (view === "docs") {
    return <DocsPage onClose={() => setView("landing")} />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F4F1] selection:bg-[#00C9A7] selection:text-[#0C1F4A]">
      <Navbar onDocsClick={() => setView("docs")} />
      <main className="flex-1">
        <Hero />
        <TrustBand />
        <HowItWorks />
        <UseCaseTabs />
        <ProductStory />
        <FeaturesGrid />
        <WorkflowComparison />
        <ContradictionDetector />
        <BidDocumentAnimation />
        <FAQ />
      </main>
      <Footer onDocsClick={() => setView("docs")} />
    </div>
  );
}
