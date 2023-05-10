import Link from 'next/link';
import './globals.css';
import { Montserrat } from 'next/font/google';
import { FC } from 'react';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${montserrat.className} flex flex-col min-h-screen`}>
        <nav className='container max-w-6xl mx-auto py-6'>
          <Link href='/'>
            <p className='text-3xl'>minimal_reproduction.</p>
          </Link>
        </nav>
        <section className='container mx-auto max-w-6xl space-y-2 py-4'>
          <Objectives />
          <Expectation />
          <Observed />
        </section>

        {children}
        <Footer />
      </body>
    </html>
  );
}

const Objectives: FC = () => {
  return (
    <>
      <h1 className='text-3xl font-bold'>Objectives</h1>
      <p>
        Demonstrate{' '}
        <a
          className='underline underline-offset-4 decoration-sky-500'
          href='https://github.com/vercel/next.js/issues/49417'
        >
          Issue 49417
        </a>
      </p>
    </>
  );
};

const Expectation: FC = () => {
  return (
    <>
      <h2 className='text-2xl font-bold'>Expectation</h2>
      <p>
        Cat fact should get revalidated every second. It is placed inside a{' '}
        <span className='font-mono text-red-800'>`template.tsx`</span>, so it should
        remount every time the child component changes
      </p>
    </>
  );
};

const Observed: FC = () => {
  return (
    <>
      <h2 className='text-2xl font-bold'>Observed behavior</h2>
      <p>
        When changing pages, the{' '}
        <span className='font-mono text-red-800'>template.tsx</span> successfully
        rerenders the children components. If you change routes, the revalidation seems to
        work as expected - but only once or twice. After that, the only way to revalidate
        the page seems to be a hard refresh.
      </p>
    </>
  );
};

const Footer: FC = () => {
  return (
    <footer className='text-white/50 text-small flex flex-col items-center justify-center w-full mt-auto min-h-[15vh] bg-stone-800  px-2 border-black'>
      Cat facts provided by{' '}
      <a className='underline' href='https://catfact.ninja/fact'>
        https://catfact.ninja
      </a>
    </footer>
  );
};
