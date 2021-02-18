export default function PageGrid({ children }) {
  return (
    <div>
      {children}
      <style jsx>{`
        div {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
          margin: 1.5rem 0;
        }

        @media (min-width: 1024px) {
          div {
            gap: 3rem;
          }
        }
      `}</style>
    </div>
  );
}
