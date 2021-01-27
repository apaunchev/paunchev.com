import Layout from '@/components/Layout';
import { Page } from '@/components/Page';
import PageHeader from '@/components/PageHeader';
import Resume from '@/components/Resume';

const pageInfo = {
  description:
    'Angel is a software engineer with over ten years of experience in building digital products.',
};

export default function About() {
  return (
    <Layout {...pageInfo}>
      <Page>
        <PageHeader
          title="Hi, I’m Angel—"
          subtitle="a software engineer with over ten years of experience in building digital products."
        />
        <Resume />
      </Page>
    </Layout>
  );
}
