import Layout from "../components/Layout";
import Project from "../components/Project";
import projects from "../projects";

export default () => (
  <Layout>
    <h1>Projects</h1>
    <p>
      This is a selection of projects that I recently worked on and am happy to
      showcase. They solve a particular problem I had in a way that makes sense
      to me.
    </p>
    {projects.map((p, i) => (
      <Project key={i} {...p} />
    ))}
  </Layout>
);
