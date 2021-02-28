import css from 'styled-jsx/css';

export default function PageHeader({ title, subtitle }) {
  return (
    <header>
      {title ? <h1>{title}</h1> : null}
      {subtitle ? <p className="meta">{subtitle}</p> : null}
      <style jsx>{styles}</style>
    </header>
  );
}

const styles = css`
  header {
    margin-bottom: 1rem;
  }

  h1 {
    margin-bottom: 0;
  }

  p {
    margin: 0.25rem 0 0;
    font-size: 1.25rem;
    line-height: 1.75rem;
  }

  @media (min-width: 1024px) {
    header {
      margin-bottom: 1.5rem;
    }

    p {
      font-size: 1.5rem;
      line-height: 2rem;
    }
  }
`;
