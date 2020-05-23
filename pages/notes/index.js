import matter from "gray-matter";
import Link from "next/link";
import Image from "../../components/Image";
import Layout from "../../components/Layout";

const pageInfo = {
  title: "Notes",
  description:
    "A non-chronological and ever-evolving collection of notes, mostly addressed to myself.",
};

export default ({ notes }) => (
  <Layout {...pageInfo}>
    <div className="Page Page--wide">
      <h1>{pageInfo.title}</h1>
      <p className="text-lead">{pageInfo.description}</p>
      <div className="Grid">
        {notes.map((note) => (
          <article key={note.slug}>
            <Link href="/notes/[slug]" as={`/notes/${note.slug}`}>
              <a className="BlockLink">
                <Image
                  className="BlockLink__image"
                  src={note.frontmatter.imageSrc}
                />
                <h2 className="BlockLink__title">{note.frontmatter.title} →</h2>
              </a>
            </Link>
            <p className="mt-5 clamped clamped--3">
              {note.frontmatter.summary || note.markdownBody.substring(0, 200)}
            </p>
          </article>
        ))}
      </div>
    </div>
  </Layout>
);

export async function getStaticProps() {
  const notes = ((context) => {
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
  })(require.context("../../notes", true, /\.md$/));

  return {
    props: {
      notes,
    },
  };
}
