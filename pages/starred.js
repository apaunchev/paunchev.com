import clsx from 'clsx';
import { Skeleton } from 'components/content/skeleton';
import { Card, CardGrid } from 'components/layout/card-grid';
import { Page } from 'layouts/page';
import { fetcher } from 'lib/fetcher';
import { Star } from 'react-feather';
import useSWR from 'swr/immutable';

const pageInfo = {
  title: 'Starred',
  description: 'Repositories I have starred on GitHub.',
};

export default function Starred() {
  const { data, isValidating } = useSWR(`/api/github/starred`, fetcher);

  return (
    <Page {...pageInfo}>
      <CardGrid>
        {isValidating ? (
          <>
            <SkeletonRepositoryCard />
            <SkeletonRepositoryCard />
            <SkeletonRepositoryCard />
            <SkeletonRepositoryCard />
          </>
        ) : (
          data.map(repo => <RepositoryCard key={repo.url} {...repo} />)
        )}
      </CardGrid>
    </Page>
  );
}

function RepositoryCard({ url, name, description, language, stars }) {
  return (
    <Card
      url={url}
      title={name}
      description={description}
      meta={
        <>
          {language ? (
            <div className="flex items-center gap-1">
              <span
                className={clsx(
                  'inline-block w-3 h-3 rounded-full align-middle bg-zinc-400',
                  {
                    'bg-yellow-300': language === 'JavaScript',
                    'bg-blue-900': language === 'TypeScript',
                  },
                )}
              />
              {language}
            </div>
          ) : null}
          <div className="flex items-center gap-1">
            <Star size={16} /> {stars}
          </div>
        </>
      }
    />
  );
}

function SkeletonRepositoryCard() {
  return (
    <Card
      title={<Skeleton className="!w-40" />}
      description={<Skeleton className="!w-80" />}
      meta={
        <>
          <div className="flex items-center gap-1">
            <span className="inline-block w-3 h-3 rounded-full align-middle bg-zinc-400" />
            {<Skeleton />}
          </div>
          <div className="flex items-center gap-1">
            <Star size={16} /> <Skeleton />
          </div>
        </>
      }
    />
  );
}
