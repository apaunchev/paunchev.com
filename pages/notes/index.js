import ContentLink from '@/components/ContentLink';
import ContentList from '@/components/ContentList';
import PageHeader from '@/components/PageHeader';
import Search from '@/components/Search';
import ArticleLayout from '@/layouts/article';
import { getNotes } from '@/lib/notes';
import { routes } from '@/lib/routes';
import { useState } from 'react';

const pageInfo = {
  title: 'Notes',
  description: 'A collection of (mostly) technical notes for quick access.',
};

export default function Notes({ content }) {
  const [searchValue, setSearchValue] = useState('');
  const filteredContent = content.filter(item => {
    const filterValue = searchValue.toLowerCase();
    const title = item?.title?.toLowerCase();
    const content = item?.content?.toLowerCase();

    return title.includes(filterValue) || content.includes(filterValue);
  });

  return (
    <ArticleLayout title={pageInfo.title} description={pageInfo.description}>
      <PageHeader title={pageInfo.title} subtitle={pageInfo.description} />
      <Search
        onInputChange={e => setSearchValue(e.target.value)}
        label="Search notes"
      />
      {filteredContent.length ? (
        <ContentList>
          {filteredContent.map(({ slug, title, description }) => (
            <ContentLink
              key={slug}
              href={`${routes.notes.href}/${slug}`}
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
  const content = getNotes();

  return {
    props: {
      content,
    },
  };
}
