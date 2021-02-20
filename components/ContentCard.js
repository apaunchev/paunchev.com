import css from 'styled-jsx/css';
import Image from 'next/image';
import TagsList from '@/components/TagsList';

export default function ContentCard({
  title,
  subtitle,
  description,
  quote,
  image,
  url,
  tags,
}) {
  return (
    <article>
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
          {title ? <h2 className="h3">{title}</h2> : null}
          {subtitle ? <h3 className="h4 meta">{subtitle}</h3> : null}
          {description ? <p>{description}</p> : null}
          {quote ? (
            <p>
              <i>‘{quote}’</i>
            </p>
          ) : null}
          <TagsList tags={tags} />
        </div>
        <style jsx>{styles}</style>
      </a>
    </article>
  );
}

const styles = css`
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
  }

  h3 {
    margin: 0;
  }

  p {
    margin-top: 0.5rem;
    margin-bottom: 0;
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;
