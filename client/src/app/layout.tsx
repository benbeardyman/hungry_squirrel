import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'The Hungry Squirrel',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className}} bg-slate-100 dark:bg-gray-900 text-slate-800 dark:text-slate-100`}
      >
        {children}
      </body>
    </html>
  );
}
