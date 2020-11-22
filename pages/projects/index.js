import Layout from "../../components/Layout";
import Project from "../../components/Project";
import projects from "../../data/projects";

const pageInfo = {
  title: "Projects",
};

const ProjectsPage = () => (
  <Layout {...pageInfo}>
    <div className="Page Page--wide">
      <h1>{pageInfo.title}</h1>
      <div className="Grid">
        {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </div>
  </Layout>
);

export default ProjectsPage;
