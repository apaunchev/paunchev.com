import Image from 'next/image';
import PageLayout from '@/layouts/page';
import { getPhotos } from '@/lib/photos';

export const pageInfo = {
  title: 'Photos',
  description: 'Amateur photos of places I’ve been to.',
};

export default function Photos({ photos }) {
  return (
    <PageLayout {...pageInfo}>
      {Object.keys(photos).map(location => {
        return (
          <article key={location}>
            <h2>{location}</h2>
            <div className="photos-grid">
              {photos[location].map(({ src }) => {
                return (
                  <div key={src} className="photos-grid__item">
                    <a href={src}>
                      <Image src={src} alt="" layout="fill" objectFit="cover" />
                    </a>
                  </div>
                );
              })}
            </div>
          </article>
        );
      })}
    </PageLayout>
  );
}

export async function getStaticProps() {
  const photos = getPhotos();

  return {
    props: {
      photos,
    },
  };
}
