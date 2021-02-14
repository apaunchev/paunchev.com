import projects from '@/data/projects';
import PageLayout from '@/layouts/page';
import ContentCard from '@/components/ContentCard';

const pageInfo = {
  title: 'Portfolio',
  description: 'Weekend projects for fun and learning.',
};

export default function Portfolio() {
  return (
    <PageLayout {...pageInfo}>
      <div className="grid grid-cols-full gap-8 lg:gap-12">
        {projects.map(project => (
          <ContentCard key={project.title} {...project} />
        ))}
      </div>
    </PageLayout>
  );
}
