import Container from '@/components/Container';
import PageHeader from '@/components/PageHeader';

export default function ArticleLayout({ children, title, description }) {
  return (
    <Container title={title} description={description}>
      <div className="max-w-lg lg:max-w-xl space-y-4 md:space-y-6 lg:space-y-8">
        <PageHeader title={title} subtitle={description} />
        {children}
      </div>
    </Container>
  );
}
