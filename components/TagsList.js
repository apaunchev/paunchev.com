export default function TagsList({ tags = [] }) {
  if (!tags.length) {
    return null;
  }

  return (
    <ul className="tags-list">
      {tags.map(tag => (
        <li key={tag} className="tags-list__item">
          {tag}
        </li>
      ))}
    </ul>
  );
}
