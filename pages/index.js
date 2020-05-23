import Layout from "../components/Layout";
import Link from "next/link";

const pageInfo = {
  title: "About",
  description: "I make software for the web. This is my space on the internet.",
};

export default () => (
  <Layout {...pageInfo}>
    <div className="Page">
      <h1>About</h1>
      <p>
        👋 Hi, I am Angel. I make software for the web. This is my space on the
        internet.
      </p>
      <p>
        I have been building websites for over 10 years; I specialize in
        front-end web development (which makes me{" "}
        <a
          className="arrowed"
          href="https://css-tricks.com/the-all-powerful-front-end-developer/"
        >
          all-powerful
        </a>
        ). I aim for simple yet effective solutions that bring joy to both the
        user and the developer.
      </p>
      <p>
        In my free time I work on pet{" "}
        <Link href="/projects">
          <a>projects</a>
        </Link>
        , play video games, read{" "}
        <a
          className="arrowed"
          href="https://www.goodreads.com/user/show/40107870-angel-paunchev"
        >
          books
        </a>
        , and try to be a decent human being as much as possible.
      </p>
      <p className="flex-row">
        <a className="arrowed" href="mailto:apaunchev@gmail.com">
          Email
        </a>
        <a className="arrowed" href="https://github.com/apaunchev">
          GitHub
        </a>
        <a className="arrowed" href="https://www.linkedin.com/in/apaunchev/">
          LinkedIn
        </a>
        <Link href="/cv">
          <a>CV →</a>
        </Link>
      </p>
    </div>
  </Layout>
);
