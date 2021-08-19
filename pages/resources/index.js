import { ContentList, ContentListItem } from '@/components/content-list';
import { PageHeader } from '@/components/page-header';
import { Search } from '@/components/search';
import { ArticleLayout } from '@/layouts/article';
import { routes } from '@/lib/routes';
import { getContentOfType } from '@/lib/content';
import { useState } from 'react';

const CONTENT_DIR = 'content/resources';

const pageInfo = {
  title: 'Resources',
  description: 'Links and notes on topics I’m interested in.',
};

export default function Resources({ resources }) {
  const [searchValue, setSearchValue] = useState('');
  const filteredData = resources.filter(item => {
    const filterValue = searchValue.toLowerCase();
    const title = item?.title?.toLowerCase();
    const content = item?.content?.toLowerCase();

    return title.includes(filterValue) || content.includes(filterValue);
  });

  return (
    <ArticleLayout title={pageInfo.title} description={pageInfo.description}>
      <PageHeader title={pageInfo.title} subtitle={pageInfo.description} />
      <Search onInputChange={e => setSearchValue(e.target.value)} />
      {filteredData.length ? (
        <ContentList>
          {filteredData.map(({ slug, title, description }) => (
            <ContentListItem
              key={slug}
              href={`${routes.resources.href}/${slug}`}
              title={title}
              description={description}
            />
          ))}
        </ContentList>
      ) : null}
    </ArticleLayout>
  );
}

export async function getStaticProps() {
  const resources = getContentOfType(CONTENT_DIR);

  return {
    props: {
      resources,
    },
  };
}
