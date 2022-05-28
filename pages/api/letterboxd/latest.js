import { XMLParser } from 'fast-xml-parser';
import { decode } from 'html-entities';

const LETTERBOXD_USERNAME = 'apaunchev';
const LETTERBOXD_URL = 'https://letterboxd.com';
const LETTERBOXD_FEED = `${LETTERBOXD_URL}/${LETTERBOXD_USERNAME}/rss/`;

const STALE_DURATION = 86400;
const FRESH_DURATION = STALE_DURATION / 2;
const LATEST_COUNT = 2;

export default async function latestFilms(req, res) {
  try {
    const response = await fetch(LETTERBOXD_FEED);
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
  const LETTERBOXD_FILM_URL = film => `${LETTERBOXD_URL}/film/${film}/`;
  const [image] = item.description.match(/(http(s?):)([\s\w./|-])*\.jpg/) ?? [];
  const [, slug] = item.link.match(/film\/([^/]*)\/?/) ?? [];

  return {
    id: item.guid,
    image,
    title: decode(item['letterboxd:filmTitle']),
    year: item['letterboxd:filmYear'],
    rating: item['letterboxd:memberRating'],
    date: item['letterboxd:watchedDate'],
    url: LETTERBOXD_FILM_URL(slug),
  };
}
