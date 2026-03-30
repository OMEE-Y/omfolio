"use client";

import React, { useState, useEffect } from "react";

const shlokas = [
  { v: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।", c: "Bhagavad Gita 2.47" },
  { v: "योगस्थ: कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय।", c: "Bhagavad Gita 2.48" },
  { v: "श्रद्धावाँल्लभते ज्ञानं तत्पर: संयतेन्द्रिय:।", c: "Bhagavad Gita 4.39" },
  { v: "तस्मादसक्त: सततं कार्यं कर्म समाचर।", c: "Bhagavad Gita 3.19" },
  { v: "Do so much work that it would be unreasonable for you to not be successful.", c: "Alex Hormozi" },
  { v: "The only way to do great work is to love what you do.", c: "Steve Jobs" },
  {v:"Move fast and break things. If you are not breaking things, you are not moving fast enough.", c:"Mark Zuckerberg"},
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
 <footer className="w-full mt-24 pb-20 px-6 border-t border-zinc-200 dark:border-white/5 bg-zinc-50 dark:bg-zinc-950/50 backdrop-blur-sm">
    
    <div className="max-w-2xl mx-auto pt-16 flex flex-col items-center text-center">
      
      <div className="mb-10 w-full">
        <p className="text-xl sm:text-3xl font-bold italic text-zinc-900 dark:text-zinc-100 leading-tight tracking-tight px-2">
          "{quote.v}"
        </p>
      </div>

    
      <div className="flex flex-col items-center gap-3 mb-16">
        <div className="h-[1px] w-6 bg-zinc-300 dark:bg-zinc-800" />
        <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500">
          {quote.c}
        </span>
      </div>

     
    <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 opacity-50 px-1 py-2">
  

 <div className="flex items-center gap-3 px-3 py-1.5 rounded-full hover:bg-zinc-50 dark:hover:bg-white/[0.02] transition-colors">
        <span className="relative flex h-2.5 w-2.5">
      
          <span className="absolute inline-flex h-full w-full rounded-full bg-orange-400 dark:bg-orange-500 opacity-60 animate-ping" />
         
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-orange-500 shadow-[0_0_10px_2px_rgba(249,115,22,0.6)] dark:shadow-[0_0_12px_3px_rgba(251,146,60,0.4)]" />
        </span>
    <p className="text-[10px] font-mono tracking-[0.2em] text-zinc-500">
      Mumbai 
    </p>
  </div>


  <p className="text-[10px] font-mono tracking-[0.2em] text-zinc-500">
    © 2024 OMEE-Y
  </p>
</div>
    </div>
  </footer>
);
};