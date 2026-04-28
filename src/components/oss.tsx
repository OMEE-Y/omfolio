"use client";

import React, { useEffect, useState } from "react";
import { GitPullRequest, ArrowSquareOut, SpinnerGap } from "@phosphor-icons/react";

type PullRequest = {
  id: number;
  title: string;
  html_url: string;
  repository_url: string;
  closed_at: string;
  repo_name: string;
};

export default function OSS() {
  const [prs, setPrs] = useState<PullRequest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPRs = async () => {
      try {
       
        const response = await fetch(
          "https://api.github.com/search/issues?q=author:OMEE-Y+type:pr+is:merged&sort=created&order=desc"
        );
        const data = await response.json();

        const formattedPRs = data.items.map((item: any) => ({
          id: item.id,
          title: item.title,
          html_url: item.html_url,
          closed_at: item.closed_at,
          repo_name: item.repository_url.split("/").slice(-2).join("/"),
        }));

        setPrs(formattedPRs);
      } catch (error) {
        console.error("Error fetching PRs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPRs();
  }, []);

  return (
    <div className="pb-32">
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-instrument text-3xl font-normal text-zinc-900 dark:text-white mb-2 tracking-tighter">
          open source
        </h1>
      </div>

      {loading ? (
        <div className="flex items-center gap-2 text-zinc-500 animate-pulse">
          <SpinnerGap size={20} className="animate-spin" />
          <span className="text-sm font-medium">Fetching contributions...</span>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 max-w-2xl">
          {prs.map((pr) => (
            <a
              key={pr.id}
              href={pr.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/20 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div className="flex gap-4">
                  <div className="p-2 h-fit rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-purple-600 dark:text-purple-400 shadow-sm">
                    <GitPullRequest size={20} weight="duotone" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-[15px] font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {pr.title}
                    </h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-500 font-medium">
                      {pr.repo_name}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <ArrowSquareOut 
                    size={18} 
                    className="text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity" 
                  />
                  <span className="text-[12px] tabular-nums text-zinc-400 dark:text-zinc-500">
                    {new Date(pr.closed_at).toLocaleDateString('en-US', {
                      month: 'short',
                      year: 'numeric'
                    })}
                  </span>
                </div>
              </div>
            </a>
          ))}
          
          {prs.length === 0 && !loading && (
            <p className="text-sm text-zinc-500">No merged pull requests found yet.</p>
          )}
        </div>
      )}
    </div>
  );
}