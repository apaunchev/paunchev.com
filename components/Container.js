import Head from 'next/head';
import Header from '@/components/Header';

export default function Container({ children, title, description }) {
  return (
    <>
      <Head>
        <title>{title ? `${title} – ` : null}Angel Paunchev</title>
        {description ? <meta name="description" content={description} /> : null}
      </Head>
      <div className="flex flex-col space-y-6 md:space-y-9 lg:space-y-12">
        <Header />
        <main>{children}</main>
      </div>
    </>
  );
}
