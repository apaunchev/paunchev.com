import { XMLParser } from 'fast-xml-parser';
import { decode } from 'html-entities';

const LETTERBOXD_USERNAME = 'apaunchev';
const LETTERBOXD_URL = 'https://letterboxd.com';
const LETTERBOXD_FEED = `${LETTERBOXD_URL}/${LETTERBOXD_USERNAME}/rss/`;
const LETTERBOXD_FILM_URL = film => `${LETTERBOXD_URL}/film/${film}/`;

export const STALE_DURATION = 86400;
export const FRESH_DURATION = STALE_DURATION / 2;

export default async function latestFilm(req, res) {
  try {
    const response = await fetch(LETTERBOXD_FEED);
    const xml = await response.text();
    const parser = new XMLParser();
    const feed = parser.parse(xml);
    const film = feed.rss.channel.item[0];
    const [poster] =
      film.description.match(/(http(s?):)([\s\w./|-])*\.jpg/) ?? [];
    const [, slug] = film.link.match(/film\/([^/]*)\/?/) ?? [];

    res
      .setHeader(
        'Cache-Control',
        `public, s-maxage=${FRESH_DURATION}, max-age=${FRESH_DURATION}, stale-while-revalidate=${STALE_DURATION}`,
      )
      .status(200)
      .json({
        poster,
        title: decode(film['letterboxd:filmTitle']),
        year: film['letterboxd:filmYear'],
        rating: film['letterboxd:memberRating'],
        date: film['letterboxd:watchedDate'],
        url: LETTERBOXD_FILM_URL(slug),
      });
  } catch (err) {
    res.status(500).send(err);
  }
}
