import { PageHeader } from '@/components/page-header';
import { ProjectsList } from '@/components/projects-list';
import { ArticleLayout } from '@/layouts/article';
import { GitHub } from 'react-feather';

const pageInfo = {
  title: 'Projects',
  // description: '',
};

export default function Projects() {
  return (
    <ArticleLayout title={pageInfo.title} description={pageInfo.description}>
      <PageHeader
        title={pageInfo.title}
        subtitle={pageInfo.description}
        isCentered
      />
      <ProjectsList />
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
    </ArticleLayout>
  );
}
