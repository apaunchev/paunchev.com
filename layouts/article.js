import Container from '@/components/Container';
import PageHeader from '@/components/PageHeader';

export default function ArticleLayout({ children, title, description }) {
  return (
    <Container title={title} description={description}>
      <article>
        <PageHeader title={title} subtitle={description} />
        {children}
      </article>
    </Container>
  );
}
