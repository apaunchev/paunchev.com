import Image from "./Image";

const Project = ({ name, description, url }) => (
  <div>
    <a className="BlockLink" href={url}>
      <h2 className="BlockLink__title" title={name}>
        {name}
      </h2>
      <p className="BlockLink__url arrowed">
        {new URL(url).hostname || "View website"}
      </p>
    </a>
    <p className="mt-5 mb-0">{description}</p>
  </div>
);

export default Project;
