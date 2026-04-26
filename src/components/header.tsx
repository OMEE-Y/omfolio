"use client";

import { useState, useMemo } from "react";
import { X } from "@phosphor-icons/react";


const BIRTH_DATE = "2006-11-25"; 

const calculateAge = (birthDate: string) => {
  const birth = new Date(birthDate);
  const today = new Date();
  
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  
  return age;
};

export default function Header() {
  const [open, setOpen] = useState(false);
  
  const age = useMemo(() => calculateAge(BIRTH_DATE), []);

  return (
    <>
      <header className="flex flex-row-reverse justify-end items-center mb-20 gap-8">
        <div className="flex-1">
         <h1 className="font-instrument text-4xl font-weight:400 text-zinc-900 dark:text-white mb-2 tracking-tighter">
  Om Yewale
</h1>

         <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50">
  <span className="relative flex h-2 w-2">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
  </span>
  <span className="text-xs font-medium text-zinc-600 dark:text-zinc-300 tracking-wide">
    {age} . engineer . full-stack dev
  </span>
</div>
        </div>

        <div
          onClick={() => setOpen(true)}
          className="w-20 h-20 rounded-xl overflow-hidden border border-zinc-200 dark:border-white/10 bg-zinc-100 dark:bg-zinc-900 cursor-pointer"
        >
          <img
            src="/pfp.png"
            alt="Om Yewale"
            className="w-full h-full object-cover"
          />
        </div>
      </header>

  
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