import fs from "fs";
import matter from "gray-matter";
import { ContentLink } from "../../components/content-link";

export type Frontmatter = {
  title: string;
};

export default function NotesPage({
  notes,
}: {
  notes: { slug: string; frontmatter: Frontmatter }[];
}) {
  return (
    <>
      <h1>Notes</h1>
      {notes.map(({ slug, frontmatter }) => (
        <ContentLink
          key={slug}
          href={`/notes/${slug}`}
          title={frontmatter.title}
        />
      ))}
    </>
  );
}

export const NOTES_DIR = "content/notes";

export async function getStaticProps() {
  const files = fs.readdirSync(NOTES_DIR);
  const notes = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`${NOTES_DIR}/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      title: "Notes",
      notes,
    },
  };
}
