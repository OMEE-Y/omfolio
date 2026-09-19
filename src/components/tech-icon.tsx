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
      category: "Frontend",
      items: [
        { icon: "devicon-react-original colored", name: "React" },
        { icon: "devicon-nextjs-plain", name: "Next.js" },
        { icon: "devicon-tailwindcss-plain colored", name: "Tailwind CSS" },
      ],
    },
    {
      category: "Backend",
      items: [
        { icon: "devicon-spring-original colored", name: "Spring Boot" },
        { icon: "devicon-nodejs-plain colored", name: "Node.js" },
        { icon: "devicon-express-original", name: "Express" },
      ],
    },
    {
      category: "Database & ORM",
      items: [
        { icon: "devicon-mongodb-plain colored", name: "MongoDB" },
        { icon: "devicon-mysql-plain colored", name: "MySQL" },
        { icon: "devicon-prisma-original", name: "Prisma" },
      ],
    },
    {
      category: "Tools & source control",
      items: [
        { icon: "devicon-git-plain colored", name: "Git" },
        { icon: "devicon-github-original", name: "GitHub" },
        { icon: "devicon-docker-plain colored", name: "Docker" },
      ],
    },
    {
      category: "Deployment",
      items: [
        { icon: "devicon-vercel-original", name: "Vercel" },
        { icon: "devicon-netlify-plain colored", name: "Netlify" },
      ],
    },
    {
      category: "Editors & browser",
      items: [
        { icon: "devicon-vscode-plain colored", name: "VSCode" },
        { icon: "devicon-intellij-plain", name: "IntelliJ" },
        { icon: "devicon-chrome-plain", name: "Chrome" },
      ],
    },
  ];

  return (
    <div className="mt-8 md:mt-14 w-full mx-auto px-4 md:px-0">
      <h1 className="font-instrument text-3xl font-normal tracking-tight text-zinc-900 dark:text-zinc-100 mb-6">
        skills
      </h1>

      <div className="divide-y divide-zinc-100 dark:divide-zinc-800/80 border-t border-b border-zinc-100 dark:border-zinc-800/80">
        {techCategories.map((cat, catIdx) => (
          <div
            key={catIdx}
            className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 py-4"
          >
            <span className="text-sm text-zinc-400 dark:text-zinc-600 sm:w-40 shrink-0">
              {cat.category}
            </span>

            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {cat.items.map((tech, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 text-sm text-zinc-700 dark:text-zinc-300"
                >
                  <i className={`${tech.icon} text-[15px] opacity-80`} />
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};