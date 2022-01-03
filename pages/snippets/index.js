import { CardGrid } from '@/components/card-grid';
import { PageHeader } from '@/components/page-header';
import { NarrowPage } from '@/layouts/narrow-page';
import { getSnippets } from '@/lib/snippets';

const pageInfo = {
  title: 'Snippets',
  description:
    'My collection of code and commands that I can’t (or don’t want to) remember, but need to look up often.',
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
