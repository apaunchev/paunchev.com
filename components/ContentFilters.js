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
    width: 100%;
    height: 1.25rem;
    font-size: 0.85rem;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 1rem;
  }

  .tags > * {
    margin: 0 0.75rem 0.5rem 0;
    font-weight: 600;
    font-size: 1rem;
  }

  .tags > a {
    color: var(--color-text-secondary);
  }

  .tags > a:hover,
  .tags > a:focus,
  .tags > a.active {
    border-color: var(--color-links-active);
    color: var(--color-text-primary);
  }

  @media (min-width: 768px) {
    .filters {
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;
    }

    .tags {
      margin-bottom: 0;
    }

    .search-input {
      width: 15rem;
      margin-left: 1rem;
    }
  }
`;
