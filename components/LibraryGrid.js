import Link from 'next/link';
import LibraryItem from './LibraryItem';

const typesMap = {
  article: 'Articles',
  book: 'Books',
  'personal-site': 'Personal sites',
};

export default function LibraryGrid({ items, activeType }) {
  return (
    <>
      <div className="mb-12 flex text-center">
        {Object.keys(typesMap).map(type => {
          const classes =
            activeType === type
              ? 'flex-1 pb-1 text-xl font-semibold text-gray-900 border-b-2 border-purple-600 border-opacity-100 transition'
              : 'flex-1 pb-1 text-xl font-semibold text-gray-500 border-b-2 border-gray-900 border-opacity-20 hover:text-gray-900 hover:border-opacity-100 transition';

          return (
            <Link key={type} href={`/library/${type}s`}>
              <a className={classes}>{typesMap[type]}</a>
            </Link>
          );
        })}
      </div>
      <div className="grid grid-cols-library gap-12">
        {items.map(item => (
          <LibraryItem key={item.url} {...item} />
        ))}
      </div>
    </>
  );
}
