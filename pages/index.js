import { NarrowPage } from '@/layouts/narrow-page';
import { getBookmarks } from '@/lib/bookmarks';
import { getBooks } from '@/lib/books';
import { getStarRating, parseBookTitle } from '@/lib/helpers';
import { routes } from '@/lib/routes';
import { getSnippets } from '@/lib/snippets';
import author from '@/public/me.png';
import Image from 'next/image';
import Link from 'next/link';

const pageInfo = {
  title: null,
  description: 'Angel is a software engineer from Sofia, Bulgaria.',
};

export default function Home({ lastBookmark, lastSnippet, lastBook }) {
  return (
    <NarrowPage title={pageInfo.title} description={pageInfo.description}>
      <div className="card-grid">
        <article className="card">
          <header className="card__header">
            <div className="card__image round-image">
              <Image src={author} alt="" />
            </div>
          </header>
          <div className="card__body">
            <p>
              Hey, I’m Angel — a software engineer from Sofia, Bulgaria. Here’s
              my{' '}
              <Link href="/Angel_Paunchev.pdf">
                <a>résumé</a>
              </Link>
              . This site is an archive of things I did or found around the web.
            </p>
          </div>
        </article>
        <article className="card">
          <header className="card__header">
            <p>🛠 Last thing I built</p>
          </header>
          <div className="card__body">
            <a href="https://playground.paunchev.com">
              <h2 className="card__title">Playground</h2>
              <p className="card__description">
                A browser playground for HTML, CSS and JavaScript.
              </p>
              <p className="card__meta">playground.paunchev.com</p>
            </a>
          </div>
          <footer className="card__footer">
            <a href="https://github.com/apaunchev">See more</a>
          </footer>
        </article>
        <article className="card">
          <header className="card__header">
            <p>📑 Last thing I bookmarked</p>
          </header>
          <div className="card__body">
            <a href={lastBookmark.url}>
              {lastBookmark.title ? (
                <h2 className="card__title">{lastBookmark.title}</h2>
              ) : null}
              {lastBookmark.description ? (
                <p className="card__description">{lastBookmark.description}</p>
              ) : null}
              {lastBookmark.url ? (
                <p className="card__meta">
                  {new URL(lastBookmark.url).hostname}
                </p>
              ) : null}
            </a>
          </div>
          <footer className="card__footer">
            <Link href={routes.bookmarks.href}>
              <a>See more</a>
            </Link>
          </footer>
        </article>
        <article className="card">
          <header className="card__header">
            <p>📝 Last snippet I saved</p>
          </header>
          <div className="card__body">
            <a href={lastSnippet.url}>
              {lastSnippet.title ? (
                <h2 className="card__title">{lastSnippet.title}</h2>
              ) : null}
              {lastSnippet.description ? (
                <p className="card__description">{lastSnippet.description}</p>
              ) : null}
            </a>
          </div>
          <footer className="card__footer">
            <Link href={routes.snippets.href}>
              <a>See more</a>
            </Link>
          </footer>
        </article>
        <article className="card">
          <header className="card__header">
            <p>📚 Last book I read</p>
          </header>
          <div className="card__body">
            <a href={lastBook.url}>
              {lastBook.title ? (
                <h2 className="card__title">{lastBook.title}</h2>
              ) : null}
              {lastBook.author ? (
                <p className="card__description">{lastBook.author}</p>
              ) : null}
              {lastBook.rating ? (
                <p className="card__meta">{lastBook.rating}</p>
              ) : null}
            </a>
          </div>
          <footer className="card__footer">
            <Link href={routes.books.href}>
              <a>See more</a>
            </Link>
          </footer>
        </article>
      </div>
    </NarrowPage>
  );
}

export async function getStaticProps() {
  const bookmarks = getBookmarks();
  const snippets = await getSnippets();
  const books = getBooks();

  const lastBookmark = bookmarks.slice(0, 1)[0];
  const lastSnippet = snippets
    .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
    .slice(0, 1)[0];
  const lastBook = books.slice(0, 1).map(b => ({
    ...b,
    title: parseBookTitle(b.title),
    rating: getStarRating(b.rating),
    url: `${routes.books.href}/${b.slug}`,
  }))[0];

  return {
    props: {
      lastBookmark,
      lastSnippet,
      lastBook,
    },
  };
}
