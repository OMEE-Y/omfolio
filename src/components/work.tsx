"use client";

import { useState } from 'react';
import { Briefcase, ArrowSquareOut } from "@phosphor-icons/react";

type WorkItem = {
  company: string;
  role: string;
  duration: string;
  description: string[];
  link?: string;
  logo?: string;
};

const workData: WorkItem[] = [
  {
    company: "SJMSOM, IIT Bombay",
    role: "Finance Intern",
    duration: " Present",
    link: "https://www.som.iitb.ac.in",
    description: [
      "Analyzing financial models and performing quantitative research on market trends to support strategic decision-making.",
      "Developing data-driven spreadsheets and forecasting models to streamline financial planning and resource allocation.",
      "Collaborating with research teams to evaluate investment structures, portfolio risks, and corporate finance metrics."
    ],
    logo: ""
  }
];

export default function WorkPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="mt-16 mb-24 space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="font-instrument text-3xl font-normal text-zinc-900 dark:text-zinc-100 tracking-tight">
          experience
        </h2>
      </div>

      <div className="max-w-xl space-y-4">
        {workData.map((item, index) => {
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
           
              <div className="flex flex-row items-start justify-between gap-3 sm:gap-4">
                <div className="flex items-start gap-3 sm:gap-4 min-w-0">
                  <div className="relative w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800/80 flex items-center justify-center overflow-hidden">
                    {hasLogo ? (
                      <img
                        src={item.logo}
                        alt={`${item.company} logo`}
                        className="w-full h-full p-1.5 object-contain  transition-all duration-300"
                      />
                    ) : (
                      <Briefcase size={20} weight="duotone" className="text-zinc-500 dark:text-zinc-400 sm:scale-110" />
                    )}
                  </div>

           
                  <div className="space-y-1 min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <h3 className="text-[13px] sm:text-[14px] font-semibold text-zinc-900 dark:text-zinc-100 leading-tight truncate">
                        {item.company}
                      </h3>
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors shrink-0"
                          aria-label={`Visit ${item.company} website`}
                        >
                          <ArrowSquareOut size={13} weight="bold" className="sm:scale-110" />
                        </a>
                      )}
                    </div>
                    <p className="text-[12px] sm:text-[13px] text-zinc-500 dark:text-zinc-400 font-medium leading-none">
                      {item.role}
                    </p>
                  </div>
                </div>

                {/* Stacks duration and arrow vertically on tiny screens, horizontally on larger ones */}
                <div className="flex flex-col sm:flex-row items-end sm:items-center gap-1.5 sm:gap-2.5 pt-0.5 shrink-0">
                  <span className="text-[10px] sm:text-[11px] font-semibold tracking-wide uppercase tabular-nums text-zinc-400 dark:text-zinc-500">
                    {item.duration}
                  </span>
                  <svg
                    className={`w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-400 dark:text-zinc-500 transition-transform duration-300 ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
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
                  {/* Left margin adjusts responsively to match the smaller mobile logo position */}
                  <div className="pl-[52px] sm:pl-[64px] pr-2 pb-2 border-l border-zinc-100 dark:border-zinc-800/60 ml-5 sm:ml-6 space-y-3">
                    {item.description.map((point, i) => (
                      <div key={i} className="relative flex items-start gap-2.5">
                        <span className="absolute -left-[37px] sm:-left-[45px] top-[7px] w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700 ring-4 ring-white dark:ring-zinc-950" />
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