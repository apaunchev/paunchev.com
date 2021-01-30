import Link from 'next/link';
import Image from 'next/image';

const typesMap = {
  article: 'Articles',
  book: 'Books',
  'personal-site': 'Personal sites',
};

function LibraryItem({ title, author, description, quote, image, url }) {
  return (
    <a
      className="border-none focus:ring-2 ring-purple-600"
      href={url}
      target="_blank"
      rel="noopener"
    >
      <div className="flex flex-col">
        <div className="flex w-full">
          {image ? (
            <figure className="mr-4 w-20">
              <Image
                src={image.src}
                width={image.width}
                height={image.height}
                alt={`Image of ${title}`}
              />
            </figure>
          ) : null}
          <div className="flex flex-col flex-1">
            <h2 className="text-xl lg:text-xl font-semibold">{title}</h2>
            <h3 className="text-lg text-gray-600 dark:text-gray-400">
              {author}
            </h3>
            {description ? (
              <p className="mt-1 mb-0 text-base">{description}</p>
            ) : null}
            {quote ? (
              <p className="mt-1 mb-0 italic text-base">‘{quote}’</p>
            ) : null}
          </div>
        </div>
      </div>
    </a>
  );
}

export default function LibraryGrid({ items, activeType }) {
  return (
    <>
      <div className="mb-8 lg:mb-12 flex text-center">
        {Object.keys(typesMap).map(type => {
          const classes =
            activeType === type
              ? 'flex-1 pb-2 lg:text-xl font-semibold border-purple-600'
              : 'flex-1 pb-2 lg:text-xl font-semibold';

          return (
            <Link key={type} href={`/library/${type}s`}>
              <a className={classes}>{typesMap[type]}</a>
            </Link>
          );
        })}
      </div>
      <div className="grid grid-cols-library gap-8 lg:gap-12">
        {items.map(item => (
          <LibraryItem key={item.url} {...item} />
        ))}
      </div>
    </>
  );
}
