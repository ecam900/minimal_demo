import { ReactNode } from 'react';
import CatFactMenu from './CatFactMenu';

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: ReactNode;
}) {
  return (
    <section className='container mx-auto max-w-6xl'>
      <CatFactMenu />
      <div className={'py-8 w-full h-[40vh] px-4'}>{children}</div>
    </section>
  );
}
