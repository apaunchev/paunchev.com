import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import LibraryGrid from '@/components/LibraryGrid';
import library from '@/data/library.json';
import useData from '@/hooks/useData';
import { pageInfo } from './';

export default function LibraryType() {
  const router = useRouter();
  const type = router.query.type && router.query.type.slice(0, -1);
  const { items } = useData(library.data, type);

  if (!type) {
    return null;
  }

  return (
    <Layout {...pageInfo}>
      <div className="max-w-7xl">
        <PageHeader title={pageInfo.title} subtitle={pageInfo.description} />
        <LibraryGrid items={items} activeType={type} />
      </div>
    </Layout>
  );
}
