import Container from '@/components/Container';
import LibraryGrid from '@/components/LibraryGrid';
import { PageWide } from '@/components/Page';
import PageHeader from '@/components/PageHeader';
import library from '@/data/library.json';
import useData from '@/hooks/useData';

export const pageInfo = {
  title: 'Library',
  description:
    'A digital library showcasing my favourite content from around the web.',
};

const defaultType = 'article';

export default function Library() {
  const { items } = useData(library.data, defaultType);

  return (
    <Container {...pageInfo}>
      <PageWide>
        <PageHeader title={pageInfo.title} subtitle={pageInfo.description} />
        <LibraryGrid items={items} activeType={defaultType} />
      </PageWide>
    </Container>
  );
}
