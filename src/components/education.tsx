import { useState } from 'react';

type EducationItem = {
  institute: string;
  degree: string;
  duration: string;
  description: string[]; // Changed to array for pointers
  lightLogo: string;
  darkLogo: string;
};

const educationData: EducationItem[] = [
  {
    institute: "Vidyalankar Institute of Technology, Mumbai",
    degree: "B.Tech in Information Technology",
    duration: "2024 - 2028",
    description: [
      "learnt DSA, OS, and Computer Networks",
      "deep dived into core java and oop",
      "learnt python and data science "
    ],
    lightLogo: "/vit-logo-dark.png",
    darkLogo: "/vit-logo-light.png",
  }
];

export default function EducationPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="mb-24 space-y-6">
      <h2 className="font-instrument text-3xl font-bold text-black dark:text-white tracking-tighter">
        education
      </h2>

      <div className="space-y-8 max-w-xl">
        {educationData.map((item, index) => (
          <div 
            key={index} 
            className="flex flex-col gap-4 group cursor-pointer"
            onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="relative w-12 h-12 shrink-0 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center overflow-hidden">
                  <img
                    src={item.lightLogo}
                    alt={`${item.institute} logo`}
                    className="absolute inset-0 w-full h-full object-contain transition-opacity duration-200 dark:opacity-0"
                  />
                  <img
                    src={item.darkLogo}
                    alt={`${item.institute} logo`}
                    className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-200 dark:opacity-100"
                  />
                </div>

                <div className="space-y-1">
                  <p className="text-[15px] font-semibold text-zinc-900 dark:text-zinc-100 leading-none">
                    {item.institute}
                  </p>
                  <p className="text-[14px] text-zinc-600 dark:text-zinc-400 font-medium">
                    {item.degree}
                  </p>
                </div>
              </div>

              <div className="text-xs font-medium tabular-nums text-zinc-400 dark:text-zinc-500 whitespace-nowrap pt-1">
                {item.duration}
              </div>
            </div>

           
            <div 
              className={`grid transition-all duration-300 ease-in-out ${
                expandedIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <ul className="text-sm text-zinc-500 dark:text-zinc-500 pl-16 space-y-1 list-disc list-inside">
                  {item.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}