import {
  ContentGrid,
  ContentGridRepositoryItem,
} from '@/components/content-grid';
import { PageHeader } from '@/components/page-header';
import { PageLayout } from '@/layouts/page';
import { GitHub } from 'react-feather';

const pageInfo = {
  title: 'Projects',
  description: 'Code I have shared.',
};

export default function Projects({ data }) {
  return (
    <PageLayout title={pageInfo.title} description={pageInfo.description}>
      <PageHeader title={pageInfo.title} subtitle={pageInfo.description} />
      <ContentGrid>
        {data.map(item => (
          <ContentGridRepositoryItem key={item.id} {...item} />
        ))}
      </ContentGrid>
      <hr className="hr--transparent" />
      <p className="text-center">
        <a
          className="button"
          href="https://github.com/apaunchev?tab=repositories"
        >
          <GitHub width={18} height={18} />
          See all on GitHub
        </a>
      </p>
    </PageLayout>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    `https://api.github.com/users/apaunchev/repos?sort=pushed`,
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`,
      },
    },
  );
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
}
