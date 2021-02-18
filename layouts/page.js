import Container from '@/components/Container';
import PageHeader from '@/components/PageHeader';

export default function PageLayout({ children, title, description }) {
  return (
    <Container title={title} description={description}>
      <PageHeader title={title} subtitle={description} />
      {children}
    </Container>
  );
}
