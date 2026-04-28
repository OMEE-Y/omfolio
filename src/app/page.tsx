"use client";

import { 
  GithubLogo, 
  LinkedinLogo, 
  TwitterLogo, 
  EnvelopeSimple, 
  House
} from "@phosphor-icons/react";

import { NavItem } from "@/components/nav-item";
import { ProjectCard } from "@/components/project-card";
import { TechIcon } from "@/components/tech-icon";
import EducationPage from "@/components/education";
import Gears from "@/components/gears";
import { Footer } from "@/components/footer";
import Header from "@/components/header";
import AboutSection from "@/components/about";

export default function Portfolio() {
  // Common style for the stripe pattern
  const stripeStyle = {
    backgroundImage: "repeating-linear-gradient(-45deg, transparent, transparent 2px, currentColor 2px, currentColor 3px, transparent 3px, transparent 6px)"
  };

  return (
    <div 
      className="relative min-h-screen bg-white dark:bg-[#050505] text-zinc-700 dark:text-zinc-400 selection:bg-black dark:selection:bg-white selection:text-white dark:selection:text-black font-sans antialiased px-6 py-24 transition-colors duration-500"
      style={{ scrollbarGutter: 'stable' }} // Ensures the right side doesn't shift when scrolling
    >
      
      {/* BACKGROUND LAYER: Stripes */}
      {/* Hidden on mobile, visible on medium screens and up */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Left Stripe */}
        <div 
          className="hidden md:block absolute left-0 top-0 bottom-0 w-[60px] dark:opacity-[0.15] opacity-[0.2] border-r border-dashed dark:border-[#eee] border-[#000]/70" 
          style={stripeStyle}
        />
        {/* Right Stripe */}
        <div 
          className="hidden md:block absolute right-0 top-0 bottom-0 w-[60px] dark:opacity-[0.15] opacity-[0.2] border-l border-dashed dark:border-[#eee] border-[#000]/70" 
          style={stripeStyle}
        />
      </div>

      {/* CONTENT LAYER: Stays on top of stripes */}
      <div className="relative z-10 max-w-2xl mx-auto pb-32">
        <Header />
        
        <AboutSection />

        <section className="py-12">
          <h1 className="font-instrument text-3xl font-normal text-zinc-900 dark:text-white mb-8 tracking-tighter">
            projects
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ProjectCard 
              title="Links Vault" 
              description="A high-performance Second Brain for digital resources like links to store. Built with MongoDB for dynamic scaling and JWT for secure resource management."
              image="/linkvault.png" 
              github="https://github.com/OMEE-Y/secondbrain-link-vault-" 
              live="https://secondbrain-link-vault.vercel.app/"
              skills={[
                { name: "Next.js" },
                { name: "Tailwindcss" },
                { name: "Express" },
                { name: "Node.js" },
                { name: "MongoDB" },
                { name: "JWT" }
              ]}
            />
            <ProjectCard 
              title="Prompt Bazaar" 
              description="Curated marketplace for production-grade AI prompts. Features advanced category filtering and instant copy-to-clipboard utility."
              image="/prompt-bazaar.png"
              github="https://github.com/OMEE-Y/prompt-bazaar"
              live="https://prompt-bazaar.netlify.app"
              skills={[
                { name: "React.js" },
                { name: "Tailwindcss" }
              ]} 
            />
          </div>
        </section>

        <div className="pb-24">
          <TechIcon />
        </div>

        <EducationPage />
        <Gears />

        {/* Floating Nav */}
        <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-white/70 dark:bg-[#0a0a0a]/70 backdrop-blur-md border border-zinc-200/80 dark:border-white/10 px-2 py-1.5 rounded-xl flex items-center gap-1 shadow-lg z-50">
          <NavItem icon={House} href="/" external={false} />
          <div className="w-px h-4 bg-zinc-200/80 dark:bg-white/10 mx-1" />
          <NavItem icon={GithubLogo} href="https://github.com/OMEE-Y" />
          <NavItem icon={LinkedinLogo} href="https://www.linkedin.com/in/om-yewale-744905328" />
          <NavItem icon={TwitterLogo} href="https://x.com/omee_y" />
          <div className="w-px h-4 bg-zinc-200/80 dark:bg-white/10 mx-1" />
          <a 
            href="mailto:yewaleom394@gmail.com" 
            className="p-2 rounded-lg transition-all duration-200 text-zinc-500 hover:text-black dark:hover:text-white hover:bg-zinc-200/60 dark:hover:bg-white/10 hover:scale-105"
          >
            <EnvelopeSimple size={20} weight="duotone" />
          </a>
        </nav>
        
        <Footer />
      </div>
    </div>
  );
}