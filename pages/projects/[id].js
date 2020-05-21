import Layout from "../../components/Layout";
import projects from "../../data/projects";

export default ({ project: { name, url, repoUrl, description, imageSrc } }) => (
  <Layout title={name}>
    <div className="Page">
      <div>
        <h1>{name}</h1>
        <p>{description}</p>
        <figure>
          <img src={imageSrc} alt={name} />
        </figure>
        <p className="flex-row">
          {url ? (
            <a className="arrowed" href={url}>
              View website
            </a>
          ) : null}
          {repoUrl ? (
            <a className="arrowed" href={repoUrl}>
              View on GitHub
            </a>
          ) : null}
        </p>
      </div>
    </div>
  </Layout>
);

export async function getStaticProps(context) {
  const project = projects.find((p) => p.id === context.params.id);

  return {
    props: {
      project,
    },
  };
}

export async function getStaticPaths() {
  const paths = projects.map((project) => ({
    params: { id: project.id },
  }));

  return {
    paths: paths,
    fallback: false,
  };
}
