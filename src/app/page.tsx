"use client";

import { useState } from "react";
import {
  GithubLogo,
  LinkedinLogo,
  TwitterLogo,
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

export default function Portfolio() {
 
  const [activeTab, setActiveTab] = useState(
    PROJECT_DATA[0]?.sectionTitle || "",
  );

 
  const activeCategory = PROJECT_DATA.find(
    (category) => category.sectionTitle === activeTab,
  );

  const stripeStyle = {
    backgroundImage:
      "repeating-linear-gradient(-45deg, transparent, transparent 2px, currentColor 2px, currentColor 3px, transparent 3px, transparent 6px)",
  };

  return (
    <div
      className="relative min-h-screen flex flex-col bg-white dark:bg-[#050505] text-zinc-700 dark:text-zinc-400 selection:bg-black dark:selection:bg-white selection:text-white dark:selection:text-black font-sans antialiased transition-colors duration-500"
      style={{ scrollbarGutter: "stable" }}
    >
      
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="hidden md:block absolute left-0 top-0 bottom-0 w-[60px] dark:opacity-[0.15] opacity-[0.2] border-r border-dashed dark:border-[#eee] border-[#000]/70"
          style={stripeStyle}
        />
        <div
          className="hidden md:block absolute right-0 top-0 bottom-0 w-[60px] dark:opacity-[0.15] opacity-[0.2] border-l border-dashed dark:border-[#eee] border-[#000]/70"
          style={stripeStyle}
        />
      </div>

      <main className="relative z-10 flex-1 w-full max-w-2xl mx-auto px-6 pt-24 pb-12">
        <Header />
        <AboutSection />

        <section className="py-12">
          <h1 className="font-instrument text-3xl font-normal text-zinc-900 dark:text-white mb-6 tracking-tighter">
            projects
          </h1>

          <div className="flex flex-wrap gap-2 mb-8">
            {PROJECT_DATA.map((category) => {
              const isActive = activeTab === category.sectionTitle;
              return (
                <button
                  key={category.sectionTitle}
                  onClick={() => setActiveTab(category.sectionTitle)}
                  className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-300 border outline-none ring-0 focus:outline-none focus:ring-0 active:outline-none ${
                    isActive
                      ? "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-950 border-zinc-900 dark:border-zinc-100 shadow-sm"
                      : "bg-zinc-50 dark:bg-zinc-900/50 text-zinc-500 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700"
                  }`}
                >
                  {category.sectionTitle.toLowerCase()}
                </button>
              );
            })}
          </div>

          {activeCategory && activeCategory.projects.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 transition-all duration-500">
              {activeCategory.projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          ) : (
            <div className="group w-full py-12 flex flex-col items-center justify-center rounded-3xl border border-dashed border-zinc-300 dark:border-zinc-800 bg-zinc-50/30 dark:bg-zinc-950/20 transition-colors duration-500 hover:border-solid hover:border-pink-400 dark:hover:border-pink-500">
              <p className="text-sm font-medium text-zinc-600 dark:text-zinc-500 transition-colors duration-500 group-hover:text-pink-500 dark:group-hover:text-pink-400">
                building soon ...
              </p>
            </div>
          )}
        </section>

        <section className="pb-16">
          <TechIcon />
        </section>
        <section className="pb-16">
          <OSSSection />
        </section>

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
        <NavItem icon={TwitterLogo} href="https://x.com/omee_y" />

        <a
          href="mailto:yewaleom394@gmail.com"
          className="p-2 rounded-lg transition-all duration-200 text-zinc-500 hover:text-black dark:hover:text-white hover:bg-zinc-200/60 dark:hover:bg-white/10 hover:scale-105"
        >
          <EnvelopeSimple size={20} weight="duotone" />
        </a>

        <div className="w-px h-4 bg-zinc-200/80 dark:bg-white/10 mx-1" />
        <ThemeToggle />
      </nav>
    </div>
  );
}