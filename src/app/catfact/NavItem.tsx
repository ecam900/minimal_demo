import Link from 'next/link';
import { FC } from 'react';

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

export default NavItem;
