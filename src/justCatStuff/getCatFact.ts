export default async function getCatFact() {
  const res = await fetch('https://catfact.ninja/fact', { next: { revalidate: 1 } });
  return (await res
    .json()
    .then((res) => res.fact)
    .catch((err) => {
      throw new Error('Failed to fetch cat fact', err);
    })) as string;
}
