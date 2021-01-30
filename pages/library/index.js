import LibraryGrid from '@/components/LibraryGrid';
import library from '@/data/library.json';
import useData from '@/hooks/useData';
import LibraryLayout from '@/layouts/library';

export const pageInfo = {
  title: 'Library',
  description:
    'A digital library showcasing my favourite content from around the web.',
};

const defaultType = 'article';

export default function Library() {
  const { items } = useData(library.data, defaultType);

  return (
    <LibraryLayout {...pageInfo}>
      <LibraryGrid items={items} activeType={defaultType} />
    </LibraryLayout>
  );
}
