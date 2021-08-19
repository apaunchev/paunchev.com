import { Container } from '@/components/container';

export function ArticleLayout({ children, title, description }) {
  return (
    <div className="article-layout">
      <Container title={title} description={description}>
        {children}
      </Container>
    </div>
  );
}
