"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Plus, FileText, CheckCircle, ShieldAlert, Sparkles } from "lucide-react";

export function WorkflowComparison() {
  const languageCases = [
    {
      title: "Update turnover thresholds",
      desc: "Change bid turnover requirements from ₹30 Lakh to ₹50 Lakh dynamically.",
      icon: FileText,
    },
    {
      title: "Add startup exemptions",
      desc: "Set MSE relaxation and DPIIT startup waivers for specific tender clauses.",
      icon: Sparkles,
    },
    {
      title: "Add validation rules",
      desc: "Flag Class-I Make in India local content percentages under 50% automatically.",
      icon: ShieldAlert,
    },
    {
      title: "Query debarment records",
      desc: "Filter debarment status and search CPPP records for specific vendor names.",
      icon: CheckCircle,
    },
  ];

  return (
    <section className="relative bg-[#f3f2ef] border-b border-neutral-300 overflow-hidden py-16 lg:py-24">
      {/* Corner crosshairs matching EigenPal exactly */}
      <div className="absolute top-0 left-0 w-3 h-3 text-neutral-400 font-mono text-xs select-none pointer-events-none">+</div>
      <div className="absolute top-0 right-0 w-3 h-3 text-neutral-400 font-mono text-xs select-none pointer-events-none">+</div>
      <div className="absolute bottom-0 left-0 w-3 h-3 text-neutral-400 font-mono text-xs select-none pointer-events-none">+</div>
      <div className="absolute bottom-0 right-0 w-3 h-3 text-neutral-400 font-mono text-xs select-none pointer-events-none">+</div>

      <div className="max-w-[1440px] mx-auto px-6 relative">
        
        {/* Main Side-by-Side comparison block */}
        <div className="border border-neutral-300 bg-white grid lg:grid-cols-2 relative shadow-sm overflow-hidden mb-20 divide-y lg:divide-y-0 lg:divide-x divide-neutral-300">
          
          {/* Left Column: Traditional Manual Verification */}
          <div className="flex flex-col justify-between h-full bg-white">
            <div className="p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-[#0C1F4A] mb-8 tracking-tight">
                Traditional Manual Verification
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded bg-red-500 text-white font-mono text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0C1F4A] text-sm">Download GeM Bid Packages</h4>
                    <p className="text-xs text-neutral-500 italic mt-0.5">"Open GeM portal and download 10-15 PDF uploads per vendor."</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded bg-red-500 text-white font-mono text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0C1F4A] text-sm">Manual GSTN & PAN Queries</h4>
                    <p className="text-xs text-neutral-500 mt-0.5">Manually type GSTIN, verify active registration, and take screenshots for proof.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded bg-red-500 text-white font-mono text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0C1F4A] text-sm">Labour & CPPP Blacklist Checks</h4>
                    <p className="text-xs text-neutral-500 mt-0.5">Cross-reference debarment status and labour compliance across multiple portals.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded bg-red-500 text-white font-mono text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0C1F4A] text-sm">Financial Spreadsheets Audits</h4>
                    <p className="text-xs text-neutral-500 mt-0.5">Manually read CA-certified turnovers and cross-check against tender criteria.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Red bottom banner with calendar icon */}
            <div className="bg-red-50 border-t border-red-200 text-red-700 px-8 py-4 font-mono text-xs font-bold tracking-widest uppercase flex items-center justify-between">
              <span>3-5 WORKING DAYS PER TENDER</span>
              <Calendar className="w-4 h-4 text-red-500" />
            </div>
          </div>

          {/* Right Column: VeriBid AI Copilot */}
          <div className="flex flex-col justify-between h-full bg-white">
            <div className="p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-[#0C1F4A] mb-8 tracking-tight">
                VeriBid AI Copilot
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded bg-[#2EB52E] text-white font-mono text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0C1F4A] text-sm">Upload GeM Tender</h4>
                    <p className="text-xs text-neutral-500 italic mt-0.5">"Automatically compile compliance criteria from the tender PDF."</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded bg-[#2EB52E] text-white font-mono text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0C1F4A] text-sm">Upload Vendor Bids</h4>
                    <p className="text-xs text-neutral-500 mt-0.5">Auto-classify certificates, statements, and run parallel layout-aware OCR.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded bg-[#2EB52E] text-white font-mono text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0C1F4A] text-sm">13 Parallel Portal Queries</h4>
                    <p className="text-xs text-neutral-500 mt-0.5">Submit identifiers to live government portal databases in 12 seconds.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded bg-[#2EB52E] text-white font-mono text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0C1F4A] text-sm">Exemptions & Verification</h4>
                    <p className="text-xs text-neutral-500 mt-0.5">Apply Startup/MSE waivers and flag turnover contradictions automatically.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Green bottom banner with plus icon */}
            <div className="bg-[#2EB52E] text-white px-8 py-4 font-mono text-xs font-bold tracking-widest uppercase flex items-center justify-between">
              <span>90 SECONDS PER VENDOR</span>
              <Plus className="w-4 h-4 text-white" />
            </div>
          </div>

        </div>

        {/* Natural Language features carousel list */}
        <div className="text-center">
          <h3 className="text-3xl font-medium tracking-tight text-[#0C1F4A] mb-12">
            Configure compliance parameters dynamically
          </h3>

          {/* Sliding horizontal track */}
          <div className="w-full overflow-hidden relative py-4 mask-horizontal">
            <motion.div
              className="flex gap-6 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
            >
              {[1, 2].map((loopIdx) => (
                <React.Fragment key={loopIdx}>
                  {languageCases.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={`${item.title}-${loopIdx}`}
                        className="bg-white p-6 rounded-xl border border-neutral-300 shadow-sm w-72 flex flex-col justify-between flex-shrink-0 hover:shadow-md hover:border-neutral-400 transition-all cursor-pointer"
                      >
                        <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center text-[#00C9A7] mb-4">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h4 className="font-bold text-[#0C1F4A] text-sm mb-1">{item.title}</h4>
                        <p className="text-xs text-neutral-500 leading-relaxed">{item.desc}</p>
                      </div>
                    );
                  })}
                </React.Fragment>
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
