import React from "react";
import { motion } from "framer-motion";

interface NavbarProps {
  onDocsClick?: () => void;
}

export function Navbar({ onDocsClick }: NavbarProps) {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-[rgba(12,31,74,0.08)] px-6 lg:px-16 py-4"
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        {/* Logo and Wordmark */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="/logo-icon.png"
            alt="VeriBid Icon"
            className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <span className="text-xl font-bold font-sans tracking-tight text-[#0C1F4A]">
            VeriBid
          </span>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-wider font-semibold text-[#0C1F4A]/60">
          <a href="#how-it-works" className="hover:text-[#0C1F4A] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#00C9A7] hover:after:w-full after:transition-all after:duration-300">
            HOW IT WORKS
          </a>
          <a href="#features" className="hover:text-[#0C1F4A] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#00C9A7] hover:after:w-full after:transition-all after:duration-300">
            FEATURES
          </a>
          <a href="#contradiction-detector" className="hover:text-[#0C1F4A] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#00C9A7] hover:after:w-full after:transition-all after:duration-300">
            CONTRADICTIONS
          </a>
          <a href="#audit-trail" className="hover:text-[#0C1F4A] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#00C9A7] hover:after:w-full after:transition-all after:duration-300">
            AUDIT TRAIL
          </a>
          {onDocsClick && (
            <button 
              onClick={onDocsClick}
              className="hover:text-[#0C1F4A] text-left transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#00C9A7] hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
            >
              DOCS
            </button>
          )}
        </nav>

        {/* Call to Actions */}
        <div className="flex items-center gap-4">
          <a
            href="#compliance-dashboard"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 border border-[#0C1F4A] hover:bg-[#0C1F4A] hover:text-white text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300"
          >
            VIEW DEMO
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-4 py-2 bg-[#00C9A7] hover:bg-[#4DDEC8] text-[#0C1F4A] text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300"
          >
            REQUEST ACCESS →
          </a>
        </div>
      </div>
    </motion.header>
  );
}
