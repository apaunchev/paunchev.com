import fs from 'fs';
import { join } from 'path';

const BOOKMARKS_DIR = join(process.cwd(), 'content/bookmarks');

export function getBookmarks() {
  const types = fs.readdirSync(BOOKMARKS_DIR);
  const allBookmarks = types.flatMap(type => {
    let bookmarks = getBookmarksByType(type);

    bookmarks = bookmarks.map(bookmark => {
      bookmark.type = type.split('.')[0];

      return bookmark;
    });

    return bookmarks;
  });

  return allBookmarks.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
  );
}

function getBookmarksByType(type) {
  const file = fs.readFileSync(join(BOOKMARKS_DIR, type), 'utf8');
  const json = JSON.parse(file);

  return json;
}
