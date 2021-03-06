import css from 'styled-jsx/css';
import Container from '@/components/Container';
import PageHeader from '@/components/PageHeader';

const pageInfo = {
  description:
    'Angel is a software engineer with over ten years of experience in building digital products.',
};

export default function About() {
  return (
    <Container {...pageInfo}>
      <article>
        <PageHeader
          title="Hi, I’m Angel—"
          subtitle="a software engineer with over ten years of experience in building digital products."
        />
        <p>
          I specialize in front-end development and strive to deliver meaningful
          user experiences on the web and mobile.
        </p>
        <p>
          I navigate complex business domains, helping teams to meet targets and
          bring value to customers. I approach everything with a growth mindset
          and try to inspire and mentor others along the way.
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
        <h2>This site</h2>
        <p>
          I primarily use this site as a long-term storage of digital
          things—bookmarks, photos, snippets, <i>et cetera</i>. I also maintain
          a short professional summary, for anyone interested in that side of
          things.
        </p>
        <p>
          But mostly this site is meant for myself. Everyone else is, of course,
          welcome—I just cannot guarantee you will find anything useful here.
        </p>
        <h2>Elsewhere</h2>
        <p>
          <span>💻 </span>
          <a href="https://github.com/apaunchev">See code on GitHub</a>
        </p>
        <p>
          <span>👋 </span>
          <a href="https://www.linkedin.com/in/apaunchev/">
            Connect on LinkedIn
          </a>
        </p>
      </article>
      <style jsx>{styles}</style>
    </Container>
  );
}

const styles = css`
  article {
    max-width: 36rem;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }

  .grid ul {
    margin: 0;
  }

  ul,
  ol {
    list-style: none;
    padding: 0;
  }

  ol li {
    margin: 1rem 0;
  }

  @media (min-width: 1024px) {
    .grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
`;
