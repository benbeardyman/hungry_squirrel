'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

// Define a type or interface for the book object
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
      <header className='flex gap-2'>
        <h1>All Books</h1>
        <Link href='/home' className='border px-2 py-1 rounded'>
          Home
        </Link>
      </header>

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
