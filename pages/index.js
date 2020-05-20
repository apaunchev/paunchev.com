import Layout from "../components/Layout";
import Link from "next/link";

export default () => (
  <Layout>
    <div className="Page">
      <h1>About</h1>
      <p>
        👋 I build software in Sofia, Bulgaria. This is my space on the
        internet.
      </p>
      <p>
        As a hobby I make single-purpose web applications that solve a
        particular problem; from managing personal finances to visualizing work
        output, and more.{" "}
        <Link href="/projects">
          <a className="arrowed">See projects</a>
        </Link>
      </p>
      <p>
        I also collect articles and other interesting resources, just because it
        is fun to go back to them in the future.{" "}
        <Link href="/bookmarks">
          <a className="arrowed">See bookmarks</a>
        </Link>
      </p>
      <p>
        Read more about me on{" "}
        <a href="https://www.linkedin.com/in/apaunchev/">LinkedIn</a>, or{" "}
        <a href="mailto:apaunchev@gmail.com">get in touch</a>.
      </p>
    </div>
  </Layout>
);
