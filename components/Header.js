import css from 'styled-jsx/css';
import { useRouter } from 'next/router';
import Link from 'next/link';

const routes = {
  about: {
    href: '/',
    activePaths: ['/'],
    title: 'About',
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
  wishlist: {
    href: '/wishlist',
    activePaths: ['/wishlist'],
    title: 'Wishlist',
  },
  photos: {
    href: '/photos',
    activePaths: ['/photos'],
    title: 'Photos',
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
        <a className="avatar-link">
          <img
            src="/me.png"
            alt=""
            width={80}
            height={80}
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
    margin-bottom: calc(var(--layout-gap) / 2);
  }

  .avatar-link {
    display: block;
    border: none;
    flex-shrink: 0;
  }

  .avatar-link img {
    display: block;
    width: 70px;
    height: 70px;
  }

  nav {
    display: flex;
    flex-wrap: wrap;
  }

  nav > a {
    margin-bottom: 0.5rem;
    margin-left: 1.25rem;
    font-weight: 600;
    font-size: 1rem;
    color: var(--color-text-secondary);
  }

  nav > a:hover,
  nav > a:focus,
  nav > a.active {
    border-color: var(--color-links-active);
    color: var(--color-text-primary);
  }

  @media (min-width: 768px) {
    header {
      margin: calc(var(--layout-gap) / 2);
      flex-direction: column;
      align-items: start;
    }

    nav {
      margin-top: calc(var(--layout-gap) / 2);
      flex-direction: column;
    }

    nav > a {
      margin-bottom: 0.75rem;
      margin-left: 0;
      border-bottom: 0;
      border-left: 2px solid var(--color-borders);
      padding-left: 0.5rem;
    }
  }

  @media (min-width: 1024px) {
    .avatar-link img {
      width: 80px;
      height: 80px;
    }
  }
`;
