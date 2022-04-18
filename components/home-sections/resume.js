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
    <section className="flex flex-col gap-4">
      <Heading title="Résumé" size="2xl" />
      <ol className="flex flex-col gap-4" reversed>
        {data.map(item => (
          <ResumeItem key={item.when} {...item} />
        ))}
      </ol>
    </section>
  );
}

function ResumeItem({ where, what, when, url, image }) {
  return (
    <li className="flex items-center gap-3">
      <a
        className="flex-none block text-[0px] w-16 aspect-square rounded-md transition hover:opacity-90"
        href={url}
      >
        <Image
          src={image}
          alt="eBag.bg"
          width={64}
          height={64}
          className="rounded-md"
        />
      </a>
      <div>
        <p className="flex items-baseline">
          <span className="font-semibold">{where}</span>
        </p>
        <p>{what}</p>
        <p className="text-zinc-500">{when}</p>
      </div>
    </li>
  );
}
