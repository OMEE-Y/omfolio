"use client";

import { useState } from "react";
import { X } from "@phosphor-icons/react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="flex flex-row-reverse justify-end items-center mb-20 gap-8">
        
        
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-2 tracking-tighter">
            hi, om here
          </h1>

          <p className="text-sm font-mono text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>

            <span>
              it student at{" "}
              <span className="text-zinc-900 dark:text-white font-medium">
                mumbai
              </span>
            </span>
          </p>
        </div>

       
        <div
          onClick={() => setOpen(true)}
          className="w-20 h-20 rounded-xl overflow-hidden border border-zinc-200 dark:border-white/10 bg-zinc-100 dark:bg-zinc-900 cursor-pointer"
        >
          <img
            src="/pfp.png"
            alt="Om Yewale"
            className="w-full h-full object-cover "
          />
        </div>
      </header>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          
        
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
          >
            <X size={22} weight="bold" />
          </button>

         
          <img
            src="/pfp.png"
            alt="Om Yewale"
            className="max-w-[90%] max-h-[85%] rounded-xl shadow-2xl"
          />
        </div>
      )}
    </>
  );
}