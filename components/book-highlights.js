export function BookHighlights({ highlights = [] }) {
  if (highlights.length === 0) {
    return (
      <div className="highlights">
        <p>No highlights shared yet.</p>
      </div>
    );
  }

  return (
    <ol className="highlights">
      {highlights.map(({ text, location = {} }, index) => {
        const key = location.value || index;

        return (
          <li key={key} id={key} className="highlight">
            <blockquote className="highlight__quote">
              <p>
                <span>{text}</span>
              </p>
            </blockquote>
            {location.value ? (
              <p className="highlight__meta">
                <a href={`#${location.value}`}>Link</a> · Location:{' '}
                <a href={location.url}>{location.value}</a>
              </p>
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}
