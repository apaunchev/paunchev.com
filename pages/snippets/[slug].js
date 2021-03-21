import SnippetLayout from '@/layouts/snippet';
import markdownToHtml from '@/lib/markdown';
import { getAllSnippets, getSnippetBySlug } from '@/lib/snippets';
import TagsList from '@/components/TagsList';

export default function Snippet({ title, description, tags, content }) {
  const pageInfo = {
    title: title,
    description: description,
  };

  return (
    <SnippetLayout {...pageInfo}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <TagsList tags={tags} />
    </SnippetLayout>
  );
}

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
