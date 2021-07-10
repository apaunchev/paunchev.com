export function TagsList({ tags = [] }) {
  if (!tags.length) {
    return null;
  }

  return (
    <ul className="tags-list">
      {tags.map(tag => (
        <li key={tag} className="tags-list-item">
          {tag}
        </li>
      ))}
    </ul>
  );
}
