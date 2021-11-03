import fs from 'fs';
import { join } from 'path';

export const getBooks = () => {
  const path = join(process.cwd(), 'content/books.json');
  const data = fs.readFileSync(path, 'utf8');
  const books = JSON.parse(data);

  return books;
};

export const getBookBySlug = slug => {
  const books = getBooks();

  return books.find(b => b.slug === slug);
};

export const getBooksByYear = () => {
  const books = getBooks();

  return books.reduce((booksByYear, book) => {
    const year = new Date(book.finishedAt).getFullYear();

    if (!booksByYear[year]) {
      booksByYear[year] = [book];
    } else {
      booksByYear[year].push(book);
    }

    return booksByYear;
  }, {});
};
