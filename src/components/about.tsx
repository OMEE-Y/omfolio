"use client";

import React from "react";

export default function AboutSection() {
  return (
    <div className="mt-14">
      <h1 className="font-instrument text-3xl font-normal text-zinc-900 dark:text-white mb-2 tracking-tighter">
        about
      </h1>

      <div
        className="
          space-y-5
          text-[15.5px] sm:text-[16px]
          leading-7 sm:leading-8
          max-w-2xl
          text-zinc-700 dark:text-zinc-300
          [&_strong]:font-semibold
          [&_strong]:text-zinc-900
          dark:[&_strong]:font-bold
          dark:[&_strong]:text-white
        "
      >
        <p>
          Hey, I'm <strong>Om Yewale</strong> a full stack developer who loves
          building clean, modern websites and apps where design, functionality,
          and even the smallest details matter, with a focus on making products
          that are both practical and visually satisfying.
        </p>

        <p>
          My main tech stack is <strong>Next.js</strong> for frontend with{" "}
          <strong>Tailwind CSS</strong> for styling, for backend{" "}
          <strong>Express.js</strong>, and databases like{" "}
          <strong>MongoDB</strong> or <strong>MySQL</strong>.
        </p>

        <p>
          In my free time, I learn about the <strong>Java</strong> ecosystem for
          mastering <strong>Spring Boot</strong> and read books or tech blogs.
        </p>
      </div>
    </div>
  );
}