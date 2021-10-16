import { serialize } from 'next-mdx-remote/serialize';
import remarkSlug from 'remark-slug';
import remarkAutolinkHeadings from 'remark-autolink-headings';

export const prepareMDX = async (content, data) => {
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
