"use client";

import React from "react";
import { Cloud, Award, Lock } from "lucide-react";

export function EnterpriseReady() {
  const logos = [
    { name: "CPCL", desc: "Chennai Petroleum" },
    { name: "GeM", desc: "Government e-Marketplace" },
    { name: "MoPNG", desc: "Ministry of Petroleum" },
    { name: "NIC", desc: "National Informatics Centre" },
    { name: "CPSE", desc: "Public Sector Enterprise" },
  ];

  return (
    <section id="enterprise" className="relative bg-[#11100F] text-white py-28 overflow-hidden border-b border-neutral-900">
      
      {/* Background dot grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10">
        
        {/* Header Block */}
        <div className="text-center mb-20 max-w-3xl mx-auto flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 mb-6">
            <Lock className="w-5 h-5" />
          </div>
          
          <h2 
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            className="text-4xl sm:text-5xl font-normal leading-tight tracking-tight mb-6"
          >
            Enterprise-ready
          </h2>
          
          <p className="text-sm sm:text-base text-neutral-400 max-w-2xl leading-relaxed mb-8">
            From security compliance to PSU-scale processing, VeriBid is built for the strict demands of government procurement.
          </p>

          <a 
            href="#contact"
            className="px-6 py-3 bg-white text-neutral-950 font-mono text-xs font-bold uppercase tracking-wider hover:bg-neutral-100 transition-colors"
          >
            Contact Procurement Team
          </a>
        </div>

        {/* 3-Column Features & Central Technical Illustration Grid */}
        <div className="grid lg:grid-cols-3 gap-12 items-center mb-24">
          
          {/* Left Column */}
          <div className="space-y-4">
            <div className="w-8 h-8 rounded-lg bg-[#00C9A7]/10 flex items-center justify-center text-[#00C9A7] mb-2">
              <Cloud className="w-4 h-4" />
            </div>
            <h3 className="text-lg font-bold text-white tracking-tight">
              Deploy in your environment
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Run VeriBid entirely within the official NIC MeghRaj Cloud or your secure on-premise infrastructure — ideal for DPDP Act 2023 compliance and strict data residency requirements.
            </p>
          </div>

          {/* Center Column: Technical Grid Diagram */}
          <div className="relative aspect-square max-w-[280px] mx-auto bg-neutral-900/60 rounded-2xl border border-neutral-800 p-6 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-4 rounded-full border border-dashed border-neutral-800 animate-[spin_40s_linear_infinite]" />
            <div className="absolute inset-10 rounded-full border border-dashed border-neutral-850 animate-[spin_20s_linear_infinite_reverse]" />
            
            <div className="grid grid-cols-4 gap-4 relative z-10 w-full h-full p-4">
              {[...Array(16)].map((_, idx) => {
                const isTeal = idx === 5;
                const isPurple = idx === 10;
                const isAmber = idx === 3;
                return (
                  <div 
                    key={idx} 
                    className={`rounded flex items-center justify-center border transition-all duration-500 ${
                      isTeal ? "bg-[#00C9A7]/20 border-[#00C9A7] text-[#00C9A7]" :
                      isPurple ? "bg-[#9177CF]/20 border-[#9177CF] text-[#9177CF]" :
                      isAmber ? "bg-amber-500/20 border-amber-500 text-amber-500" :
                      "bg-neutral-800/40 border-neutral-800 text-neutral-600"
                    }`}
                  >
                    <span className="text-[8px] font-mono font-bold">
                      {isTeal ? "API" : isPurple ? "SSL" : isAmber ? "SQL" : "•"}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <div className="w-8 h-8 rounded-lg bg-[#9177CF]/10 flex items-center justify-center text-[#9177CF] mb-2">
              <Award className="w-4 h-4" />
            </div>
            <h3 className="text-lg font-bold text-white tracking-tight">
              Enterprise support and SLAs
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Tailored deployment assistance, custom validation adapters, and guaranteed technical response SLAs designed to meet public sector tender deadlines.
            </p>
          </div>

        </div>

        {/* Logo Band */}
        <div className="border-t border-neutral-800/60 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
            Designed for secure government procurement
          </span>
          <div className="flex flex-wrap items-center gap-8 lg:gap-12">
            {logos.map((logo) => (
              <div key={logo.name} className="flex flex-col items-start opacity-45 hover:opacity-75 transition-opacity duration-200">
                <span className="text-sm font-bold tracking-widest text-white font-mono uppercase">
                  {logo.name}
                </span>
                <span className="text-[7px] text-neutral-400 font-mono">
                  {logo.desc}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
