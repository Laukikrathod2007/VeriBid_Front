"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Two batches of styled org "logos" that swap smoothly
const BATCHES = [
  [
    { name: "CPCL", full: "Chennai Petroleum" },
    { name: "GeM", full: "Govt. e-Marketplace" },
    { name: "ONGC", full: "Oil & Gas Corp" },
    { name: "IOCL", full: "Indian Oil Corp" },
  ],
  [
    { name: "MoPNG", full: "Ministry of Petroleum" },
    { name: "BPCL", full: "Bharat Petroleum" },
    { name: "NIC", full: "Informatics Centre" },
    { name: "HPCL", full: "Hindustan Petroleum" },
  ],
];

export function TrustBand() {
  const [batchIdx, setBatchIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBatchIdx((prev) => (prev + 1) % BATCHES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentBatch = BATCHES[batchIdx];

  return (
    <section className="py-14 bg-[#F5F4F1] border-b border-neutral-200/60">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-16">

        {/* Static headline — same layout as Reducto */}
        <p className="text-center text-sm sm:text-base text-neutral-500 mb-10 tracking-tight">
          Helping everyone from small vendors to{" "}
          <span className="font-semibold text-[#00C9A7]">Major PSUs</span>{" "}
          evaluate GeM tender bid compliance.
        </p>

        {/* Logo batch container — fixed height to prevent layout shift */}
        <div className="relative h-16 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={batchIdx}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute inset-0 flex items-center justify-center gap-12 md:gap-20 lg:gap-28"
            >
              {currentBatch.map((org) => (
                <div key={org.name} className="flex flex-col items-center group cursor-default select-none">
                  {/* Large bold name — styled to resemble a real brand wordmark */}
                  <span className="text-[22px] font-black tracking-tight text-neutral-700 leading-none group-hover:text-neutral-950 transition-colors duration-200">
                    {org.name}
                  </span>
                  <span className="text-[9px] font-mono tracking-widest text-neutral-400 mt-0.5 uppercase">
                    {org.full}
                  </span>
                </div>
              ))}

              {/* + many more pill */}
              <span className="text-xs text-neutral-400 font-sans whitespace-nowrap">+ many more</span>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
