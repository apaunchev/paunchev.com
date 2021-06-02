import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const notesDirectory = join(process.cwd(), 'content/notes');

export function getNoteBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(notesDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    ...data,
    content,
    slug: realSlug,
  };
}

export function getNotes() {
  const slugs = fs.readdirSync(notesDirectory);
  const data = slugs.map(slug => getNoteBySlug(slug));

  return data;
}
