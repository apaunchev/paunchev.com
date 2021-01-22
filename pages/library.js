import Layout from '@/components/Layout';
import LibraryItem from '@/components/LibraryItem';
import PageHeader from '@/components/PageHeader';
import library from '@/data/library.json';

const pageInfo = {
  title: 'Library',
  description: 'My favourite content in one place.',
};

export default function Library() {
  return (
    <Layout {...pageInfo}>
      <PageHeader title={pageInfo.title} subtitle={pageInfo.description} />
      <div className="grid grid-cols-library gap-12">
        {library.data.map(item => (
          <LibraryItem key={item.url} {...item} />
        ))}
      </div>
    </Layout>
  );
}
