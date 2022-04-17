import { Page } from 'layouts/page';
import { Card, CardGrid } from 'components/layout/card-grid';
import { Quote } from 'components/content/quote';
import careerAndLife from 'content/bookmarks/career-and-life';
import webDevelopment from 'content/bookmarks/web-development';

const pageInfo = {
  title: 'Bookmarks',
  description:
    'Tools and articles I found on the web that I might want to go back to later.',
};

export default function BookmarksPage() {
  return (
    <Page title={pageInfo.title} description={pageInfo.description}>
      <CardGrid
        title="Web Development"
        items={webDevelopment}
        component={BookmarkCard}
      />
      <CardGrid
        title="Career & Life"
        items={careerAndLife}
        component={BookmarkCard}
      />
    </Page>
  );
}

function BookmarkCard(bookmark) {
  return (
    <Card
      {...bookmark}
      description={
        bookmark.quote ? <Quote text={bookmark.quote} /> : bookmark.description
      }
      meta={<div>{new URL(bookmark.url).hostname}</div>}
    />
  );
}
