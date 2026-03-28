"use client";

import React, { useState, useEffect } from "react";

const shlokas = [
  { v: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।", c: "Bhagavad Gita 2.47" },
  { v: "योगस्थ: कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय।", c: "Bhagavad Gita 2.48" },
  { v: "श्रद्धावाँल्लभते ज्ञानं तत्पर: संयतेन्द्रिय:।", c: "Bhagavad Gita 4.39" },
  { v: "तस्मादसक्त: सततं कार्यं कर्म समाचर।", c: "Bhagavad Gita 3.19" }
];

export const Footer = () => {
  const [quote, setQuote] = useState(shlokas[0]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Picks a new verse on every manual refresh
    setQuote(shlokas[Math.floor(Math.random() * shlokas.length)]);
  }, []);

  if (!mounted) return null;

 return (
  <footer className="w-full mt-24 pb-32 px-6 border-t border-zinc-100 dark:border-white/5">
    {/* pb-32 ensures the footer content sits ABOVE your fixed dock on mobile */}
    <div className="max-w-2xl mx-auto pt-16 flex flex-col items-center text-center">
      
      {/* Quote Section */}
      <div className="mb-10 w-full">
        <p className="text-xl sm:text-3xl font-bold italic text-zinc-900 dark:text-zinc-100 leading-tight tracking-tight px-2">
          "{quote.v}"
        </p>
      </div>

      {/* Author/Source */}
      <div className="flex flex-col items-center gap-3 mb-16">
        <div className="h-[1px] w-6 bg-zinc-300 dark:bg-zinc-800" />
        <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500">
          {quote.c}
        </span>
      </div>

      {/* System Footer - Stacked on mobile, row on desktop */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 opacity-40">
        <div className="flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-orange-500" />
          <p className="text-[9px] font-mono uppercase tracking-widest text-zinc-500">
            Mumbai // 19.0760° N
          </p>
        </div>
        <p className="text-[9px] font-mono uppercase tracking-widest text-zinc-500">
          © {new Date().getFullYear()} — OMEE-Y
        </p>
      </div>
    </div>
  </footer>
);
};