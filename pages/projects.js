import Layout from "../components/Layout";
import Project from "../components/Project";
import projects from "../projects";

export default () => (
  <Layout>
    <h1>Projects</h1>
    <p>
      In my spare time I like to work on side projects – little tools or
      websites that solve a particular problem. Whenever the result is
      presentable, I tend to make it public here.
    </p>
    {projects.map((p, i) => (
      <Project key={i} {...p} />
    ))}
  </Layout>
);
