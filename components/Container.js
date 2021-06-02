import { routes } from '@/lib/routes';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Home, Bookmark, Code, Edit3 } from 'react-feather';

const iconsMap = {
  home: Home,
  library: Bookmark,
  notes: Edit3,
  projects: Code,
};

export default function Container({ children, title, description }) {
  const router = useRouter();
  const formattedTitle = title ? `${title} – Angel Paunchev` : 'Angel Paunchev';

  return (
    <>
      <Head>
        <title>{formattedTitle}</title>
        {description ? <meta name="description" content={description} /> : null}
      </Head>
      <div className="container">
        <header className="site-header">
          <nav className="site-nav">
            {Object.keys(routes).map(key => {
              const { href, activePaths, title } = routes[key];
              const Icon = iconsMap[key];
              const classes = ['nav-item'];

              if (activePaths.includes(router.pathname)) {
                classes.push('nav-item--active');
              }

              return (
                <Link key={key} href={href}>
                  <a className={classes.join(' ')}>
                    {Icon ? <Icon width={18} height={18} /> : null}
                    {title}
                  </a>
                </Link>
              );
            })}
          </nav>
        </header>
        <main className="site-main">
          {children}
          <footer className="site-footer">
            <p>
              Built with <a href="https://nextjs.org/">Next.js</a> and hosted on{' '}
              <a href="https://vercel.com/">Vercel</a>.{' '}
              <a href="https://github.com/apaunchev/paunchev.com">
                Source code
              </a>
              .
            </p>
            <p>© 2021</p>
          </footer>
        </main>
      </div>
    </>
  );
}
