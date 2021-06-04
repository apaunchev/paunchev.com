import { ContentGrid, ContentGridLibraryItem } from '@/components/ContentGrid';
import { PageHeader } from '@/components/PageHeader';
import { PageLayout } from '@/layouts/page';
import { githubLink, hyphenize } from '@/lib/helpers';
import { getLibrary } from '@/lib/library';
import { types } from '@/lib/types';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import { GitHub } from 'react-feather';

export const pageInfo = {
  title: 'Library',
  description:
    'A digital library linking to my favourite content around the web.',
};

export default function Library({ data }) {
  const router = useRouter();
  const [filterValue, setFilterValue] = useState('');
  const filteredData = useMemo(() => {
    let filteredData = data || [];

    if (filterValue) {
      filteredData = filteredData.filter(
        item => item.type === hyphenize(filterValue),
      );
    }

    return filteredData;
  }, [data, filterValue]);

  useEffect(() => {
    const type = router.query.type;

    if (!type) {
      setFilterValue('');
      return;
    }

    if (!types[hyphenize(type)]) {
      setFilterValue('');
      router.push(router.pathname, undefined, { shallow: true });
      return;
    }

    setFilterValue(type);
  }, [router, setFilterValue]);

  const handleSetFilter = (e, filter) => {
    e.preventDefault();

    setFilterValue(filter);

    if (!filter) {
      router.push(router.pathname, undefined, { shallow: true });
      return;
    }

    router.push(`${router.pathname}/?type=${hyphenize(filter)}`, undefined, {
      shallow: true,
    });
  };

  return (
    <PageLayout title={pageInfo.title} description={pageInfo.description}>
      <PageHeader title={pageInfo.title} subtitle={pageInfo.description} />
      <div className="tabs">
        <a
          className={
            !router.query.type ? 'tabs-item tabs-item--active' : 'tabs-item'
          }
          href={router.pathname}
          onClick={handleSetFilter}
        >
          All
        </a>
        {Object.keys(types).map(type => {
          const classes = ['tabs-item'];

          if (router.query.type === type) {
            classes.push('tabs-item--active');
          }

          return (
            <a
              key={type}
              className={classes.join(' ')}
              href={`${router.pathname}/?type=${type}`}
              onClick={e => handleSetFilter(e, type)}
            >
              {types[type]}
            </a>
          );
        })}
      </div>
      {filteredData.length ? (
        <ContentGrid>
          {filteredData.map(item => (
            <ContentGridLibraryItem key={item.url} {...item} />
          ))}
        </ContentGrid>
      ) : null}
      {router.query.type ? (
        <>
          <hr className="hr--transparent" />
          <p className="text-center">
            <a
              className="button"
              href={githubLink('library', router.query.type, 'json')}
            >
              <GitHub height={18} width={18} />
              Edit on GitHub
            </a>
          </p>
        </>
      ) : null}
    </PageLayout>
  );
}

export async function getStaticProps() {
  const data = getLibrary();

  return {
    props: {
      data,
    },
  };
}
