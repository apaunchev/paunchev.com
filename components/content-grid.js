import Image from 'next/image';
import Avatar from 'boring-avatars';
import { TagsList } from '@/components/tags-list';
import { bookmarkTypes } from '@/lib/types';

export function ContentGrid({ items, component = ContentGridItem }) {
  if (items.length === 0) {
    return null;
  }

  const Component = component;

  return (
    <div className="content-grid">
      {items.map(item => (
        <Component key={item.url} {...item} />
      ))}
    </div>
  );
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
  let imageComponent = null;

  if (tags.includes(bookmarkTypes.people.toLowerCase())) {
    imageComponent = (
      <Avatar
        size={80}
        name={title}
        variant="beam"
        square={true}
        colors={['#EDECCF', '#F1C694', '#DC6378', '#207178', '#101652']}
      />
    );
  } else if (image && image.src) {
    imageComponent = (
      <Image
        src={image.src}
        width={image.width}
        height={image.height}
        alt={title}
      />
    );
  }

  return (
    <article className="content-grid-item">
      <a href={url}>
        {imageComponent ? (
          <figure className="content-grid-item__figure">
            {imageComponent}
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

export function ContentGridBookmarkItem({
  title,
  author,
  description,
  image,
  url,
  quote,
  type,
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
      tags={[type]}
    />
  );
}
