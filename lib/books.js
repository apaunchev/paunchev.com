import fs from 'fs';
import { join } from 'path';

export const getBooks = () => {
  const path = join(process.cwd(), 'content/books.json');
  const data = fs.readFileSync(path, 'utf8');
  const json = JSON.parse(data);

  return json;
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
