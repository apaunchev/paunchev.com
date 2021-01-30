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
};

function Navigation() {
  return (
    <nav className="flex">
      {Object.keys(routes).map(key => (
        <NavLink key={key} {...routes[key]} />
      ))}
    </nav>
  );
}

function NavLink({ href, activePaths, title }) {
  const router = useRouter();

  return (
    <Link href={href}>
      <a
        className={
          activePaths.includes(router.pathname)
            ? 'mr-4 lg:mr-5 pb-1 lg:text-lg border-purple-600'
            : 'mr-4 lg:mr-5 pb-1 lg:text-lg'
        }
      >
        {title}
      </a>
    </Link>
  );
}

function AvatarLink() {
  return (
    <Link href="/">
      <a className="inline-block mr-5 lg:mr-6 border-none w-16 lg:w-20">
        <Image
          src="/me.png"
          alt="Photo of the author"
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
    <header className="flex items-center">
      <AvatarLink />
      <Navigation />
    </header>
  );
}
