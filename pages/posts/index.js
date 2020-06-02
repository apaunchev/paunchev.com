import matter from "gray-matter";
import Link from "next/link";
import Image from "../../components/Image";
import Layout from "../../components/Layout";

const pageInfo = {
  title: "Writing",
  description:
    "Short posts and articles. Mostly written for myself, but I hope you find something useful too.",
};

export default ({ posts }) => (
  <Layout {...pageInfo}>
    <div className="Page Page--wide">
      <h1>{pageInfo.title}</h1>
      <p className="text-lead">{pageInfo.description}</p>
      <div className="Grid">
        {posts.map((post) => (
          <article key={post.slug}>
            <Link href="/posts/[slug]" as={`/posts/${post.slug}`}>
              <a className="BlockLink">
                <Image
                  className="BlockLink__image"
                  src={post.frontmatter.imageSrc}
                />
                <h2 className="BlockLink__title clamped clamped--1">
                  {post.frontmatter.title} →
                </h2>
              </a>
            </Link>
            <p className="mt-5 clamped clamped--3">
              {post.frontmatter.summary ||
                post.markdownBody.substring(0, 200).trim()}
            </p>
          </article>
        ))}
      </div>
    </div>
  </Layout>
);

export async function getStaticProps() {
  const posts = ((context) => {
    const keys = context.keys();
    const values = keys.map(context);

    return keys.map((key, index) => {
      const slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);
      const value = values[index];
      const document = matter(value.default);

      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      };
    });
  })(require.context("../../posts", true, /\.md$/));

  return {
    props: {
      posts: posts
        .filter((n) => n.frontmatter.postedAt)
        .sort(
          (a, b) =>
            new Date(b.frontmatter.postedAt) - new Date(a.frontmatter.postedAt)
        ),
    },
  };
}
