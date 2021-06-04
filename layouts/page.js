import { Container } from '@/components/Container';

export function PageLayout({ children, title, description }) {
  return (
    <Container title={title} description={description}>
      {children}
    </Container>
  );
}
