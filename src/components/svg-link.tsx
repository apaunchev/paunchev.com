export function SVGLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="flex h-5 w-5 fill-zinc-400 transition-colors hover:fill-zinc-800"
    >
      {children}
    </a>
  );
}
