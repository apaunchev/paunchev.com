import Image from 'next/image';
import { Heading } from 'components/content/heading';
import { useLatestBook } from 'hooks/useLatestBook';
import { useLatestFilm } from 'hooks/useLatestFilm';
import { Skeleton } from 'components/content/skeleton';
import { formatDaysAgo, getStarRating } from 'lib/helpers';

export function Activity() {
  const latestBook = useLatestBook();
  const latestFilm = useLatestFilm();

  return (
    <section className="flex flex-col gap-6">
      <Heading
        title="Activity"
        description="Books I read and films I watched recently."
        h1ClassName="text-2xl"
      />
      <ActivityCard
        url={latestBook.goodreadsUrl}
        title={latestBook.title}
        description={latestBook.author}
        rating={latestBook.rating}
        image={latestBook.coverImageUrl}
        when={latestBook.finishedAt}
      />
      <ActivityCard
        url={latestFilm.url}
        title={latestFilm.title}
        rating={latestFilm.rating}
        image={latestFilm.poster}
        year={latestFilm.year}
        when={latestFilm.date}
      />
      <p className="prose">
        See{' '}
        <a
          className="underline"
          href="https://www.goodreads.com/user/show/40107870-angel-paunchev"
        >
          Goodreads
        </a>{' '}
        and{' '}
        <a className="underline" href="https://letterboxd.com/apaunchev/films/">
          Letterboxd
        </a>{' '}
        for more.
      </p>
    </section>
  );
}

function ActivityCard({ url, title, description, rating, image, when, year }) {
  return (
    <a className="flex gap-4 transition hover:opacity-90" href={url}>
      <div className="flex-none text-[0px]">
        {image ? (
          <Image
            src={image}
            alt={`Poster of ${title}`}
            width={64}
            height={96}
            className="rounded-md"
          />
        ) : (
          <Skeleton className="!w-16 !h-24 !rounded-md" />
        )}
      </div>
      <div>
        <p className="uppercase font-semibold text-xs text-zinc-500">
          {when ? formatDaysAgo(when) : <Skeleton />}
        </p>
        <p className="mt-1">
          <span className="font-semibold text-lg">
            {title ?? <Skeleton className="!w-32" />}
          </span>
          {year ? (
            <span className="ml-1.5 inline-block flex-none rounded bg-zinc-200 p-1 text-xs font-medium leading-none">
              {year}
            </span>
          ) : null}
        </p>
        {description ? <p className="text-zinc-500">{description}</p> : null}
        {rating ? (
          <p>{getStarRating(rating)}</p>
        ) : (
          <Skeleton className="!w-16" />
        )}
      </div>
    </a>
  );
}
