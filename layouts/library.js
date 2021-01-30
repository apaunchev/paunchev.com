import Container from '@/components/Container';
import PageHeader from '@/components/PageHeader';

export default function LibraryLayout({ children, title, description }) {
  return (
    <Container title={title} description={description}>
      <div className="max-w-7xl space-y-5 md:space-y-6 lg:space-y-7">
        <PageHeader title={title} subtitle={description} />
        {children}
      </div>
    </Container>
  );
}
