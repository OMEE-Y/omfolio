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
  
    <footer className="w-full bg-[#050505] text-white selection:bg-white selection:text-black">
      <div className="max-w-4xl mx-auto px-6 py-32 flex flex-col items-center">
        
        <div className="relative mb-24 text-center group/quote">
         
          <div className="absolute inset-0 bg-white/[0.02] blur-[120px] rounded-full -z-10" />
          
          <p className="text-2xl md:text-4xl font-light tracking-tight text-zinc-200 leading-relaxed mb-12">
            “{quote.v}”
          </p>
          
          <div className="inline-flex items-center gap-6">
            <div className="h-px w-6 bg-white/10 group-hover/quote:w-12 transition-all duration-700 ease-in-out" />
            <span className="text-[10px] font-mono uppercase tracking-[0.6em] text-zinc-500 group-hover/quote:text-zinc-300 transition-colors duration-500">
              {quote.c}
            </span>
            <div className="h-px w-6 bg-white/10 group-hover/quote:w-12 transition-all duration-700 ease-in-out" />
          </div>
        </div>

        {/* Bottom Row */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 pt-12 border-t border-white/[0.03]">
          
          {/* Mumbai Status */}
          <div className="flex items-center gap-3.5 group/loc cursor-default">
            <div className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-orange-500/40 animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]" />
            </div>
            <p className="text-[9px] font-mono tracking-[0.4em] text-zinc-500 group-hover/loc:text-zinc-300 transition-colors uppercase">
              Mumbai, India
            </p>
          </div>

          <div className="flex items-center gap-2">
             <span className="text-[9px] font-mono tracking-[0.4em] text-zinc-600 hover:text-zinc-300 transition-colors uppercase">
              © 2026 OM YEWALE
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
};