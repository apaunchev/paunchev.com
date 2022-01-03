import { Container } from '@/components/container';
import { PageHeader } from '@/components/page-header';

export function WidePage({ children, title, description, image }) {
  return (
    <div className="wide-page">
      <Container title={title} description={description}>
        <PageHeader title={title} description={description} image={image} />
        {children}
      </Container>
    </div>
  );
}
