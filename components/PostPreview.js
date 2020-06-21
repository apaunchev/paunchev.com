import Link from "next/link";
import DateFormater from "./DateFormatter";

export default ({ post }) => (
  <article key={post.slug} className="PostPreview">
    <h2 className="my-0">
      <Link href="/posts/[slug]" as={`/posts/${post.slug}`}>
        <a>{post.title}</a>
      </Link>
    </h2>
    <div className="text-meta">
      <DateFormater dateString={post.date} />
    </div>
  </article>
);