'use client';

import Link from 'next/link';
import { ChangeEvent, useState } from 'react';
import { addBook } from '@/services/BookService';

export default function AddBook() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [pages, setPages] = useState(0);
  const [imageUrl, setImageUrl] = useState('');
  const [url, setUrl] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    // e.preventDefault();
    const newBook = {
      title,
      description,
      pages,
      imageUrl,
      url,
    };
    addBook(newBook);
    // console.log(newBook);
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const handlePagesChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (/^\d{0,4}$/.test(e.target.value)) {
      setPages(Number(e.target.value));
    }
  };

  const handleImageUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
    setImageUrl(e.target.value);
  };

  const handleUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

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
        <h1>Add Book</h1>
      </header>
      <div className='flex justify-center'>
        <form
          className='flex gap-1 flex-col w-1/2 bg-slate-200 dark:bg-slate-700 rounded-xl p-4 mt-6'
          onSubmit={handleFormSubmit}
        >
          <input
            type='text'
            value={title}
            onChange={handleTitleChange}
            name='title'
            placeholder='Title'
            className='bg-slate-50 dark:bg-slate-600 px-2 py-1 rounded-t-xl outline-none'
          />
          <textarea
            value={description}
            placeholder='Description'
            onChange={handleDescriptionChange}
            className='bg-slate-50 dark:bg-slate-600 px-2 py-1 outline-none'
          />
          <input
            type='text'
            value={pages}
            onChange={handlePagesChange}
            name='pages'
            placeholder='Pages'
            className='bg-slate-50 dark:bg-slate-600 px-2 py-1 outline-none'
          />
          <input
            type='text'
            value={imageUrl}
            onChange={handleImageUrlChange}
            name='image'
            placeholder='Image URL'
            className='bg-slate-50 dark:bg-slate-600 px-2 py-1 outline-none'
          />
          <input
            type='text'
            value={url}
            onChange={handleUrlChange}
            name='url'
            placeholder='URL'
            className='bg-slate-50 dark:bg-slate-600 px-2 py-1 rounded-b-xl outline-none'
          />
          <div className='flex gap-1 justify-end'>
            <Link
              href='/books'
              className='border-2 border-slate-800 dark:border-slate-100 mt-2 px-4 py-1 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-600 focus-within:bg-slate-50  dark:focus-within:bg-slate-600 outline-none'
            >
              Cancel
            </Link>
            <button
              type='submit'
              className='border-2 border-slate-800 dark:border-slate-100 mt-2 px-4 py-1 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-600 focus-within:bg-slate-50  dark:focus-within:bg-slate-600 outline-none'
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
