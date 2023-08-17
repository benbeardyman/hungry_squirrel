import Image from 'next/image';
import Link from 'next/link';
import ThemeImage from '@/components/theme-image';

export default function Title() {
  return (
    <header className='flex gap-1 flex-col items-center justify-center h-screen'>
      <ThemeImage
        srcLight='/images/hs_logo_lt.png'
        srcDark='/images/hs_logo_dk.png'
        width='930'
        height='300'
        alt='app logo'
      />
      <h1 className='text-xl'>
        Hello hungry squirrel, what can we feed you{' '}
        <Link href='/home'>tonight?</Link>
      </h1>
    </header>
  );
}
