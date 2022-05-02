import { fetcher } from 'lib/fetcher';
import useSWR from 'swr/immutable';

export function useLatestBook() {
  const { data } = useSWR('/api/goodreads/latest', fetcher);

  return data ?? {};
}
