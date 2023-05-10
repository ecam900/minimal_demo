import getCatFact from '@/fetchers/getCatFact';

export default async function Dashboard() {
  const catFact = await getCatFact();

  return (
    <div className='mb-20'>
      <h1 className='text-4xl'>😺 {catFact}</h1>
    </div>
  );
}
