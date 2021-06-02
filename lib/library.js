import fs from 'fs';
import { join } from 'path';

const libraryDirectory = join(process.cwd(), 'content/library');

export function getLibraryFile(fileName) {
  const path = join(libraryDirectory, fileName);
  const data = fs.readFileSync(path, 'utf8');

  return JSON.parse(data);
}

export function getLibrary(mostRecentOnly = false) {
  const fileNames = fs.readdirSync(libraryDirectory);
  const sorter = (a, b) => new Date(b.createdAt) - new Date(a.createdAt);
  const data = fileNames.flatMap(fileName => {
    const type = fileName.split('.')[0];
    let data = getLibraryFile(fileName);

    data = data.sort(sorter).map(item => {
      item.type = type;

      return item;
    });

    return mostRecentOnly ? data[0] : data;
  });

  return mostRecentOnly ? data : data.sort(sorter);
}
