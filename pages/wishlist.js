import ContentCard from '@/components/ContentCard';
import ContentFilters from '@/components/ContentFilters';
import PageGrid from '@/components/PageGrid';
import { useFilteredData } from '@/hooks/useFilteredData';
import PageLayout from '@/layouts/page';
import fetcher from '@/lib/fetcher';
import { hyphenize, usdFormatter } from '@/lib/helpers';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useSWR from 'swr';

const pageInfo = {
  title: 'Wishlist',
  description:
    'Public list of things I’d like to get someday. Updated automatically by robots.',
};

const tagsMap = {
  books: 'Books',
};

export default function Wishlist() {
  const router = useRouter();
  const { data } = useSWR('/api/wishlist', fetcher);
  const [filteredData, { setFilterValue, setSearchValue }] = useFilteredData(
    data?.data,
  );

  useEffect(() => {
    const tag = router.query.tag;

    if (!tag) {
      setFilterValue('');
      return;
    }

    if (!tagsMap[hyphenize(tag)]) {
      setFilterValue('');
      router.push(router.pathname, undefined, { shallow: true });
      return;
    }

    setFilterValue(tag);
  }, [router]);

  const handleSetFilter = filter => {
    setFilterValue(filter);

    if (!filter) {
      router.push(router.pathname, undefined, { shallow: true });
      return;
    }

    router.push(`${router.pathname}/?tag=${hyphenize(filter)}`, undefined, {
      shallow: true,
    });
  };

  return (
    <PageLayout {...pageInfo}>
      <ContentFilters
        tagsMap={tagsMap}
        onFilterClick={handleSetFilter}
        onSearchChange={e => setSearchValue(e.target.value)}
      />
      {data ? (
        <>
          <PageGrid>
            {filteredData.length ? (
              filteredData.map(({ id, url, title, imageSrc, price, tags }) => (
                <ContentCard
                  key={id}
                  url={url}
                  title={title}
                  subtitle={usdFormatter.format(price)}
                  image={{ src: imageSrc }}
                  tags={tags}
                />
              ))
            ) : (
              <p>
                <i>Nothing found.</i>
              </p>
            )}
          </PageGrid>
          <hr />
          <p>
            Last updated:{' '}
            {new Date(data?.createdAt._seconds * 1000).toLocaleDateString()}
          </p>
        </>
      ) : (
        <p>
          <i>Loading...</i>
        </p>
      )}
    </PageLayout>
  );
}
