import { fetcher } from 'lib/fetcher';
import useSWR from 'swr/immutable';

export function useLatestFilm() {
  const { data } = useSWR('/api/letterboxd/latest', fetcher);

  return data ?? {};
}
