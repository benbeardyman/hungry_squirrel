'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Book {
  id: number;
  title: string;
}

export default function Catalogue() {
  const [books, setBooks] = useState<Book[]>([]);

  const fetchBooks = function () {
    fetch(`http://localhost:5172/api/Book/GetAll`)
      .then((response) => response.json())
      .then((data) => {
        setBooks(data.data);
      });
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <>
      <header className='flex justify-center text-5xl'>
        <h1>All Books</h1>
      </header>
      <div className='flex justify-center gap-2 mt-4'>
        <Link
          href='/home'
          className='border-2 border-slate-800 dark:border-slate-100 px-2 py-1 rounded'
        >
          Home
        </Link>
        <Link
          href='/books/add_book'
          className='border-2 border-slate-800 dark:border-slate-100 px-2 py-1 rounded'
        >
          Add Book
        </Link>
      </div>
      <div>
        <ul>
          {books.map((book) => (
            <li key={book.id}>Name: {book.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
