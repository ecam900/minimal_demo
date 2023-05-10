export default async function Dashboard() {
  const blep = await fetch('https://catfact.ninja/fact', { next: { revalidate: 1 } });
  const blepJson = await blep.json();
  console.log(blepJson);

  return (
    <div>
      <h1 className='text-4xl'>😺 {blepJson.fact}</h1>
    </div>
  );
}
