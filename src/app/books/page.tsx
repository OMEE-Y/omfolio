"use client";

import { useState } from "react";
import BookCard from "@/components/BookCard";
import { Search } from "lucide-react";

const bookshelf = [
  { id: "intro-to-ml", title: "Introduction to Machine Learning with Python", author: "Andreas C. Müller & Sarah Guido", pdfUrl: "/books/intro-to-ml.pdf" },
  { id: "python-ds-handbook", title: "Python Data Science Handbook", author: "Jake VanderPlas", pdfUrl: "/books/python-data-science-handbook.pdf" },
  { id: "ddia", title: "Designing Data-Intensive Applications", author: "Martin Kleppmann", pdfUrl: "/books/ddia.pdf" },
  { id: "hands-on-ml", title: "Hands-On Machine Learning (2nd Edition)", author: "Aurélien Géron", pdfUrl: "/books/hands-on-ml.pdf" },
  { id: "learning-sql", title: "Learning SQL", author: "Alan Beaulieu", pdfUrl: "/books/learning-sql.pdf" }
];

export default function BooksPage() {
  const [search, setSearch] = useState("");

  const filteredBooks = bookshelf.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    // Explicit background colors here ensure text visibility in both modes
    <main className="min-h-screen bg-white dark:bg-zinc-950 py-14 px-6">
      <div className="max-w-5xl mx-auto">
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">
            Bookshelf
          </h1>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
            <input
              type="text"
              placeholder="Search by title or author..."
              className="w-full pl-10 pr-4 py-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-zinc-900 dark:text-white placeholder:text-zinc-400"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </header>

        {filteredBooks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredBooks.map((book) => (
              <BookCard 
                key={book.id} 
                title={book.title}
                author={book.author}
                pdfUrl={book.pdfUrl}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-zinc-500 dark:text-zinc-400">
            No books found matching "{search}"
          </div>
        )}
      </div>
    </main>
  );
}