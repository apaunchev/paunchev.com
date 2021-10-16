import { formatDate } from '@/lib/helpers';
import { emojiTypes } from '@/lib/types';
import Link from 'next/link';

export function ContentList({ items }) {
  if (items.length === 0) {
    return null;
  }

  return (
    <div className="content-list">
      {items.map(({ type, url, title, description, date }) => {
        return (
          <ContentListItem
            key={url}
            href={url}
            icon={emojiTypes[type]}
            title={title}
            description={description}
            meta={formatDate(new Date(date), 'en-GB', {
              weekday: undefined,
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          />
        );
      })}
    </div>
  );
}

function ContentListItem({ href, icon, title, description, meta }) {
  return (
    <Link href={href}>
      <a className="content-list-item">
        <div className="content-list-row">
          <div>
            <div className="content-icon">{icon}</div>
            <div className="content-body">
              <div className="content-title">{title}</div>
              <div className="content-description">{description}</div>
            </div>
          </div>
          <div>
            <small className="content-meta">{meta}</small>
          </div>
        </div>
      </a>
    </Link>
  );
}
