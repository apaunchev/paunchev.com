import { useRouter } from 'next/router';

export function TagsFilter({ tagsMap = {}, onFilterClick }) {
  const router = useRouter();

  const handleClick = (e, filter) => {
    e.preventDefault();

    onFilterClick(filter);
  };

  const activeClasses = 'font-semibold border-purple-600';

  return (
    <nav className="flex space-x-4 lg:text-lg whitespace-nowrap overflow-x-auto bg-white dark:bg-gray-900 py-4 sticky top-0 z-10">
      <span>Filter:</span>
      <a
        className={!router.query.tag ? activeClasses : null}
        href="/"
        onClick={handleClick}
      >
        All
      </a>
      {Object.keys(tagsMap).map(tag => {
        const isActive = router.query.tag === tag;

        return (
          <a
            className={isActive ? activeClasses : null}
            key={tag}
            href="/"
            onClick={e => handleClick(e, tag)}
          >
            {tagsMap[tag]}
          </a>
        );
      })}
    </nav>
  );
}
