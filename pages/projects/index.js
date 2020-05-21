import Layout from "../../components/Layout";
import Project from "../../components/Project";
import projects from "../../data/projects";

export default () => (
  <Layout title="Projects">
    <div className="Page Page--wide">
      <h1>Projects</h1>
      <p className="lead">
        I make websites and apps as a hobby. They solve a particular problem I
        had in a way that makes sense to me.
      </p>
      <div className="Grid">
        {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </div>
  </Layout>
);
