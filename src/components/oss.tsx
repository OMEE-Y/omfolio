"use client";

import { useState, useEffect } from "react";
import { GitMerge, ArrowUpRight } from "@phosphor-icons/react";

interface GitHubPRItem {
  id: number;
  number: number;
  title: string;
  html_url: string;
  repository_url: string;
  closed_at: string;
}

interface OrgGroup {
  orgName: string;
  avatarUrl: string;
  prs: GitHubPRItem[];
}

const USERNAME = "OMEE-Y";

export default function OSSSection() {
  const [orgGroups, setOrgGroups] = useState<OrgGroup[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPRs = async () => {
      try {
        const query = encodeURIComponent(`type:pr is:merged author:${USERNAME}`);
        const res = await fetch(
          `https://api.github.com/search/issues?q=${query}&sort=updated&per_page=30`
        );
        if (!res.ok) throw new Error();
        const data = await res.json();

        const map = new Map<string, GitHubPRItem[]>();
        (data.items || []).forEach((pr: GitHubPRItem) => {
          const orgName = pr.repository_url.replace("https://api.github.com/repos/", "").split("/")[0];
          if (!map.has(orgName)) map.set(orgName, []);
          map.get(orgName)!.push(pr);
        });

        const groups = Array.from(map.entries()).map(([orgName, prList]) => ({
          orgName,
          avatarUrl: `https://github.com/${orgName}.png?size=80`,
          prs: prList.sort(
            (a, b) => new Date(b.closed_at).getTime() - new Date(a.closed_at).getTime()
          ),
        }));

        setOrgGroups(groups.sort((a, b) => b.prs.length - a.prs.length));
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPRs();
  }, []);

  return (
    <section className="w-full">
      <div className="mb-4 sm:mb-6 flex items-baseline justify-between gap-2">
        <div>
           <h2 className="font-instrument text-3xl font-normal tracking-tight text-zinc-900 dark:text-zinc-100">
        open source
      </h2>
          <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
            Organizations and repositories with merged contributions.
          </p>
        </div>
<a
  href={`https://github.com/search?q=is%3Apr+is%3Amerged+author%3A${USERNAME}&type=pullrequests`}
  target="_blank"
  rel="noreferrer"
  className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 font-mono text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-colors shrink-0"
>
  <span>all prs</span>
  <ArrowUpRight size={13} />
</a>
      </div>

      {loading && (
        <div className="space-y-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-14 w-full animate-pulse rounded-xl border border-zinc-100 bg-zinc-50 dark:border-zinc-900 dark:bg-zinc-900/40"
            />
          ))}
        </div>
      )}

      {error && (
        <p className="py-2 font-mono text-xs text-zinc-400">
          Unable to fetch contributions. View them on{" "}
          <a
            href={`https://github.com/${USERNAME}`}
            className="underline hover:text-zinc-700 dark:hover:text-zinc-300"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          .
        </p>
      )}

      {!loading && !error && (
        <div className="space-y-2">
          {orgGroups.map((group) => (
            <details
              key={group.orgName}
              className="group overflow-hidden rounded-xl border border-zinc-200/80 bg-white transition-colors dark:border-zinc-800/80 dark:bg-zinc-900/40"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between p-3 select-none hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                <div className="flex min-w-0 flex-1 items-center gap-3">
                  <img
                    src={group.avatarUrl}
                    alt={`${group.orgName} logo`}
                    className="h-8 w-8 shrink-0 rounded-lg border border-zinc-200 bg-zinc-100 object-cover dark:border-zinc-800 dark:bg-zinc-900 sm:h-9 sm:w-9"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://github.com/identicons/${group.orgName}.png`;
                    }}
                  />
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-xs font-medium text-zinc-900 dark:text-zinc-100">
                      {group.orgName}
                    </h3>
                    <p className="font-mono text-[11px] text-zinc-400 dark:text-zinc-500">
                      {group.prs.length} merged {group.prs.length === 1 ? "pr" : "prs"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={`https://github.com/${group.orgName}`}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-1 text-zinc-400 transition-colors hover:text-zinc-700 dark:hover:text-zinc-200"
                    title={`Open ${group.orgName} on GitHub`}
                  >
                    <ArrowUpRight size={14} />
                  </a>

                  <svg
                    className="h-3.5 w-3.5 text-zinc-400 transition-transform duration-200 group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </summary>

              <div className="space-y-1 border-t border-zinc-100 bg-zinc-50/40 px-2 py-2 dark:border-zinc-800/60 dark:bg-zinc-950/30 sm:px-3">
                {group.prs.map((pr) => {
                  const repoName = pr.repository_url.replace("https://api.github.com/repos/", "");

                  return (
                    <a
                      key={pr.id}
                      href={pr.html_url}
                      target="_blank"
                      rel="noreferrer"
                      className="group/item flex items-start gap-2.5 rounded-lg p-2 transition-colors hover:bg-zinc-100/70 dark:hover:bg-zinc-800/50"
                    >
                      <GitMerge
                        size={14}
                        weight="bold"
                        className="mt-0.5 shrink-0 text-purple-600 dark:text-purple-400"
                      />
                      <div className="min-w-0 flex-1 space-y-0.5">
                        <div className="flex items-center gap-1.5 font-mono text-[11px] text-zinc-400 dark:text-zinc-500">
                          <span className="truncate">{repoName}#{pr.number}</span>
                          <span>·</span>
                          <span className="shrink-0">
                            {new Date(pr.closed_at).toLocaleDateString("en-US", {
                              month: "short",
                              year: "numeric",
                            })}
                          </span>
                        </div>
                        <p className="line-clamp-1 text-xs text-zinc-700 group-hover/item:text-zinc-950 dark:text-zinc-300 dark:group-hover/item:white">
                          {pr.title}
                        </p>
                      </div>

                      <ArrowUpRight
                        size={13}
                        className="mt-0.5 shrink-0 text-zinc-400 opacity-0 transition-opacity group-hover/item:opacity-100"
                      />
                    </a>
                  );
                })}
              </div>
            </details>
          ))}
        </div>
      )}
    </section>
  );
}