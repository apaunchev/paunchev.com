import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { menu } from 'lib/menu';

export function Nav() {
  const router = useRouter();

  return (
    <nav className="flex flex-wrap items-center gap-x-2">
      {Object.keys(menu).map(key => {
        const { href, activePaths, title } = menu[key];

        return (
          <Link key={key} href={href}>
            <a
              className={clsx(
                'px-2 py-1 sm:px-3 sm:py-2 rounded-md transition hover:bg-zinc-200',
                activePaths.includes(router.pathname)
                  ? 'font-semibold'
                  : 'font-normal',
              )}
            >
              {title}
            </a>
          </Link>
        );
      })}
    </nav>
  );
}
