import Head from 'next/head';
import { Activity } from 'components/home-sections/activity';
import { Intro } from 'components/home-sections/intro';
import { Resume } from 'components/home-sections/resume';
import { Page } from 'layouts/page';

export default function HomePage() {
  return (
    <Page>
      <Head>
        <link
          as="fetch"
          crossOrigin="anonymous"
          href="/api/goodreads/latest"
          rel="preload"
        />
        <link
          as="fetch"
          crossOrigin="anonymous"
          href="/api/letterboxd/latest"
          rel="preload"
        />
      </Head>
      <Intro />
      <Resume />
      <Activity />
    </Page>
  );
}
