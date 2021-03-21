import Image from 'next/image';
import css from 'styled-jsx/css';
import PageLayout from '@/layouts/page';
import { getPhotos } from '@/lib/photos';

export const pageInfo = {
  title: 'Photos',
  description: 'Photos of places I’ve been to and enjoyed.',
};

export default function Photos({ photos }) {
  return (
    <PageLayout {...pageInfo}>
      {Object.keys(photos).map(location => {
        return (
          <article key={location}>
            <h2>
              <a name={location} href={`#${location}`}>
                {location}
              </a>
            </h2>
            <div className="grid">
              {photos[location].map(({ src }) => {
                return (
                  <div key={src} className="grid-item">
                    <a href={src}>
                      <Image
                        src={src}
                        alt=""
                        layout="fill"
                        objectFit="cover"
                        className="rounded"
                      />
                    </a>
                  </div>
                );
              })}
            </div>
          </article>
        );
      })}
      <style jsx>{styles}</style>
    </PageLayout>
  );
}

const styles = css`
  .grid {
    --columns: 2;

    display: grid;
    grid-template-columns: repeat(var(--columns), minmax(150px, 1fr));
    gap: 0.5rem;
  }

  .grid-item {
    position: relative;
    width: 100%;
    height: 20vh;
  }

  .grid-item a {
    display: flex;
    border: none;
    transition: opacity 0.15s ease-out;
    cursor: zoom-in;
  }

  .grid-item a:hover,
  .grid-item a:focus {
    opacity: 0.85;
  }

  @media (min-width: 768px) {
    .grid {
      --columns: 3;
    }
  }

  @media (min-width: 1024px) {
    .grid {
      --columns: 4;
    }
  }
`;

export async function getStaticProps() {
  const photos = getPhotos();

  return {
    props: {
      photos,
    },
  };
}
