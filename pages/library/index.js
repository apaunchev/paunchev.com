import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import LibraryGrid from '@/components/LibraryGrid';
import library from '@/data/library.json';
import useData from '@/hooks/useData';

const pageInfo = {
  title: 'Library',
  description:
    'A public library of sorts, showcasing briliant content from around the web.',
};

const defaultType = 'article';

export default function Library() {
  const { items } = useData(library.data, defaultType);

  return (
    <Layout {...pageInfo}>
      <div className="max-w-7xl">
        <PageHeader title={pageInfo.title} subtitle={pageInfo.description} />
        <LibraryGrid items={items} activeType={defaultType} />
      </div>
    </Layout>
  );
}
