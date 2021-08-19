import { Accordion } from '@/components/accordion';

export function TableOfContents({ headings }) {
  const renderTable = items =>
    items.map(({ slug, title, children }) => {
      if (children && children.length) {
        return (
          <li key={slug}>
            <Accordion title={title}>
              {children && (
                <ul className="toc__list">{renderTable(children)}</ul>
              )}
            </Accordion>
          </li>
        );
      }

      return (
        <li key={slug}>
          <a href={`#${slug}`}>{title}</a>
        </li>
      );
    });

  return (
    <div className="toc">
      <p className="toc__title">Table of Contents</p>
      <ul className="toc__list">{renderTable(headings)}</ul>
    </div>
  );
}
