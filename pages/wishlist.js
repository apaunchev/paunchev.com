import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import css from 'styled-jsx/css';
import useSWR from 'swr';
import fetcher from '@/lib/fetcher';
import { hyphenize, usdFormatter } from '@/lib/helpers';
import PageLayout from '@/layouts/page';
import PageGrid from '@/components/PageGrid';
import ContentCard from '@/components/ContentCard';
import TagsFilter from '@/components/TagsFilter';

const pageInfo = {
  title: 'Wishlist',
  description:
    'Public list of things I’d like to get someday. Updated automatically by robots.',
};

const contentTypesMap = {
  books: 'Books',
};

export default function Wishlist() {
  const { data } = useSWR('/api/wishlist', fetcher);
  const router = useRouter();
  const [filter, setFilter] = useState('');

  const filteredData = useMemo(() => {
    return data?.data.filter(item => {
      if (!filter) {
        return true;
      }

      const tags = item?.tags;

      if (!tags) {
        return false;
      }

      return tags.includes(hyphenize(filter));
    });
  }, [data, filter]);

  useEffect(() => {
    const tag = router.query.tag;

    if (!tag || !contentTypesMap[hyphenize(tag)]) {
      setFilter('');
      return;
    }

    setFilter(tag);
  }, [router.query.tag]);

  const handleSetFilter = filter => {
    setFilter(filter);

    if (!filter) {
      router.push('/wishlist', undefined, { shallow: true });
      return;
    }

    router.push(`/wishlist/?tag=${hyphenize(filter)}`, undefined, {
      shallow: true,
    });
  };

  return (
    <PageLayout {...pageInfo}>
      <TagsFilter tagsMap={contentTypesMap} onFilterClick={handleSetFilter} />
      {data ? (
        <>
          <PageGrid>
            {filteredData?.map(
              ({ id, url, title, imageSrc, price, oldPrice, tags }) => {
                const priceLabel = (
                  <div>
                    {usdFormatter.format(price)}
                    {oldPrice ? (
                      <small className="old-price">
                        {usdFormatter.format(oldPrice)}
                      </small>
                    ) : null}
                  </div>
                );

                return (
                  <ContentCard
                    key={id}
                    url={url}
                    title={title}
                    subtitle={priceLabel}
                    image={{ src: imageSrc }}
                    tags={tags}
                  />
                );
              },
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
      <style jsx>{styles}</style>
    </PageLayout>
  );
}

const styles = css`
  .old-price {
    text-decoration: line-through;
    margin-left: 0.25rem;
  }
`;
