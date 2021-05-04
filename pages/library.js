import ContentCard from '@/components/ContentCard';
import ContentFilters from '@/components/ContentFilters';
import PageGrid from '@/components/PageGrid';
import data from '@/data/library.json';
import { useFilteredData } from '@/hooks/useFilteredData';
import PageLayout from '@/layouts/page';
import { hyphenize } from '@/lib/helpers';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const pageInfo = {
  title: 'Library',
  description:
    'Digital library linking to my favourite content around the web.',
};

const tagsMap = {
  articles: 'Articles',
  books: 'Books',
  'personal-sites': 'Personal sites',
  tools: 'Tools',
};

export default function Library() {
  const router = useRouter();
  const [filteredData, { setFilterValue, setSearchValue }] = useFilteredData(
    data,
  );

  useEffect(() => {
    const tag = router.query.tag;

    if (!tag) {
      setFilterValue('');
      return;
    }

    if (!tagsMap[hyphenize(tag)]) {
      setFilterValue('');
      router.push(router.pathname, undefined, { shallow: true });
      return;
    }

    setFilterValue(tag);
  }, [router]);

  const handleSetFilter = filter => {
    setFilterValue(filter);

    if (!filter) {
      router.push(router.pathname, undefined, { shallow: true });
      return;
    }

    router.push(`${router.pathname}/?tag=${hyphenize(filter)}`, undefined, {
      shallow: true,
    });
  };

  return (
    <PageLayout {...pageInfo}>
      <ContentFilters
        tagsMap={tagsMap}
        onFilterClick={handleSetFilter}
        onSearchChange={e => setSearchValue(e.target.value)}
      />
      <PageGrid>
        {filteredData.length ? (
          filteredData.map(
            ({ url, title, author, description, quote, image, tags }) => (
              <ContentCard
                key={url}
                url={url}
                title={title}
                subtitle={author}
                description={description}
                extra={
                  quote ? (
                    <p>
                      <i>‘{quote}’</i>
                    </p>
                  ) : null
                }
                image={image}
                tags={tags}
              />
            ),
          )
        ) : (
          <p>
            <i>Nothing found.</i>
          </p>
        )}
      </PageGrid>
    </PageLayout>
  );
}
