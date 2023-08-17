'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function AddBook() {
  const [val, setVal] = useState('');
  const [textarea, setTextarea] = useState('');

  const handleDescriptionChange = (e: any) => {
    setTextarea(e.target.value);
  };

  const handlePagesChange = (e: any) => {
    const inputValue = e.target.value;
    if (/^\d{0,4}$/.test(inputValue)) {
      setVal(inputValue);
    }
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
        <form className='flex gap-1 flex-col w-1/2 bg-slate-200 dark:bg-slate-700 rounded-xl p-4 mt-6'>
          <input
            type='text'
            name='title'
            placeholder='Title'
            className='bg-slate-50 dark:bg-slate-600 px-2 py-1 rounded-t-xl outline-none'
          />
          <textarea
            value={textarea}
            placeholder='Description'
            onChange={handleDescriptionChange}
            className='bg-slate-50 dark:bg-slate-600 px-2 py-1 outline-none'
          />
          <input
            type='text'
            value={val}
            onChange={handlePagesChange}
            name='pages'
            placeholder='Pages'
            className='bg-slate-50 dark:bg-slate-600 px-2 py-1 outline-none'
          />
          <input
            type='text'
            name='image'
            placeholder='Image URL'
            className='bg-slate-50 dark:bg-slate-600 px-2 py-1 outline-none'
          />
          <input
            type='text'
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
