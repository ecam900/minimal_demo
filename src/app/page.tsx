import Link from 'next/link';

export default function Home() {
  return (
    <main className='container max-w-6xl mx-auto py-6'>
      <Link href='/catfact'>
        <div className='p-2 bg-black text-white hover:cursor-pointer rounded-sm max-w-fit'>
          <p>Go To Test Page</p>
        </div>
      </Link>
    </main>
  );
}
