import Image from 'next/image';
import { TagsList } from '@/components/TagsList';

export default function ContentCard({
  title,
  author,
  description,
  quote,
  image,
  url,
  tags,
}) {
  return (
    <a href={url}>
      <div>
        {image ? (
          <figure>
            <Image
              src={image.src}
              width={image.width}
              height={image.height}
              alt={title}
            />
          </figure>
        ) : null}
        {title ? <h2>{title}</h2> : null}
        {author ? <h3 className="meta">{author}</h3> : null}
        {description ? <p>{description}</p> : null}
        {quote ? (
          <p>
            <i>‘{quote}’</i>
          </p>
        ) : null}
        <TagsList tags={tags} />
      </div>
      <style jsx>{`
        a {
          border: none;
        }

        a:hover h2,
        a:focus h2 {
          color: var(--color-links-active);
        }

        figure {
          float: right;
          margin: 0.25rem 0 0.25rem 1rem;
          width: 5rem;
        }

        h2 {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.75rem;
        }

        h3 {
          margin: 0;
          font-size: 1.125rem;
          line-height: 1.75rem;
          font-weight: 500;
        }

        p {
          margin-top: 0.25rem;
          margin-bottom: 0;
          font-size: 1rem;
          line-height: 1.5rem;
        }
      `}</style>
    </a>
  );
}
