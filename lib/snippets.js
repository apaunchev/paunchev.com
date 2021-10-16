import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { prepareMDX } from './mdx';

const SNIPPETS_DIR = join(process.cwd(), 'content/snippets');

function getSnippet(filename) {
  const file = fs.readFileSync(join(SNIPPETS_DIR, filename), 'utf8');
  const { content, data } = matter(file);
  const mdx = prepareMDX(content, data);

  return mdx;
}

export async function getSnippets() {
  const filenames = fs.readdirSync(SNIPPETS_DIR);
  const snippets = await Promise.all(
    filenames.map(filename => getSnippet(filename)),
  );

  return snippets;
}
