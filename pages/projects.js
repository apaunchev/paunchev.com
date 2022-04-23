import clsx from 'clsx';
import { Star } from 'react-feather';
import { useRepository } from 'hooks/useRepository';
import { Card, CardGrid } from 'components/layout/card-grid';
import { Skeleton } from 'components/content/skeleton';
import { Page } from 'layouts/page';

const projects = [
  'apaunchev/playground',
  'apaunchev/Teamboard',
  'apaunchev/GitObserve',
  'apaunchev/paunchev.com',
];

const pageInfo = {
  title: 'Projects',
  description: 'Personal open-source projects I (try to) maintain.',
};

export default function Projects() {
  return (
    <Page title={pageInfo.title} description={pageInfo.description}>
      <CardGrid>
        {projects.map(p => (
          <Project key={p} repository={p} />
        ))}
      </CardGrid>
    </Page>
  );
}

function Project({ repository }) {
  const { name, description, stars, language } = useRepository(repository);

  return (
    <Card
      url={`https://github.com/${repository}`}
      title={name ?? <Skeleton className="!w-40" />}
      description={description ?? <Skeleton className="!w-80" />}
      meta={
        <>
          <div className="flex items-center gap-1">
            <span
              className={clsx(
                'inline-block w-3 h-3 rounded-full align-middle',
                {
                  'bg-zinc-400': language === undefined,
                  'bg-yellow-300': language === 'JavaScript',
                  'bg-blue-900': language === 'TypeScript',
                },
              )}
            />
            {language ?? <Skeleton />}
          </div>
          <div className="flex items-center gap-1">
            <Star size={16} /> {stars ?? <Skeleton />}
          </div>
        </>
      }
    />
  );
}
