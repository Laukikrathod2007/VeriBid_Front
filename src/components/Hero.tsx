import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Award, Clock, Database } from "lucide-react";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 } as any,
    },
  };

  const words = ["From", "45", "minutes", "to", "90", "seconds."];

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-dot-grid border-b border-[rgba(12,31,74,0.08)]">
      {/* Corner crosshairs matching EigenPal exactly */}
      <div className="absolute top-24 left-6 text-[#0C1F4A]/30 font-mono text-xs select-none pointer-events-none">+</div>
      <div className="absolute top-24 right-6 text-[#0C1F4A]/30 font-mono text-xs select-none pointer-events-none">+</div>
      <div className="absolute bottom-6 left-6 text-[#0C1F4A]/30 font-mono text-xs select-none pointer-events-none">+</div>
      <div className="absolute bottom-6 right-6 text-[#0C1F4A]/30 font-mono text-xs select-none pointer-events-none">+</div>

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          {/* Top Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#0C1F4A]/25 bg-white/80 shadow-sm mb-8 text-[10px] font-mono uppercase tracking-wider text-[#0C1F4A]"
          >
            <span className="w-2 h-2 rounded-full bg-[#00C9A7] animate-pulse" />
            <span>SIH 2026 — PS26100 | CPCL, Ministry of Petroleum & Natural Gas</span>
          </motion.div>

          {/* Staggered Word Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-[#0C1F4A] leading-none mb-6"
          >
            {words.map((word, idx) => (
              <span key={idx} className="inline-block mr-3">
                {word === "90" || word === "seconds." ? (
                  <span className="text-[#00C9A7] font-semibold">{word}</span>
                ) : (
                  word
                )}
              </span>
            ))}
            <br />
            <span className="text-xl sm:text-2xl font-mono uppercase tracking-widest text-[#0C1F4A]/60 block mt-4">
              PER VENDOR COMPLIANCE VERIFICATION
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-[#0C1F4A]/70 max-w-2xl leading-relaxed mb-10"
          >
            GeM tender bid compliance verified automatically. 13 government portal checks.
            One dashboard. Procurement officers only review what genuinely needs human judgment.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <a
              href="#compliance-dashboard"
              className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#00C9A7] hover:bg-[#4DDEC8] text-[#0C1F4A] font-mono uppercase text-sm tracking-wider font-semibold rounded shadow-md transition-all group"
            >
              <span>START FREE DEMO</span>
              <span className="w-7 h-7 bg-[#0C1F4A] rounded flex items-center justify-center text-white transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="w-4 h-4 text-[#00C9A7]" />
              </span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3.5 border border-[#0C1F4A] hover:bg-[#0C1F4A]/5 text-[#0C1F4A] font-mono uppercase text-sm tracking-wider font-semibold rounded transition-all"
            >
              BOOK A DEMO
            </a>
          </motion.div>

          {/* Quick Stat Pills */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl border-t border-[#0C1F4A]/10 pt-10"
          >
            <div className="flex flex-col items-center p-4 bg-white border border-[#0C1F4A]/8 rounded-xl shadow-sm">
              <Clock className="w-5 h-5 text-[#00C9A7] mb-2" />
              <span className="font-mono text-sm font-bold text-[#0C1F4A]">&lt; 90s Per Vendor</span>
              <span className="text-[10px] text-[#0C1F4A]/50">Verification Speed</span>
            </div>

            <div className="flex flex-col items-center p-4 bg-white border border-[#0C1F4A]/8 rounded-xl shadow-sm">
              <Shield className="w-5 h-5 text-[#00C9A7] mb-2" />
              <span className="font-mono text-sm font-bold text-[#0C1F4A]">13 Portal Checks</span>
              <span className="text-[10px] text-[#0C1F4A]/50">Direct & Live APIs</span>
            </div>

            <div className="flex flex-col items-center p-4 bg-white border border-[#0C1F4A]/8 rounded-xl shadow-sm">
              <Award className="w-5 h-5 text-[#00C9A7] mb-2" />
              <span className="font-mono text-sm font-bold text-[#0C1F4A]">80%+ Effort Saved</span>
              <span className="text-[10px] text-[#0C1F4A]/50">Compared to Manual</span>
            </div>

            <div className="flex flex-col items-center p-4 bg-white border border-[#0C1F4A]/8 rounded-xl shadow-sm">
              <Database className="w-5 h-5 text-[#00C9A7] mb-2" />
              <span className="font-mono text-sm font-bold text-[#0C1F4A]">100% Audit Trail</span>
              <span className="text-[10px] text-[#0C1F4A]/50">Append-Only Postgres</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
