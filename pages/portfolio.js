import Layout from '@/components/Layout';
import { Page } from '@/components/Page';
import PageHeader from '@/components/PageHeader';
import ProjectCard from '@/components/ProjectCard';
import projects from '@/data/projects.json';

const pageInfo = {
  title: 'Portfolio',
  description: 'Weekend projects for fun and learning.',
};

export default function Portfolio() {
  return (
    <Layout {...pageInfo}>
      <Page>
        <PageHeader title={pageInfo.title} subtitle={pageInfo.description} />
        <div className="flex flex-col space-y-4">
          {projects.data.map(project => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </Page>
    </Layout>
  );
}
