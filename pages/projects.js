import { Page } from 'layouts/page';
import Image from 'next/image';
import playground from 'public/projects/playground.png';

const pageInfo = {
  title: 'Projects',
  description: 'Personal open-source projects.',
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
];

export default function Projects() {
  return (
    <Page title={pageInfo.title} description={pageInfo.description}>
      {projects.map(project => (
        <Project key={project.name} {...project} />
      ))}
    </Page>
  );
}

function Project({ name, description, image, websiteUrl, githubUrl }) {
  return (
    <div className="prose">
      <a href={websiteUrl} className="block text-[0px]">
        <Image src={image} alt={name} />
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
