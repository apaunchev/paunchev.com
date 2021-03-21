import ContentCard from '@/components/ContentCard';
import ContentFilters from '@/components/ContentFilters';
import PageGrid from '@/components/PageGrid';
import { useFilteredData } from '@/hooks/useFilteredData';
import PageLayout from '@/layouts/page';
import { hyphenize } from '@/lib/helpers';
import { getAllSnippets } from '@/lib/snippets';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const pageInfo = {
  title: 'Snippets',
  description: 'Collection of code or commands that make computers do things.',
};

const tagsMap = {
  css: 'CSS',
  javascript: 'JavaScript',
  git: 'Git',
  linux: 'Linux',
  npm: 'npm',
  windows: 'Windows',
  nextjs: 'Next.js',
  http: 'HTTP',
};

export default function Snippets({ data }) {
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
          filteredData.map(({ slug, title, description, tags }) => (
            <ContentCard
              key={slug}
              title={title}
              description={description}
              tags={tags}
              url={`/snippets/${slug}`}
            />
          ))
        ) : (
          <p>
            <i>Nothing found.</i>
          </p>
        )}
      </PageGrid>
    </PageLayout>
  );
}

export async function getStaticProps() {
  const data = getAllSnippets();

  return {
    props: {
      data,
    },
  };
}
