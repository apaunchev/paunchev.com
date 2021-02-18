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
        <article>
          <PageHeader title={title} subtitle={description} />
          {children}
        </article>
      </Container>
    </>
  );
}
