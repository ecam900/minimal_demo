'use client';

import Link from 'next/link';

export default function SettingsPage() {
  return (
    <div className='container max-w-lg'>
      <Link href='/dashboard'>
        <h1 className='text-lg'>Another Page - Just go back to Cat Fact! 😺</h1>
      </Link>
    </div>
  );
}
