import { XMLParser } from 'fast-xml-parser';
import { decode } from 'html-entities';

const GOODREADS_SHELF_URL = `https://www.goodreads.com/review/list_rss/40107870?shelf=read&sort=date_read`;
const GOODREADS_BOOK_URL = id => `https://www.goodreads.com/book/show/${id}`;

export const STALE_DURATION = 86400;
export const FRESH_DURATION = STALE_DURATION / 2;

export default async function latestBook(req, res) {
  try {
    const response = await fetch(GOODREADS_SHELF_URL);
    const xml = await response.text();
    const parser = new XMLParser();
    const feed = parser.parse(xml);
    const book = feed.rss.channel.item[0];

    res
      .setHeader(
        'Cache-Control',
        `public, s-maxage=${FRESH_DURATION}, max-age=${FRESH_DURATION}, stale-while-revalidate=${STALE_DURATION}`,
      )
      .status(200)
      .json({
        cover: book.book_large_image_url,
        title: decode(book.title),
        author: book.author_name,
        year: book.book_published,
        rating: book.user_rating,
        date: book.user_read_at,
        url: GOODREADS_BOOK_URL(book.book_id),
      });
  } catch (err) {
    res.status(500).send(err);
  }
}
