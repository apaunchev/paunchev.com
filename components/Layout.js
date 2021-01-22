import Head from 'next/head';
import Header from './Header';

export default function Layout({ children, title, description }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title ? `${title} – ` : null}Angel Paunchev</title>
        {description ? <meta name="description" content={description} /> : null}
      </Head>
      <div className="px-6 py-8 md:px-16 lg:px-24 lg:py-16">
        <div className="flex flex-col space-y-12">
          <Header />
          <main>{children}</main>
        </div>
      </div>
    </>
  );
}
