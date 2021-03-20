import css from 'styled-jsx/css';
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
    <div className="filters">
      <nav className="tags">
        <b>Filter:</b>
        <a
          className={!query.tag ? 'active' : null}
          href={pathname}
          onClick={handleClick}
        >
          All
        </a>
        {Object.keys(tagsMap).map(tag => {
          const isActive = query.tag === tag;

          return (
            <a
              className={isActive ? 'active' : null}
              key={tag}
              href={`${pathname}/?tag=${tag}`}
              onClick={e => handleClick(e, tag)}
            >
              {tagsMap[tag]}
            </a>
          );
        })}
      </nav>
      <input
        className="search-input"
        aria-label="Search"
        placeholder="Search"
        type="text"
        onChange={onSearchChange}
      />
      <style jsx>{styles}</style>
    </div>
  );
}

const styles = css`
  .filters {
    display: flex;
    flex-wrap: wrap;
    margin: 1.5rem 0;
  }

  .search-input {
    margin-left: auto;
    padding: 0.25rem 0.5rem;
    width: 15rem;
    border: 1px solid var(--color-borders);
    font-size: 1rem;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
  }

  .tags > * {
    margin: 0 1rem 0.25rem 0;
  }

  .tags a.active {
    border-color: var(--color-links-active);
  }
`;
