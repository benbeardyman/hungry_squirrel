'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getBooks } from '@/services/BookService';

interface Book {
  id: number;
  title: string;
}

export default function Catalogue() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    getBooks().then((data) => {
      setBooks(data.data);
    });
  }, []);

  return (
    <>
      <div className='flex justify-center gap-2 mt-4'>
        <Link
          href='/home'
          className='border-2 border-slate-800 dark:border-slate-100 px-2 py-1 rounded-lg'
        >
          Home
        </Link>
        <Link
          href='/books'
          className='border-2 border-slate-800 dark:border-slate-100 px-2 py-1 rounded-lg'
        >
          All Books
        </Link>
      </div>
      <header className='flex justify-center text-5xl mt-6'>
        <h1>All Books</h1>
      </header>
      <div className='flex flex-col items-center ml-6 mt-8'>
        <ul className='flex gap-4'>
          {books.map((book) => (
            <li
              key={book.id}
              className='flex justify-center bg-slate-200 dark:bg-slate-600 w-40 px-2 py-1 rounded-xl outline-none'
            >
              {book.title}
            </li>
          ))}
        </ul>
        <div className='mt-6'>
          <Link
            href='/books/add_book'
            className='border-2 border-slate-800 dark:border-slate-100 px-2 py-1 rounded-lg'
          >
            Add Book
          </Link>
        </div>
      </div>
    </>
  );
}
