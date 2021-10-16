import { classNames } from '@/lib/helpers';
import { routes } from '@/lib/routes';
import Link from 'next/link';
import { useRouter } from 'next/router';

export function Nav() {
  const router = useRouter();

  return (
    <nav className="nav">
      {Object.keys(routes).map(key => {
        const { href, activePaths, title } = routes[key];

        return (
          <Link key={key} href={href}>
            <a
              className={classNames(
                'nav__item',
                activePaths.includes(router.pathname)
                  ? 'nav__item--active'
                  : '',
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
