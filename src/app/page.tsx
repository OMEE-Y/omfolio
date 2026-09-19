"use client";

import {
  GithubLogo,
  LinkedinLogo,
  EnvelopeSimple,
  House,
} from "@phosphor-icons/react";

import { NavItem } from "@/components/nav-item";
import { ProjectCard } from "@/components/project-card";
import { TechIcon } from "@/components/tech-icon";
import EducationPage from "@/components/education";
import { Footer } from "@/components/footer";
import Header from "@/components/header";
import AboutSection from "@/components/about";
import OSSSection from "@/components/oss";

import ThemeToggle from "@/components/toggle";

import PROJECT_DATA from "@/data/projects.json";

const STRIPE_STYLE = {
  backgroundImage:
    "repeating-linear-gradient(-45deg, transparent, transparent 2px, currentColor 2px, currentColor 3px, transparent 3px, transparent 6px)",
};

export default function Portfolio() {
  const shippedCount = String(PROJECT_DATA.length).padStart(2, "0");

  return (
    <div
      className="relative min-h-screen flex flex-col bg-white dark:bg-[#050505] text-zinc-700 dark:text-zinc-400 selection:bg-black dark:selection:bg-white selection:text-white dark:selection:text-black font-sans antialiased transition-colors duration-500"
      style={{ scrollbarGutter: "stable" }}
    >
   
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="hidden md:block absolute left-0 inset-y-0 w-[60px] opacity-20 dark:opacity-15 border-r border-dashed border-black/70 dark:border-[#eee]"
          style={STRIPE_STYLE}
        />
        <div
          className="hidden md:block absolute right-0 inset-y-0 w-[60px] opacity-20 dark:opacity-15 border-l border-dashed border-black/70 dark:border-[#eee]"
          style={STRIPE_STYLE}
        />
      </div>

      <main className="relative z-10 flex-1 w-full max-w-2xl mx-auto px-6 pt-24 pb-20 space-y-16">
        <Header />
        <AboutSection />

        
        <section className="space-y-2">
          <div className="flex items-baseline justify-between pb-4 border-b border-zinc-200/80 dark:border-zinc-800/80">
            <h2 className="font-instrument text-3xl font-normal tracking-tight text-zinc-900 dark:text-zinc-100">
        projects
      </h2>
            <span className="font-mono text-[11px] tracking-widest uppercase text-zinc-400 dark:text-zinc-500">
              {shippedCount} shipped
            </span>
          </div>

          <div className="divide-y divide-zinc-200/70 dark:divide-zinc-800/70">
            {PROJECT_DATA.map((project, idx) => (
              <ProjectCard key={project.title} index={idx} {...project} />
            ))}
          </div>
        </section>

        <OSSSection />
      
        <TechIcon />
        <EducationPage />
      </main>

      <Footer />

   
      <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-white/70 dark:bg-[#0a0a0a]/70 backdrop-blur-md border border-zinc-200/80 dark:border-white/10 px-2 py-1.5 rounded-xl flex items-center gap-1 shadow-lg z-50">
        <NavItem icon={House} href="/" external={false} />
        <div className="w-px h-4 bg-zinc-200/80 dark:bg-white/10 mx-1" />
        <NavItem icon={GithubLogo} href="https://github.com/OMEE-Y" />
        <NavItem
          icon={LinkedinLogo}
          href="https://www.linkedin.com/in/omyewalelinks"
        />
        <NavItem
          icon={EnvelopeSimple}
          href="mailto:yewaleom394@gmail.com"
        />
        <div className="w-px h-4 bg-zinc-200/80 dark:bg-white/10 mx-1" />
        <ThemeToggle />
      </nav>
    </div>
  );
}