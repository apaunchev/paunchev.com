export default ({ name, url }) => (
  <a className="Bookmark" href={url}>
    <p className="Bookmark__title">{name}</p>
    <p className="Bookmark__url">{new URL(url).hostname || "View website"} →</p>
  </a>
);
