import Container from '@/components/Container';
import PageHeader from '@/components/PageHeader';
import Resume from '@/components/Resume';

const pageInfo = {
  description:
    'Angel is a software engineer with over ten years of experience in building digital products.',
};

export default function About() {
  return (
    <Container {...pageInfo}>
      <div className="max-w-lg lg:max-w-xl space-y-5 md:space-y-6 lg:space-y-7">
        <PageHeader
          title="Hi, I’m Angel—"
          subtitle="a software engineer with over ten years of experience in building digital products."
        />
        <Resume />
      </div>
    </Container>
  );
}
