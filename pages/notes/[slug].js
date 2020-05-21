import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Layout from "../../components/Layout";

export default ({ frontmatter, markdownBody }) => {
  if (!frontmatter) {
    return null;
  }

  const pageInfo = {
    title: frontmatter.title,
    description: frontmatter.summary || markdownBody.substring(0, 200),
  };

  return (
    <Layout {...pageInfo}>
      <div className="Page">
        <article>
          <h1>{frontmatter.title}</h1>
          <div>
            <ReactMarkdown source={markdownBody} />
          </div>
        </article>
      </div>
    </Layout>
  );
};

export async function getStaticProps(context) {
  const { slug } = context.params;
  const content = await import(`../../notes/${slug}.md`);
  const data = matter(content.default);

  return {
    props: {
      frontmatter: data.data,
      markdownBody: data.content,
    },
  };
}

export async function getStaticPaths() {
  const slugs = ((context) => {
    const keys = context.keys();

    return keys.map((key) => key.replace(/^.*[\\\/]/, "").slice(0, -3));
  })(require.context("../../notes", true, /\.md$/));
  const paths = slugs.map((slug) => `/notes/${slug}`);

  return {
    paths,
    fallback: false,
  };
}
