import { MDXRemote } from 'next-mdx-remote';
import { Page } from 'layouts/page';
import { baseComponents } from 'lib/base-components';
import { getSnippetBySlug, getSnippets } from 'lib/snippets';

export default function SnippetPage({
  snippet: { title, description, image, source },
}) {
  return (
    <Page title={title} description={description} image={image}>
      <div className="max-w-none prose prose-headings:font-medium">
        <MDXRemote {...source} components={baseComponents} />
      </div>
    </Page>
  );
}

export async function getStaticProps({ params }) {
  const snippet = await getSnippetBySlug(params.type, params.slug);

  return {
    props: {
      snippet,
    },
  };
}

export async function getStaticPaths() {
  const snippets = await getSnippets();

  return {
    paths: snippets.map(({ type, slug }) => ({
      params: { type: type, slug: slug },
    })),
    fallback: false,
  };
}
