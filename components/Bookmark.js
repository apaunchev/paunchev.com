export default ({ title, url, image, color, excerpt }) => (
  <div className="GridItem">
    <a href={url}>
      <figure className="GridItem__image">
        <div className="GridItem__image__container">
          <div
            className="GridItem__image__image"
            style={
              image
                ? { backgroundImage: `url(${image})` }
                : { backgroundColor: color }
            }
          />
        </div>
      </figure>
      <h2 className="GridItem__title" title={title}>
        {title}
      </h2>
      <p className="GridItem__url arrowed">
        {new URL(url).hostname || "View website"}
      </p>
      <p className="GridItem__description">{excerpt}</p>
    </a>
  </div>
);
