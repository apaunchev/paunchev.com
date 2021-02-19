import css from 'styled-jsx/css';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

const routes = {
  about: {
    href: '/',
    activePaths: ['/'],
    title: 'About',
  },
  portfolio: {
    href: '/portfolio',
    activePaths: ['/portfolio'],
    title: 'Portfolio',
  },
  library: {
    href: '/library',
    activePaths: ['/library', '/library/[type]'],
    title: 'Library',
  },
  snippets: {
    href: '/snippets',
    activePaths: ['/snippets', '/snippets/[slug]'],
    title: 'Snippets',
  },
  uses: {
    href: '/uses',
    activePaths: ['/uses'],
    title: 'Uses',
  },
};

export default function Header() {
  const router = useRouter();

  return (
    <header>
      <Link href="/">
        <a>
          <Image
            src="/me.png"
            alt=""
            width={80}
            height={80}
            quality={100}
            className="rounded"
          />
        </a>
      </Link>
      <nav>
        {Object.keys(routes).map(key => {
          const { href, activePaths, title } = routes[key];

          return (
            <Link key={key} href={href}>
              <a
                className={
                  activePaths.includes(router.pathname) ? 'active' : null
                }
              >
                {title}
              </a>
            </Link>
          );
        })}
      </nav>
      <style jsx>{styles}</style>
    </header>
  );
}

const styles = css`
  header {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
  }

  header > a {
    display: flex;
    border: none;
    flex-shrink: 0;
    width: 4rem;
  }

  nav {
    display: flex;
    flex-wrap: wrap;
  }

  nav > a {
    margin-top: 0.25rem;
    margin-left: 1rem;
  }

  nav > a:hover,
  nav > a:focus,
  nav > a.active {
    border-color: var(--color-links-active);
  }

  @media (min-width: 1024px) {
    header {
      margin-bottom: 2.5rem;
    }

    header > a {
      width: 5rem;
    }
  }
`;
