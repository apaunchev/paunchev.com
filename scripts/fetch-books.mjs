import { join } from 'path';
import { promises } from 'fs';
import { parse } from 'fast-xml-parser';
import fetch from 'node-fetch';

const GOODREADS_SHELF_URL = `https://www.goodreads.com/review/list_rss/40107870?shelf=read&sort=date_read`;
const OUTPUT_JSON_PATH = join(process.cwd(), 'content/books.json');

async function main() {
  console.log('Fetching...');

  const response = await fetch(GOODREADS_SHELF_URL);
  const xml = await response.text();
  const json = parse(xml);
  const booksJson = transform(json);

  await promises.writeFile(
    OUTPUT_JSON_PATH,
    JSON.stringify(booksJson, null, 2),
  );

  console.log('Done!');
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
          title: String(title),
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

main();
