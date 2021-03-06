import fs from 'fs';
import { join } from 'path';
import { capitalize } from './helpers';

const photosDirectory = join(process.cwd(), 'public/photos');

function getPhotoByFilename(filename) {
  const location = capitalize(filename.split('-')[0]);

  return { src: `/photos/${filename}`, location };
}

export function getPhotos() {
  const filenames = fs.readdirSync(photosDirectory);
  const photos = filenames
    .map(filename => getPhotoByFilename(filename))
    .reduce((acc, cur) => {
      if (!acc[cur.location]) {
        acc[cur.location] = [];
      }

      acc[cur.location].push(cur);

      return acc;
    }, {});

  return photos;
}
