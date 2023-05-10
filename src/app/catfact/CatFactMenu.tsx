'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

export default function CatFactMenu() {
  return (
    <div className='w-full py-2 bg-white border rounded px-2 border-black'>
      <ul className='container flex flex-col space-y-4'>
        <NavItem href='/catfact' text='Cat Fact (Should revalidate every second)' />
        <NavItem href='/catfact/otherpage' text='go to /catfact/otherpage' />
      </ul>
    </div>
  );
}

type NavItemProps = {
  href: string;
  text: string;
};
const NavItem: FC<NavItemProps> = ({ href, text }) => {
  return (
    <Link href={href}>
      <li className='hover:text-sky-500 transition-all duration-300 hover:cursor-pointer hover:font-bold hover:bg-sky-200/30 w-full px-2 py-2 rounded border-l-4 border-sky-500'>
        {text}
      </li>
    </Link>
  );
};
