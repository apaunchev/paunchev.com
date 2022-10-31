import Link from "next/link";

export function ContentLink({
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
        <Link href={href}>{title}</Link>
      </p>
      <p className="my-0 text-sm text-zinc-600">{description}</p>
    </article>
  );
}
