"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertTriangle, XCircle } from "lucide-react";

interface VerificationCheck {
  label: string;
  status: "PASS" | "REVIEW" | "FAIL" | "PENDING";
  badge: "LIVE API" | "PUBLIC" | "DOC EXTRACT";
}

const vendors = [
  {
    name: "Clean Pass Inc.",
    checks: [
      { label: "GSTN Registration", status: "PASS", badge: "LIVE API" },
      { label: "Udyam/MSME Status", status: "PASS", badge: "LIVE API" },
      { label: "PAN Validity", status: "PASS", badge: "LIVE API" },
      { label: "DigiLocker Auth", status: "PASS", badge: "PUBLIC" },
      { label: "CPPP Debarment", status: "PASS", badge: "PUBLIC" },
      { label: "Turnover (CA Cert)", status: "PASS", badge: "DOC EXTRACT" },
      { label: "OEM Authorization", status: "PASS", badge: "DOC EXTRACT" },
    ] as VerificationCheck[],
    score: 95,
  },
  {
    name: "Apex Supply Co.",
    checks: [
      { label: "GSTN Registration", status: "PASS", badge: "LIVE API" },
      { label: "Udyam/MSME Status", status: "PASS", badge: "LIVE API" },
      { label: "PAN Validity", status: "PASS", badge: "LIVE API" },
      { label: "DigiLocker Auth", status: "PASS", badge: "PUBLIC" },
      { label: "CPPP Debarment", status: "PASS", badge: "PUBLIC" },
      { label: "Turnover (CA Cert)", status: "REVIEW", badge: "DOC EXTRACT" },
      { label: "OEM Authorization", status: "FAIL", badge: "DOC EXTRACT" },
    ] as VerificationCheck[],
    score: 61,
  },
];

