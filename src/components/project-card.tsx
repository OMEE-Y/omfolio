import { GithubLogo, Globe } from "@phosphor-icons/react";

interface Skill {
  name: string;
  icon: string;
}

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  skills?: Skill[];
  github?: string;
  live?: string;
  image?: string;
}

export const ProjectCard = ({ title, description, tags, skills, github, live, image }: ProjectProps) => (
  <div className="group relative p-4 rounded-3xl border border-zinc-200 dark:border-white/5 bg-zinc-50/50 dark:bg-zinc-900/50 hover:bg-white dark:hover:bg-zinc-900 transition-all duration-500 flex flex-col h-full overflow-hidden hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]">
    
    {/* Project Image Container */}
    {image && (
      <div className="relative w-full aspect-video mb-5 overflow-hidden rounded-2xl border border-zinc-200 dark:border-white/10 bg-zinc-100 dark:bg-zinc-800">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Neutral dark gradient for better text pop on hover */}
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
      
      <p className="text-[13px] text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6 line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
        {description}
      </p>

      {/* Modernized Skill Badges */}
      {skills && skills.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {skills.map((skill) => (
            <div key={skill.name} className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-white/[0.03] border border-zinc-200 dark:border-white/[0.05] hover:bg-white dark:hover:bg-white/10 hover:border-zinc-300 dark:hover:border-white/20 transition-all duration-300">
              <img src={skill.icon} alt={skill.name} className="w-3.5 h-3.5 object-contain grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all" />
              <span className="text-[10px] uppercase tracking-wider font-medium text-zinc-500 dark:text-zinc-400 group-hover:text-black dark:group-hover:text-white">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      )}
      
    
      
    </div>
  </div>
);