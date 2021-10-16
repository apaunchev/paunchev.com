export function PageHeader({ title, subtitle }) {
  return (
    <header className="page-header">
      {title ? <h1 className="page-header__title">{title}</h1> : null}
      {subtitle ? <p className="page-header__subtitle">{subtitle}</p> : null}
    </header>
  );
}
