"use client";

import React, { useState, useEffect } from "react";

const shlokas = [
  { v: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।", c: "Bhagavad Gita 2.47" },
  { v: "योगस्थ: कुरु कर्माणि सङ्गं त्याक्त्वा धनञ्जय।", c: "Bhagavad Gita 2.48" },
  { v: "श्रद्धावाँल्लभते ज्ञानं तत्पर: संयतेन्द्रिय:।", c: "Bhagavad Gita 4.39" },
  { v: "तस्मादसक्त: सततं कार्यं कर्म समाचर।", c: "Bhagavad Gita 3.19" },
  { v: "Do so much work that it would be unreasonable for you to not be successful.", c: "Alex Hormozi" },
  { v: "The only way to do great work is to love what you do.", c: "Steve Jobs" },
];

export const Footer = () => {
  const [quote, setQuote] = useState(shlokas[0]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setQuote(shlokas[Math.floor(Math.random() * shlokas.length)]);
  }, []);

  if (!mounted) return null;

  return (
    /* Logic: 
       - Default (Light Mode): White bg, black text, light border
       - Dark Mode: Deep black bg (#050505), white text, very faint border
    */
    <footer className="w-full bg-white dark:bg-[#050505] text-black dark:text-white selection:bg-orange-500/30 border-t border-black/[0.05] dark:border-white/[0.03] transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 flex flex-col items-center">
        
        {/* Quote Section */}
        <div className="relative mb-16 md:mb-24 text-center group/quote w-full">
          {/* Subtle glow that flips color based on mode */}
          <div className="absolute inset-0 bg-orange-500/[0.05] dark:bg-white/[0.02] blur-[60px] md:blur-[120px] rounded-full -z-10" />
          
          <p className="text-xl md:text-4xl font-light tracking-tight text-zinc-800 dark:text-zinc-200 leading-relaxed mb-8 md:mb-12 px-2">
            “{quote.v}”
          </p>
          
          <div className="inline-flex items-center justify-center gap-4 md:gap-6 w-full">
            <div className="h-px flex-1 max-w-[40px] bg-black/10 dark:bg-white/10 group-hover/quote:max-w-[60px] transition-all duration-700 ease-in-out" />
            <span className="text-[9px] md:text-[10px] font-mono uppercase tracking-[0.3em] md:tracking-[0.6em] text-zinc-500 group-hover/quote:text-zinc-900 dark:group-hover/quote:text-zinc-300 transition-colors duration-500 whitespace-nowrap">
              {quote.c}
            </span>
            <div className="h-px flex-1 max-w-[40px] bg-black/10 dark:bg-white/10 group-hover/quote:max-w-[60px] transition-all duration-700 ease-in-out" />
          </div>
        </div>

        {/* Bottom Row */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-black/[0.05] dark:border-white/[0.03]">
          
          {/* Mumbai Status */}
          <div className="flex items-center gap-3.5 group/loc cursor-default">
            <div className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-orange-500/40 animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]" />
            </div>
            <p className="text-[9px] font-mono tracking-[0.3em] text-zinc-500 group-hover/loc:text-zinc-900 dark:group-hover/loc:text-zinc-300 transition-colors uppercase">
              Mumbai, India
            </p>
          </div>

          <div className="flex items-center">
            <span className="text-[9px] font-mono tracking-[0.3em] text-zinc-400 dark:text-zinc-600 hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors uppercase">
              © 2026 OM YEWALE
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
};