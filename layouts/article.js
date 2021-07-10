import { Container } from '@/components/container';

export function ArticleLayout({ children, title, description }) {
  return (
    <Container title={title} description={description}>
      <article className="article">{children}</article>
    </Container>
  );
}
