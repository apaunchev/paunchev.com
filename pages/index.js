import { ContentGrid, ContentGridLibraryItem } from '@/components/content-grid';
import { PageHeader } from '@/components/page-header';
import { ArticleLayout } from '@/layouts/article';
import { getLibrary } from '@/lib/library';
import { routes } from '@/lib/routes';
import Image from 'next/image';
import Link from 'next/link';
import { GitHub, Linkedin } from 'react-feather';
import author from '../public/me.png';

const pageInfo = {
  title: null,
  description: 'Angel is a software engineer from Bulgaria.',
  headerTitle: 'Hey, I’m Angel—',
  headerSubtitle:
    'a software engineer based in Sofia. Welcome to my space on the internet.',
};

export default function Home({ recentItems }) {
  return (
    <ArticleLayout title={pageInfo.title} description={pageInfo.description}>
      <PageHeader
        title={pageInfo.headerTitle}
        subtitle={pageInfo.headerSubtitle}
      />
      <div className="photo">
        <Image src={author} alt="Picture of the author" placeholder="blur" />
      </div>
      <p>
        I specialize in front-end development and delivering meaningful user
        experiences for the web and mobile. I navigate complex business domains
        with ease, helping teams to meet targets and bring value to customers. I
        approach everything with a growth mindset and try to inspire and mentor
        others along the way.
      </p>
      <p>
        Specialties: JavaScript, CSS, architecture, performance, testing, build
        tooling, accessibility.
      </p>
      <p className="button-group">
        <a className="button" href="https://www.linkedin.com/in/apaunchev/">
          <Linkedin width={18} height={18} />
          Connect on LinkedIn
        </a>
        <a className="button" href="https://github.com/apaunchev">
          <GitHub width={18} height={18} />
          See code on GitHub
        </a>
      </p>
      <hr className="hr--large" />
      <h2>From the library</h2>
      <ContentGrid>
        {recentItems.map(item => (
          <ContentGridLibraryItem key={item.url} {...item} />
        ))}
      </ContentGrid>
      <hr className="hr--transparent" />
      <p className="text-center">
        <Link href={routes.library.href}>
          <a className="button">Browse library →</a>
        </Link>
      </p>
    </ArticleLayout>
  );
}

export async function getStaticProps() {
  const recentItems = getLibrary({
    articles: 2,
    books: 2,
  });

  return {
    props: {
      recentItems,
    },
  };
}
