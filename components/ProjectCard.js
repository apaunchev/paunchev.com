export default function ProjectCard({ name, description, url, tags }) {
  return (
    <a
      href={url}
      className="p-3 border-2 dark:border-gray-600"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className="text-lg font-bold tracking-tight">{name}</h2>
      <p className="my-0 text-base text-gray-700 dark:text-gray-400">
        {description}
      </p>
      {tags && tags.length ? (
        <ul className="flex">
          {tags.map(tag => (
            <li
              key={tag}
              className="mt-3 mr-2 py-1 px-3 bg-gray-100 lowercase text-gray-900 text-sm dark:bg-gray-600 dark:text-gray-300"
            >
              {tag}
            </li>
          ))}
        </ul>
      ) : null}
    </a>
  );
}
