import Link from 'next/link';

export default function Picker() {
  return (
    <header className='flex gap-2'>
      <h1>Picker</h1>
      <Link href='/' className='border px-2 py-1 rounded'>
        Home
      </Link>
    </header>
  );
}
