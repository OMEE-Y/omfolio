"use client";

import { useState, useMemo, useEffect } from "react";
import { X } from "@phosphor-icons/react";

export default function Header() {
  const [open, setOpen] = useState(false);


  

  return (
    <>
      <header className="flex flex-row-reverse justify-end items-center mb-20 gap-8">
        <div className="flex-1">
          <h1 className="font-instrument text-4xl font-normal text-zinc-900 dark:text-white mb-2 tracking-tighter">
            Om Yewale
          </h1>

        </div>

        <div
          onClick={() => setOpen(true)}
          className="w-20 h-20 rounded-xl overflow-hidden border border-zinc-200 dark:border-white/10 bg-zinc-100 dark:bg-zinc-900 cursor-pointer group"
        >
          <img
            src="/pfp.png"
            alt="Om Yewale"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
          >
            <X size={22} weight="bold" />
          </button>
          
          <img
            src="/pfp.png"
            alt="Om Yewale"
            
          />
        </div>
      )}
    </>
  );
}