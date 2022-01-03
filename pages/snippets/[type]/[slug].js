import { PageHeader } from '@/components/page-header';
import { TableOfContents } from '@/components/table-of-contents';
import { NarrowPage } from '@/layouts/narrow-page';
import { WidePage } from '@/layouts/wide-page';
import { baseComponents } from '@/lib/base-components';
import { getHeadings } from '@/lib/helpers';
import { getSnippetBySlug, getSnippets } from '@/lib/snippets';
import { MDXRemote } from 'next-mdx-remote';

export default function Snippet({
  snippet: { title, description, image, source },
  headings,
}) {
  return headings ? (
    <WidePage title={title} description={description} image={image}>
      <div className="toc-container">
        <div className="toc-side">
          <TableOfContents headings={headings} />
        </div>
        <div className="toc-content">
          <MDXRemote {...source} components={baseComponents} />
        </div>
      </div>
    </WidePage>
  ) : (
    <NarrowPage title={title} description={description}>
      <PageHeader title={title} description={description} image={image} />
      <MDXRemote {...source} components={baseComponents} />
    </NarrowPage>
  );
}

export async function getStaticProps({ params }) {
  const snippet = await getSnippetBySlug(params.type, params.slug);
  let headings = null;

  if (snippet.showTOC) {
    headings = snippet.showTOC && getHeadings(snippet.rawMDX);
  }

  return {
    props: {
      snippet,
      headings,
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
