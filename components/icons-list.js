export function IconsList({ children }) {
  return <ul className="icons-list">{children}</ul>;
}

export function IconsListItem({ label, icon, value }) {
  return (
    <li className="icons-list-item" title={label} aria-label={label}>
      {icon}
      {value}
    </li>
  );
}
