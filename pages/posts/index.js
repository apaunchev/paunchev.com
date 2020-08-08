import Layout from "../../components/Layout";
import PostPreview from "../../components/PostPreview";
import { getAllPosts } from "../../lib/posts";

const pageInfo = {
  title: "Writing",
  description:
    "Short notes and articles. Mostly written for myself, but I hope you find something useful too.",
};

const PostsPage = ({ posts }) => (
  <Layout {...pageInfo}>
    <div className="Page">
      <h1>{pageInfo.title}</h1>
      <p className="text-lead">{pageInfo.description}</p>
      {posts.map((post) => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </div>
  </Layout>
);

export async function getStaticProps() {
  const posts = getAllPosts(["title", "date", "slug", "summary", "content"]);

  return {
    props: { posts },
  };
}

export default PostsPage;
