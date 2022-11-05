export function SVGLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-5 w-5 fill-zinc-400 transition-colors hover:fill-zinc-800"
    >
      {children}
    </a>
  );
}
