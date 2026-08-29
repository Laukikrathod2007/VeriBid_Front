"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const tabs = [
  {
    id: "psu",
    label: "PSU Procurement",
    icon: "🏛️",
    accentHex: "#C4A882",
    bgGradient: "linear-gradient(135deg, #F5EFE6 0%, #EDE3D8 100%)",
    tag: "Use cases",
    title: "PSU Procurement",
    body: [
      "VeriBid ingests massive GeM tender PDFs and vendor bid packages — splitting, classifying, and extracting compliance data at scale.",
      "Whether you're verifying ",
      { text: "GST registrations", colored: true },
      " or checking ",
      { text: "CPPP debarment", colored: true },
      ", VeriBid brings clarity and automation to every vendor evaluation.",
    ],
    quote: "VeriBid cut our average bid evaluation time from 3 working days to under 4 hours. Our procurement committee now focuses on decisions, not paperwork.",
    quoteAuthor: "Senior Procurement Officer",
    quoteOrg: "CPCL — MoPNG",
    illustration: "https://cdn.reducto.ai/landing-page/illustrations/use-cases-finance-illustration.svg",
    pills: ["table", "text"],
  },
  {
    id: "msme",
    label: "MSME & Startups",
    icon: "🚀",
    accentHex: "#4A7FB5",
    bgGradient: "linear-gradient(135deg, #E8F0F9 0%, #D8E8F5 100%)",
    tag: "Use cases",
    title: "MSME & Startups",
    body: [
      "Verifies ",
      { text: "Udyam classification", colored: true },
      ", validates DPIIT registration certificates, and auto-applies the correct ",
      { text: "procurement law exemptions", colored: true },
      " for micro, small, and medium enterprises. No manual waiver calculations needed.",
    ],
    quote: "Startups submitting bids no longer need to manually explain why their turnover is low. VeriBid knows the exemption rules and applies them automatically.",
    quoteAuthor: "Deputy Director General",
    quoteOrg: "GeM PMU",
    illustration: "https://cdn.reducto.ai/landing-page/illustrations/use-cases-healthcare-illustration.svg",
    pills: ["figure", "text"],
  },
  {
    id: "contradiction",
    label: "Contradiction Detection",
    icon: "⚡",
    accentHex: "#3A8C6E",
    bgGradient: "linear-gradient(135deg, #E6F4EE 0%, #D8EFE6 100%)",
    tag: "Use cases",
    title: "Contradiction Detection",
    body: [
      "Handles ",
      { text: "CA-certified turnover certificates", colored: true },
      ", bank solvency letters, and financial statements — detecting internal contradictions across documents. Flags when the same figure appears differently in ",
      { text: "two different certificates", colored: true },
      " from the same vendor.",
    ],
    quote: "VeriBid caught a ₹47 Lakh turnover discrepancy that would have let a non-qualifying vendor through. That would have been a CAG audit finding against us.",
    quoteAuthor: "Chief Vigilance Officer",
    quoteOrg: "Public Sector Unit",
    illustration: "https://cdn.reducto.ai/landing-page/illustrations/use-cases-insurance-illustration.svg",
    pills: ["text", "figure"],
  },
  {
    id: "audit",
    label: "Audit Trail",
    icon: "📋",
    accentHex: "#9B6B3A",
    bgGradient: "linear-gradient(135deg, #F5EBE0 0%, #EDE0D4 100%)",
    tag: "Use cases",
    title: "Audit Trail",
    body: [
      "Every verification decision is committed to an ",
      { text: "immutable, append-only log", colored: true },
      " sealed with SHA256 hashes. CAG auditors can replay any session to see exactly which field was extracted, which API was queried, and which officer made the ",
      { text: "final call", colored: true },
      ".",
    ],
    quote: "For the first time, we could show the CAG inspector the exact evidence trail for every bid decision — timestamped, hash-verified, and tamper-proof.",
    quoteAuthor: "Internal Auditor",
    quoteOrg: "Ministry of Petroleum",
    illustration: "https://cdn.reducto.ai/landing-page/illustrations/use-cases-legal-illustration.svg",
    pills: ["text", "figure"],
  },
];

type BodyPart = string | { text: string; colored: boolean };

