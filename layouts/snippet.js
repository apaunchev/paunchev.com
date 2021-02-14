import Container from '@/components/Container';
import PageHeader from '@/components/PageHeader';
import Head from 'next/head';

export default function SnippetLayout({ children, title, description }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/prismjs@1.23.0/themes/prism.css"
        />
      </Head>
      <Container title={title} description={description}>
        <div className="max-w-lg lg:max-w-xl space-y-4 md:space-y-6 lg:space-y-8">
          <PageHeader title={title} subtitle={description} />
          {children}
        </div>
      </Container>
    </>
  );
}
