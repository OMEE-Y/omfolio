"use client";

import { 
  GithubLogo, 
  LinkedinLogo, 
  TwitterLogo, 
  EnvelopeSimple, 
  Moon, 
  Sun, 
  House
} from "@phosphor-icons/react";

import { NavItem } from "@/components/nav-item";
import { ProjectCard } from "@/components/project-card";
import { TechIcon } from "@/components/tech-icon";



export default function Portfolio() {
  

  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] text-zinc-600 dark:text-zinc-400 selection:bg-black dark:selection:bg-white selection:text-white dark:selection:text-black font-sans antialiased px-6 py-24 transition-colors duration-500">
      <div className="max-w-2xl mx-auto">
        
        {/* Header */}
        <header className="flex justify-between items-center mb-24">
          <div>
            <h1 className="text-4xl font-bold text-black dark:text-white mb-2 tracking-tighter">
              hi, om here
            </h1>
            <p className="text-sm font-mono text-zinc-400 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              engineering student @ mumbai
            </p>
             
          </div>
          
          <div className="relative group shrink-0">
            <div className="absolute -inset-1 bg-gradient-to-tr from-zinc-200 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative w-20 h-20 rounded-full overflow-hidden border border-zinc-200 dark:border-white/10 bg-zinc-100 dark:bg-zinc-900 grayscale hover:grayscale-0 transition-all duration-700 ease-out">
              <img 
                src="https://github.com/OMEE-Y.png" 
                alt="Om Yewale"
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
              />
            </div>
          </div>
        </header>

        {/* About */}
        <section className="mb-24 space-y-4">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-2 tracking-tighter"> about</h2>
          <div className="space-y-4 text-[16px] leading-relaxed max-w-xl">
            <p>tldr; learning by building and breaking things on the web.</p>
            <p>I focus on full stack systems and the devops landscape. Currently deep-diving into Java DSA while trying to build software that feels agentic and purposeful.</p>
          </div>
        </section>

       
        <section className="mb-24">
  
  <h2 className="text-2xl font-bold text-black dark:text-white mb-4 tracking-tight">
    projects
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    <ProjectCard 
      title="Prompt Bazaar" 
      description="A curated marketplace for production-grade AI prompts. Features advanced filtering and copy-to-clipboard functionality."
      tags={["Next.js", "Tailwind"]}
      github="https://github.com/OMEE-Y"
      live="https://prompt-bazaar.netlify.app/"
    />
  </div>

</section>

      <div className="pb-24">
  <TechIcon />
</div>

        {/* Dock */}
        <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-xl border border-zinc-200 dark:border-white/10 p-2 rounded-2xl flex items-center gap-1 shadow-2xl z-50">
          <NavItem icon={House} href="/" external={false} />
          <div className="w-[1px] h-4 bg-zinc-200 dark:bg-white/10 mx-1" />
          <NavItem icon={GithubLogo} href="https://github.com/OMEE-Y" />
          <NavItem icon={LinkedinLogo} href="https://www.linkedin.com/in/om-yewale-744905328" />
          <NavItem icon={TwitterLogo} href="https://x.com/omee_y" />
          <div className="w-[1px] h-4 bg-zinc-200 dark:bg-white/10 mx-1" />
          
          <a href="mailto:yewaleom394@gmail.com" className="p-2.5 hover:bg-zinc-200 dark:hover:bg-white/10 rounded-xl transition-all text-zinc-500 hover:text-black dark:hover:text-white">
            <EnvelopeSimple size={20} weight="duotone" />
          </a>

         
        </nav>

      </div>
    </div>
  );
}