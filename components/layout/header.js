import Image from 'next/image';
import Link from 'next/link';
import { Nav } from 'components/layout/Nav';
import portrait from 'public/portrait.png';

export function Header() {
  return (
    <header className="flex gap-4 mx-auto max-w-3xl">
      <Link href="/">
        <a className="flex-none block text-[0px] w-15 aspect-square rounded-full transition hover:opacity-90">
          <Image
            className="rounded-full"
            width={64}
            height={64}
            src={portrait}
            priority
            alt="Portrait of Angel Paunchev"
          />
        </a>
      </Link>
      <Nav />
    </header>
  );
}
