import { BookHighlights } from '@/components/book-highlights';
import { PageHeader } from '@/components/page-header';
import { NarrowPage } from '@/layouts/narrow-page';
import { getBookBySlug, getBooks } from '@/lib/books';
import { getStarRating, parseBookTitle } from '@/lib/helpers';

export default function BookPage({ book }) {
  const title = parseBookTitle(book.title);
  const headerProps = Array.isArray(title)
    ? {
        title: title[0],
        description: title[1],
        meta: (
          <>
            {book.author} · {getStarRating(book.rating)} ·{' '}
            <a href={book.goodreadsUrl}>Goodreads</a>
          </>
        ),
      }
    : {
        title,
        description: book.author,
        meta: (
          <>
            {getStarRating(book.rating)} ·{' '}
            <a href={book.goodreadsUrl}>Goodreads</a>
          </>
        ),
      };

  return (
    <NarrowPage title={title} description={book.author}>
      <PageHeader
        {...headerProps}
        image={{
          src: book.coverImageUrl,
          alt: `Cover of ${title}`,
          width: 190,
          height: 270,
        }}
      />
      <BookHighlights highlights={book.highlights} />
    </NarrowPage>
  );
}

export async function getStaticProps({ params }) {
  const book = getBookBySlug(params.slug);

  return {
    props: {
      book,
    },
  };
}

export async function getStaticPaths() {
  const books = getBooks();

  return {
    paths: books.map(b => ({ params: { slug: b.slug } })),
    fallback: false,
  };
}
