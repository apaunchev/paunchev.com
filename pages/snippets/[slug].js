import css from 'styled-jsx/css';
import SnippetLayout from '@/layouts/snippet';
import markdownToHtml from '@/lib/markdown';
import { getAllSnippets, getSnippetBySlug } from '@/lib/snippets';
import { TagsList } from '@/components/TagsList';

export default function Snippet({ meta, content }) {
  const pageInfo = {
    title: meta?.title,
    description: meta?.description,
  };

  return (
    <SnippetLayout {...pageInfo}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <TagsList tags={meta?.tags} />
      <style jsx>{styles}</style>
    </SnippetLayout>
  );
}

const styles = css`
  div {
    margin: 1.5rem 0;
  }
`;

export async function getStaticProps({ params }) {
  const snippet = getSnippetBySlug(params.slug);
  const content = await markdownToHtml(snippet?.content);

  return {
    props: {
      ...snippet,
      content,
    },
  };
}

export async function getStaticPaths() {
  const snippets = getAllSnippets();

  return {
    paths: snippets.map(snippet => {
      return {
        params: {
          slug: snippet.slug,
        },
      };
    }),
    fallback: false,
  };
}
