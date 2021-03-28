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
  const useImageComponent = image && image.width && image.height;

  return (
    <article className="content-card">
      <a href={url}>
        {image ? (
          <figure className="content-card__figure">
            {useImageComponent ? (
              <Image
                src={image.src}
                width={image.width}
                height={image.height}
                alt={title}
              />
            ) : (
              <img src={image.src} alt={title} />
            )}
          </figure>
        ) : null}
        {title ? <h2 className="content-card__title">{title}</h2> : null}
        {subtitle ? (
          <h3 className="content-card__subtitle">{subtitle}</h3>
        ) : null}
        {description ? <p>{description}</p> : null}
        {quote ? (
          <p>
            <i>‘{quote}’</i>
          </p>
        ) : null}
        <TagsList tags={tags} />
      </a>
    </article>
  );
}
