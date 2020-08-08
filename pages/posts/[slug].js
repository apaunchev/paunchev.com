import Layout from "../../components/Layout";
import Post from "../../components/Post";
import markdownToHtml from "../../lib/markdownToHtml";
import { getAllPosts, getPostBySlug } from "../../lib/posts";

const PostPage = ({ post }) => {
  const pageInfo = {
    title: post?.title,
    description: post?.summary,
  };

  return (
    <Layout {...pageInfo}>
      <div className="Page">
        <Post post={post} />
      </div>
    </Layout>
  );
};

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, ["title", "date", "slug", "content"]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

export default PostPage;
