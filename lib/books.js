import fs from 'fs';
import { join } from 'path';
import { hyphenize, parseBookTitle } from './helpers';

export const getBooks = () => {
  const path = join(process.cwd(), 'content/books.json');
  const data = fs.readFileSync(path, 'utf8');
  const json = JSON.parse(data);
  const books = json.map(book => {
    const title = parseBookTitle(book.title);
    let slug;

    if (Array.isArray(title)) {
      slug = hyphenize(title[0]);
    } else {
      slug = hyphenize(title);
    }

    return { ...book, slug };
  });

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
