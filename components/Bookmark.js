export default ({ title, url, image, color, excerpt }) => (
  <div className="Bookmark">
    <a href={url}>
      <figure className="Bookmark__image">
        <div className="Bookmark__image__container">
          <div
            className="Bookmark__image__image"
            style={
              image
                ? { backgroundImage: `url(${image})` }
                : { backgroundColor: color }
            }
          />
        </div>
      </figure>
      <h2 className="Bookmark__title" title={title}>
        {title}
      </h2>
      <p className="Bookmark__url arrowed">
        {new URL(url).hostname || "View website"}
      </p>
      <p className="Bookmark__excerpt">{excerpt}</p>
    </a>
  </div>
);
