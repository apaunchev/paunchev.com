import css from 'styled-jsx/css';

export default function PageGrid({ children }) {
  return (
    <div>
      {children}
      <style jsx>{styles}</style>
    </div>
  );
}

const styles = css`
  div {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
    gap: 2rem;
  }

  @media (min-width: 1024px) {
    div {
      gap: 3rem;
    }
  }
`;
