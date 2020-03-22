import Layout from "../components/Layout";
import Project from "../components/Project";
import projects from "../data/projects";

export default () => (
  <Layout>
    <h1>Projects</h1>
    {projects.map((p, i) => (
      <Project key={i} {...p} />
    ))}
  </Layout>
);
