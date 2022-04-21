import Image from 'next/image';
import spotme from 'public/resume/spotme.jpg';
import ebag from 'public/resume/ebag.jpg';
import gcu from 'public/resume/gcu.jpg';
import { Heading } from 'components/content/heading';

const data = [
  {
    where: 'eBag.bg',
    what: 'Lead Front-end Engineer',
    when: '2020-present',
    url: 'https://www.ebag.bg/',
    image: ebag,
  },
  {
    where: 'SpotMe',
    what: 'Team Lead',
    when: '2016–2020',
    url: 'https://spotme.com/',
    image: spotme,
  },
  {
    where: 'SpotMe',
    what: 'Software Developer',
    when: '2015–2016',
    url: 'https://spotme.com/',
    image: spotme,
  },
  {
    where: 'Glasgow Caledonian University',
    what: 'BSc Computing (Web Systems Development)',
    when: '2011-2015',
    url: 'https://www.gcu.ac.uk/',
    image: gcu,
  },
];

export function Resume() {
  return (
    <section className="flex flex-col gap-6">
      <Heading
        title="Résumé"
        description="Summary of where I’ve worked and studied."
        size="text-2xl"
      />
      <ol className="flex flex-col gap-4 max-w-prose" reversed>
        {data.map(item => (
          <li key={item.when} className="flex gap-4">
            <ResumeItem {...item} />
          </li>
        ))}
      </ol>
      <p className="prose">
        See{' '}
        <a className="underline" href="https://www.linkedin.com/in/apaunchev/">
          LinkedIn
        </a>{' '}
        for details.
      </p>
    </section>
  );
}

function ResumeItem({ where, what, when, url, image }) {
  return (
    <a className="flex gap-4 transition hover:opacity-90" href={url}>
      <div className="flex-none text-[0px]">
        <Image
          src={image}
          alt={where}
          width={64}
          height={64}
          className="rounded-md"
        />
      </div>
      <div>
        <p className="flex flex-wrap items-center gap-x-2">
          <span className="font-semibold text-lg">{where}</span>
          <span className="inline-block flex-none rounded bg-zinc-200 p-1 text-xs font-medium leading-none">
            {when}
          </span>
        </p>
        <p>
          <span className="text-zinc-500">{what}</span>
        </p>
      </div>
    </a>
  );
}
