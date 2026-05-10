"use client";

import { useState } from 'react';
import { ArrowSquareOut, GraduationCap } from '@phosphor-icons/react';

type EducationItem = {
  institute: string;
  degree: string;
  duration: string;
  description: string[];
  link?: string;
  logo?: string;
};

const educationData: EducationItem[] = [
  {
    institute: "Vidyalankar Institute of Technology, Mumbai",
    degree: "B.Tech in Information Technology",
    duration: "2024 - 2028",
    link: "https://vit.edu.in/",
    description: [
      "Learnt Data Structures & Algorithms, Operating Systems, and Computer Networks.",
      "Deep dived into Core Java and OOP principles through practical implementations.",
    ],
    logo: "/vit-logo-dark.png",
  }
];

export default function EducationPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="mt-16 mb-24 space-y-8 px-4 sm:px-0">
      <h2 className="font-instrument text-3xl font-normal text-zinc-900 dark:text-zinc-100 tracking-tight">
        education
      </h2>
      
      <div className="max-w-xl space-y-4">
        {educationData.map((item, index) => {
          const isExpanded = expandedIndex === index;
          const hasLogo = !!item.logo;
          
          return (
            <div 
              key={index} 
              className="group rounded-2xl border border-zinc-100 dark:border-zinc-900/50 bg-white dark:bg-zinc-900/10 p-4 transition-all duration-300 hover:border-pink-200 dark:hover:border-pink-800 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/30 cursor-pointer"
              onClick={() => toggleExpand(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  toggleExpand(index);
                }
              }}
              aria-expanded={isExpanded}
            >

              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4">
                <div className="flex items-center sm:items-start gap-3 sm:gap-4 min-w-0 flex-1">
             
                  <div className="relative w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800/80 flex items-center justify-center overflow-hidden">
                    {hasLogo ? (
                      <img
                        src={item.logo}
                        alt={`${item.institute} logo`}
                        className="w-full h-full p-1.5 object-contain dark:invert dark:brightness-125 dark:contrast-125 transition-all duration-300"
                      />
                    ) : (
                      <GraduationCap size={20} weight="duotone" className="text-zinc-500 dark:text-zinc-400 sm:scale-110" />
                    )}
                  </div>

                  <div className="space-y-1 min-w-0 flex-1">
               
                    <div className="flex items-center gap-1.5 w-full">
                      {/* Scrollable wrapper strictly for the college name */}
                      <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] flex-1 min-w-0">
                        <h3 className="text-[13px] sm:text-[14px] font-semibold text-zinc-900 dark:text-zinc-100 leading-tight whitespace-nowrap">
                          {item.institute}
                        </h3>
                      </div>
                    
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 shrink-0 p-0.5"
                          aria-label={`Visit ${item.institute} website`}
                        >
                          <ArrowSquareOut size={13} weight="bold" className="sm:scale-110" />
                        </a>
                      )}
                    </div>
                    <p className="text-[12px] sm:text-[13px] text-zinc-500 dark:text-zinc-400 font-medium leading-normal truncate">
                      {item.degree}
                    </p>
                  </div>
                </div>

           
                <div className="flex items-center justify-between sm:justify-end gap-1.5 sm:gap-2.5 pt-1 sm:pt-0.5 shrink-0 pl-13 sm:pl-0">
                  <span className="text-[10px] sm:text-[11px] font-semibold tracking-wide uppercase tabular-nums text-zinc-400 dark:text-zinc-500">
                    {item.duration}
                  </span>
                  <svg 
                    className={`w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-400 dark:text-zinc-500 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

     
              <div 
                className={`grid transition-all duration-300 ease-out ${
                  isExpanded ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="pl-9 sm:pl-[64px] pr-2 pb-2 border-l border-zinc-100 dark:border-zinc-800/60 ml-[19px] sm:ml-6 space-y-3">
                    {item.description.map((point, i) => (
                      <div key={i} className="relative flex items-start gap-2.5">
                        <span className="absolute -left-[41px] sm:-left-[45px] top-[7px] w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700 ring-4 ring-white dark:ring-zinc-950" />
                        <p className="text-[12.5px] sm:text-[13px] text-zinc-600 dark:text-zinc-400 leading-relaxed">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}