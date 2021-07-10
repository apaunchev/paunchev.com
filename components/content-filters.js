import { hyphenize } from '@/lib/helpers';

export function ContentFilters({ children }) {
  return <div className="content-filters">{children}</div>;
}

export function ContentFiltersSelect({ name, label, options, onChange }) {
  return (
    <div className="content-filters-item">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <select
        id={name}
        name={name}
        className="form-control form-control--select"
        onChange={onChange}
      >
        {options.map(option => (
          <option key={option} value={hyphenize(option.toLowerCase())}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export function ContentFiltersInput({ type = 'text', name, label, onChange }) {
  return (
    <div className="content-filters-item">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        id={name}
        className="form-control"
        type={type}
        onChange={onChange}
      />
    </div>
  );
}
