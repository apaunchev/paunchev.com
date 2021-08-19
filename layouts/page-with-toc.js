import { TableOfContents } from '@/components/table-of-contents';
import { PageLayout } from '@/layouts/page';

export function PageWithTOCLayout({ title, description, headings, children }) {
  return (
    <PageLayout title={title} description={description}>
      <div className="page-with-toc">
        <div className="page-with-toc__toc">
          <TableOfContents headings={headings} />
        </div>
        <div className="page-with-toc__content">{children}</div>
      </div>
    </PageLayout>
  );
}
