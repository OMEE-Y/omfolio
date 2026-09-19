import { ArrowUpRight, GithubLogo } from "@phosphor-icons/react";

interface Skill {
  name: string;
}

interface ProjectProps {
  index: number;
  title: string;
  description: string;
  skills?: Skill[];
  live?: string;
  github?: string;
}

const actionBtnClass =
  "p-1.5 rounded-md text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors";

export const ProjectCard = ({
  index,
  title,
  description,
  skills,
  live,
  github,
}: ProjectProps) => (
  <div className="flex items-start justify-between py-6">
    <div className="flex items-baseline gap-5 sm:gap-10 min-w-0 pr-4">
      <span className="font-mono text-xs text-zinc-400 dark:text-zinc-600 select-none shrink-0">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="space-y-1.5 min-w-0">
        <h3 className="text-base sm:text-lg font-normal text-zinc-900 dark:text-zinc-100 tracking-tight">
          {title}
        </h3>

        <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-normal">
          {description}
        </p>
{skills && skills.length > 0 && (
  <div className="flex flex-wrap gap-1.5 pt-1.5">
    {skills.map((skill) => (
      <span
        key={skill.name}
        className="rounded border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-900/40 px-1.5 py-0.5 font-mono text-[11px] text-zinc-500 dark:text-zinc-400"
      >
        {skill.name}
      </span>
    ))}
  </div>
)}
      </div>
    </div>

    {(github || live) && (
      <div className="flex items-center gap-1 sm:gap-2 shrink-0">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            aria-label={`Source code for ${title}`}
            className={actionBtnClass}
          >
            <GithubLogo size={18} />
          </a>
        )}

        {live && (
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            aria-label={`Live site for ${title}`}
            className={actionBtnClass}
          >
            <ArrowUpRight size={18} weight="bold" />
          </a>
        )}
      </div>
    )}
  </div>
);