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
    activePaths: ['/library'],
    title: 'Library',
  },
};

function NavLink({ href, activePaths, title }) {
  const router = useRouter();

  return (
    <Link href={href}>
      <a
        className={
          activePaths.includes(router.pathname)
            ? 'mr-6 text-xl text-gray-900 border-b-2 border-purple-600 border-opacity-100 transition'
            : 'mr-6 text-xl color-gray-500 border-b-2 border-gray-900 border-opacity-20 hover:text-gray-900 hover:border-opacity-100 transition'
        }
      >
        {title}
      </a>
    </Link>
  );
}

export default function Header() {
  return (
    <header className="flex items-center">
      <div className="mr-8">
        <Image
          src="/me.png"
          alt="Photo of the author"
          width={96}
          height={96}
          quality={100}
          className="rounded-full"
        />
      </div>
      <nav className="flex">
        {Object.keys(routes).map(key => (
          <NavLink key={key} {...routes[key]} />
        ))}
      </nav>
    </header>
  );
}
