"use client";

import { useState } from "react";
import { GraduationCap } from "@phosphor-icons/react/dist/ssr";

type EducationItem = {
  institute: string;
  degree: string;
  duration: string;
  description: string[];
  logo?: string;
};

const educationData: EducationItem[] = [
  {
    institute: "Vidyalankar Institute of Technology, Mumbai",
    degree: "B.Tech in Information Technology",
    duration: "2024 - 2028",
    description: [
      "Learnt Data Structures & Algorithms, Operating Systems, and Computer Networks.",
      "Deep dived into Core Java and OOP principles through practical implementations.",
    ],
    logo: "/vit-logo-dark.png",
  },
];

export default function EducationPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="mt-16 mb-24 space-y-8 px-4 sm:px-0">
      <h2 className="font-instrument text-3xl font-normal tracking-tight text-zinc-900 dark:text-zinc-100">
        education
      </h2>

      <div className="max-w-xl space-y-4">
        {educationData.map((item, index) => {
          const isExpanded = expandedIndex === index;
          const hasLogo = !!item.logo;

          return (
            <div
              key={index}
              className="group cursor-pointer rounded-2xl border border-zinc-100 bg-white p-4 transition-all duration-300 hover:border-pink-200 hover:bg-zinc-50/50 dark:border-zinc-900/50 dark:bg-zinc-900/10 dark:hover:border-pink-800 dark:hover:bg-zinc-900/30"
              onClick={() => toggleExpand(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggleExpand(index);
                }
              }}
              aria-expanded={isExpanded}
            >
           
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start sm:gap-4">
                
                <div className="flex min-w-0 flex-1 items-start gap-3 sm:gap-4">
          
                  <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-zinc-100 bg-zinc-50 dark:border-zinc-800/80 dark:bg-zinc-900 sm:h-12 sm:w-12">
                    {hasLogo ? (
                      <img
                        src={item.logo}
                        alt={`${item.institute} logo`}
                        className="h-full w-full object-contain p-1.5 transition-all duration-300 dark:invert dark:brightness-125 dark:contrast-125"
                      />
                    ) : (
                      <GraduationCap
                        size={20}
                        weight="duotone"
                        className="text-zinc-500 dark:text-zinc-400 sm:scale-110"
                      />
                    )}
                  </div>

             
                  <div className="min-w-0 flex-1 space-y-1">
                    
                    
                    <div className="w-full min-w-0">
                      <h3 className="break-words text-[13px] font-semibold leading-snug text-zinc-900 dark:text-zinc-100 sm:text-[14px]">
                        {item.institute}
                      </h3>
                    </div>

                
                    <p className="text-[12px] font-medium leading-normal text-zinc-500 dark:text-zinc-400 sm:text-[13px]">
                      {item.degree}
                    </p>
                  </div>
                </div>

             
                <div className="mt-1 flex shrink-0 items-center justify-between gap-1.5 pl-[52px] pt-1 sm:mt-0 sm:justify-end sm:gap-2.5 sm:pl-0 sm:pt-0.5">
                  <span className="tabular-nums text-[10px] font-semibold uppercase tracking-wide text-zinc-400 dark:text-zinc-500 sm:text-[11px]">
                    {item.duration}
                  </span>

                  <svg
                    className={`h-3.5 w-3.5 text-zinc-400 transition-transform duration-300 dark:text-zinc-500 sm:h-4 sm:w-4 ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

            
              <div
                className={`grid transition-all duration-300 ease-out ${
                  isExpanded
                    ? "mt-4 grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="ml-[19px] space-y-3 border-l border-zinc-100 pb-2 pl-9 pr-2 dark:border-zinc-800/60 sm:ml-6 sm:pl-[64px]">
                    {item.description.map((point, i) => (
                      <div
                        key={i}
                        className="relative flex items-start gap-2.5"
                      >
                        <span className="absolute -left-[41px] top-[7px] h-1.5 w-1.5 rounded-full bg-zinc-300 ring-4 ring-white dark:bg-zinc-700 dark:ring-zinc-950 sm:-left-[45px]" />

                        <p className="text-[12.5px] leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-[13px]">
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