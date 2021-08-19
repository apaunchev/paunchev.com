import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const root = process.cwd();

export function getContentByFilename(baseDir, filename) {
  const fileContent = fs.readFileSync(join(root, baseDir, filename), 'utf8');
  const { data, content } = matter(fileContent);
  const slug = filename.replace(/\.mdx$/, '');

  return {
    ...data,
    content,
    slug,
  };
}

export function getContentOfType(contentBaseDir) {
  const filenames = fs.readdirSync(join(root, contentBaseDir));
  const data = filenames.map(filename =>
    getContentByFilename(contentBaseDir, filename),
  );

  return data;
}
