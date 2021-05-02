import ArticleLayout from '@/layouts/article';

const pageInfo = {
  title: 'About',
  description:
    'I’m Angel—a software engineer with over ten years of experience in building digital products.',
};

export default function About() {
  return (
    <ArticleLayout {...pageInfo}>
      <p>
        Welcome to my space on the internet. I primarily use this site as
        long-term storage for digital things—bookmarks, snippets, notes, and
        anything else I might want to revisit later.
      </p>
      <p>
        It is also where I experiment with web technologies, so this site
        changes—and breaks—often.
      </p>
      <h2>Professionally</h2>
      <p>
        I specialize in front-end development and strive to deliver meaningful
        user experiences for web and mobile. I navigate complex business
        domains, helping teams to meet targets and bring value to customers. I
        approach everything with a growth mindset and try to inspire and mentor
        others along the way.
      </p>
      <p>
        <a className="link" href="https://www.linkedin.com/in/apaunchev/">
          Connect on LinkedIn
        </a>
      </p>
      <h3>Specialties</h3>
      <div className="content-grid">
        <ul>
          <li>JavaScript</li>
          <li>React/Next.js</li>
          <li>Testing</li>
          <li>Build tools</li>
        </ul>
        <ul>
          <li>HTML</li>
          <li>Sass/CSS-in-JS</li>
          <li>CSS architecture</li>
          <li>Accessibility</li>
        </ul>
        <ul>
          <li>Node.js/Express</li>
          <li>Web services</li>
          <li>Security</li>
          <li>Performance</li>
        </ul>
      </div>
      <p>
        <a className="link" href="https://github.com/apaunchev">
          See code on GitHub
        </a>
      </p>
    </ArticleLayout>
  );
}
