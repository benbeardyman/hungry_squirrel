import Link from 'next/link';

export default function Picker() {
  return (
    <>
      <header className='flex justify-center text-5xl'>
        <h1>Picker</h1>
      </header>
      <div className='flex justify-center'>
        <Link href='/books' className='border px-2 py-1 rounded'>
          All Books
        </Link>
      </div>
    </>
  );
}
