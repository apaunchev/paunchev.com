import { CardGrid } from 'components/layout/card-grid';
import { Page } from 'layouts/page';
import { getSnippets } from 'lib/snippets';

const pageInfo = {
  title: 'Snippets',
  description:
    'A collection of computer code or commands that I once used or learned from.',
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
