import css from 'styled-jsx/css';

export default function PageGrid({ children }) {
  return (
    <section>
      {children}
      <style jsx>{styles}</style>
    </section>
  );
}

const styles = css`
  section {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    margin: 1.5rem 0;
  }

  @media (min-width: 1024px) {
    section {
      gap: 3rem;
    }
  }
`;
