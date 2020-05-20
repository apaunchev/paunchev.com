import Layout from "../components/Layout";
import Project from "../components/Project";
import projects from "../data/projects";

export default () => (
  <Layout>
    <div className="Page">
      <h1>Projects</h1>
      {projects.map((p, i) => (
        <Project key={i} {...p} />
      ))}
    </div>
  </Layout>
);
