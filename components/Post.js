import DateFormater from "./DateFormatter";

export default ({ post }) => (
  <article key={post.slug} className="Post">
    <h1 className="my-0">{post.title}</h1>
    <div className="text-meta">
      <DateFormater dateString={post.date} />
    </div>
    <div dangerouslySetInnerHTML={{ __html: post.content }} />
  </article>
);
