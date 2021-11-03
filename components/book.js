import Image from 'next/image';
import Link from 'next/link';
import { getStarRating, parseBookTitle } from '@/lib/helpers';
import { routes } from '@/lib/routes';

export function Book({ book }) {
  const title = parseBookTitle(book.title);

  return (
    <div className="book">
      <Link href={`${routes.books.href}/${book.slug}`}>
        <a>
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
        </a>
      </Link>
    </div>
  );
}
