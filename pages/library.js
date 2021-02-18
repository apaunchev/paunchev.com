import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import data from '@/data/library';
import { hyphenize } from '@/lib/helpers';
import PageLayout from '@/layouts/page';
import ContentCard from '@/components/ContentCard';
import { TagsFilter } from '@/components/TagsFilter';
import PageGrid from '@/components/PageGrid';

export const pageInfo = {
  title: 'Library',
  description:
    'A digital library linking to my favourite content around the web.',
};

const contentTypesMap = {
  articles: 'Articles',
  books: 'Books',
  'personal-sites': 'Personal sites',
  tools: 'Tools',
};

export default function Library() {
  const router = useRouter();
  const [filter, setFilter] = useState('');
  const filteredData = data.filter(item => {
    if (!filter) {
      return true;
    }

    return item?.tags?.includes(hyphenize(filter));
  });

  useEffect(() => {
    const tag = router.query.tag;

    if (!tag || !contentTypesMap[hyphenize(tag)]) {
      setFilter('');
      return;
    }

    setFilter(tag);
  }, [router.query.tag]);

  const handleSetFilter = filter => {
    setFilter(filter);

    if (!filter) {
      router.push('/library', undefined, { shallow: true });
      return;
    }

    router.push(`/library/?tag=${hyphenize(filter)}`, undefined, {
      shallow: true,
    });
  };

  return (
    <PageLayout {...pageInfo}>
      <TagsFilter tagsMap={contentTypesMap} onFilterClick={handleSetFilter} />
      <PageGrid>
        {filteredData.map(item => (
          <ContentCard key={item.url} {...item} />
        ))}
      </PageGrid>
    </PageLayout>
  );
}
