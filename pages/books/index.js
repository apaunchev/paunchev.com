import { PageLayout } from '@/layouts/page';
import { getBooksByYear } from '@/lib/books';
import { parseBookTitle } from '@/lib/helpers';
import Image from 'next/image';

const pageInfo = {
  title: 'Books',
  description: 'What I’ve been reading.',
};

function Book({ title, author, coverImageUrl, goodreadsUrl, rating }) {
  title = parseBookTitle(title);

  return (
    <div className="book">
      <a href={goodreadsUrl}>
        <Image
          src={coverImageUrl}
          alt={`Cover of ${title}`}
          width={190}
          height={270}
        />
        <div className="book-info">
          {Array.isArray(title) ? (
            <h3 className="book-info__title" title={title[0]}>
              {title[0]}
            </h3>
          ) : (
            <h3 className="book-info__title" title={title}>
              {title}
            </h3>
          )}
          <p className="book-info__author">{author}</p>
          {rating ? (
            <p className="book-info__rating">{Array(rating).fill('★')}</p>
          ) : null}
        </div>
      </a>
    </div>
  );
}

export default function Books({ booksByYear }) {
  return (
    <PageLayout title={pageInfo.title} description={pageInfo.description}>
      {Object.keys(booksByYear)
        .sort((a, b) => b - a)
        .map(year => {
          const bookCount = booksByYear[year].length;
          const pagesCount = booksByYear[year].reduce(
            (acc, cur) => acc + cur.pages,
            0,
          );

          return (
            <section className="books" key={year}>
              <h2 className="books-header">
                {year}
                <span>
                  {bookCount} books / {pagesCount} pages
                </span>
              </h2>
              <div className="books-content">
                {booksByYear[year]
                  .sort((a, b) => b.finishedAt - a.finishedAt)
                  .map(book => (
                    <Book key={book.id} {...book} />
                  ))}
              </div>
            </section>
          );
        })}
    </PageLayout>
  );
}

export async function getStaticProps() {
  const booksByYear = getBooksByYear();

  return {
    props: {
      booksByYear,
    },
  };
}