export function BidDocumentAnimation() {
  const [vendorIdx, setVendorIdx] = useState(0);
  const [currentCheckIdx, setCurrentCheckIdx] = useState(0);
  const [scoreVal, setScoreVal] = useState(0);

  const activeVendor = vendors[vendorIdx];
  const checksToDisplay = activeVendor.checks.slice(0, currentCheckIdx + 1);

  // Cycle through checking animation step-by-step
  useEffect(() => {
    const checkTimer = setInterval(() => {
      setCurrentCheckIdx((prev) => {
        if (prev < activeVendor.checks.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(checkTimer);
  }, [vendorIdx]);

  // Animate score counter once all checks loaded
  useEffect(() => {
    if (currentCheckIdx === activeVendor.checks.length - 1) {
      const scoreTimer = setInterval(() => {
        setScoreVal((prev) => {
          if (prev < activeVendor.score) {
            return prev + 1;
          }
          return prev;
        });
      }, 15);
      return () => clearInterval(scoreTimer);
    } else {
      setScoreVal(0);
    }
  }, [currentCheckIdx, vendorIdx]);

  // Cycle vendors every 12 seconds
  useEffect(() => {
    const vendorTimer = setInterval(() => {
      setVendorIdx((prev) => (prev + 1) % vendors.length);
      setCurrentCheckIdx(0);
      setScoreVal(0);
    }, 12000);

    return () => clearInterval(vendorTimer);
  }, []);

  return (
    <section className="py-16 bg-[#e8e6e1] border-y border-[rgba(12,31,74,0.1)] relative">
      <div className="max-w-[1440px] mx-auto px-6">
        <span className="font-mono text-xs tracking-wider text-[#0C1F4A]/50 block mb-6">
          / DOCUMENT PROCESSING PIPELINE
        </span>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch relative min-h-[440px]">
          {/* Left Side: Document Conveyor Belt (60% width span) */}
          <div className="lg:col-span-7 bg-[#f3f2ef]/40 rounded-2xl border border-neutral-300 relative overflow-hidden flex items-center p-6 shadow-inner">
            {/* Sliding Document Tape */}
            <motion.div
              className="flex items-center gap-6"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
            >
              {[1, 2].map((loopIdx) => (
                <React.Fragment key={loopIdx}>
                  <div className="w-40 h-56 bg-white border border-neutral-300 rounded-xl p-3 shadow-sm flex flex-col justify-between flex-shrink-0">
                    <div className="h-1 bg-green-500 rounded-t-lg" />
                    <div>
                      <div className="font-mono text-[9px] text-[#0C1F4A]/50 mb-1">DOC TYPE</div>
                      <div className="font-bold text-xs text-[#0C1F4A] truncate">GST Certificate</div>
                      <div className="w-16 h-2 bg-neutral-200 rounded mt-2" />
                      <div className="w-24 h-1.5 bg-neutral-100 rounded mt-1" />
                      <div className="w-20 h-1.5 bg-neutral-100 rounded mt-1" />
                    </div>
                    <div className="w-full h-8 bg-neutral-50 rounded border border-dashed border-neutral-200 mt-2 flex items-center justify-center text-[9px] font-mono text-neutral-400">
                      GSTIN: 27AACCC...
                    </div>
                  </div>

                  <div className="w-40 h-56 bg-white border border-neutral-300 rounded-xl p-3 shadow-sm flex flex-col justify-between flex-shrink-0">
                    <div className="h-1 bg-sky-500 rounded-t-lg" />
                    <div>
                      <div className="font-mono text-[9px] text-[#0C1F4A]/50 mb-1">DOC TYPE</div>
                      <div className="font-bold text-xs text-[#0C1F4A] truncate">Udyam Cert</div>
                      <div className="w-16 h-2 bg-neutral-200 rounded mt-2" />
                      <div className="w-20 h-1.5 bg-neutral-100 rounded mt-1" />
                    </div>
                    <div className="w-full h-8 bg-neutral-50 rounded border border-dashed border-neutral-200 mt-2 flex items-center justify-center text-[9px] font-mono text-neutral-400">
                      RegNo: UDYAM-MH...
                    </div>
                  </div>

                  <div className="w-40 h-56 bg-white border border-neutral-300 rounded-xl p-3 shadow-sm flex flex-col justify-between flex-shrink-0">
                    <div className="h-1 bg-amber-500 rounded-t-lg" />
                    <div>
                      <div className="font-mono text-[9px] text-[#0C1F4A]/50 mb-1">DOC TYPE</div>
                      <div className="font-bold text-xs text-[#0C1F4A] truncate">PAN Card</div>
                      <div className="w-16 h-2 bg-neutral-200 rounded mt-2" />
                    </div>
                    <div className="w-full h-8 bg-neutral-50 rounded border border-dashed border-neutral-200 mt-2 flex items-center justify-center text-[9px] font-mono text-neutral-400">
                      PAN: ABCDE1234F
                    </div>
                  </div>

                  <div className="w-40 h-56 bg-white border border-neutral-300 rounded-xl p-3 shadow-sm flex flex-col justify-between flex-shrink-0">
                    <div className="h-1 bg-purple-500 rounded-t-lg" />
                    <div>
                      <div className="font-mono text-[9px] text-[#0C1F4A]/50 mb-1">DOC TYPE</div>
                      <div className="font-bold text-xs text-[#0C1F4A] truncate">CA Turnover</div>
                      <div className="w-20 h-2 bg-neutral-200 rounded mt-2" />
                      <div className="w-16 h-1.5 bg-neutral-100 rounded mt-1" />
                    </div>
                    <div className="w-full h-8 bg-neutral-50 rounded border border-dashed border-neutral-200 mt-2 flex items-center justify-center text-[9px] font-mono text-neutral-400">
                      Amount: ₹85 Lakh
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </motion.div>

            {/* Central Vertical Scan Line & Badge */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#00C9A7] z-20 flex items-center justify-center -translate-x-1/2">
              <div className="absolute inset-0 bg-[#00C9A7] shadow-[0_0_15px_#00C9A7]" />
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-12 h-12 rounded-full bg-white border-2 border-[#00C9A7] shadow-lg z-30 flex items-center justify-center"
              >
                <img src="/logo-icon.png" alt="VeriBid Shield" className="w-7 h-7 object-contain" />
              </motion.div>
            </div>

            {/* Dotted Scan Overlay Mask (Right of Beam) */}
            <div className="absolute left-1/2 right-0 top-0 bottom-0 pointer-events-none opacity-30 bg-[#00C9A7]/10" />
          </div>

          {/* Right Side: Verification Output Card (36% width span) */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-neutral-300 p-6 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between border-b border-neutral-100 pb-3 mb-4">
                <div>
                  <h4 className="font-bold text-[#0C1F4A] text-sm truncate max-w-[200px]">
                    {activeVendor.name}
                  </h4>
                  <span className="text-[10px] text-neutral-400 font-mono">Parallel Portal Execution</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#00C9A7]/10 text-[#00C9A7] font-mono text-[10px] font-bold uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00C9A7] animate-ping" />
                  <span>Processing</span>
                </div>
              </div>

              {/* Checks Rows */}
              <div className="space-y-2 max-h-[220px] overflow-y-auto">
                <AnimatePresence>
                  {checksToDisplay.map((item, idx) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center justify-between p-2 rounded bg-[#f3f2ef]/40 border border-neutral-200"
                    >
                      <div className="flex items-center gap-2">
                        {item.status === "PASS" && <CheckCircle2 className="w-4 h-4 text-green-600" />}
                        {item.status === "REVIEW" && <AlertTriangle className="w-4 h-4 text-amber-500" />}
                        {item.status === "FAIL" && <XCircle className="w-4 h-4 text-red-500" />}
                        <span className="text-xs font-semibold text-[#0C1F4A]">{item.label}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[8px] font-mono font-bold text-neutral-400 border border-neutral-200 px-1 py-0.5 rounded">
                          {item.badge}
                        </span>
                        <span
                          className={`text-[9px] font-mono font-bold uppercase ${
                            item.status === "PASS"
                              ? "text-green-600"
                              : item.status === "REVIEW"
                              ? "text-amber-500"
                              : "text-red-500"
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* Score & Progress Bar once completed */}
            {currentCheckIdx === activeVendor.checks.length - 1 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 pt-4 border-t border-neutral-100"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-[#0C1F4A]">COMPLIANCE SCORE</span>
                  <span className="text-sm font-mono font-bold text-[#00C9A7]">{scoreVal} / 100</span>
                </div>
                <div className="w-full h-2 bg-neutral-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-[#00C9A7]"
                    initial={{ width: "0%" }}
                    animate={{ width: `${activeVendor.score}%` }}
                    transition={{ duration: 1 }}
                  />
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
