"use client";

import React from "react";

export const TechIcon = () => {
  const techStack = [
    { icon: "devicon-java-plain", name: "Java" },
    { icon: "devicon-javascript-plain", name: "JavaScript" },
    { icon: "devicon-typescript-plain", name: "TypeScript" },
    { icon: "devicon-react-original", name: "React" },
    { icon: "devicon-nodejs-plain", name: "Node.js" },
    { icon: "devicon-express-original", name: "Express" },
    { icon: "devicon-mongodb-plain", name: "MongoDB" },
    { icon: "devicon-mysql-plain", name: "MySQL" },
    { icon: "devicon-docker-plain", name: "Docker" },
    { icon: "devicon-git-plain", name: "Git" },
    { icon: "devicon-linux-plain", name: "Linux" },
  ];

  return (
    <div className="mt-8">
  <h2 className="text-2xl font-bold text-black dark:text-white mb-4 tracking-tight">
  skills
</h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 gap-y-6 gap-x-4">
        {techStack.map((tech, i) => (
          <div key={i} className="flex items-center gap-3">
            <i className={`${tech.icon} text-xl text-zinc-700 dark:text-zinc-300`} />
            <span className="text-sm text-zinc-600 dark:text-zinc-400">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};