import { CardGrid } from '@/components/card-grid';
import { PageHeader } from '@/components/page-header';
import { NarrowPage } from '@/layouts/narrow-page';
import { getSnippets } from '@/lib/snippets';

const pageInfo = {
  title: 'Snippets',
  description:
    'This is a collection of random code or commands that I discovered or used at some point and thought they might be useful again later. I also try to document things I’ve learned from them.',
};

export default function Snippets({ snippets }) {
  return (
    <NarrowPage title={pageInfo.title} description={pageInfo.description}>
      <PageHeader title={pageInfo.title} description={pageInfo.description} />
      <CardGrid items={snippets} />
    </NarrowPage>
  );
}

export async function getStaticProps() {
  const snippets = await getSnippets();

  return {
    props: {
      snippets,
    },
  };
}
