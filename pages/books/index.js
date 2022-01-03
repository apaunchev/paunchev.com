import { Book } from '@/components/book';
import { WidePage } from '@/layouts/wide-page';
import { getBooksByYear } from '@/lib/books';

const pageInfo = {
  title: 'Books',
  description:
    'My digital bookshelf of sorts. Holds most of the books I have read over the years, along with highlights for some of them.',
};

export default function BooksPage({ booksByYear }) {
  return (
    <WidePage title={pageInfo.title} description={pageInfo.description}>
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
              <div className="books-grid">
                {booksByYear[year]
                  .sort((a, b) => b.finishedAt - a.finishedAt)
                  .map(book => (
                    <Book key={book.id} book={book} />
                  ))}
              </div>
            </section>
          );
        })}
    </WidePage>
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
