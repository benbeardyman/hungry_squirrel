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
      <div className='flex justify-center'>
        <form className='flex gap-2 flex-col mt-6 w-1/2'>
          <input
            type='text'
            name='title'
            placeholder='Title'
            className='border-2 border-slate-800 dark:border-slate-100 bg-transparent px-2 py-1 rounded outline-none focus-within:border-slate-200'
          />
          <div className='flex gap-1 justify-end'>
            <Link
              href='/books'
              className='border-2 border-slate-800 dark:border-slate-100 text-slate-300 px-2 py-1 rounded hover:bg-slate-50 dark:hover:bg-slate-600 focus-within:bg-slate-50  dark:focus-within:bg-slate-600 outline-none'
            >
              Cancel
            </Link>
            <button
              type='submit'
              className='border-2 border-slate-800 dark:border-slate-100 text-slate-300 px-2 py-1 rounded hover:bg-slate-50 dark:hover:bg-slate-600 focus-within:bg-slate-50  dark:focus-within:bg-slate-600 outline-none'
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
