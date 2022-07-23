import { Page } from 'layouts/page';
import Image from 'next/image';
import playground from 'public/projects/playground.png';
import salaree from '/public/projects/salaree.png';

const pageInfo = {
  title: 'Projects',
};

const projects = [
  {
    name: 'Playground',
    description:
      'A browser playground for HTML, CSS and JavaScript. Designed for quick prototyping and experimenting with React components.',
    image: playground,
    websiteUrl: 'https://pg.paunchev.com',
    githubUrl: 'https://github.com/apaunchev/playground',
  },
  {
    name: 'Salaree',
    description:
      'A salary analysis tool for software engineers working in Bulgaria.',
    image: salaree,
    githubUrl: 'https://github.com/apaunchev/salaree',
  },
];

export default function Projects() {
  return (
    <Page title={pageInfo.title} description={pageInfo.description}>
      <div className="flex flex-col gap-8">
        {projects.map(project => (
          <Project key={project.name} {...project} />
        ))}
      </div>
    </Page>
  );
}

function Project({ name, description, image, websiteUrl, githubUrl }) {
  return (
    <div className="prose">
      <a
        href={websiteUrl || githubUrl}
        className="block text-[0px] bg-white shadow rounded-md transition-shadow hover:shadow-md"
      >
        <Image src={image} alt={name} className="rounded-md" />
      </a>
      <h2 className="mt-3 mb-1 text-2xl font-semibold leading-snug">{name}</h2>
      <p className="mb-0">{description}</p>
      {websiteUrl || githubUrl ? (
        <div className="mt-1 flex gap-4">
          {websiteUrl ? <a href={websiteUrl}>Visit website</a> : null}
          {githubUrl ? <a href={githubUrl}>See code on GitHub</a> : null}
        </div>
      ) : null}
    </div>
  );
}
