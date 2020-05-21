import Layout from "../components/Layout";

export default () => (
  <Layout>
    <div className="Page">
      <h1>About</h1>
      <p>
        👋 Hi, I’m Angel. I make software for the web. This is my space on the
        internet.
      </p>
      <p>
        I’ve been building websites for over 10 years. I specialize in front-end
        development (which makes me{" "}
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
        In my free time I work on pet projects, play video games, read books,
        and try to be a decent human being as much as possible.
      </p>
      <p className="flex-row">
        <a className="arrowed" href="https://github.com/apaunchev">
          GitHub
        </a>
        <a className="arrowed" href="https://www.linkedin.com/in/apaunchev/">
          LinkedIn
        </a>
        <a className="arrowed" href="mailto:apaunchev@gmail.com">
          Email
        </a>
      </p>
    </div>
  </Layout>
);
