export default function ProjectCard({ name, description, url }) {
  return (
    <a
      href={url}
      className="p-3 border-2"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div>
        <h2 className="text-lg font-bold tracking-tight">{name}</h2>
        <p className="my-0 text-base text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </div>
    </a>
  );
}
