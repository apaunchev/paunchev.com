import css from 'styled-jsx/css';
import { useRouter } from 'next/router';

export default function TagsFilter({ tagsMap = {}, onFilterClick }) {
  const { query, pathname } = useRouter();

  const handleClick = (e, filter) => {
    e.preventDefault();

    onFilterClick(filter);
  };

  return (
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
      <style jsx>{styles}</style>
    </nav>
  );
}

const styles = css`
  nav {
    display: flex;
    flex-wrap: wrap;
    margin: 1.5rem 0;
  }

  nav > * {
    margin: 0 1rem 0.25rem 0;
  }

  a.active {
    border-color: var(--color-links-active);
  }
`;
