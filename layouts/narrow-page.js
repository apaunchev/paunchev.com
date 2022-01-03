import { Container } from '@/components/container';

export function NarrowPage({ children, title, description }) {
  return (
    <div className="narrow-page">
      <Container title={title} description={description}>
        {children}
      </Container>
    </div>
  );
}
