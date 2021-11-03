import { PageHeader } from '@/components/page-header';
import { ArticleLayout } from '@/layouts/article';
import { getBookById, getBooks } from '@/lib/books';
import { getStarRating, parseBookTitle } from '@/lib/helpers';

export default function BookPage({ book }) {
  const title = parseBookTitle(book.title);
  const imageProps = Array.isArray(title)
    ? {
        title: title[0],
        subtitle: title[1],
        meta: `${book.author} · ${getStarRating(book.rating)}`,
      }
    : {
        title,
        subtitle: book.author,
        meta: getStarRating(book.rating),
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
      <ol className="highlights">
        {book.highlights.map(({ text, location }) => (
          <li key={location.value} id={location.value} className="highlight">
            <blockquote className="highlight__quote">
              <p>
                <span>{text}</span>
              </p>
            </blockquote>
            <p className="highlight__meta">
              <a href={`#${location.value}`}>Link</a> · Location:{' '}
              <a href={location.url}>{location.value}</a>
            </p>
          </li>
        ))}
      </ol>
    </ArticleLayout>
  );
}

export async function getStaticProps({ params }) {
  const book = getBookById(params.id);

  return {
    props: {
      book,
    },
  };
}

export async function getStaticPaths() {
  const books = getBooks();

  return {
    paths: books.map(b => ({ params: { id: String(b.id) } })),
    fallback: false,
  };
}
