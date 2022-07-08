import { menu } from 'lib/menu';
import Link from 'next/link';

export function Intro() {
  return (
    <section className="prose prose-zinc prose-h1:text-3xl prose-h1:mb-0 prose-p:text-zinc-800">
      <h1>
        I’m a software engineer from Bulgaria who turns ambitious ideas into
        reality.
      </h1>
      <p>
        I’ve been deeply invested in computers and technology since I was in
        school. What used to be just a hobby turned into my field of study, then
        into my career.
      </p>
      <p>
        At present, I work as a front-end engineer and try to build easy-to-use,
        resilient and scalable interfaces. I put the user first, but the
        developer is a close second. My tools of the trade include modern
        JavaScript and CSS. I know my way around a backend API, but the frontend
        is where I feel at home.
      </p>
      <p>
        I use this site to experiment with web technologies—it changes often and
        abruptly. Instead of making yet another portfolio that never gets
        updated, I embed live data from other places, so that it automatically
        shows what I’ve been up to recently. Also, I use it as long-term storage
        for various <Link href={menu.bookmarks.href}>bookmarks</Link> and{' '}
        <Link href={menu.snippets.href}>snippets</Link> that I may want to go
        back to later.
      </p>
    </section>
  );
}
