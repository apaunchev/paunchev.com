import css from 'styled-jsx/css';
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
        long-term storage for digital things—bookmarks, photos, snippets, and
        more. I do this for practical and nostalgic reasons, and it has been
        great.
      </p>
      <p>
        This site is also where I get to experiment with new trends and
        technologies. For when I have the spare time, of course.
      </p>
      <p>
        Lastly, I also maintain a short professional summary, for anyone
        interested in that side of things.
      </p>
      <h2>Professionally</h2>
      <p>
        I specialize in front-end development and strive to deliver meaningful
        user experiences for web and mobile. I navigate complex business
        domains, helping teams to meet targets and bring value to customers. I
        approach everything with a growth mindset and try to inspire and mentor
        others along the way.
      </p>
      <h3>Specialties</h3>
      <div className="grid">
        <ul>
          <li>JavaScript</li>
          <li>React/Next.js</li>
          <li>Build tools</li>
          <li>Unit testing</li>
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
      <h3>Elsewhere</h3>
      <p>
        <span>💻 </span>
        <a href="https://github.com/apaunchev">See code on GitHub</a>
      </p>
      <p>
        <span>👋 </span>
        <a href="https://www.linkedin.com/in/apaunchev/">Connect on LinkedIn</a>
      </p>
      <style jsx>{styles}</style>
    </ArticleLayout>
  );
}

const styles = css`
  .grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }

  .grid ul {
    margin: 0;
  }

  .grid ul,
  .grid ol {
    list-style: none;
    padding: 0;
  }

  .grid ol li {
    margin: 1rem 0;
  }

  @media (min-width: 1024px) {
    .grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
`;
