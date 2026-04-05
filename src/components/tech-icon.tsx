"use client";

import React from "react";

export const TechIcon = () => {
  const techStack = [
   { icon: "devicon-java-plain coloured", name: "Java" },
    { icon: "devicon-javascript-plain colored", name: "JavaScript" },
    { icon: "devicon-typescript-plain colored", name: "TypeScript" },
    { icon: "devicon-react-original colored", name: "React" },
    { icon: "devicon-nodejs-plain colored", name: "Node.js" },
    { icon: "devicon-express-original", name: "Express" }, 
    { icon: "devicon-mongodb-plain colored", name: "MongoDB" },
    { icon: "devicon-mysql-plain colored", name: "MySQL" },
    { icon: "devicon-docker-plain colored", name: "Docker" },
    { icon: "devicon-git-plain colored", name: "Git" },
    { icon: "devicon-linux-plain", name: "Linux" },
  ];

  return (
    <div className="mt-14">
      <h2 className="text-2xl font-bold text-black dark:text-white mb-6 tracking-tight">
        skills
      </h2>

      <div className="flex flex-wrap gap-2.5">
        {techStack.map((tech, i) => (
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
  );
};