import Head from "next/head";
import Header from "./Header";

export default ({ children, title = "Angel Paunchev" }) => (
  <>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>{title}</title>
    </Head>
    <main>
      <Header />
      {children}
    </main>
  </>
);
