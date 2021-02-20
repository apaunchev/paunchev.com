import Image from 'next/image';
import css from 'styled-jsx/css';
import TagsList from '@/components/TagsList';

export default function PortfolioCard({
  title,
  description,
  url,
  image,
  tags,
}) {
  return (
    <article>
      <a href={url}>
        <h2>{title}</h2>
        <p>{description}</p>
        <Image
          src={image.src}
          width={image.width}
          height={image.height}
          alt={title}
        />
        <TagsList tags={tags} />
      </a>
      <style jsx>{styles}</style>
    </article>
  );
}

const styles = css`
  article {
    margin-bottom: 3rem;
  }

  article:last-child {
    margin-bottom: 0;
  }

  article > a {
    display: block;
    border: none;
  }

  article > a:hover h2,
  article > a:focus h2 {
    color: var(--color-links-active);
  }

  h2 {
    margin: 0;
  }

  p {
    margin-top: 0.25rem;
  }
`;
