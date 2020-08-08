import Link from "next/link";
import Image from "./Image";

const Project = ({ id, name, description, imageSrc }) => (
  <div>
    <Link href="/projects/[id]" as={`/projects/${id}`}>
      <a className="BlockLink">
        <Image className="BlockLink__image" src={imageSrc} />
        <h2 className="BlockLink__title clamped clamped--1" title={name}>
          {name} →
        </h2>
      </a>
    </Link>
    <p className="mt-5 clamped clamped--3">{description}</p>
  </div>
);

export default Project;
