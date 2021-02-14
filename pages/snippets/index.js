import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getAllSnippets } from '@/lib/snippets';
import { hyphenize } from '@/lib/helpers';
import PageLayout from '@/layouts/page';
import ContentCard from '@/components/ContentCard';
import { TagsFilter } from '@/components/TagsFilter';

const pageInfo = {
  title: 'Snippets',
  description:
    'A collection of code or commands that make computers do things.',
};

const snippetTypesMap = {
  css: 'CSS',
  javascript: 'JavaScript',
  git: 'Git',
  linux: 'Linux',
  npm: 'npm',
  windows: 'Windows',
};

export default function Snippets({ snippets }) {
  const router = useRouter();
  const [filter, setFilter] = useState('');
  const filteredData = snippets.filter(snippet => {
    if (!filter) {
      return true;
    }

    return snippet?.meta?.tags.includes(hyphenize(filter));
  });

  useEffect(() => {
    const tag = router.query.tag;

    if (!tag || !snippetTypesMap[hyphenize(tag)]) {
      setFilter('');
      return;
    }

    setFilter(tag);
  }, [router.query.tag]);

  const handleSetFilter = filter => {
    setFilter(filter);

    if (!filter) {
      router.push('/snippets', undefined, { shallow: true });
      return;
    }

    router.push(`/snippets/?tag=${hyphenize(filter)}`, undefined, {
      shallow: true,
    });
  };

  return (
    <PageLayout {...pageInfo}>
      <TagsFilter tagsMap={snippetTypesMap} onFilterClick={handleSetFilter} />
      <div className="grid grid-cols-full gap-8 lg:gap-12">
        {filteredData.map(snippet => (
          <ContentCard
            key={snippet?.slug}
            title={snippet?.meta?.title}
            description={snippet?.meta?.description}
            tags={snippet?.meta?.tags}
            url={`/snippets/${snippet?.slug}`}
          />
        ))}
      </div>
    </PageLayout>
  );
}

export async function getStaticProps() {
  const snippets = getAllSnippets();

  return {
    props: {
      snippets,
    },
  };
}
