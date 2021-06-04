function Repository() {
  return (
    <div className="content-placeholder">
      <div
        className="line"
        style={{
          width: '100%',
          height: '2rem',
        }}
      />
      <div
        className="line"
        style={{
          width: '50%',
          height: '1.75rem',
        }}
      />
      <div
        className="line"
        style={{
          width: '100%',
          height: '4rem',
        }}
      />
      <div className="line" style={{ width: '50%' }} />
      <div className="line" style={{ width: '30%' }} />
    </div>
  );
}

function Job() {
  return (
    <div className="content-placeholder">
      <div
        className="line"
        style={{
          width: '100%',
          height: '3rem',
        }}
      />
      <div
        className="line"
        style={{
          width: '80%',
          height: '2.5rem',
        }}
      />
      <div className="line" style={{ width: '50%' }} />
      <div className="line" style={{ width: '30%' }} />
    </div>
  );
}

const components = {
  repository: Repository,
  job: Job,
};

export function Placeholders({ type, count = 3 }) {
  const Component = components[type];

  return [...Array(count)].map((_, i) => <Component key={i} />);
}
