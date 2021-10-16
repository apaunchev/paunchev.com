import { PageHeader } from '@/components/page-header';
import { ArticleLayout } from '@/layouts/article';
import { parseBookTitle } from '@/lib/helpers';
import { getBookmarks } from '@/lib/bookmarks';
import { ContentList } from '@/components/content-list';
import { getBooks } from '@/lib/books';

const pageInfo = {
  title: null,
  description: 'Angel is a software engineer from Sofia, Bulgaria.',
  headerTitle: 'Hey! I’m Angel.',
  headerSubtitle: 'Welcome to my space on the internet. ',
};

export default function Home({ recentItems }) {
  return (
    <ArticleLayout title={pageInfo.title} description={pageInfo.description}>
      <PageHeader
        title={pageInfo.headerTitle}
        subtitle={pageInfo.headerSubtitle}
      />
      <p>
        I’m a software engineer from Sofia, Bulgaria. You can find my
        professional summary on{' '}
        <a href="https://www.linkedin.com/in/apaunchev/">LinkedIn</a> or look at
        code I’ve written on <a href="https://github.com/apaunchev">GitHub</a>.
      </p>
      <p>
        I use this site as long-term storage of digital content that I’d like to
        go back to whenever I need to. You may or may not find this of interest.
      </p>
      <p>
        If you have any questions or feedback, feel free to{' '}
        <a href="mailto:apaunchev@gmail.com">contact me</a>.
      </p>
      <h2>Recently</h2>
      <p>Things I’ve shared recently.</p>
      <ContentList items={recentItems} />
    </ArticleLayout>
  );
}

export async function getStaticProps() {
  const bookmarks = getBookmarks();
  const books = getBooks();
  const recentItems = [
    ...bookmarks.map(b => ({
      ...b,
      createdAt: new Date(b.createdAt).toJSON().split('T')[0],
    })),
    ...books.map(b => ({
      ...b,
      type: 'books',
      title: parseBookTitle(b.title),
      finishedAt: new Date(b.finishedAt).toJSON().split('T')[0],
    })),
  ]
    .map(item => ({
      ...item,
      date: item.createdAt || item.finishedAt,
      url: item.url || item.goodreadsUrl,
      description: item.description || item.quote || null,
    }))
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 10);

  return {
    props: {
      recentItems,
    },
  };
}
