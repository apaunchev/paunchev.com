export function PageHeader({ title, subtitle, isCentered = false }) {
  const classes = ['page-header'];

  if (isCentered) {
    classes.push('page-header--centered');
  }

  return (
    <header className={classes.join(' ')}>
      {title ? <h1 className="page-header__title">{title}</h1> : null}
      {subtitle ? <p className="page-header__subtitle">{subtitle}</p> : null}
    </header>
  );
}
