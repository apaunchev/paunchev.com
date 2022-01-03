import Link from 'next/link';
import Image from 'next/image';
import author from '@/public/me.png';
import { Nav } from '@/components/nav';
import { useRouter } from 'next/router';
import { routes } from '@/lib/routes';

export function Header() {
  const router = useRouter();

  if (routes.home.activePaths.includes(router.pathname)) {
    return null;
  }

  return (
    <header className="header">
      <div>
        <Link href="/">
          <a className="header__image round-image">
            <Image src={author} alt="" />
          </a>
        </Link>
      </div>
      <div>
        <Nav />
      </div>
    </header>
  );
}
