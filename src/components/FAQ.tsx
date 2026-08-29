"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "How does VeriBid handle vendor data privacy and DPDP Act 2023 compliance?",
      answer: "VeriBid runs 100% on-premises on your secure government infrastructure (NIC MeghRaj compatible). All OCR document processing and local AI matching (Qwen2.5 7B via Ollama) happen locally. Bidder PII never leaves your servers, complying fully with the DPDP Act 2023.",
    },
    {
      question: "What happens if a government API portal is down or times out?",
      answer: "VeriBid treats timeouts gracefully. If a portal times out, the check returns UNVERIFIED rather than FAIL. A vendor is never disqualified due to government server downtime. The only exception is the debarment check—if CPPP status is unverified, it remains flagged for manual confirmation before qualification.",
    },
    {
      question: "Can we customize compliance weights and tender criteria?",
      answer: "Yes. Procurement officers can adjust threshold values (like average turnover minimums or years of experience) and compliance weights dynamically using simple natural language commands in our configuration interface.",
    },
    {
      question: "Is VeriBid legally auditable for CAG reviews?",
      answer: "Absolutely. VeriBid maintains an immutable, append-only database log protected by SQL triggers and sealed with SHA256 hashes. A CAG auditor can replay any verification run to view the exact extracted fields, portal logs, contradiction resolutions, and officer comments.",
    },
    {
      question: "How are restricted or non-automated checks handled?",
      answer: "Checks like Income Tax return filings (restricted under IT Act Section 138) and NSIC registration are labeled with explicit badges (DOC_EXTRACT or HUMAN_ASSISTED). VeriBid provides integrated bridge buttons to help officers verify these on official portals in seconds, logging their decisions.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-white border-b border-neutral-200">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Title and CTA button */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <h2 
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              className="text-4xl sm:text-5xl font-normal text-[#0C1F4A] leading-tight tracking-tight mb-8"
            >
              Questions,<br />answered.
            </h2>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-[#00C9A7] hover:bg-[#4DDEC8] text-[#0C1F4A] font-mono text-xs font-bold tracking-wider uppercase transition-all duration-300 rounded"
            >
              Request Demo Access →
            </a>
          </div>

          {/* Right Column: Expanding Accordion List */}
          <div className="lg:col-span-8 divide-y divide-neutral-200 border-t border-neutral-200">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div key={idx} className="py-6 first:pt-4 last:pb-4">
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between text-left group gap-4"
                  >
                    <span className="text-base sm:text-lg font-medium text-[#0C1F4A] group-hover:text-[#00C9A7] transition-colors duration-200">
                      {faq.question}
                    </span>
                    <div className="w-8 h-8 rounded border border-neutral-300 flex items-center justify-center text-neutral-500 bg-neutral-50 flex-shrink-0">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed mt-4 max-w-2xl">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
