import { Page } from 'layouts/page';
import { Card, CardGrid } from 'components/layout/card-grid';
import { Quote } from 'components/content/quote';
import bookmarks from 'content/bookmarks';

const pageInfo = {
  title: 'Bookmarks',
  description:
    'Blog posts and articles I’ve learned something from and find worth going back to.',
};

export default function BookmarksPage() {
  return (
    <Page title={pageInfo.title} description={pageInfo.description}>
      <CardGrid items={bookmarks} component={BookmarkCard} />
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
