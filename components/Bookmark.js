export default ({ name, url }) => (
  <a className="Bookmark" href={url}>
    <h2 className="Bookmark__title">{name}</h2>
    <p className="Bookmark__url arrowed">
      {new URL(url).hostname || "View website"}
    </p>
  </a>
);
