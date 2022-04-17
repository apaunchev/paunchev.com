import useSWR from 'swr/immutable';

const fetcher = url => fetch(url).then(r => r.json());

export function useRepository(repository) {
  const { data } = useSWR(`/api/github/repository/${repository}`, fetcher);

  return data ?? {};
}
