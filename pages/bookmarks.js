import { BookmarkCard, CardGrid } from '@/components/card-grid';
import { FilterToggle } from '@/components/filter-toggle';
import { PageHeader } from '@/components/page-header';
import { NarrowPage } from '@/layouts/narrow-page';
import { getBookmarks } from '@/lib/bookmarks';
import { hyphenize } from '@/lib/helpers';
import { useMemo, useState } from 'react';

export const pageInfo = {
  title: 'Bookmarks',
  description:
    'I bookmark anything I find worth going back to; whether it is a tool I would use for work, or just a thought-provoking article on a random topic — it ends up here.',
};

const filterValues = ['All', 'Articles', 'Tools'];

export default function Bookmarks({ bookmarks }) {
  const [filterIndex, setFilterIndex] = useState(0);
  const filteredBookmarks = useMemo(() => {
    let filteredBookmarks = bookmarks || [];

    if (filterIndex > 0) {
      filteredBookmarks = filteredBookmarks.filter(
        item => item.type === hyphenize(filterValues[filterIndex]),
      );
    }

    return filteredBookmarks;
  }, [bookmarks, filterIndex]);

  const handleFilterChange = () => {
    if (filterValues[filterIndex + 1]) {
      setFilterIndex(filterIndex + 1);
    } else {
      setFilterIndex(0);
    }
  };

  return (
    <NarrowPage title={pageInfo.title} description={pageInfo.description}>
      <PageHeader title={pageInfo.title} description={pageInfo.description} />
      <FilterToggle
        filterValues={filterValues}
        currentIndex={filterIndex}
        onClick={handleFilterChange}
      />
      <CardGrid
        items={filteredBookmarks}
        component={BookmarkCard}
        isSingleColumn
      />
    </NarrowPage>
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
