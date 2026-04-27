import { Laptop, DeviceMobile, Mouse } from "@phosphor-icons/react";

export default function Gears() {
  const setup = [
    {
      name: "Lenovo Ideapad",
      icon: <Laptop size={24} weight="duotone" />,
      
    },
    {
      name: "Vivo Y21G",
    
      icon: <DeviceMobile size={24} weight="duotone" />,
      
    },
    
  ];

return (
  <div className="pb-32">
    <>
      <div className="flex items-center justify-between mb-8">
         <h1 className="font-instrument text-3xl font-weight:400 text-zinc-900 dark:text-white mb-2 tracking-tighter">
  gears
</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {setup.map((item, index) => (
          <div 
            key={index}
            className="group relative p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/20 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300"
          >
            <div className="flex items-start justify-between">
              <div className="p-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-sm">
                {item.icon}
              </div>
            </div>

            <div className="mt-4">
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                {item.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </>
  </div>
);
}