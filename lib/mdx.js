import { serialize } from 'next-mdx-remote/serialize';

export const prepareMDX = async (content, data) => {
  const mdxSource = await serialize(content, {
    mdxOptions: {},
    scope: data,
  });

  return {
    source: mdxSource,
    frontMatter: data,
    rawMDX: content,
  };
};
