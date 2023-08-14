import Image from 'next/image';
import Link from 'next/link';
import logo from 'public/images/hs_logo.png';

const name = 'ben';

export default function Home() {
  return (
    <header className='flex gap-1 flex-col items-center justify-center h-screen'>
      <Image src={logo} alt={''} />
      <h1 className='text-xl'>
        Hello hungry squirrel, what can we feed you{' '}
        <Link href='/home'>tonight?</Link>
      </h1>
    </header>
  );
}
