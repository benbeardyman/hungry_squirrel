import Link from 'next/link';

export default function AddBook() {
  return (
    <header className='flex gap-2'>
      <h1>Add Book</h1>
      <Link href='/books' className='border px-2 py-1 rounded'>
        Back
      </Link>
    </header>
  );
}
