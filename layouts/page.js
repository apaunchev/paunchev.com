import Container from '@/components/Container';
import PageHeader from '@/components/PageHeader';

export default function PageLayout({ children, title, description }) {
  return (
    <Container title={title} description={description}>
      <div className="space-y-4 lg:space-y-6">
        <PageHeader title={title} subtitle={description} />
        <section className="flex flex-col space-y-3">{children}</section>
      </div>
    </Container>
  );
}
