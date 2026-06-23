"use client";

import { useState, useEffect } from "react";
import { GithubLogo, GitMerge } from "@phosphor-icons/react";

interface GitHubPRItem {
  id: number;
  title: string;
  body: string | null;
  html_url: string;
  repository_url: string;
  closed_at: string;
}


export default function OSSSection() {
  const username = "OMEE-Y";
  const [mergedPRs, setMergedPRs] = useState<GitHubPRItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPRs = async () => {
      try {
        const query = encodeURIComponent(`type:pr is:merged author:${username}`);
        const res = await fetch(
          `https://api.github.com/search/issues?q=${query}&sort=updated&per_page=6`
        );

        if (!res.ok) throw new Error();
        const data = await res.json();
        setMergedPRs(data.items || []);
      } catch (err) {
        setError("Failed to load open source contributions.");
      } finally {
        setLoading(false);
      }
    };

    fetchPRs();
  }, []);

  const getRepoName = (repoUrl: string) => repoUrl.replace("https://api.github.com/repos/", "");

  const getOrgName = (repoUrl: string) => {
    const path = repoUrl.replace("https://api.github.com/repos/", "");
    return path.split("/")[0];
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  return (
    <section className="mt-16 mb-24 w-full mx-auto px-4 md:px-0 max-w-xl">
      <div className="space-y-1 mb-8">
        <h2 className="font-instrument text-3xl font-normal tracking-tight text-zinc-900 dark:text-zinc-100">
          open source
        </h2>
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          Merged pull requests across public GitHub repositories.
        </p>
      </div>

      {loading && (
        <p className="text-xs text-zinc-400 animate-pulse">Loading contributions...</p>
      )}

      {error && !loading && (
        <p className="text-xs text-red-500/80">{error}</p>
      )}

      {!loading && !error && (
        <div className="space-y-3">
          {mergedPRs.map((pr) => {
            const repo = getRepoName(pr.repository_url);
            const orgName = getOrgName(pr.repository_url);
            const orgAvatarUrl = `https://github.com/${orgName}.png?size=48`;

            return (
              <a
                key={pr.id}
                href={pr.html_url}
                target="_blank"
                rel="noreferrer"
                className="group block rounded-xl border border-zinc-100 bg-white p-4 transition-all duration-200 hover:border-pink-200 hover:bg-zinc-50/30 dark:border-zinc-900/50 dark:bg-zinc-900/10 dark:hover:border-pink-900/40 dark:hover:bg-zinc-900/20"
              >
                <div className="flex items-start gap-4">
                  
              
                  <div className="relative shrink-0 mt-0.5">
                    <img
                      src={orgAvatarUrl}
                      alt={`${orgName} logo`}
                      className="h-10 w-10 rounded-xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 object-cover"
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://github.com/identicons/${orgName}.png`;
                      }}
                    />
                    <div className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-purple-600 dark:bg-purple-500 text-white shadow-sm ring-2 ring-white dark:ring-zinc-950">
                      <GitMerge size={9} weight="bold" />
                    </div>
                  </div>

           
                  <div className="min-w-0 flex-1 space-y-1.5">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-[13px] font-medium leading-snug text-zinc-900 dark:text-zinc-100 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors line-clamp-1">
                        {pr.title}
                      </h3>
                      <span className="shrink-0 tabular-nums text-[10px] uppercase font-medium tracking-wide text-zinc-400 dark:text-zinc-500 pt-0.5">
                        {formatDate(pr.closed_at)}
                      </span>
                    </div>

                    {pr.body && (
                      <p className="text-[11.5px] leading-relaxed text-zinc-500 dark:text-zinc-400 line-clamp-2">
                        {pr.body.replace(/[#*`_-]/g, "")}
                      </p>
                    )}

                    <div className="pt-1 flex items-center gap-2">
                      <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md border border-zinc-100 bg-zinc-50 dark:border-zinc-800/60 dark:bg-zinc-950 text-[10.5px] font-mono text-zinc-600 dark:text-zinc-400">
                        <GithubLogo size={12} className="opacity-70" />
                        <span>{repo}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      )}
    </section>
  );
}