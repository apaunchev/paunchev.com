import Layout from "../../components/Layout";
import Project from "../../components/Project";
import projects from "../../data/projects";

const pageInfo = {
  title: "Projects",
  description:
    "I make websites and apps as a hobby. They solve a particular problem I had in a way that makes sense to me.",
};

export default () => (
  <Layout {...pageInfo}>
    <div className="Page Page--wide">
      <h1>{pageInfo.title}</h1>
      <p className="lead">{pageInfo.description}</p>
      <div className="Grid">
        {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </div>
  </Layout>
);
