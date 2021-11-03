export function BookHighlights({ highlights = [] }) {
  if (highlights.length === 0) {
    return (
      <div className="highlights">
        <p className="text-center">No highlights shared yet.</p>
      </div>
    );
  }

  return (
    <ol className="highlights">
      {highlights.map(({ text, location }) => (
        <li key={location.value} id={location.value} className="highlight">
          <blockquote className="highlight__quote">
            <p>
              <span>{text}</span>
            </p>
          </blockquote>
          <p className="highlight__meta">
            <a href={`#${location.value}`}>Link</a> · Location:{' '}
            <a href={location.url}>{location.value}</a>
          </p>
        </li>
      ))}
    </ol>
  );
}
