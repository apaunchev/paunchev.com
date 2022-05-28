import { fetcher } from 'lib/fetcher';
import useSWR from 'swr/immutable';

export function useLatestActivity() {
  const { data: books } = useSWR('/api/goodreads/latest', fetcher);
  const { data: films } = useSWR('/api/letterboxd/latest', fetcher);

  if (!books || !films) {
    return [];
  }

  return [...books, ...films].sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  );
}
