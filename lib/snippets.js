import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const snippetsDirectory = join(process.cwd(), 'data/snippets');

export function getSnippetBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(snippetsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    meta: data,
    content,
  };
}

export function getAllSnippets() {
  const slugs = fs.readdirSync(snippetsDirectory);
  const snippets = slugs.map(slug => getSnippetBySlug(slug));

  return snippets;
}
