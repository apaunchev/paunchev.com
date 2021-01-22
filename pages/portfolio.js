import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import ProjectCard from '@/components/ProjectCard';
import projects from '@/data/projects.json';

const pageInfo = {
  title: 'Portfolio',
  description: 'Stuff I made.',
};

export default function Portfolio() {
  return (
    <Layout {...pageInfo}>
      <PageHeader title={pageInfo.title} subtitle={pageInfo.description} />
      <div className="max-w-prose">
        {projects.data.map(project => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </Layout>
  );
}
