import Container from '@/components/Container';

export default function PageLayout({ children, title, description }) {
  return (
    <Container title={title} description={description}>
      {children}
    </Container>
  );
}
