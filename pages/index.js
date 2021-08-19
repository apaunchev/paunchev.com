import { ContentGrid, ContentGridLibraryItem } from '@/components/content-grid';
import { PageHeader } from '@/components/page-header';
import { ArticleLayout } from '@/layouts/article';
import { getLibrary } from '@/lib/library';
import { routes } from '@/lib/routes';
import author from '@/public/me.png';
import Image from 'next/image';
import Link from 'next/link';
import { GitHub, Linkedin } from 'react-feather';

const pageInfo = {
  title: null,
  description: 'Angel is a software engineer from Sofia, Bulgaria.',
  headerTitle: 'Hey! I’m Angel.',
  headerSubtitle: 'I’m a software engineer from Sofia, Bulgaria.',
};

export default function Home({ recentItems }) {
  return (
    <ArticleLayout title={pageInfo.title} description={pageInfo.description}>
      <PageHeader
        title={pageInfo.headerTitle}
        subtitle={pageInfo.headerSubtitle}
      />
      <div className="intro">
        <div className="photo">
          <Image src={author} alt="Picture of the author" placeholder="blur" />
        </div>
        <p>
          I develop software for the web platform. With knowledge across the
          stack and experience in cross-functional collaboration, I help teams
          provide robust solutions to real customer problems.
        </p>
        <p>
          This site is where I collect digital content that inspires me or helps
          me in my day-to-day, and that I want to be able to quickly look up
          when needed.
        </p>
      </div>
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
