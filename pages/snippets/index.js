import { CardGrid } from 'components/layout/card-grid';
import { Page } from 'layouts/page';
import { getSnippets } from 'lib/snippets';

const pageInfo = {
  title: 'Snippets',
  description: 'Code snippets, cheat sheets and other guides for quick access.',
};

export default function SnippetsPage({ snippets }) {
  return (
    <Page title={pageInfo.title} description={pageInfo.description}>
      <CardGrid items={snippets} />
    </Page>
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
