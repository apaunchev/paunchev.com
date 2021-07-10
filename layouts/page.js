import { Container } from '@/components/container';

export function PageLayout({ children, title, description }) {
  return (
    <Container title={title} description={description}>
      {children}
    </Container>
  );
}
