import { Card, CardGrid } from 'components/layout/card-grid';
import { Page } from 'layouts/page';
import { getGroupedSnippets } from 'lib/snippets';

const pageInfo = {
  title: 'Snippets',
  description: 'Code snippets, cheat sheets and other guides for quick access.',
};

const snippetTypeNames = {
  css: 'CSS',
  git: 'Git',
  javascript: 'JavaScript',
  react: 'React',
  windows: 'Windows',
  misc: 'Miscellaneous',
};

export default function SnippetsPage({ snippets }) {
  return (
    <Page title={pageInfo.title} description={pageInfo.description}>
      {Object.keys(snippets).map(type => (
        <CardGrid
          key={type}
          title={snippetTypeNames[type]}
          items={snippets[type]}
          component={SnippetCard}
        />
      ))}
    </Page>
  );
}

function SnippetCard(snippet) {
  return (
    <Card
      {...snippet}
      image={{
        src: `/icons/${snippet.type}.svg`,
        width: 36,
        height: 36,
        alt: '',
      }}
    />
  );
}

export async function getStaticProps() {
  const snippets = await getGroupedSnippets();

  return {
    props: {
      snippets,
    },
  };
}
