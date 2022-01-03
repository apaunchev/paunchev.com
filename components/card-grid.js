import Image from 'next/image';
import { classNames } from '@/lib/helpers';

export function CardGrid({ items, component = Card, isSingleColumn = false }) {
  if (items.length === 0) {
    return null;
  }

  const Component = component;

  return (
    <div
      className={classNames(
        'card-grid',
        isSingleColumn && 'card-grid--single-column',
      )}
    >
      {items.map(item => (
        <Component key={item.url} {...item} />
      ))}
    </div>
  );
}

export function Card({ title, description, meta, image, url, extra }) {
  return (
    <article className="card">
      {image && image.src ? (
        <header className="card__header">
          <figure className="card__image">
            <Image
              src={image.src}
              width={image.width}
              height={image.height}
              alt={title}
            />
          </figure>
        </header>
      ) : null}
      <div className="card__body">
        <a href={url}>
          {title ? (
            <h2 className="card__title" title={title}>
              {title}
            </h2>
          ) : null}
          {description ? (
            <p className="card__description">{description}</p>
          ) : null}
          {extra}
          {meta ? <p className="card__meta">{meta}</p> : null}
        </a>
      </div>
    </article>
  );
}

export function BookmarkCard({ title, description, url, quote, type }) {
  const emojiTypes = {
    articles: '💡',
    tools: '🛠',
  };

  return (
    <Card
      key={url}
      title={title}
      description={description}
      meta={
        <>
          <span title={type}>{emojiTypes[type]}</span> ·{' '}
          <span>{new URL(url).hostname}</span>
        </>
      }
      url={url}
      extra={
        quote ? (
          <div className="card__quote">
            <i>‘{quote}’</i>
          </div>
        ) : null
      }
    />
  );
}
