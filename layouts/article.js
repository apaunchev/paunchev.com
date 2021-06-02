import Container from '@/components/Container';

export default function ArticleLayout({ children, title, description }) {
  return (
    <Container title={title} description={description}>
      <article className="article">{children}</article>
    </Container>
  );
}
