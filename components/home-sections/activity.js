import Image from 'next/image';
import { Heading } from 'components/content/heading';
import { Skeleton } from 'components/content/skeleton';
import { formatDaysAgo, getStarRating } from 'lib/helpers';
import { useLatestActivity } from 'hooks/useLatestActivity';

export function Activity() {
  const latestActivity = useLatestActivity();

  return (
    <section className="flex flex-col gap-6">
      <Heading
        title="Activity"
        description="Books I read and films I watched recently."
        h1ClassName="text-2xl"
      />
      <ActivityList items={latestActivity} />
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

function ActivityList({ items = [] }) {
  const expectedItemsCount = 4;

  if (items.length === 0) {
    items = [...Array(expectedItemsCount)].map((_, index) => ({
      id: index,
    }));
  }

  return (
    <div className="flex flex-col gap-4">
      {items.map(item => (
        <ActivityItem key={item.id} {...item} />
      ))}
    </div>
  );
}

function ActivityItem({ url, title, subtitle, rating, image, date, year }) {
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
          {date ? formatDaysAgo(date) : <Skeleton />}
        </p>
        <p className="mt-1">
          <span className="mr-1.5 font-semibold text-lg">
            {title ?? <Skeleton className="!w-32" />}
          </span>
          {year ? (
            <span className="relative top-[-2px] inline-block rounded bg-zinc-200 p-1 text-xs font-medium leading-none">
              {year}
            </span>
          ) : null}
        </p>
        {subtitle ? <p className="text-zinc-500">{subtitle}</p> : null}
        {rating ? (
          <p>{getStarRating(rating)}</p>
        ) : (
          <Skeleton className="!w-16" />
        )}
      </div>
    </a>
  );
}
