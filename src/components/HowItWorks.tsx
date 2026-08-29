"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UploadCloud } from "lucide-react";

const tabs = [
  {
    step: "STEP 01",
    label: "Ingest Tender PDF",
    desc: "Upload the GeM tender PDF. VeriBid automatically extracts all compliance requirements using Zone A/B/C parsing — no manual setup.",
  },
  {
    step: "STEP 02",
    label: "Process Vendor Bids",
    desc: "Upload vendor bid packages. Auto-classify certificates, financial statements and run parallel layout-aware OCR extraction.",
  },
  {
    step: "STEP 03",
    label: "13 Parallel Portal Queries",
    desc: "Submit identifiers to GSTN, Udyam, PAN, CPPP and other live government portal databases — all in parallel, in under 12 seconds.",
  },
  {
    step: "STEP 04",
    label: "Score & Exemptions",
    desc: "Apply Startup/MSE turnover waivers, flag contradictions, and generate compliance score with CAG-defensible evidence trail.",
  },
];

export function HowItWorks() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="how-it-works" className="py-28 bg-[#f3f2ef] border-b border-[rgba(12,31,74,0.08)]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#0C1F4A]/50 block mb-4">
          / HOW IT WORKS
        </span>
        <h2 
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight tracking-tight text-[#0C1F4A] mb-16"
        >
          Tender to compliance verdict in under 4 hours
        </h2>

        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Left Vertical Tab Switcher (40% width span) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {tabs.map((tab, idx) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(idx)}
                className={`text-left p-6 border-l-2 transition-all relative ${
                  activeTab === idx
                    ? "border-[#00C9A7] bg-[#0C1F4A]/5"
                    : "border-neutral-200 hover:border-neutral-300 bg-transparent"
                }`}
              >
                <span className="font-mono text-[10px] font-bold text-[#0C1F4A]/40 block mb-1">
                  {tab.step}
                </span>
                <h3
                  className={`text-xl sm:text-2xl font-bold mb-2.5 tracking-tight ${
                    activeTab === idx ? "text-[#0C1F4A]" : "text-[#0C1F4A]/60"
                  }`}
                >
                  {tab.label}
                </h3>
                <p className="text-sm text-[#0C1F4A]/70 leading-relaxed font-normal">{tab.desc}</p>
              </button>
            ))}
          </div>

          {/* Right Preview Panel (60% width span) with High Fidelity WebM videos */}
          <div className="lg:col-span-7 bg-[#f3f2ef] rounded-2xl border border-neutral-300 p-8 shadow-sm h-[400px] flex items-center justify-center relative overflow-hidden">
            <AnimatePresence mode="wait">
              {activeTab === 0 && (
                <motion.div
                  key="tab0"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full flex items-center justify-center relative"
                >
                  <video
                    src="https://cdn.reducto.ai/landing-page/illustrations/Section%202/Section%202_Parse_v004.webm"
                    autoPlay={true}
                    muted={true}
                    playsInline={true}
                    loop={true}
                    className="w-full h-full object-contain rounded-xl"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur border border-neutral-300 px-3 py-1.5 rounded-lg shadow-sm font-mono text-[10px] text-[#0C1F4A] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00C9A7] animate-ping" />
                    <span>GeM Tender Clause Ingestion</span>
                  </div>
                </motion.div>
              )}

              {activeTab === 1 && (
                <motion.div
                  key="tab1"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full flex items-center justify-center relative"
                >
                  <video
                    src="https://cdn.reducto.ai/landing-page/illustrations/Section%202/Section%202_Edit.webm"
                    autoPlay={true}
                    muted={true}
                    playsInline={true}
                    loop={true}
                    className="w-full h-full object-contain rounded-xl"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur border border-neutral-300 px-3 py-1.5 rounded-lg shadow-sm font-mono text-[10px] text-[#0C1F4A] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00C9A7] animate-ping" />
                    <span>Layout-Aware Bid OCR</span>
                  </div>
                </motion.div>
              )}

              {activeTab === 2 && (
                <motion.div
                  key="tab2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full max-w-md bg-white border border-neutral-200 rounded-xl p-6 shadow-md space-y-3 font-mono text-[10px]"
                >
                  <div className="flex justify-between font-bold border-b pb-2 border-neutral-100 text-[#0C1F4A]">
                    <span>PORTAL VERIFICATION QUERY</span>
                    <span>RESPONSE STATUS</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-neutral-50">
                    <span>GSTN Registry API</span>
                    <span className="text-green-600 font-bold">PASS (1.2s)</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-neutral-50">
                    <span>Udyam MSME Registry API</span>
                    <span className="text-green-600 font-bold">PASS (0.8s)</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-neutral-50">
                    <span>Decentro PAN Validate API</span>
                    <span className="text-green-600 font-bold">PASS (1.1s)</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span>CPPP Blacklist DB Query</span>
                    <span className="text-green-600 font-bold">PASS (1.4s)</span>
                  </div>
                </motion.div>
              )}

              {activeTab === 3 && (
                <motion.div
                  key="tab3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full max-w-sm bg-white border border-neutral-200 rounded-xl p-6 shadow-md space-y-4"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-xs text-[#0C1F4A]">Compliance Summary</span>
                    <span className="px-2 py-0.5 rounded bg-green-100 text-green-700 text-[10px] font-bold">LOW RISK</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-3xl font-mono font-extrabold text-[#0C1F4A]">89 / 100</div>
                    <div className="flex-1 h-2 bg-neutral-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#00C9A7] w-[89%]" />
                    </div>
                  </div>
                  <div className="p-3 rounded bg-amber-50 border border-amber-200 text-[10px] text-amber-700">
                    <strong>Waiver Applied:</strong> Startup exemption applied to turnover requirement. Waived.
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
