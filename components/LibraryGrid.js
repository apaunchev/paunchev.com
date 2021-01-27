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
