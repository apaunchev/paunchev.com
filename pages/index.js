import Layout from "../components/Layout";
import Link from "next/link";

export default () => (
  <Layout>
    <h1>About</h1>
    <p>
      I am a software engineering leader with experience in the technology
      services industry. I am based in Sofia and this is my space on the
      internet.
    </p>
    <p>
      I care deeply about shipping high-quality software while enabling the
      individuals behind it to innovate and grow.
    </p>
    <p>
      Fully embracing the growth mindset myself, you will often find me reading,
      experimenting, and tinkering on personal{" "}
      <Link href="/projects">
        <a>projects</a>
      </Link>
      .
    </p>
    <p>
      You can find me around the web by my username, <b>apaunchev</b>. If you
      want to quickly get in touch, feel free to{" "}
      <a href="mailto:apaunchev@gmail.com">shoot me an email</a>.
    </p>
    <blockquote>
      <p>The world is changed by your example, not by your opinion.</p>
    </blockquote>
  </Layout>
);
