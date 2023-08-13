import Link from 'next/link';

export default function Picker() {
  return (
    <>
      <header className='flex justify-center text-5xl'>
        <h1>Picker</h1>
      </header>
      <div className='flex justify-center'>
        <Link href='/' className='border px-2 py-1 rounded'>
          Home
        </Link>
      </div>
    </>
  );
}
