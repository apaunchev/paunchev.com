import ContentCardLibrary from '@/components/ContentCardLibrary';
import ContentGrid from '@/components/ContentGrid';
import ContentLink from '@/components/ContentLink';
import ContentList from '@/components/ContentList';
import PageHeader from '@/components/PageHeader';
import projects from '@/content/projects';
import ArticleLayout from '@/layouts/article';
import { getLibrary } from '@/lib/library';
import { routes } from '@/lib/routes';
import Image from 'next/image';
import Link from 'next/link';
import { GitHub, Linkedin } from 'react-feather';

const pageInfo = {
  title: null,
  description: 'Angel is a software engineer from Bulgaria.',
  headerTitle: 'Hey, I’m Angel—',
  headerSubtitle:
    'a software engineer with an eye for details and an obsession for quality. Welcome to my space on the internet.',
};

export default function Home({ recentItems }) {
  return (
    <ArticleLayout title={pageInfo.title} description={pageInfo.description}>
      <PageHeader
        title={pageInfo.headerTitle}
        subtitle={pageInfo.headerSubtitle}
      />
      <div className="photo">
        <Image
          src="/me.png"
          alt=""
          width={130}
          height={130}
          quality={100}
          priority={true}
        />
      </div>
      <p>
        I specialize in front-end development and delivering meaningful user
        experiences for the web and mobile. I navigate complex business domains,
        helping teams to meet targets and bring value to customers. I approach
        everything with a growth mindset and try to inspire and mentor others
        along the way.
      </p>
      <p>
        Specialties: JavaScript, CSS, architecture, performance, testing, build
        tools, accessibility.
      </p>
      <p className="button-group">
        <a
          className="button button--outline"
          href="https://www.linkedin.com/in/apaunchev/"
        >
          <Linkedin width={18} height={18} />
          Connect on LinkedIn
        </a>
        <a
          className="button button--outline"
          href="https://github.com/apaunchev"
        >
          <GitHub width={18} height={18} />
          See code on GitHub
        </a>
      </p>
      <hr className="hr--large" />
      <h2>From the library</h2>
      <ContentGrid>
        {recentItems.map(item => (
          <ContentCardLibrary key={item.url} {...item} />
        ))}
      </ContentGrid>
      <hr className="hr--transparent" />
      <p className="text-center">
        <Link href={routes.library.href}>
          <a className="button button--arrow">Browse library</a>
        </Link>
      </p>
      <hr className="hr--large" />
      <h2>Featured projects</h2>
      <ContentList>
        {projects.map(({ title, description, href }) => (
          <ContentLink
            key={title}
            href={href}
            title={title}
            description={description}
          />
        ))}
      </ContentList>
      <hr className="hr--transparent" />
      <p className="text-center">
        <Link href={routes.projects.href}>
          <a className="button button--arrow">More projects</a>
        </Link>
      </p>
    </ArticleLayout>
  );
}

export async function getStaticProps() {
  const recentItems = getLibrary(true);

  return {
    props: {
      recentItems,
    },
  };
}
