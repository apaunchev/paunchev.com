import { getStarRating, parseBookTitle } from '@/lib/helpers';
import { routes } from '@/lib/routes';
import Image from 'next/image';
import Link from 'next/link';

export function Book({ book }) {
  const title = parseBookTitle(book.title);

  return (
    <div className="card">
      <div className="card__body">
        <Link href={`${routes.books.href}/${book.slug}`}>
          <a>
            <Image
              src={book.coverImageUrl}
              alt={`Cover of ${title}`}
              width={190}
              height={270}
            />
            <div className="card__spacer">
              {Array.isArray(title) ? (
                <h3 className="card__title" title={title[0]}>
                  {title[0]}
                </h3>
              ) : (
                <h3 className="card__title" title={title}>
                  {title}
                </h3>
              )}
              <p className="card__description">{book.author}</p>
              <p className="card__meta">
                {book.highlights?.length > 0 ? (
                  <span title="Has highlights">📝</span>
                ) : null}{' '}
                {book.rating && book.highlights?.length > 0 ? ' · ' : null}
                {book.rating ? (
                  <span title={`Rated ${book.rating} out of 5`}>
                    {getStarRating(book.rating)}
                  </span>
                ) : null}
              </p>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}
