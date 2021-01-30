import LibraryGrid from '@/components/LibraryGrid';
import library from '@/data/library.json';
import useData from '@/hooks/useData';
import LibraryLayout from '@/layouts/library';
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
    <LibraryLayout {...pageInfo}>
      <LibraryGrid items={items} activeType={type} />
    </LibraryLayout>
  );
}
