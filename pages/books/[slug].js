import { BookHighlights } from '@/components/book-highlights';
import { PageHeader } from '@/components/page-header';
import { ArticleLayout } from '@/layouts/article';
import { getBookBySlug, getBooks } from '@/lib/books';
import { getStarRating, parseBookTitle } from '@/lib/helpers';

export default function BookPage({ book }) {
  const title = parseBookTitle(book.title);
  const imageProps = Array.isArray(title)
    ? {
        title: title[0],
        subtitle: title[1],
        meta: (
          <>
            {book.author} · {getStarRating(book.rating)} ·{' '}
            <a href={book.goodreadsUrl}>Goodreads</a>
          </>
        ),
      }
    : {
        title,
        subtitle: book.author,
        meta: (
          <>
            {getStarRating(book.rating)} ·{' '}
            <a href={book.goodreadsUrl}>Goodreads</a>
          </>
        ),
      };

  return (
    <ArticleLayout title={title} description={book.author}>
      <PageHeader
        {...imageProps}
        image={{
          src: book.coverImageUrl,
          alt: `Cover of ${title}`,
          width: 190,
          height: 270,
        }}
        isCentered={true}
      />
      <BookHighlights highlights={book.highlights} />
    </ArticleLayout>
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
