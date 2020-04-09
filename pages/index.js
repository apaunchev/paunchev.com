import Layout from "../components/Layout";
import Link from "next/link";

export default () => (
  <Layout>
    <h1>About</h1>
    <p>
      Hi! 👋 I build software in Sofia, Bulgaria. This is my space on the
      internet.
    </p>
    <p>
      I work at <a href="https://spotme.com/">SpotMe</a> where we shape the
      future of digital event experiences.
    </p>
    <p>
      I make single-purpose web applications to solve everyday problems; from
      managing personal finances to visualizing work output, and more.{" "}
      <Link href="/projects">
        <a>See projects →</a>
      </Link>
    </p>
    <p>
      I collect interesting and useful articles, guides, and snippets for future
      reference.{" "}
      <Link href="/bookmarks">
        <a>See bookmarks →</a>
      </Link>
    </p>
    <p>
      You may find more information about me on{" "}
      <a href="https://www.linkedin.com/in/apaunchev/">LinkedIn</a> and{" "}
      <a href="https://www.goodreads.com/apaunchev">Goodreads</a>.
    </p>
  </Layout>
);
