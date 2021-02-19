import css from 'styled-jsx/css';
import { useRouter } from 'next/router';

export function TagsFilter({ tagsMap = {}, onFilterClick }) {
  const { query, pathname } = useRouter();

  const handleClick = (e, filter) => {
    e.preventDefault();

    onFilterClick(filter);
  };

  return (
    <div>
      <nav>
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
      <style jsx>{styles}</style>
    </div>
  );
}

const styles = css`
  div {
    display: flex;
    margin: 1.5rem 0;
  }

  nav {
    display: flex;
    flex-wrap: wrap;
  }

  nav > * {
    margin: 0 1rem 0.25rem 0;
  }

  a.active {
    border-color: var(--color-links-active);
  }
`;
