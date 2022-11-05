import Link from "next/link";

export function NavLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="text-sm font-semibold tracking-tight text-zinc-500 no-underline transition-colors hover:text-zinc-800"
    >
      {children}
    </Link>
  );
}
