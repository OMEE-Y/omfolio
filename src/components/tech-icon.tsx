"use client";



export const TechIcon = () => {
  const techCategories = [
    {
      category: "Languages",
      items: [
        { icon: "devicon-java-plain", name: "Java" },
        { icon: "devicon-javascript-plain colored", name: "JavaScript" },
        { icon: "devicon-typescript-plain colored", name: "TypeScript" },
      ],
    },
    {
      category: "Web Development",
      items: [
        { icon: "devicon-react-original colored", name: "React" },
        { icon: "devicon-nextjs-plain", name: "Next.js" },
        { icon: "devicon-tailwindcss-plain", name: "Tailwind CSS" },
        { icon: "devicon-nodejs-plain colored", name: "Node.js" },
        { icon: "devicon-express-original", name: "Express" },
      ],
    },
    {
      category: "Database",
      items: [
        { icon: "devicon-mongodb-plain colored", name: "MongoDB" },
        { icon: "devicon-mysql-plain colored", name: "MySQL" },
      ],
    },
    {
      category: "Tools",
      items: [
        { icon: "devicon-docker-plain colored", name: "Docker" },
        { icon: "devicon-git-plain colored", name: "Git" },
      ],
    },
    {
      category: "Coding Ide",
      items: [
        { icon: "devicon-vscode-plain colored", name: "VSCode" },
        { icon: "devicon-intellij-plain", name: "Intellij" },
      ],
    },
    {
      category: "Browser",
      items: [{ icon: "devicon-chrome-plain", name: "Chrome" }],
    },
  ];

  return (
    
    <div className="mt-8 md:mt-14 w-full mx-auto px-4 md:px-0">
     <h1 className="font-instrument text-3xl font-weight:400 text-zinc-900 dark:text-white mb-2 tracking-tighter">
  skills
</h1>

      {techCategories.map((cat, catIdx) => (
        <div key={catIdx} className="mb-8">
          <h3 className="text-sm font-semibold text-neutral-500 dark:text-neutral-400 mb-4 uppercase tracking-wider">
            {cat.category}
          </h3>

         
          <div className="flex flex-wrap gap-2.5 justify-start">
            {cat.items.map((tech, i) => (
              <div
                key={i}
                draggable="false"
                className={`
                  group inline-flex items-center gap-2
                  px-3 py-1.5 text-sm font-medium
                  rounded-lg relative

                  border border-dashed border-black/30 dark:border-white/40
                  bg-white dark:bg-black
                  text-black dark:text-white

                  shadow-sm
                  transition-all duration-200

                  hover:bg-neutral-100 dark:hover:bg-white/10
                  hover:-translate-y-[1px]
                  hover:shadow-md

                  select-none
                  cursor-grab active:cursor-grabbing
                `}
              >
                <i
                  className={`
                    ${tech.icon}
                    text-base
                    opacity-80
                    transition-transform duration-200
                    group-hover:scale-110
                  `}
                />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};