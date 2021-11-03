import { join } from 'path';
import { promises } from 'fs';
import { parse } from 'fast-xml-parser';
import fetch from 'node-fetch';

const GOODREADS_SHELF_URL = `https://www.goodreads.com/review/list_rss/40107870?shelf=read&sort=date_read`;
const BOOKS_FILE = join(process.cwd(), 'content/books.json');

async function main() {
  const booksFile = await readBooksFromFile();
  const fileIds = booksFile.map(b => b.id);
  const booksGoodreads = await fetchBooksFromGoodreads();
  let hasNewBooks = false;

  for (let book of booksGoodreads) {
    if (!fileIds.includes(book.id)) {
      hasNewBooks = true;
      booksFile.unshift(book);
    }
  }

  if (hasNewBooks) {
    await writeBooksToFile(booksFile);
  }

  console.log('Done!');
}

async function readBooksFromFile() {
  console.log('Reading from file...');

  const booksFile = await promises.readFile(BOOKS_FILE, 'utf-8');
  const books = JSON.parse(booksFile);

  return books;
}

async function fetchBooksFromGoodreads() {
  console.log('Fetching from Goodreads...');

  const response = await fetch(GOODREADS_SHELF_URL);
  const xml = await response.text();
  const json = parse(xml);
  const books = transform(json);

  return books;
}

async function writeBooksToFile(books) {
  console.log('Writing to file...');

  await promises.writeFile(BOOKS_FILE, JSON.stringify(books, null, 2));
}

function transform(source) {
  let feed = [];

  if (source.rss.channel.item) {
    if (!Array.isArray(source.rss.channel.item)) {
      source.rss.channel.item = [source.rss.channel.item];
    }

    feed = source.rss.channel.item.map(
      ({ title, author_name, book, ...rest }) => {
        const id = parseInt(rest.book_id, 10);

        return {
          id,
          title: htmlDecode(String(title)),
          author: author_name,
          coverImageUrl: rest.book_large_image_url,
          goodreadsUrl: `https://www.goodreads.com/book/show/${id}`,
          rating: parseInt(rest.user_rating, 10),
          pages: parseInt(book.num_pages, 10),
          finishedAt: rest.user_read_at,
          startedAt: rest.user_date_created,
        };
      },
    );
  }

  return feed;
}

function htmlDecode(input) {
  return input.replace(/&apos;/g, "'");
}

main();
