import {
  ContentFilters,
  ContentFiltersSelect,
} from '@/components/content-filters';
import {
  ContentGrid,
  ContentGridRepositoryItem,
} from '@/components/content-grid';
import { PageHeader } from '@/components/page-header';
import { Placeholders } from '@/components/placeholders';
import { PageLayout } from '@/layouts/page';
import fetcher from '@/lib/fetcher';
import { useState } from 'react';
import useSWR from 'swr';

const pageInfo = {
  title: '/github',
  // description: '',
};

const PERIODS = {
  DAY: 1000 * 60 * 60 * 24,
  WEEK: 1000 * 60 * 60 * 24 * 7,
  MONTH: 1000 * 60 * 60 * 24 * 30,
  YEAR: 1000 * 60 * 60 * 24 * 365,
};

export default function GitHub() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const yesterday = new Date(today.getTime() - PERIODS.DAY);
  yesterday.setHours(0, 0, 0, 0);
  const aWeekAgo = new Date(today.getTime() - PERIODS.WEEK);
  aWeekAgo.setHours(0, 0, 0, 0);
  const aMonthAgo = new Date(today.getTime() - PERIODS.MONTH);
  aMonthAgo.setHours(0, 0, 0, 0);
  const aYearAgo = new Date(today.getTime() - PERIODS.YEAR);
  aYearAgo.setHours(0, 0, 0, 0);

  const [startDate, setStartDate] = useState(yesterday.toISOString());
  const [endDate, setEndDate] = useState(today.toISOString());
  const [language, setLanguage] = useState('javascript');

  const { data } = useSWR(
    `/api/github?startDate=${startDate}&endDate=${endDate}&language=${language}`,
    fetcher,
  );

  const handleSetPeriod = e => {
    const selectedPeriod = e.target.value;

    switch (selectedPeriod) {
      case 'daily':
        setStartDate(yesterday.toISOString());
        setEndDate(today.toISOString());
        break;
      case 'weekly':
        setStartDate(aWeekAgo.toISOString());
        setEndDate(today.toISOString());
        break;
      case 'monthly':
        setStartDate(aMonthAgo.toISOString());
        setEndDate(today.toISOString());
        break;
      case 'yearly':
        setStartDate(aYearAgo.toISOString());
        setEndDate(today.toISOString());
    }
  };

  return (
    <PageLayout title={pageInfo.title} description={pageInfo.description}>
      <PageHeader title={pageInfo.title} subtitle={pageInfo.description} />
      <ContentFilters>
        <ContentFiltersSelect
          name="language"
          label="Language"
          options={['JavaScript', 'TypeScript', 'Python', 'CSS', 'HTML']}
          onChange={e => setLanguage(e.target.value)}
        />
        <ContentFiltersSelect
          name="period"
          label="Period"
          options={['Daily', 'Weekly', 'Monthly', 'Yearly']}
          onChange={handleSetPeriod}
        />
      </ContentFilters>
      <ContentGrid>
        {data ? (
          data.items.map(item => (
            <ContentGridRepositoryItem key={item.id} {...item} />
          ))
        ) : (
          <Placeholders type="repository" count={15} />
        )}
      </ContentGrid>
    </PageLayout>
  );
}
