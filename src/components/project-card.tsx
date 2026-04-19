import { GithubLogo, Globe } from "@phosphor-icons/react";

interface Skill {
  name: string;
  icon?: string; 
}

interface ProjectProps {
  title: string;
  description: string;
  skills?: Skill[];
  github?: string;
  live?: string;
  image?: string;
}

export const ProjectCard = ({ title, description, skills, github, live, image }: ProjectProps) => (
  <div className="group relative flex flex-col h-full overflow-hidden rounded-3xl border border-dashed border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 transition-all duration-500 hover:border-solid hover:border-zinc-400 dark:hover:border-zinc-500 shadow-sm hover:shadow-lg dark:shadow-none">
    
    {image && (
      <div className="relative w-full aspect-video overflow-hidden shrink-0 border-b border-dashed border-zinc-200 dark:border-zinc-700 group-hover:border-zinc-400 dark:group-hover:border-zinc-500 transition-colors duration-500">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/5" />
      </div>
    )}

    <div className="flex flex-col flex-grow p-5 gap-3">
      <div className="flex justify-between items-start">
        <h3 className="text-zinc-900 dark:text-zinc-100 font-medium text-lg leading-tight">
          {title}
        </h3>
        <div className="flex gap-2">
          {github && (
            <a href={github} target="_blank" rel="noreferrer" className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
              <GithubLogo size={20} weight="regular" />
            </a>
          )}
          {live && (
            <a href={live} target="_blank" rel="noreferrer" className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
              <Globe size={20} weight="regular" />
            </a>
          )}
        </div>
      </div>
      
      <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed flex-grow">
        {description}
      </p>

      {skills && skills.length > 0 && (
  <div className="flex flex-wrap gap-2 mt-2">
    {skills.map((skill) => (
      <span 
        key={skill.name} 
        className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700"
      >
        {skill.name}
      </span>
    ))}
  </div>
)}
    </div>
  </div>
);