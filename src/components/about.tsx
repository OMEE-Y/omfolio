"use client";

import React from "react";


export default function AboutSection() {
  return (
    <div className="mt-14">
      <h2 className="font-instrument text-3xl font-bold text-zinc-900 dark:text-white mb-3 tracking-tight">
        about
      </h2>
      <div className="space-y-5 text-[15.5px] sm:text-[16px] leading-7 sm:leading-8 max-w-2xl text-zinc-700 dark:text-zinc-300">
  <p>
    Hey, I'm Om Yewale, a full stack developer who loves building clean, modern
    websites and apps where design, functionality, and even the smallest
    details matter.
  </p>

  <p>
    Tech stack isn't my concern, I'm flexible with whatever the project
    needs, though I prefer modern frameworks and tools.
  </p>

  <p>
    My main tech stack is <strong>Next.js</strong> with <strong>Tailwind CSS</strong> for styling,
   For  backend  <strong>Express.js</strong>, and databases like <strong>MongoDB</strong> or <strong>MySQL</strong>.
  </p>

  <p>
          In my free time, I learn <strong>Python</strong> and read some books          or tech blogs
        </p>
</div>
    </div>
  );
}