import Link from 'next/link';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';

export default function About() {
  return (
    <Layout>
      <PageHeader
        title="Hi, I am Angel–"
        subtitle="a software engineer with over ten years of experience in building digital products."
      />
      <article className="prose prose-purple lg:prose-lg">
        <p>
          I specialize in front-end web development with a focus on UI
          frameworks, performance, and making websites easier to use.
        </p>
        <p>
          I use this website as a{' '}
          <Link href="/portfolio">
            <a>portfolio</a>
          </Link>{' '}
          and a{' '}
          <Link href="/library">
            <a>library</a>
          </Link>
          .
        </p>
        <p className="flex">
          <a className="mr-4" href="/">
            Email
          </a>
          <Link href="/resume">
            <a className="mr-4">Résumé</a>
          </Link>
          <a className="mr-4" href="/">
            LinkedIn
          </a>
          <a className="mr-4" href="/">
            GitHub
          </a>
        </p>
      </article>
    </Layout>
  );
}
