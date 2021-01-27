import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import LibraryGrid from '@/components/LibraryGrid';
import library from '@/data/library.json';
import useData from '@/hooks/useData';
import { PageWide } from '@/components/Page';

export const pageInfo = {
  title: 'Library',
  description:
    'A digital library showcasing my favourite content from around the web.',
};

const defaultType = 'article';

export default function Library() {
  const { items } = useData(library.data, defaultType);

  return (
    <Layout {...pageInfo}>
      <PageWide>
        <PageHeader title={pageInfo.title} subtitle={pageInfo.description} />
        <LibraryGrid items={items} activeType={defaultType} />
      </PageWide>
    </Layout>
  );
}
