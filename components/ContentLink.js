import Link from 'next/link';

export default function ContentLink({ href, title, description }) {
  return (
    <Link href={href}>
      <a className="content-link">
        <h3 className="content-link__title">{title}</h3>
        {description ? (
          <p className="content-link__description">{description}</p>
        ) : null}
      </a>
    </Link>
  );
}
