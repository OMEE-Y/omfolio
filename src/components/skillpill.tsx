"use client";

import { useState, useMemo, useEffect } from "react";
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
  const [skillIndex, setSkillIndex] = useState(0);
  const [isAnimate, setIsAnimate] = useState(true);

  const age = useMemo(() => calculateAge(BIRTH_DATE), []);
  const skills = useMemo(() => ["Full-stack dev", "Data Scientist", "Java developer"], []);

  // Handle the "popping" interval
  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimate(false); // Pop out
      setTimeout(() => {
        setSkillIndex((prev) => (prev + 1) % skills.length);
        setIsAnimate(true); // Pop in
      }, 300); 
    }, 3000);
    return () => clearInterval(timer);
  }, [skills.length]);

  return (
    <>
      <header className="flex flex-row-reverse justify-end items-center mb-20 gap-8">
        <div className="flex-1">
          <h1 className="font-instrument text-4xl font-normal text-zinc-900 dark:text-white mb-2 tracking-tighter">
            Om Yewale
          </h1>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            
            <div className="flex items-center text-xs font-medium text-zinc-600 dark:text-zinc-300 tracking-wide">
              <span>{age} . engineer .</span>
              <div className="relative ml-1.5 h-4 min-w-[100px] flex items-center overflow-hidden">
                <span
                  className={`absolute left-0 transition-all duration-300 ease-out transform ${
                    isAnimate 
                      ? "opacity-100 translate-y-0 scale-100" 
                      : "opacity-0 translate-y-4 scale-90"
                  }`}
                >
                  {skills[skillIndex]}
                </span>
              </div>
            </div>
          </div>
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
            className="max-w-full max-h-[85vh] rounded-xl shadow-2xl animate-in fade-in zoom-in duration-300"
          />
        </div>
      )}
    </>
  );
}