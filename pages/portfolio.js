import projects from '@/data/projects';
import PageLayout from '@/layouts/page';
import ContentCard from '@/components/ContentCard';
import PageGrid from '@/components/PageGrid';

const pageInfo = {
  title: 'Portfolio',
  description: 'Weekend projects for fun and learning.',
};

export default function Portfolio() {
  return (
    <PageLayout {...pageInfo}>
      <PageGrid>
        {projects.map(project => (
          <ContentCard key={project.title} {...project} />
        ))}
      </PageGrid>
    </PageLayout>
  );
}
