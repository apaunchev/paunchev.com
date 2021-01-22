export default function ProjectCard({ name, description, url }) {
  return (
    <a
      href={url}
      className="block mb-4 hover:shadow"
      target="blank"
      rel="noopener noreferrer"
      aria-label={name}
    >
      <div className="border border-gray-200 rounded p-4">
        <h2 className="mb-1 text-lg font-bold tracking-tight text-gray-900">
          {name}
        </h2>
        <p className="leading-5 text-gray-700">{description}</p>
      </div>
    </a>
  );
}
