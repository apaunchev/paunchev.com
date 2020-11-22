import Layout from "../components/Layout";
import Link from "next/link";

const pageInfo = {
  title: "About",
  description: "I make software for the web. This is my space on the internet.",
};

const Page = () => (
  <Layout {...pageInfo}>
    <div className="Page">
      <h1>About</h1>
      <p>
        Hi, I am Angel. I make software for the web. This is my space on the
        internet.
      </p>
      <p>
        I have been building websites for over 10 years; I specialize in
        front-end web development. I aim for simple yet effective solutions that
        bring joy to both the user and the developer. Outside of work, I
        practice this on various side{" "}
        <Link href="/projects">
          <a>projects</a>
        </Link>
        .
      </p>
      <p>
        This website is an ever-changing collection of personal{" "}
        <Link href="/posts">
          <a>notes</a>
        </Link>{" "}
        and{" "}
        <Link href="/bookmarks">
          <a>resources</a>
        </Link>{" "}
        that inspired me or taught me something new. Its primary audience is a
        future version of me. In the meantime, I hope there is something
        interesting here for you too.
      </p>
    </div>
  </Layout>
);

export default Page;
