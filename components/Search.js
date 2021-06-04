import { Search as SearchIcon } from 'react-feather';

export function Search({ onInputChange, label = 'Search' }) {
  return (
    <div className="search">
      <SearchIcon width={18} height={18} />
      <input
        className="form-control"
        type="search"
        name="search"
        aria-label={label}
        onChange={onInputChange}
      />
    </div>
  );
}
