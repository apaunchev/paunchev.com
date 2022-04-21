import { fetcher } from 'lib/fetcher';
import useSWR from 'swr/immutable';

export function useRepository(repository) {
  const { data } = useSWR(`/api/github/repository/${repository}`, fetcher);

  return data ?? {};
}
