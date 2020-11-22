import Layout from "../../components/Layout";
import PostPreview from "../../components/PostPreview";
import { getAllPosts } from "../../lib/posts";

const pageInfo = {
  title: "Notes",
};

const PostsPage = ({ posts }) => (
  <Layout {...pageInfo}>
    <div className="Page">
      <h1>{pageInfo.title}</h1>
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
