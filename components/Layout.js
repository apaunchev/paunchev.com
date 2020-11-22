import Head from "next/head";
import Header from "./Header";

const Layout = ({ children, title, description }) => (
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
      <link rel="manifest" href="/site.webmanifest" />
      <title>{title} – Angel Paunchev</title>
      {description ? <meta name="description" content={description} /> : null}
    </Head>
    <main>
      <Header />
      {children}
    </main>
  </>
);

export default Layout;
