export function TagsList({ tags = [] }) {
  if (!tags.length) {
    return null;
  }

  return (
    <ul className="flex flex-wrap">
      {tags.map(tag => (
        <li
          key={tag}
          className="mt-3 mr-2 py-1 px-3 bg-gray-100 lowercase text-gray-900 text-sm dark:bg-gray-600 dark:text-gray-300"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
