import { routes } from '@/lib/routes';
import Link from 'next/link';
import { useRouter } from 'next/router';

export function Nav() {
  const router = useRouter();

  return (
    <nav className="nav">
      {Object.keys(routes).map(key => {
        const { href, activePaths, title } = routes[key];
        const classes = ['nav__item'];

        if (activePaths.includes(router.pathname)) {
          classes.push('nav__item--active');
        }

        return (
          <Link key={key} href={href}>
            <a className={classes.join(' ')}>{title}</a>
          </Link>
        );
      })}
    </nav>
  );
}
