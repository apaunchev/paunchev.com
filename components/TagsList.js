export function TagsList({ tags = [] }) {
  if (!tags.length) {
    return null;
  }

  return (
    <ul>
      {tags.map(tag => (
        <li key={tag}>{tag}</li>
      ))}
      <style jsx>{`
        ul {
          display: flex;
          flex-wrap: wrap;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        li {
          margin-top: 0.75rem;
          margin-right: 0.5rem;
          padding: 0.25rem 0.75rem;
          background-color: var(--gray-8);
          border-radius: 0.25rem;
          font-size: 0.875rem;
          line-height: 1.25rem;
          text-transform: lowercase;
        }

        @media (prefers-color-scheme: dark) {
          li {
            background-color: var(--gray-3);
            color: var(--gray-6);
          }
        }
      `}</style>
    </ul>
  );
}
