import css from 'styled-jsx/css';
import ArticleLayout from '@/layouts/article';
import PortfolioCard from '@/components/PortfolioCard';
import projects from '@/data/portfolio';

const pageInfo = {
  title: 'Portfolio',
  description: 'Personal projects for fun and learning.',
};

export default function Portfolio() {
  return (
    <ArticleLayout {...pageInfo}>
      {projects.map(project => (
        <PortfolioCard key={project.url} {...project} />
      ))}
    </ArticleLayout>
  );
}
