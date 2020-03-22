export default ({
  id: name,
  description,
  url,
  repo = false,
  img = `${name}.png`
}) => (
  <div className="Project">
    <h2 className="Project__title" id={name}>
      <a href={`#${name}`}>{name}</a>
    </h2>
    <p className="Project__description">{description}</p>
    <p className="Project__links">
      {url ? <a href={url}>View website →</a> : null}
      {repo ? (
        <a href={`https://github.com/${repo}`}>View on GitHub →</a>
      ) : null}
    </p>
    <p>
      <a href={url}>
        <img src={`/images/${img}`} />
      </a>
    </p>
  </div>
);
