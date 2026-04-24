import React from "react";
import { ArrowRight, BookOpen } from "lucide-react";

interface BookProps {
  title: string;
  author: string;
  pdfUrl: string;
}

export default function BookCard({ title, author, pdfUrl }: BookProps) {
  return (
    <div className="group relative p-5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl transition-all duration-300 hover:shadow-lg hover:border-zinc-300 dark:hover:border-zinc-700">
      <div className="flex items-start gap-4">
        {/* Subtle Icon Background */}
        <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
          <BookOpen size={20} />
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-white leading-tight">
            {title}
          </h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">
            {author}
          </p>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 dark:text-white group-hover:gap-3 transition-all duration-300"
        >
          Read PDF
          <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
}