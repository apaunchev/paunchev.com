import { useRouter } from 'next/router';

export default function ContentFilters({
  tagsMap = {},
  onFilterClick,
  onSearchChange,
}) {
  const { query, pathname } = useRouter();

  const handleClick = (e, filter) => {
    e.preventDefault();

    onFilterClick(filter);
  };

  return (
    <div className="content-filters">
      <div className="content-filters__item">
        <nav className="tags">
          <b className="tags__item">Filter:</b>
          <a
            className={
              !query.tag ? 'tags__item tags__item--active' : 'tags__item'
            }
            href={pathname}
            onClick={handleClick}
          >
            All
          </a>
          {Object.keys(tagsMap).map(tag => {
            const classes = ['tags__item'];

            if (query.tag === tag) {
              classes.push('tags__item--active');
            }

            return (
              <a
                key={tag}
                className={classes.join(' ')}
                href={`${pathname}/?tag=${tag}`}
                onClick={e => handleClick(e, tag)}
              >
                {tagsMap[tag]}
              </a>
            );
          })}
        </nav>
      </div>
      <div className="content-filters__item content-filters__item--push">
        <input
          id="search"
          className="form-control form-control--search"
          aria-label="Search"
          placeholder="Search"
          type="text"
          onChange={onSearchChange}
        />
      </div>
    </div>
  );
}
