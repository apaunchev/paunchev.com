import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { routes } from '@/lib/routes';

export default function Container({ children, title, description }) {
  const router = useRouter();
  let formattedTitle;

  if (!title || title === 'About') {
    formattedTitle = 'Angel Paunchev';
  } else {
    formattedTitle = `${title} – Angel Paunchev`;
  }

  return (
    <>
      <Head>
        <title>{formattedTitle}</title>
        {description ? <meta name="description" content={description} /> : null}
      </Head>
      <div className="container">
        <header className="container__header">
          <div className="photo">
            <Link href="/">
              <a>
                <Image
                  src="/me.png"
                  alt=""
                  width={80}
                  height={80}
                  quality={100}
                  priority={true}
                />
              </a>
            </Link>
          </div>
          <nav className="navigation">
            {Object.keys(routes).map(key => {
              const { href, activePaths, title } = routes[key];
              const classes = ['navigation__item'];

              if (activePaths.includes(router.pathname)) {
                classes.push('navigation__item--active');
              }

              return (
                <Link key={key} href={href}>
                  <a className={classes.join(' ')}>{title}</a>
                </Link>
              );
            })}
          </nav>
        </header>
        <main className="container__main">{children}</main>
      </div>
    </>
  );
}
