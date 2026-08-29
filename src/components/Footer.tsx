import React from "react";
import { Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react";

interface FooterProps {
  onDocsClick?: () => void;
}

export function Footer({ onDocsClick }: FooterProps) {
  return (
    <footer className="relative bg-[#04060E] text-white pt-32 pb-48 overflow-hidden border-t border-neutral-900">
      
      {/* Subtle top border reflection */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00C9A7]/20 to-transparent" />

      {/* Subtle dark teal radial glow in the center of the footer */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[#00C9A7]/5 blur-[120px] pointer-events-none" />

      {/* Grid columns container - Spacious layout */}
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 grid grid-cols-2 md:grid-cols-5 gap-x-16 gap-y-12 relative z-10">
        
        {/* Left Column: Brand and Info */}
        <div className="col-span-2 md:col-span-1">
          <a href="#" className="flex items-center gap-3 mb-8 group">
            <img 
              src="/logo-icon.png" 
              alt="VeriBid Icon" 
              className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
            />
            <span className="font-bold text-lg font-sans tracking-tight text-white">VeriBid</span>
          </a>
          <p className="text-neutral-400 text-xs leading-relaxed mb-6">
            AI-powered GeM compliance verification. Processing bids, matching profiles, and sealing records securely.
          </p>
          
          {/* Social Icons */}
          <div className="flex items-center gap-4 text-neutral-500">
            <a 
              href="https://github.com/Laukikrathod2007" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#00C9A7] transition-colors duration-200"
            >
              <Github className="w-4.5 h-4.5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/laukik-rathod-182337311/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#00C9A7] transition-colors duration-200"
            >
              <Linkedin className="w-4.5 h-4.5" />
            </a>
            <a 
              href="https://x.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#00C9A7] transition-colors duration-200"
            >
              <Twitter className="w-4.5 h-4.5" />
            </a>
          </div>
        </div>

        {/* Column 2: Product */}
        <div>
          <h4 className="font-sans font-bold text-xs uppercase tracking-wider mb-8 text-neutral-300">Product</h4>
          <ul className="space-y-4 text-xs text-neutral-400 font-sans">
            <li>
              {onDocsClick ? (
                <button 
                  onClick={onDocsClick}
                  className="hover:text-white flex items-center gap-1 transition-colors duration-200 text-left w-full cursor-pointer"
                >
                  <span>Docs</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </button>
              ) : (
                <a href="#docs" className="hover:text-white flex items-center gap-1 transition-colors duration-200">
                  <span>Docs</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 hover:opacity-100 transition-opacity" />
                </a>
              )}
            </li>
            <li><a href="#architecture" className="hover:text-white transition-colors duration-200">Architecture</a></li>
            <li><a href="#security" className="hover:text-white transition-colors duration-200">Security Check</a></li>
            <li><a href="#rules" className="hover:text-white transition-colors duration-200">Exemption Rules</a></li>
          </ul>
        </div>

        {/* Column 3: Platform */}
        <div>
          <h4 className="font-sans font-bold text-xs uppercase tracking-wider mb-8 text-neutral-300">Platform</h4>
          <ul className="space-y-4 text-xs text-neutral-400 font-sans">
            <li><a href="#how-it-works" className="hover:text-white transition-colors duration-200">Clause Ingestion</a></li>
            <li><a href="#portal-checks" className="hover:text-white transition-colors duration-200">Verification APIs</a></li>
            <li><a href="#contradiction-detector" className="hover:text-white transition-colors duration-200">Contradictions</a></li>
            <li><a href="#audit-trail" className="hover:text-white transition-colors duration-200">Audit Logs</a></li>
          </ul>
        </div>

        {/* Column 4: Integrations */}
        <div>
          <h4 className="font-sans font-bold text-xs uppercase tracking-wider mb-8 text-neutral-300">Integrations</h4>
          <ul className="space-y-4 text-xs text-neutral-400 font-sans">
            <li><a href="#gstn" className="hover:text-white transition-colors duration-200">Cashfree GSTN</a></li>
            <li><a href="#udyam" className="hover:text-white transition-colors duration-200">Udyam MSME</a></li>
            <li><a href="#pan" className="hover:text-white transition-colors duration-200">Decentro PAN/EPFO</a></li>
            <li><a href="#cppp" className="hover:text-white transition-colors duration-200">CPPP Registry</a></li>
          </ul>
        </div>

        {/* Column 5: Compliance */}
        <div>
          <h4 className="font-sans font-bold text-xs uppercase tracking-wider mb-8 text-neutral-300">Compliance</h4>
          <ul className="space-y-4 text-xs text-neutral-400 font-sans">
            <li><a href="#dpdp" className="hover:text-white transition-colors duration-200">DPDP Act 2023</a></li>
            <li><a href="#meghraj" className="hover:text-white transition-colors duration-200">NIC MeghRaj Cloud</a></li>
            <li><a href="#cag" className="hover:text-white transition-colors duration-200">CAG Auditable</a></li>
            <li><a href="#postgres" className="hover:text-white transition-colors duration-200">Sealed Postgres</a></li>
          </ul>
        </div>

      </div>

      {/* Copyright Bottom Row - Pushed down for spacious layout */}
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 mt-28 border-t border-neutral-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500 font-mono relative z-10">
        <span>© 2026 VeriBid, Inc. Built for SIH 2026 — PS26100 (MoPNG, CPCL)</span>
        <div className="flex items-center gap-6">
          <a href="#privacy" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
          <a href="#terms" className="hover:text-white transition-colors duration-200">Terms of Service</a>
        </div>
      </div>

      {/* Massive Halftone Dotted VeriBid Wordmark at bottom - Spacious spacing, logo colors, larger halftone grid */}
      <div className="absolute bottom-[-4.5vw] left-0 right-0 text-center select-none pointer-events-none z-0">
        <h1 
          className="font-sans font-black uppercase leading-none tracking-tighter"
          style={{ 
            fontSize: "18.5vw",
            backgroundImage: "linear-gradient(90deg, rgba(15, 44, 107, 0.45) 0%, rgba(0, 201, 167, 0.3) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            maskImage: "radial-gradient(circle, black 1.8px, transparent 1.8px)",
            WebkitMaskImage: "radial-gradient(circle, black 1.8px, transparent 1.8px)",
            maskSize: "8px 8px",
            WebkitMaskSize: "8px 8px",
          }}
        >
          veribid
        </h1>
      </div>

    </footer>
  );
}
