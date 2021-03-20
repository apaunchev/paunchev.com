import { hyphenize } from '@/lib/helpers';
import { useMemo, useState } from 'react';

export function useFilteredData(originalData) {
  const [filterValue, setFilterValue] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const filteredData = useMemo(() => {
    let filteredData = originalData || [];

    if (filterValue) {
      filteredData = filteredData.filter(item => {
        const tags = item?.tags;

        if (!tags) {
          return false;
        }

        return tags.includes(hyphenize(filterValue));
      });
    }

    if (searchValue) {
      filteredData = filteredData.filter(item =>
        item.title.toLowerCase().includes(searchValue.toLowerCase()),
      );
    }

    return filteredData;
  }, [originalData, filterValue, searchValue]);

  return [filteredData, { setFilterValue, setSearchValue }];
}
