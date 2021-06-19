import fs from 'fs';
import { join } from 'path';
import { types } from './types';

const libraryDirectory = join(process.cwd(), 'content/library');

export function getLibraryFile(fileName) {
  const path = join(libraryDirectory, fileName);
  const data = fs.readFileSync(path, 'utf8');

  return JSON.parse(data);
}

export function getLibrary(
  config = Object.keys(types).reduce(
    (types, type) => ({ ...types, [type]: Infinity }),
    {},
  ),
) {
  const sorter = (a, b) => new Date(b.createdAt) - new Date(a.createdAt);
  const fileNames = fs.readdirSync(libraryDirectory);
  const data = fileNames.flatMap(fileName => {
    const type = fileName.split('.')[0];
    let data = getLibraryFile(fileName);

    data = data.sort(sorter).map(item => {
      item.type = type;

      return item;
    });

    return config[type] ? data.slice(0, config[type]) : [];
  });

  return data.sort(sorter);
}
