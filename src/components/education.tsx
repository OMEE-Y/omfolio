import Image from 'next/image';

type EducationItem = {
  institute: string;
  degree: string;
  duration: string;
  description?: string;
  logo?: string; // Added logo field
};

const educationData: EducationItem[] = [
  {
    institute: "Vidyalankar Institute of Technology, Mumbai",
    degree: "B.Tech in Information Technology",
    duration: "2024 - 2028",
    logo: "/vitlogo.png", 
    
  }
];

export default function EducationPage() {
  return (
    <section className="mb-24 space-y-6">
      <h2 className="text-2xl font-bold text-black dark:text-white tracking-tighter">
        education
      </h2>

      <div className="space-y-6 max-w-xl">
        {educationData.map((item, index) => (
          <div key={index} className="flex items-start justify-between gap-4">
            
            {/* left side */}
            <div className="flex items-start gap-3">
              
              {/* logo container */}
             <div className="relative w-10 h-10 shrink-0 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 overflow-hidden flex items-center justify-center p-1.5">
  {item.logo ? (
    <img
      src={item.logo}
      alt={`${item.institute} logo`}
      className="w-full h-full object-contain" 
    />
  ) : (
    <span className="text-xs font-medium text-zinc-500 uppercase">
      {item.institute.slice(0, 1)}
    </span>
  )}
</div>
              {/* text content */}
              <div className="space-y-1">
                <p className="text-[15px] font-semibold text-black dark:text-white leading-none">
                  {item.institute}
                </p>
                <p className="text-[14px] text-zinc-600 dark:text-zinc-400">
                  {item.degree}
                </p>
                {item.description && (
                  <p className="text-sm text-zinc-500 dark:text-zinc-500 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
            </div>

            {/* right side */}
          <div className="text-xs tabular-nums text-zinc-200 whitespace-nowrap pt-1">
  {item.duration}
</div>

          </div>
        ))}
      </div>
    </section>
  );
}