import { Intro } from 'components/home-sections/Intro';
import { Projects } from 'components/home-sections/Projects';
import { Resume } from 'components/home-sections/Resume';
import { Page } from 'layouts/page';

export default function HomePage() {
  return (
    <Page showHeading={false}>
      <Intro />
      <Projects />
      <Resume />
    </Page>
  );
}
