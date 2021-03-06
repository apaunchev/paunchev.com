import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getAllSnippets } from '@/lib/snippets';
import { hyphenize } from '@/lib/helpers';
import PageLayout from '@/layouts/page';
import ContentCard from '@/components/ContentCard';
import TagsFilter from '@/components/TagsFilter';
import PageGrid from '@/components/PageGrid';

const pageInfo = {
  title: 'Snippets',
  description: 'Collection of code or commands that make computers do things.',
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

    const tags = snippet?.meta?.tags;

    if (!tags) {
      return false;
    }

    return tags.includes(hyphenize(filter));
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
      <PageGrid>
        {filteredData.map(({ slug, meta: { title, description, tags } }) => (
          <ContentCard
            key={slug}
            title={title}
            description={description}
            tags={tags}
            url={`/snippets/${slug}`}
          />
        ))}
      </PageGrid>
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
