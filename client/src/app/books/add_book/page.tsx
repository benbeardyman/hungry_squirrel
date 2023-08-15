import Link from 'next/link';

export default function AddBook() {
  return (
    <>
      <div className='flex justify-center gap-2 mt-4'>
        <Link
          href='/home'
          className='border-2 border-slate-800 dark:border-slate-100 px-2 py-1 rounded'
        >
          Home
        </Link>
        <Link
          href='/books'
          className='border-2 border-slate-800 dark:border-slate-100 px-2 py-1 rounded'
        >
          All Books
        </Link>
      </div>
      <header className='flex justify-center text-5xl mt-6'>
        <h1>Add Book</h1>
      </header>
    </>
  );
}
