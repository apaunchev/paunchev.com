import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { prepareMDX } from 'lib/mdx';
import { menu } from 'lib/menu';

const SNIPPETS_DIR = join(process.cwd(), 'content/snippets');

export async function getSnippets(withContent) {
  const types = fs.readdirSync(SNIPPETS_DIR);
  const snippets = await Promise.all(
    types.map(type => getSnippetsByType(type, withContent)),
  );

  return snippets.flat();
}

export async function getSnippetsByType(type, withContent) {
  const slugs = fs
    .readdirSync(join(SNIPPETS_DIR, type), 'utf8')
    .map(filename => filename.split('.')[0]);

  return await Promise.all(
    slugs.map(slug => getSnippetBySlug(type, slug, withContent)),
  );
}

export async function getSnippetBySlug(type, slug, withContent = true) {
  slug = slug.split('.')[0];

  const file = fs.readFileSync(
    join(SNIPPETS_DIR, type, slug + '.mdx'),
    'utf-8',
  );
  const { content, data } = matter(file);
  const snippet = {
    type,
    slug,
    title: data.title,
    updatedAt: data.updatedAt,
    url: `${menu.snippets.href}/${type}/${slug}`,
  };

  if (!withContent) {
    return snippet;
  }

  const mdx = await prepareMDX(content, data);

  return {
    ...snippet,
    source: mdx.source,
    rawMDX: mdx.rawMDX,
  };
}

export async function getGroupedSnippets() {
  const snippets = await getSnippets(false);

  return snippets.reduce((acc, cur) => {
    const type = cur.type;

    if (!acc[type]) {
      acc[type] = [];
    }

    acc[type].push(cur);

    return acc;
  }, {});
}
