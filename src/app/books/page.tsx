import BookCard from "@/components/BookCard";


const bookshelf = [
  { 
    id: "intro-to-ml", 
    title: "Introduction to Machine Learning with Python", 
    author: "Andreas C. Müller & Sarah Guido", 
    pdfUrl: "/books/intro-to-ml.pdf" 
  },
  
  { 
    id: "python-ds-handbook", 
    title: "Python Data Science Handbook", 
    author: "Jake VanderPlas", 
    pdfUrl: "/books/python-data-science-handbook.pdf" 
  },
  { 
    id: "ddia", 
    title: "Designing Data-Intensive Applications", 
    author: "Martin Kleppmann", 
    pdfUrl: "/books/ddia.pdf" 
  },
  { 
    id: "hands-on-ml", 
    title: "Hands-On Machine Learning (2nd Edition)", 
    author: "Aurélien Géron", 
    pdfUrl: "/books/hands-on-ml.pdf" 
  },
  { 
    id: "learning-sql", 
    title: "Learning SQL", 
    author: "Alan Beaulieu", 
    pdfUrl: "/books/learning-sql.pdf" 
  }
];

export default function BooksPage() {
  return (
    <div className="max-w-2xl mx-auto mt-14 px-6">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8">Bookshelf</h1>
      <div className="grid gap-4">
        {bookshelf.map((book) => (
          <BookCard 
            key={book.id} 
            title={book.title}
            author={book.author}
            pdfUrl={book.pdfUrl}
          />
        ))}
      </div>
    </div>
  );
}