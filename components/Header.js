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
};

function Navigation() {
  return (
    <nav className="flex space-x-4 py-4 overflow-x-auto">
      {Object.keys(routes).map(key => (
        <NavLink key={key} {...routes[key]} />
      ))}
    </nav>
  );
}

function NavLink({ href, activePaths, title }) {
  const router = useRouter();
  const isActive = activePaths.includes(router.pathname);

  return (
    <Link href={href}>
      <a className={isActive ? 'border-purple-600' : null}>{title}</a>
    </Link>
  );
}

function AvatarLink() {
  return (
    <Link href="/">
      <a className="block border-none flex-shrink-0 w-16 lg:w-20">
        <Image
          src="/me.png"
          alt=""
          width={80}
          height={80}
          quality={100}
          className="rounded-full"
        />
      </a>
    </Link>
  );
}

export default function Header() {
  return (
    <header className="flex items-center space-x-4 lg:text-lg">
      <AvatarLink />
      <Navigation />
    </header>
  );
}
