import { Container } from '@/components/container';
import { PageHeader } from '@/components/page-header';

export function PageLayout({ children, title, description }) {
  return (
    <div className="page-layout">
      <Container title={title} description={description}>
        <PageHeader title={title} subtitle={description} />
        {children}
      </Container>
    </div>
  );
}
