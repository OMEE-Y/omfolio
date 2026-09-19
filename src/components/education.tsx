import Image from "next/image";

const educationData = [
  {
    institute: "Vidyalankar Institute of Technology, Mumbai",
    degree: "B.Tech in Information Technology",
    duration: "2024 - 2028",
    logo: "/vitlogo.png",
  },
];

export default function EducationPage() {
  return (
    <section className="mt-16 mb-24 max-w-xl space-y-6 px-4 sm:px-0">
      <h2 className="font-instrument text-3xl font-normal tracking-tight text-zinc-900 dark:text-zinc-100">
        education
      </h2>

      <div className="space-y-4">
        {educationData.map((item, index) => (
          <div key={index} className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3 sm:gap-4">
              {item.logo && (
                <Image
                  src={item.logo}
                  alt={item.institute}
                  width={36}
                  height={36}
                  style={{ width: "auto", height: "auto" }}
                  className="h-9 w-9 rounded object-contain shrink-0"
                />
              )}

              <div className="space-y-0.5">
                <h3 className="text-[13px] font-medium leading-snug text-zinc-900 dark:text-zinc-100 sm:text-[14px]">
                  {item.institute}
                </h3>
                <p className="text-[12px] leading-normal text-zinc-500 dark:text-zinc-500 sm:text-[13px]">
                  {item.degree}
                </p>
              </div>
            </div>

            <span className="shrink-0 font-mono text-[11px] text-zinc-400 dark:text-zinc-600">
              {item.duration}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}