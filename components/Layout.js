import Head from 'next/head';
import Header from '@/components/Header';

export default function Layout({ children, title, description }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <title>{title ? `${title} – ` : null}Angel Paunchev</title>
        {description ? <meta name="description" content={description} /> : null}
      </Head>
      <div className="px-6 py-6 md:px-12 md:py-12 lg:px-16 lg:py-16">
        <div className="flex flex-col space-y-6 md:space-y-9 lg:space-y-12">
          <Header />
          <main>{children}</main>
        </div>
      </div>
    </>
  );
}
