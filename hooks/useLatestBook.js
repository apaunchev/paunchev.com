import books from 'content/books';

export function useLatestBook() {
  return books[books.length - 1];
}
