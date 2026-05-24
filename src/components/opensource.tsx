"use client";

import React, { useEffect, useState } from "react";

interface PullRequest {
  url: string;
  repository: string;
  ownerAvatar: string;
  owner: string;
}

export default function OpenSource() {
  const [prs, setPrs] = useState<PullRequest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const fetchPRs = async () => {
      try {
        const res = await fetch(
          "https://api.github.com/search/issues?q=author:OMEE-Y+is:pr+is:merged&sort=updated&order=desc",
          {
            headers: {
              Accept: "application/vnd.github+json",
            },
            cache: "no-store",
          }
        );

        if (!res.ok) {
          throw new Error("Failed to fetch PRs");
        }

        const data = await res.json();

        const formatted: PullRequest[] = (data.items ?? [])
          .slice(0, 6)
          .map((pr: any) => {
            const repoPath =
              pr.repository_url?.split("/repos/")[1] ?? "";

            const owner = repoPath.split("/")[0] ?? "";

            return {
              url: `https://github.com/${repoPath}`,
              repository: repoPath,
              ownerAvatar: `https://github.com/${owner}.png`,
              owner,
            };
          });

        if (mounted) {
          setPrs(formatted);
        }
      } catch (error) {
        console.error(error);

        if (mounted) {
          setPrs([]);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    fetchPRs();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section className="min-h-0 pb-24">
      <div className="flex min-h-0 flex-col gap-y-5">
        {/* heading */}
        <div>
           <h1 className="font-instrument text-3xl font-weight:400 text-zinc-900 dark:text-white mb-2 tracking-tighter">
  open source
</h1>
        </div>

        {/* content */}
        <div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            {loading
              ? [...Array(6)].map((_, i) => (
                  <React.Fragment key={i}>
                    <div className="group relative flex flex-1 flex-col gap-2 overflow-hidden rounded-xl px-4 py-5">
                      <div className="relative z-10 flex flex-col items-center gap-3">
                        <div className="h-14 w-14 animate-pulse rounded-full bg-zinc-100 dark:bg-zinc-900" />

                        <div className="h-3 w-16 animate-pulse rounded bg-zinc-100 dark:bg-zinc-900" />
                      </div>
                    </div>

                    {i !== 5 && (
                      <>
                        {/* desktop separator */}
                        <div className="hidden md:block h-14 w-px bg-gradient-to-b from-transparent via-zinc-200 to-transparent dark:via-zinc-800" />

                        {/* mobile separator */}
                        <div className="block md:hidden h-px w-full bg-gradient-to-r from-transparent via-zinc-200 to-transparent dark:via-zinc-800" />
                      </>
                    )}
                  </React.Fragment>
                ))
              : prs.map((pr, index) => {
                  const orgName = pr.repository.split("/")[0];

                  const label = orgName
                    .replace(/-/g, " ")
                    .replace(/\b\w/g, (c) => c.toUpperCase());

                  return (
                    <React.Fragment key={pr.repository}>
                      {/* item */}
                      <div className="group relative flex flex-1 flex-col gap-2 overflow-hidden rounded-xl px-4 py-5 transition-all duration-300 hover:bg-zinc-50 dark:hover:bg-zinc-900/50">
                        {/* subtle hover glow */}
                        <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent dark:from-white/[0.03]" />
                        </div>

                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={pr.url}
                          className="relative z-10 flex flex-col items-center gap-3"
                        >
                          <div className="relative">
                            <img
                              src={pr.ownerAvatar}
                              alt={pr.owner}
                              loading="lazy"
                              className="
                                h-14 w-14 md:h-12 md:w-12
                                rounded-full
                                border border-black/10 dark:border-white/10
                                object-contain
                                opacity-80
                                grayscale
                                brightness-75
                                contrast-125
                                shadow-lg
                                transition-all duration-300
                                group-hover:scale-105
                                group-hover:opacity-100
                                group-hover:grayscale-0
                                group-hover:brightness-100
                                group-hover:shadow-xl
                                group-hover:shadow-black/10
                              "
                            />

                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                          </div>

                          <span className="max-w-[90px] text-center text-xs font-semibold text-zinc-400 transition-colors duration-300 group-hover:text-zinc-600 dark:group-hover:text-zinc-300">
                            {label}
                          </span>
                        </a>
                      </div>

                      {/* separator */}
                      {index !== prs.length - 1 && (
                        <>
                          {/* desktop */}
                          <div className="hidden md:block h-14 w-px shrink-0 bg-gradient-to-b from-transparent via-zinc-200 to-transparent dark:via-zinc-800" />

                          {/* mobile */}
                          <div className="block md:hidden h-px w-full bg-gradient-to-r from-transparent via-zinc-200 to-transparent dark:via-zinc-800" />
                        </>
                      )}
                    </React.Fragment>
                  );
                })}
          </div>
        </div>
      </div>
    </section>
  );
}