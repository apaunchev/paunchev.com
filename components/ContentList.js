import Link from 'next/link';

export function ContentList({ children }) {
  return <div className="content-list">{children}</div>;
}

export function ContentListItem({ href, title, description }) {
  return (
    <Link href={href}>
      <a className="content-list-item">
        <h3 className="content-list-item__title">{title}</h3>
        {description ? (
          <p className="content-list-item__description">{description}</p>
        ) : null}
      </a>
    </Link>
  );
}
