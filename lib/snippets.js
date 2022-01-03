import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { prepareMDX } from './mdx';
import { routes } from './routes';

const SNIPPETS_DIR = join(process.cwd(), 'content/snippets');

export async function getSnippets() {
  const types = fs.readdirSync(SNIPPETS_DIR);
  const snippets = await Promise.all(
    types.map(type => getSnippetsByType(type)),
  );

  // Snippets are implicitly sorted by type and name (as per file structure)
  return snippets.flat();
}

export async function getSnippetsByType(type) {
  const slugs = fs
    .readdirSync(join(SNIPPETS_DIR, type), 'utf8')
    .map(filename => filename.split('.')[0]);

  return await Promise.all(slugs.map(slug => getSnippetBySlug(type, slug)));
}

export async function getSnippetBySlug(type, slug) {
  const file = fs.readFileSync(
    join(SNIPPETS_DIR, type, slug + '.mdx'),
    'utf-8',
  );
  const { content, data } = matter(file);
  const snippet = await prepareMDX(content, data);

  snippet.type = type;
  snippet.slug = slug.split('.')[0];

  return formatSnippet(snippet);
}

function formatSnippet(snippet) {
  return {
    source: snippet.source,
    rawMDX: snippet.rawMDX,
    type: snippet.type,
    slug: snippet.slug,
    title: snippet.frontMatter.title || '',
    description: snippet.frontMatter.description || '',
    updatedAt: snippet.frontMatter.updatedAt || '',
    showTOC: snippet.frontMatter.showTOC || false,
    url: `${routes.snippets.href}/${snippet.type}/${snippet.slug}`,
    image: {
      src: `/icons/${snippet.type}.svg`,
      width: 36,
      height: 36,
      alt: '',
    },
  };
}
