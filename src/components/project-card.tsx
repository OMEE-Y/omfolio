import { GithubLogo, Globe } from "@phosphor-icons/react";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  image?: string; // New optional prop
}

export const ProjectCard = ({ title, description, tags, github, live, image }: ProjectProps) => (
  <div className="group relative p-4 rounded-3xl border border-zinc-200 dark:border-white/5 bg-zinc-50/50 dark:bg-zinc-900/50 hover:bg-white dark:hover:bg-zinc-800/40 transition-all duration-500 flex flex-col h-full overflow-hidden">
    
    {/* Project Image Container */}
    {image && (
      <div className="relative w-full aspect-video mb-4 overflow-hidden rounded-2xl border border-zinc-200 dark:border-white/10 bg-zinc-100 dark:bg-zinc-800">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
        />
        {/* Subtle overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    )}

    <div className="flex flex-col flex-grow px-2">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-black dark:text-white font-bold text-[17px] tracking-tight group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <div className="flex gap-3 pt-1">
          {github && (
            <a href={github} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-black dark:hover:text-white transition-all hover:scale-110">
              <GithubLogo size={20} weight="duotone" />
            </a>
          )}
          {live && (
            <a href={live} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-black dark:hover:text-white transition-all hover:scale-110">
              <Globe size={20} weight="duotone" />
            </a>
          )}
        </div>
      </div>
      
      <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6 line-clamp-2 group-hover:line-clamp-none transition-all">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-1.5 mt-auto pb-2">
        {tags.map(tag => (
          <span key={tag} className="text-[10px] font-mono px-2 py-1 rounded-lg bg-zinc-200/50 dark:bg-white/5 text-zinc-600 dark:text-zinc-500 border border-transparent dark:group-hover:border-white/10 transition-all">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);