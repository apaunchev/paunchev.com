import type { AppProps } from "next/app";
import "src/styles/main.css";
import "src/styles/prism-night-owl.css";
import { Layout } from "../components/layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout title={pageProps.title} description={pageProps.description}>
      <Component {...pageProps} />
    </Layout>
  );
}
