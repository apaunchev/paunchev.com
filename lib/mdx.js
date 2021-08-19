import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import remarkSlug from 'remark-slug';
import remarkAutolinkHeadings from 'remark-autolink-headings';

export const prepareMDX = async (slug, baseDir) => {
  const filePath = join(process.cwd(), baseDir, `${slug}.mdx`);
  const source = fs.readFileSync(filePath);
  const { content, data } = matter(source);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkSlug, remarkAutolinkHeadings],
    },
    scope: data,
  });

  return {
    source: mdxSource,
    frontMatter: data,
    rawMDX: content,
  };
};
