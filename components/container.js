import Head from 'next/head';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

export function Container({ children, title, description }) {
  const formattedTitle = title ? `${title} – Angel Paunchev` : 'Angel Paunchev';

  return (
    <>
      <Head>
        <title>{formattedTitle}</title>
        {description ? <meta name="description" content={description} /> : null}
      </Head>
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
}
