import { GithubLogo, Globe } from "@phosphor-icons/react";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
}

export const ProjectCard = ({ title, description, tags, github, live }: ProjectProps) => (
  <div className="group relative p-6 rounded-2xl border border-zinc-200 dark:border-white/5 bg-zinc-50/50 dark:bg-zinc-900/50 hover:bg-white dark:hover:bg-zinc-800/40 transition-all duration-300 flex flex-col h-full">
    <div className="flex justify-between items-start mb-3">
      <h3 className="text-black dark:text-white font-semibold text-[16px] tracking-tight">{title}</h3>
      <div className="flex gap-3">
        {github && (
          <a href={github} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
            <GithubLogo size={18} weight="duotone" />
          </a>
        )}
        {live && (
          <a href={live} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
            <Globe size={18} weight="duotone" />
          </a>
        )}
      </div>
    </div>
    
    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6 flex-grow">
      {description}
    </p>
    
    <div className="flex flex-wrap gap-1.5 mt-auto">
      {tags.map(tag => (
        <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-zinc-200/50 dark:bg-white/5 text-zinc-600 dark:text-zinc-500 border border-transparent dark:group-hover:border-white/10 transition-colors">
          {tag}
        </span>
      ))}
    </div>
  </div>
);