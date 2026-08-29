"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle, HelpCircle } from "lucide-react";

export function ContradictionDetector() {
  const [resolved, setResolved] = useState<"CA" | "BANK" | null>(null);

  return (
    <section id="contradiction-detector" className="py-20 bg-[#f3f2ef] border-b border-[rgba(12,31,74,0.08)]">
      <div className="max-w-[1440px] mx-auto px-6">
        <span className="font-mono text-xs tracking-wider text-[#0C1F4A]/50 block mb-3">
          / CONTRADICTION DETECTION
        </span>
        <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-[#0C1F4A] mb-4">
          VeriBid catches what tired eyes miss.
        </h2>
        <p className="text-xs sm:text-sm text-neutral-500 max-w-2xl mb-12">
          When two documents disagree on the same fact, VeriBid shows both side by side — neither value
          is chosen automatically. The officer decides.
        </p>

        {/* Comparison Panel */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-neutral-300 shadow-xl overflow-hidden mb-10">
          <div className="grid md:grid-cols-2 relative divide-y md:divide-y-0 md:divide-x divide-neutral-200">
            
            {/* Left side: CA Certificate */}
            <div className={`p-8 transition-colors ${resolved === "CA" ? "bg-green-50/50" : resolved === "BANK" ? "opacity-40" : "bg-[#f0fdf4]/30"}`}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-green-700">CA Certificate</span>
                <span className="text-[10px] text-neutral-400 font-mono">FY 2024-25</span>
              </div>
              <div className="text-3xl font-mono font-extrabold text-[#0C1F4A] mb-2">
                ₹85,00,000
              </div>
              <div className="text-xs text-neutral-500 mb-6">Average Annual Turnover</div>
              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-[10px] text-neutral-400">
                <span>Confidence: 94%</span>
                <span className="text-green-600 font-mono">Verified ✓</span>
              </div>
            </div>

            {/* Warning Diamond Divider (rendered in absolute center on md screens) */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex flex-col items-center">
              <motion.div
                animate={resolved ? {} : { scale: [1, 1.12, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-10 h-10 rounded-lg bg-amber-500 text-white flex items-center justify-center shadow-lg font-bold text-sm"
              >
                ⚠
              </motion.div>
              <span className="bg-amber-100 border border-amber-300 text-amber-800 text-[9px] font-mono font-bold px-2 py-0.5 rounded mt-2 block shadow-sm">
                55% DIFF
              </span>
            </div>

            {/* Right side: Bank Certificate */}
            <div className={`p-8 transition-colors ${resolved === "BANK" ? "bg-green-50/50" : resolved === "CA" ? "opacity-40" : "bg-[#fffbeb]/30"}`}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-amber-700">Bank Solvency Certificate</span>
                <span className="text-[10px] text-neutral-400 font-mono">FY 2024-25</span>
              </div>
              <div className="text-3xl font-mono font-extrabold text-[#0C1F4A] mb-2">
                ₹38,00,000
              </div>
              <div className="text-xs text-neutral-500 mb-6">Average Annual Turnover</div>
              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-[10px] text-neutral-400">
                <span>Confidence: 91%</span>
                <span className="text-[#0C1F4A] font-mono">Extracted ✓</span>
              </div>
            </div>
          </div>

          {/* Action Row below */}
          <div className="bg-neutral-50 border-t border-neutral-200 px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono">
            <div className="flex items-center gap-2 text-neutral-700">
              <AlertTriangle className="w-4 h-4 text-amber-500" />
              <span>
                {resolved 
                  ? `Resolved: Accepted ${resolved === "CA" ? "CA Certificate" : "Bank Certificate"}`
                  : "REVIEW — Both values exceed the ₹30L threshold. Officer must decide."}
              </span>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setResolved("CA")}
                className={`px-4 py-2 border rounded transition-all ${
                  resolved === "CA" 
                    ? "bg-green-600 text-white border-green-600" 
                    : "border-green-600 hover:bg-green-50 text-green-700"
                }`}
              >
                Accept CA
              </button>
              <button
                onClick={() => setResolved("BANK")}
                className={`px-4 py-2 border rounded transition-all ${
                  resolved === "BANK" 
                    ? "bg-amber-600 text-white border-amber-600" 
                    : "border-amber-500 hover:bg-amber-50 text-amber-700"
                }`}
              >
                Accept Bank
              </button>
              {resolved && (
                <button
                  onClick={() => setResolved(null)}
                  className="px-4 py-2 border border-neutral-300 hover:bg-neutral-100 text-neutral-600 rounded"
                >
                  Reset
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Pre-built contradiction rules grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-5 rounded-xl border border-neutral-300">
            <h4 className="font-bold text-xs text-[#0C1F4A] uppercase tracking-wider mb-2">1. Financial Discrepancies</h4>
            <p className="text-xs text-neutral-500 leading-relaxed">
              Auto-flags any turnover or solvency figures that vary by more than 10% between different certified uploads.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-neutral-300">
            <h4 className="font-bold text-xs text-[#0C1F4A] uppercase tracking-wider mb-2">2. Identity Substitutions</h4>
            <p className="text-xs text-neutral-500 leading-relaxed">
              Verifies if the PAN card matches characters 3-12 of the submitted GSTIN, preventing entity swap attempts.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-neutral-300">
            <h4 className="font-bold text-xs text-[#0C1F4A] uppercase tracking-wider mb-2">3. Expiry Disagreements</h4>
            <p className="text-xs text-neutral-500 leading-relaxed">
              Catches when the OEM validity dates conflict across registration certificates and buyer authorization uploads.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
