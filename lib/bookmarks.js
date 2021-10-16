import fs from 'fs';
import { join } from 'path';

const BOOKMARKS_DIR = join(process.cwd(), 'content/bookmarks');

function getBookmarksType(fileName) {
  const file = fs.readFileSync(join(BOOKMARKS_DIR, fileName), 'utf8');
  const json = JSON.parse(file);

  return json;
}

export function getBookmarks() {
  const filenames = fs.readdirSync(BOOKMARKS_DIR);
  const bookmarks = filenames.flatMap(filename => {
    const type = filename.split('.')[0];
    let bookmarksType = getBookmarksType(filename);

    bookmarksType = bookmarksType.map(bookmark => {
      bookmark.type = type;

      return bookmark;
    });

    return bookmarksType;
  });

  return bookmarks.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
  );
}
