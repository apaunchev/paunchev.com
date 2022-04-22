import Head from 'next/head';
import { Header } from 'components/layout/header';
import { Heading } from 'components/content/heading';

export function Page({ children, title, description, image }) {
  const formattedTitle = title ? `${title} – Angel Paunchev` : 'Angel Paunchev';

  return (
    <>
      <Head>
        <title>{formattedTitle}</title>
        {description ? <meta name="description" content={description} /> : null}
      </Head>
      <div className="px-4 py-6 md:px-8 md:py-12">
        <Header />
        <main className="mt-6 md:mt-12 mx-auto max-w-3xl">
          {title ? (
            <Heading
              title={title}
              description={description}
              image={image}
              size="text-3xl"
            />
          ) : null}
          <div className="mt-4 flex flex-col gap-8 md:mt-6">{children}</div>
        </main>
      </div>
    </>
  );
}
