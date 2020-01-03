import Layout from "../components/Layout";
import Link from "next/link";

export default () => (
  <Layout>
    <h1>About</h1>
    <p>
      👋 I’m a software engineer based in Sofia, Bulgaria. Currently leading a
      team of other engineers at <a href="https://spotme.com/">SpotMe</a>. This
      is my space on the internet.
    </p>
    <p>
      In my spare time I like to build tools or websites that solve a particular
      problem I had; you can browse the most recent ones{" "}
      <Link href="/projects">
        <a>here</a>
      </Link>
      .
    </p>
    <p>
      You can find me on <a href="https://github.com/apaunchev">GitHub</a> where
      I am trying to build and grow 3 new things every year, or on{" "}
      <a href="https://www.goodreads.com/apaunchev">Goodreads</a> where I am
      challenging myself to read more and better.
    </p>
  </Layout>
);
