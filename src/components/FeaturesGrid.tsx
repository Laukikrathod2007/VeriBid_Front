"use client";

import React from "react";

export function FeaturesGrid() {
  const cards = [
    {
      title: "Layout-Aware Parsing",
      desc: "Extract compliance tables, CA-certified financial values, and signature boxes while preserving absolute structural positions.",
      video: "https://cdn.reducto.ai/landing-page/illustrations/features/Features_Layout%20Extraction_v001.webm",
      icon: "🌐",
    },
    {
      title: "Multi-Format Ingestion",
      desc: "Supports PDF (digital and scanned), docx, xlsx spreadsheet structures, and image scans — processed through a single gateway.",
      video: "https://cdn.reducto.ai/landing-page/illustrations/features/Features_File%20Type%20Support_v001.webm",
      icon: "📄",
    },
    {
      title: "Multilingual Documents",
      desc: "Verifies certificates and filings submitted in English, Hindi, and major regional Indian languages using local translation adapters.",
      video: "https://cdn.reducto.ai/landing-page/illustrations/features/Features_Language%20Support_v001.webm",
      icon: "🔤",
    },
    {
      title: "Local PII Protection",
      desc: "Runs Qwen2.5 7B entirely on-premise on secure servers. Bidder PII is processed locally, complying fully with the DPDP Act 2023.",
      video: "https://cdn.reducto.ai/landing-page/illustrations/features/Features_LLM%20optimized_v001.webm",
      icon: "🔒",
    },
    {
      title: "High-Fidelity OCR",
      desc: "Reads low-resolution scanned documents, seals, and stamps with 85-92% accuracy using local PaddleOCR models.",
      video: "https://cdn.reducto.ai/landing-page/illustrations/features/Features_Image%20support_v001.webm",
      icon: "📷",
    },
    {
      title: "Safety & Integrations",
      desc: "Features built-in ClamAV malware scanning, bridge buttons to official portals, and SQL trigger-protected audit trails.",
      staticCard: true,
      icon: "🛡️",
    },
  ];

  return (
    <section id="features" className="py-28 bg-[#fdfdfc] border-b border-neutral-200">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        
        {/* Header - serif matching Reducto style */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#9177CF] block mb-3">
            :: Features
          </span>
          <h2 
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            className="text-4xl sm:text-5xl font-normal text-[#0C1F4A] leading-tight tracking-tight mb-6"
          >
            The all-in-one compliance processing platform.
          </h2>
          <p className="text-sm sm:text-base text-neutral-500 max-w-2xl mx-auto leading-relaxed">
            VeriBid's wide feature set covers the long tail of GeM verification requirements, out of the box.
          </p>
        </div>

        {/* 3-Column Features Grid with dotted side dividers */}
        <div className="grid md:grid-cols-3 border-t border-b border-dashed border-neutral-300 divide-y md:divide-y-0 md:divide-x divide-dashed divide-neutral-300">
          {cards.map((item, idx) => (
            <div
              key={item.title}
              className="p-8 hover:bg-[#f9f9f8] transition-colors duration-300 flex flex-col justify-between min-h-[380px]"
            >
              {/* Media Visual */}
              <div className="aspect-[4/3] bg-neutral-50 rounded-xl border border-neutral-200 overflow-hidden flex items-center justify-center relative mb-8">
                {item.staticCard ? (
                  /* Static icon card */
                  <div className="flex flex-col items-center justify-center gap-4 text-neutral-400">
                    <span className="text-5xl">{item.icon}</span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#00C9A7]">
                      On-Premise Ready
                    </span>
                  </div>
                ) : (
                  /* WebM video loops */
                  <video
                    src={item.video}
                    autoPlay={true}
                    muted={true}
                    playsInline={true}
                    loop={true}
                    className="w-full h-full object-cover mix-blend-multiply opacity-80"
                  />
                )}
              </div>

              {/* Title & Body */}
              <div>
                <h3 className="font-sans font-bold text-[#0C1F4A] text-base mb-3 flex items-center gap-2">
                  <span className="text-neutral-400 text-sm font-mono">{idx + 1}.</span>
                  <span>{item.title}</span>
                </h3>
                <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
