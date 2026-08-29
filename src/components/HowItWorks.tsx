"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Split, Sparkles, CheckSquare } from "lucide-react";

interface Step {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  label: string;
  desc: string;
  link: string;
  videoUrl: string;
}

export function HowItWorks() {
  const [activeIdx, setActiveIdx] = useState(0);

  const steps: Step[] = [
    {
      id: "parse",
      name: "Parse",
      icon: FileText,
      color: "#4A9B7F",
      label: "Ingest Tender PDF",
      desc: "Upload the GeM tender PDF. VeriBid's compiler reads the document layout and automatically extracts all compliance clauses using layout-aware Zone A/B/C rules.",
      link: "#",
      videoUrl: "https://cdn.reducto.ai/landing-page/illustrations/Section%202/Section%202_Parse_v004.webm",
    },
    {
      id: "split",
      name: "Split",
      icon: Split,
      color: "#2563EB",
      label: "Process Vendor Bids",
      desc: "Upload vendor bid packages. VeriBid intelligently splits multi-document files and logs individual certificates for downstream extraction.",
      link: "#",
      videoUrl: "https://cdn.reducto.ai/landing-page/illustrations/Section%202/Section%202_Split_v004.webm",
    },
    {
      id: "extract",
      name: "Extract",
      icon: Sparkles,
      color: "#CA8A04",
      label: "13 Parallel Portal Queries",
      desc: "Retrieve verified facts directly from government source databases. Submit extracted GSTIN, PAN, and Udyam credentials to parallel API adapters in under 12 seconds.",
      link: "#",
      videoUrl: "https://cdn.reducto.ai/landing-page/illustrations/Section%202/Section%202_Extract_v004.webm",
    },
    {
      id: "classify",
      name: "Classify",
      icon: CheckSquare,
      color: "#8B5E3C",
      label: "Score & Exemptions",
      desc: "Apply Startup or MSE exemptions dynamically to turnover thresholds, detect CA contradiction flags, and seal the final auditable report package.",
      link: "#",
      videoUrl: "https://cdn.reducto.ai/landing-page/illustrations/Section%202/Section%202_Classify_v002.webm",
    },
  ];

  const activeStep = steps[activeIdx];

  return (
    <section id="how-it-works" className="py-28 bg-[#fdfdfc] border-b border-neutral-200">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        
        {/* ── Section Header matching Reducto product style exactly (Removed code switcher) ── */}
        <div className="text-center mb-20 max-w-3xl mx-auto flex flex-col items-center">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#3B82F6] block mb-4">
            ⠿ Product
          </span>
          <h2 
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            className="text-5xl sm:text-6xl font-normal leading-tight tracking-tight text-[#0C1F4A] mb-4"
          >
            Free your decisions from document locks.
          </h2>
          <p className="text-sm sm:text-base text-neutral-500 max-w-xl leading-relaxed">
            A toolbox of flexible APIs and dashboards for all your verification needs.
          </p>
        </div>

        {/* ── Two Column Reducto Accordion Layout ── */}
        <div className="grid lg:grid-cols-12 gap-16 items-start mt-12">
          
          {/* Left Column: Interactive vertical accordion list */}
          <div className="lg:col-span-6 space-y-6">
            {steps.map((step, idx) => {
              const isActive = idx === activeIdx;
              const StepIcon = step.icon;

              return (
                <div 
                  key={step.id} 
                  className={`border-b border-neutral-100 pb-6 transition-all duration-300 ${
                    isActive ? "" : "opacity-60 hover:opacity-100"
                  }`}
                >
                  {/* Step Header Title Link */}
                  <button
                    onClick={() => setActiveIdx(idx)}
                    className="w-full flex items-center gap-3.5 text-left cursor-pointer focus:outline-none"
                  >
                    <div 
                      className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
                      style={{ 
                        backgroundColor: isActive ? `${step.color}15` : "transparent",
                        color: isActive ? step.color : "#999"
                      }}
                    >
                      <StepIcon className="w-5 h-5" />
                    </div>
                    
                    <h3 
                      className="text-xl sm:text-2xl font-bold tracking-tight transition-colors duration-200"
                      style={{ color: isActive ? step.color : "#0C1F4A" }}
                    >
                      {step.name}
                    </h3>
                  </button>

                  {/* Expanded Accordion Body */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pl-11 pt-3">
                          <p className="text-xs font-bold text-[#0C1F4A] mb-2 font-mono uppercase tracking-wider">
                            {step.label}
                          </p>
                          <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                            {step.desc}
                          </p>
                          <a
                            href={step.link}
                            className="inline-flex items-center text-xs font-bold transition-all duration-200 hover:gap-1.5"
                            style={{ color: step.color }}
                          >
                            <span>Learn more</span>
                            <span className="ml-1">→</span>
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Column: Asset Preview Area */}
          <div className="lg:col-span-6 bg-[#f8f8f6] rounded-2xl border border-neutral-200/80 p-8 shadow-sm min-h-[420px] flex items-center justify-center relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.22, ease: "easeInOut" }}
                className="w-full h-full flex items-center justify-center"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <video
                    src={activeStep.videoUrl}
                    autoPlay={true}
                    muted={true}
                    playsInline={true}
                    loop={true}
                    className="w-full max-h-[340px] object-contain rounded-xl drop-shadow-lg"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur border border-neutral-200 px-3 py-1.5 rounded-lg shadow-sm font-mono text-[9px] text-[#0C1F4A] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00C9A7] animate-ping" />
                    <span>{activeStep.label}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
