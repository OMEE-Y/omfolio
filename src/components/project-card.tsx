import { GithubLogo, Globe } from "@phosphor-icons/react";

interface Skill {
  name: string;
  icon?: string; // Optional: allows the data to exist without breaking the build
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
  <div className="group relative p-4 rounded-3xl border border-zinc-200 dark:border-white/5 bg-zinc-50/50 dark:bg-zinc-900/50 hover:bg-white dark:hover:bg-zinc-900 transition-all duration-500 flex flex-col h-full overflow-hidden hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]">
    
    {image && (
      <div className="relative w-full aspect-video mb-5 overflow-hidden rounded-2xl border border-zinc-200 dark:border-white/10 bg-zinc-100 dark:bg-zinc-800 shrink-0">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
      </div>
    )}

    <div className="flex flex-col flex-grow px-2">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-black dark:text-white font-semibold text-lg tracking-tight">
          {title}
        </h3>
        <div className="flex gap-4">
          {github && (
            <a href={github} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-black dark:hover:text-white transition-all transform hover:-translate-y-1">
              <GithubLogo size={22} weight="regular" />
            </a>
          )}
          {live && (
            <a href={live} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-black dark:hover:text-white transition-all transform hover:-translate-y-1">
              <Globe size={22} weight="regular" />
            </a>
          )}
        </div>
      </div>
      
      <div className="relative flex-grow mb-6">
        <p className="text-[13px] text-zinc-500 dark:text-zinc-400 leading-relaxed transition-all duration-500 line-clamp-2 group-hover:line-clamp-none">
          {description}
        </p>
      </div>

      
    </div>
  </div>
);