import { Intro } from 'components/home-sections/intro';
import { Projects } from 'components/home-sections/projects';
import { Resume } from 'components/home-sections/resume';
import { Page } from 'layouts/page';

export default function HomePage() {
  return (
    <Page>
      <Intro />
      <Projects />
      <Resume />
    </Page>
  );
}
