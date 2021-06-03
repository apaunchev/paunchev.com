import ContentLink from '@/components/ContentLink';
import ContentList from '@/components/ContentList';
import PageHeader from '@/components/PageHeader';
import projects from '@/content/projects';
import ArticleLayout from '@/layouts/article';
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
