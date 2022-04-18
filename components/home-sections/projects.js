import clsx from 'clsx';
import { Star } from 'react-feather';
import { useRepository } from 'hooks/useRepository';
import { Card, CardGrid } from 'components/layout/card-grid';
import { Skeleton } from 'components/content/skeleton';
import { Heading } from 'components/content/heading';

const projects = [
  'apaunchev/playground',
  'apaunchev/Teamboard',
  'apaunchev/GitObserve',
  'apaunchev/paunchev.com',
];

export function Projects() {
  return (
    <section className="flex flex-col gap-4">
      <Heading title="Projects" size="2xl" />
      <CardGrid>
        {projects.map(p => (
          <Project key={p} repository={p} />
        ))}
      </CardGrid>
    </section>
  );
}

function Project({ repository }) {
  const { name, description, stars, language } = useRepository(repository);

  return (
    <Card
      url={`https://github.com/${repository}`}
      title={name ?? <Skeleton className="w-40" />}
      description={description ?? <Skeleton className="w-60" />}
      meta={
        <>
          <div className="flex items-center gap-1">
            <span
              className={clsx(
                'inline-block w-3 h-3 rounded-full align-middle',
                {
                  'bg-yellow-300': language === 'JavaScript',
                  'bg-blue-900': language === 'TypeScript',
                },
              )}
            />
            {language ?? <Skeleton />}
          </div>
          <div className="flex items-center">
            <Star height={16} /> {stars ?? <Skeleton className="w-6" />}
          </div>
        </>
      }
    />
  );
}
