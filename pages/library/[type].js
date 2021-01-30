import Container from '@/components/Container';
import LibraryGrid from '@/components/LibraryGrid';
import { PageWide } from '@/components/Page';
import PageHeader from '@/components/PageHeader';
import library from '@/data/library.json';
import useData from '@/hooks/useData';
import { useRouter } from 'next/router';
import { pageInfo } from './';

export default function LibraryType() {
  const router = useRouter();
  const type = router.query.type && router.query.type.slice(0, -1);
  const { items } = useData(library.data, type);

  if (!type) {
    return null;
  }

  return (
    <Container {...pageInfo}>
      <PageWide>
        <PageHeader title={pageInfo.title} subtitle={pageInfo.description} />
        <LibraryGrid items={items} activeType={type} />
      </PageWide>
    </Container>
  );
}
