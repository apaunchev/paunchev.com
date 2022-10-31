import fs from "fs";
import matter from "gray-matter";
import { GetStaticProps } from "next";
import Link from "next/link";
import { remark } from "remark";
import html from "remark-html";
import prism from "remark-prism";
import type { Frontmatter } from "./index";
import { NOTES_DIR } from "./index";

export default function NotePage({
  frontmatter,
  content,
}: {
  frontmatter: Frontmatter;
  content: string;
}) {
  return (
    <>
      <p>
        <Link href="/notes">&larr; Notes</Link>
      </p>
      <h1>{frontmatter.title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className="prose prose-zinc"
      />
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(NOTES_DIR);
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const fileName = fs.readFileSync(
    `${NOTES_DIR}/${context.params?.slug}.md`,
    "utf-8"
  );
  const { data, content } = matter(fileName);
  const remarkContent = await remark()
    .use(html, { sanitize: false })
    .use(prism)
    .process(content);

  return {
    props: {
      frontmatter: data,
      content: remarkContent.toString(),
    },
  };
};
