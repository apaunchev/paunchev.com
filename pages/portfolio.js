import ProjectCard from '@/components/ProjectCard';
import projects from '@/data/projects.json';
import PageLayout from '@/layouts/page';

const pageInfo = {
  title: 'Portfolio',
  description: 'Weekend projects for fun and learning.',
};

function ProjectsList() {
  return (
    <div className="flex flex-col space-y-4">
      {projects.data.map(project => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
}

export default function Portfolio() {
  return (
    <PageLayout {...pageInfo}>
      <ProjectsList />
    </PageLayout>
  );
}