export function UseCaseTabs() {
  const [activeIdx, setActiveIdx] = useState(0);
  const tab = tabs[activeIdx];

  return (
    <section id="use-cases" className="py-28 bg-[#f3f2ef] border-b border-neutral-200">
      <div className="max-w-[1100px] mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16 max-w-xl mx-auto">
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 flex items-center justify-center gap-2 mb-4">
            🔗 Use cases
          </span>
          <h2
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            className="text-4xl sm:text-5xl font-normal text-[#0C1F4A] tracking-tight leading-tight mb-4"
          >
            Powering the best GeM procurement teams.
          </h2>
          <p className="text-sm text-neutral-500 leading-relaxed">
            Trusted across PSU procurement, MSME onboarding, contradiction review,
            and CAG-ready audit trails.
          </p>
        </div>

        {/* ── Underline Tab Row — matching Reducto exactly ── */}
        <div className="flex items-center gap-1 border-b border-neutral-300 mb-0 overflow-x-auto scrollbar-none">
          {tabs.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => setActiveIdx(idx)}
              className={`relative flex items-center gap-2 px-5 py-3 text-xs font-medium transition-all whitespace-nowrap shrink-0 ${
                activeIdx === idx
                  ? "text-[#0C1F4A] font-semibold"
                  : "text-neutral-400 hover:text-neutral-600"
              }`}
            >
              <span>{t.icon}</span>
              <span>{t.label}</span>
              {activeIdx === idx && (
                <motion.div
                  layoutId="tab-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5"
                  style={{ backgroundColor: t.accentHex }}
                  transition={{ type: "spring", stiffness: 500, damping: 35 }}
                />
              )}
            </button>
          ))}
          <a
            href="#contact"
            className="ml-auto shrink-0 flex items-center gap-1.5 px-4 py-2.5 mb-[1px] text-xs font-bold bg-neutral-900 text-white hover:bg-neutral-700 transition-colors rounded-sm"
          >
            <span className="opacity-60 text-[8px]">⠿</span>
            <span>Try your own</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>

        {/* ── Main Panel ── */}
        <div className="border-x border-b border-neutral-200 bg-white shadow-sm overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.22, ease: "easeInOut" }}
              className="grid md:grid-cols-2 min-h-[460px]"
            >
              {/* LEFT: Description + Quote */}
              <div className="flex flex-col justify-between p-10 md:p-12 border-r border-neutral-100">
                <div>
                  <span
                    className="text-[10px] font-mono font-bold uppercase tracking-widest mb-4 block"
                    style={{ color: tab.accentHex }}
                  >
                    {tab.tag}
                  </span>
                  <h3
                    style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                    className="text-3xl font-normal text-[#0C1F4A] mb-5 leading-snug"
                  >
                    {tab.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-7">
                    {(tab.body as BodyPart[]).map((part, i) =>
                      typeof part === "string" ? (
                        <span key={i}>{part}</span>
                      ) : (
                        <span
                          key={i}
                          className="font-medium"
                          style={{ color: tab.accentHex }}
                        >
                          {part.text}
                        </span>
                      )
                    )}
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0C1F4A] hover:bg-[#071230] text-white text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    Get started <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Customer Quote */}
                <div className="mt-10 pt-8 border-t border-neutral-100">
                  <div className="flex gap-0.5 mb-3">
                    <span className="text-xl leading-none font-serif" style={{ color: tab.accentHex }}>❝</span>
                    <span className="text-xl leading-none font-serif" style={{ color: tab.accentHex }}>❝</span>
                  </div>
                  <p className="text-sm font-medium text-[#0C1F4A] leading-relaxed mb-4 italic">
                    {tab.quote}
                  </p>
                  <div className="flex items-center gap-3 text-[10px] font-mono">
                    <span className="text-neutral-400">{tab.quoteAuthor}</span>
                    <span className="text-neutral-200">|</span>
                    <span className="font-bold tracking-widest text-neutral-600 uppercase">{tab.quoteOrg}</span>
                  </div>
                </div>
              </div>

              {/* RIGHT: Illustration */}
              <div
                className="relative flex flex-col items-center justify-center p-10 overflow-hidden"
                style={{ background: tab.bgGradient }}
              >
                {/* Classification pills */}
                <div className="absolute top-5 left-5 flex gap-2 z-10">
                  {tab.pills.map((pill, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-[9px] font-bold font-mono uppercase text-white flex items-center gap-1 shadow"
                      style={{ backgroundColor: i === 0 ? "#555" : tab.accentHex }}
                    >
                      <span className="opacity-60 text-[8px]">⠿</span>
                      {pill}
                    </span>
                  ))}
                </div>

                {/* SVG illustration */}
                <img
                  src={tab.illustration}
                  alt={`${tab.title} preview`}
                  className="w-full max-w-[340px] object-contain drop-shadow-xl rounded"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
