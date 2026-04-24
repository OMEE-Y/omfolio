import React from "react";
import { ArrowRight, FileText } from "lucide-react";

interface BookProps {
  title: string;
  author: string;
  pdfUrl: string;
}

export default function BookCard({ title, author, pdfUrl }: BookProps) {
  return (
    <div className="group relative p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-zinc-500/10 hover:border-zinc-300 dark:hover:border-zinc-700">
      {/* Absolute link to make the whole card clickable */}
      <a 
        href={pdfUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="absolute inset-0 z-10"
        aria-label={`Read ${title}`}
      />

      <div className="flex items-start gap-4">
        <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400">
          <FileText size={24} />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-white leading-tight line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
            {author}
          </p>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
          <span className="w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-600" />
          PDF Resource
        </span>
        
        <div className="text-zinc-900 dark:text-white transform translate-x-0 group-hover:translate-x-1 transition-transform">
          <ArrowRight size={18} />
        </div>
      </div>
    </div>
  );
}