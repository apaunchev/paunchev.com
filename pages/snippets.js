import { TableOfContents } from '@/components/table-of-contents';
import { PageLayout } from '@/layouts/page';
import { baseComponents } from '@/lib/base-components';
import { getHeadings } from '@/lib/helpers';
import { getSnippets } from '@/lib/snippets';
import { MDXRemote } from 'next-mdx-remote';

const pageInfo = {
  title: 'Snippets',
  subtitle: 'Commands that make computers do things.',
};

export default function Snippets({ snippets }) {
  const allRawMDX = snippets.map(({ rawMDX }) => rawMDX).join('');
  const headings = getHeadings(allRawMDX);

  return (
    <PageLayout title={pageInfo.title} description={pageInfo.subtitle}>
      <div className="toc-container">
        <div className="toc-side">
          <TableOfContents headings={headings} />
        </div>
        <div className="toc-content">
          {snippets.map(({ source }, index) => (
            <MDXRemote key={index} {...source} components={baseComponents} />
          ))}
        </div>
      </div>
    </PageLayout>
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
