import { emojiTypes } from '@/lib/types';

export function TagsList({ tags = [] }) {
  if (tags.length === 0) {
    return null;
  }

  return (
    <ul className="tags-list">
      {tags.map(tag => (
        <li key={tag} className="tags-list-item">
          {emojiTypes[tag]} {tag}
        </li>
      ))}
    </ul>
  );
}
