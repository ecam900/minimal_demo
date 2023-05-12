'use client';
import Link from 'next/link';
import { FC } from 'react';

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

const NavItemColorOpts = {
  blue: 'sky-500',
  yellow: 'yellow-500',
} as const;

type NavItemColor = (typeof NavItemColorOpts)[keyof typeof NavItemColorOpts];

type NavItemProps = {
  href: string;
  text: string;
  color?: NavItemColor;
};

const NavItem: FC<NavItemProps> = ({ href, text, color = 'sky-500' }) => {
  return (
    <Link href={href}>
      <li
        className={`hover:text-sky-500  transition-all duration-300 hover:cursor-pointer hover:font-bold hover:bg-sky-500/10 w-full px-2 py-2 rounded border-l-4 border-${color}`}
      >
        {text}
      </li>
    </Link>
  );
};
