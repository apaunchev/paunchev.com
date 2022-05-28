import { XMLParser } from 'fast-xml-parser';
import { decode } from 'html-entities';

const GOODREADS_SHELF_URL = `https://www.goodreads.com/review/list_rss/40107870?shelf=read&sort=date_read`;

const STALE_DURATION = 86400;
const FRESH_DURATION = STALE_DURATION / 2;
const LATEST_COUNT = 2;

export default async function latestBook(req, res) {
  try {
    const response = await fetch(GOODREADS_SHELF_URL);
    const xml = await response.text();
    const parser = new XMLParser();
    const feed = parser.parse(xml);
    const latest = feed.rss.channel.item.slice(0, LATEST_COUNT).map(formatItem);

    res
      .setHeader(
        'Cache-Control',
        `public, s-maxage=${FRESH_DURATION}, max-age=${FRESH_DURATION}, stale-while-revalidate=${STALE_DURATION}`,
      )
      .status(200)
      .json(latest);
  } catch (err) {
    res.status(500).send(err);
  }
}

function formatItem(item) {
  const GOODREADS_BOOK_URL = id => `https://www.goodreads.com/book/show/${id}`;

  return {
    id: item.book_id,
    image: item.book_large_image_url,
    title: decode(item.title),
    subtitle: item.author_name,
    year: item.book_published,
    rating: item.user_rating,
    date: item.user_read_at,
    url: GOODREADS_BOOK_URL(item.book_id),
  };
}
