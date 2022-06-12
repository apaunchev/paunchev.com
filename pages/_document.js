import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="bg-zinc-50 text-zinc-800">
        <Head>
          <link
            as="font"
            crossOrigin="anonymous"
            href="/fonts/inter.woff2"
            rel="preload"
            type="font/woff2"
          />
          <link
            as="font"
            crossOrigin="anonymous"
            href="/fonts/inter-italic.woff2"
            rel="preload"
            type="font/woff2"
          />
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
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
