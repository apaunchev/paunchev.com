import Image from 'next/image';
import Link from 'next/link';
import { getStarRating, parseBookTitle } from '@/lib/helpers';
import { routes } from '@/lib/routes';

const BookLink = ({ book, children }) =>
  book.highlights ? (
    <Link href={`${routes.books.href}/${book.slug}`}>
      <a>{children}</a>
    </Link>
  ) : (
    <a href={book.goodreadsUrl}>{children}</a>
  );

export function Book({ book }) {
  const title = parseBookTitle(book.title);

  return (
    <div className="book">
      <BookLink book={book}>
        <Image
          src={book.coverImageUrl}
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
          <p className="book-info__author">{book.author}</p>
          {book.rating ? (
            <p className="book-info__rating">{getStarRating(book.rating)}</p>
          ) : null}
        </div>
      </BookLink>
    </div>
  );
}
