import {
  ContentFilters,
  ContentFiltersInput,
  ContentFiltersSelect,
} from '@/components/content-filters';
import { ContentGrid, ContentGridItem } from '@/components/content-grid';
import { IconsList, IconsListItem } from '@/components/icons-list';
import { PageHeader } from '@/components/page-header';
import { Placeholders } from '@/components/placeholders';
import { Salary } from '@/components/salary';
import projects from '@/content/projects';
import { PageLayout } from '@/layouts/page';
import fetcher from '@/lib/fetcher';
import { hyphenize, pickUniqueByKey } from '@/lib/helpers';
import { useMemo, useState } from 'react';
import { Clock, DollarSign, MapPin } from 'react-feather';
import useSWR from 'swr';

const pageInfo = {
  title: projects.jobs.title,
  description: projects.jobs.description,
};

const MAX_ITEMS_TO_SHOW = 48;

export default function Jobs() {
  const [sortByValue, setSortByValue] = useState('');
  const [locationValue, setLocationValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [showAll, setShowAll] = useState(false);

  const { data } = useSWR('/api/jobs', fetcher);
  const locations = useMemo(
    () =>
      pickUniqueByKey(data?.listings || [], 'location').sort((a, b) =>
        a.localeCompare(b),
      ),
    [data],
  );
  const filteredData = useMemo(() => {
    const originalData = data?.listings || [];
    let output = [...originalData];

    switch (sortByValue) {
      case 'most-recent':
        output = [...originalData];
        break;
      case 'highest-salary':
        output.sort((a, b) => b.salary.range[0] - a.salary.range[0]);
        break;
      case 'lowest-salary':
        output.sort((a, b) => a.salary.range[0] - b.salary.range[0]);
    }

    if (locationValue) {
      output = output.filter(
        item =>
          hyphenize(item.location.toLowerCase()) ===
          hyphenize(locationValue.toLowerCase()),
      );
    }

    if (searchValue) {
      output = output.filter(item =>
        item.title.toLowerCase().includes(searchValue.toLowerCase()),
      );
    }

    return output;
  }, [data, sortByValue, locationValue, searchValue]);

  return (
    <PageLayout title={pageInfo.title} description={pageInfo.description}>
      <PageHeader title={pageInfo.title} subtitle={pageInfo.description} />
      <ContentFilters>
        <ContentFiltersSelect
          name="sortBy"
          label="Sort by"
          options={['Most recent', 'Highest salary', 'Lowest salary']}
          onChange={e => setSortByValue(e.target.value)}
        />
        <ContentFiltersSelect
          name="location"
          label="Location"
          options={['', ...locations]}
          onChange={e => setLocationValue(e.target.value)}
        />
        <ContentFiltersInput
          type="search"
          name="search"
          label="Search"
          onChange={e => setSearchValue(e.target.value)}
        />
      </ContentFilters>
      <ContentGrid>
        {data ? (
          filteredData
            .slice(0, showAll ? undefined : MAX_ITEMS_TO_SHOW)
            .map(({ key, company, date, location, salary, title, url }) => (
              <ContentGridItem
                key={key}
                title={title}
                image={{ src: company.logo }}
                subtitle={company.name}
                url={url}
                extra={
                  <IconsList>
                    <IconsListItem
                      label="Date posted"
                      icon={<Clock width={18} height={18} />}
                      value={date}
                    />
                    <IconsListItem
                      label="Location"
                      icon={<MapPin width={18} height={18} />}
                      value={location}
                    />
                    <IconsListItem
                      label="Salary"
                      icon={<DollarSign width={18} height={18} />}
                      value={<Salary {...salary} />}
                    />
                  </IconsList>
                }
              />
            ))
        ) : (
          <Placeholders type="job" count={15} />
        )}
      </ContentGrid>
      <p className="text-center">
        {!showAll && filteredData.length >= MAX_ITEMS_TO_SHOW ? (
          <button onClick={() => setShowAll(true)}>Show all results ↓</button>
        ) : null}
        {showAll ? (
          <button onClick={() => setShowAll(false)}>Show top results ↑</button>
        ) : null}
      </p>
    </PageLayout>
  );
}
