import Link from 'next/link';
import Image from 'next/image';
import author from '@/public/me.png';
import { Nav } from '@/components/nav';

export function Header() {
  return (
    <header className="header">
      <div>
        <Link href="/">
          <a className="header__image">
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
