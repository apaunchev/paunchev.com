import { PageWithTOCLayout } from '@/layouts/page-with-toc';
import { baseComponents } from '@/lib/base-components';
import { getContentOfType } from '@/lib/content';
import { getHeadings } from '@/lib/helpers';
import { prepareMDX } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote';

const CONTENT_DIR = 'content/resources';

export default function Resource({ source, frontMatter, rawMDX }) {
  const headings = getHeadings(rawMDX);

  return (
    <PageWithTOCLayout
      title={frontMatter.title}
      description={frontMatter.description}
      headings={headings}
    >
      <MDXRemote {...source} components={baseComponents} />
    </PageWithTOCLayout>
  );
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const mdx = await prepareMDX(slug, CONTENT_DIR);

  return {
    props: {
      ...mdx,
      slug,
    },
  };
}

export async function getStaticPaths() {
  const resources = getContentOfType(CONTENT_DIR);

  return {
    paths: resources.map(({ slug }) => {
      return {
        params: {
          slug,
        },
      };
    }),
    fallback: false,
  };
}
