import Link from 'next/link';

export default function AddBook() {
  return (
    <>
      <header className='flex justify-center text-5xl'>
        <h1>Add Book</h1>
      </header>
      <div className='flex justify-center gap-2 mt-4'>
        <Link
          href='/books'
          className='border-2 border-slate-800 dark:border-slate-100 px-2 py-1 rounded'
        >
          Back
        </Link>
      </div>
    </>
  );
}
