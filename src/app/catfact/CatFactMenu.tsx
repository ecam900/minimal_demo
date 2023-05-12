'use client';
import Link from 'next/link';
import { FC } from 'react';
import NavItem from './NavItem';

export default function CatFactMenu() {
  return (
    <div className='w-full py-2 bg-white border rounded px-2 border-black'>
      <ul className='container flex flex-col space-y-4'>
        <NavItem href='/' text='Go Back Home (/)' color='yellow-500' />
        <NavItem href='/catfact' text='Cat Fact (w/revalidate:1)' />
        <NavItem href='/catfact/otherpage' text='go to /catfact/otherpage' />
      </ul>
    </div>
  );
}
