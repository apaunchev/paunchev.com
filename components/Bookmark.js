import Image from "./Image";

export default ({ title, url, imageSrc, excerpt }) => (
  <div>
    <a className="BlockLink" href={url}>
      <Image className="BlockLink__image" src={imageSrc} />
      <h2 className="BlockLink__title clamped clamped--1" title={title}>
        {title}
      </h2>
      <p className="BlockLink__url arrowed">
        {new URL(url).hostname || "View website"}
      </p>
    </a>
    <p className="mt-5 clamped clamped--3">{excerpt}</p>
  </div>
);
