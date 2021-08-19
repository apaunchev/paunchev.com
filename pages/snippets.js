import { baseComponents } from '@/lib/base-components';
import { getHeadings } from '@/lib/helpers';
import { prepareMDX } from '@/lib/mdx';
import { getContentOfType } from '@/lib/content';
import { MDXRemote } from 'next-mdx-remote';
import { PageWithTOCLayout } from '@/layouts/page-with-toc';

const CONTENT_DIR = 'content/snippets';

const pageInfo = {
  title: 'Snippets',
  subtitle: 'Commands and code I use to make computers do things.',
};

export default function Snippets({ allMDX }) {
  const allRawMDX = allMDX.map(({ rawMDX }) => rawMDX).join('');
  const headings = getHeadings(allRawMDX);

  return (
    <PageWithTOCLayout
      title={pageInfo.title}
      description={pageInfo.subtitle}
      headings={headings}
    >
      {allMDX.map(({ source }, index) => (
        <MDXRemote key={index} {...source} components={baseComponents} />
      ))}
    </PageWithTOCLayout>
  );
}

export async function getStaticProps() {
  const snippets = getContentOfType(CONTENT_DIR);
  const allMDX = await Promise.all(
    snippets.map(async snippet => {
      const mdx = await prepareMDX(snippet.slug, CONTENT_DIR);

      return mdx;
    }),
  );

  return {
    props: {
      allMDX,
    },
  };
}
