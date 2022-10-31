export function ExternalLink({
  title,
  href,
  description,
}: {
  title: string;
  href: string;
  description?: string;
}) {
  return (
    <article>
      <p className="my-0">
        <a href={href}>{title}</a>
      </p>
      <p className="my-0 text-sm text-zinc-600">{description}</p>
    </article>
  );
}
