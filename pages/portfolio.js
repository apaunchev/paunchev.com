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
      <section>
        {projects.map(project => (
          <PortfolioCard key={project.url} {...project} />
        ))}
      </section>
      <style jsx>{styles}</style>
    </ArticleLayout>
  );
}

const styles = css`
  section {
    margin: 1.5rem 0;
  }
`;
