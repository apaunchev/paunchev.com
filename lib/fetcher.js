export default async function Fetcher(...args) {
  const res = await fetch(...args);
  const json = await res.json();

  return json;
}
