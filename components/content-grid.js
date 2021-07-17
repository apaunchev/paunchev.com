import Image from 'next/image';
import { TagsList } from '@/components/tags-list';
import { IconsList, IconsListItem } from './icons-list';
import { Clock, Star } from 'react-feather';
import { formatDate } from '@/lib/helpers';

export function ContentGrid({ children }) {
  return <div className="content-grid">{children}</div>;
}

export function ContentGridItem({
  title,
  subtitle,
  description,
  image,
  url,
  extra,
  tags,
}) {
  const useImageComponent = image && image.width && image.height;

  return (
    <article className="content-grid-item">
      <a href={url} title={title}>
        {image?.src ? (
          <figure className="content-grid-item__figure">
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
        {title ? <h2 className="content-grid-item__title">{title}</h2> : null}
        {subtitle ? (
          <h3 className="content-grid-item__subtitle">{subtitle}</h3>
        ) : null}
        {description ? (
          <p className="content-grid-item__description">{description}</p>
        ) : null}
        {extra}
        <TagsList tags={tags} />
      </a>
    </article>
  );
}

export function ContentGridLibraryItem({
  title,
  author,
  description,
  image,
  url,
  quote,
}) {
  return (
    <ContentGridItem
      key={url}
      title={title}
      subtitle={author}
      description={description}
      image={image}
      url={url}
      extra={
        quote ? (
          <div className="content-grid-item__quote">
            <i>‘{quote}’</i>
          </div>
        ) : null
      }
    />
  );
}

export function ContentGridRepositoryItem({
  id,
  name,
  html_url,
  description,
  language,
  stargazers_count,
  created_at,
}) {
  return (
    <ContentGridItem
      key={id}
      url={html_url}
      title={name}
      description={description}
      extra={
        <IconsList>
          <IconsListItem
            label="Stars"
            icon={<Star width={18} height={18} />}
            value={stargazers_count}
          />
          <IconsListItem
            label="Date created"
            icon={<Clock width={18} height={18} />}
            value={formatDate(new Date(created_at))}
          />
        </IconsList>
      }
      tags={[language?.toLowerCase()]}
    />
  );
}
