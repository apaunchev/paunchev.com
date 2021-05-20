import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const snippetsDirectory = join(process.cwd(), 'snippets');

export function getSnippetBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(snippetsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    ...data,
    content,
    slug: realSlug,
  };
}

export function getAllSnippets() {
  const slugs = fs.readdirSync(snippetsDirectory);
  const snippets = slugs.map(slug => getSnippetBySlug(slug));

  return snippets;
}
