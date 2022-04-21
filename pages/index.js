import { Activity } from 'components/home-sections/activity';
import { Intro } from 'components/home-sections/intro';
import { Resume } from 'components/home-sections/resume';
import { Page } from 'layouts/page';

export default function HomePage() {
  return (
    <Page>
      <Intro />
      <Resume />
      <Activity />
    </Page>
  );
}
