import {
  ContentGrid,
  ContentGridBookmarkItem,
} from '@/components/content-grid';
import { PageLayout } from '@/layouts/page';
import { classNames, hyphenize } from '@/lib/helpers';
import { getBookmarks } from '@/lib/bookmarks';
import { bookmarkTypes } from '@/lib/types';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';

export const pageInfo = {
  title: 'Bookmarks',
  description: 'Links to favourite content and tools.',
};

export default function Bookmarks({ bookmarks }) {
  const router = useRouter();
  const [filterValue, setFilterValue] = useState('');
  const filteredBookmarks = useMemo(() => {
    let filteredBookmarks = bookmarks || [];

    if (filterValue) {
      filteredBookmarks = filteredBookmarks.filter(
        item => item.type === hyphenize(filterValue),
      );
    }

    return filteredBookmarks;
  }, [bookmarks, filterValue]);

  useEffect(() => {
    const type = router.query.type;

    if (!type) {
      setFilterValue('');
      return;
    }

    if (!bookmarkTypes[hyphenize(type)]) {
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
        {Object.keys(bookmarkTypes).map(type => (
          <a
            key={type}
            className={classNames(
              'tabs-item',
              router.query.type === type ? 'tabs-item--active' : '',
            )}
            href={`${router.pathname}/?type=${type}`}
            onClick={e => handleSetFilter(e, type)}
          >
            {bookmarkTypes[type]}
          </a>
        ))}
      </div>
      <ContentGrid
        items={filteredBookmarks}
        component={ContentGridBookmarkItem}
      />
    </PageLayout>
  );
}

export async function getStaticProps() {
  const bookmarks = getBookmarks();

  return {
    props: {
      bookmarks,
    },
  };
}
