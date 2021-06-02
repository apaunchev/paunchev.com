import ContentCard from '@/components/ContentCard';
import ContentGrid from '@/components/ContentGrid';
import PageHeader from '@/components/PageHeader';
import PageLayout from '@/layouts/page';
import fetcher from '@/lib/fetcher';
import { dateFormatter } from '@/lib/helpers';
import { useState } from 'react';
import { Clock, Star } from 'react-feather';
import useSWR from 'swr';

export const pageInfo = {
  title: '/github',
  description: 'The most starred repositories on GitHub.',
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

  const handleSetLanguage = e => {
    setLanguage(e.target.value);
  };

  const handleSetPeriod = e => {
    const selectedPeriod = e.target.value;

    switch (selectedPeriod) {
      case 'day':
        setStartDate(yesterday.toISOString());
        setEndDate(today.toISOString());
        break;
      case 'week':
        setStartDate(aWeekAgo.toISOString());
        setEndDate(today.toISOString());
        break;
      case 'month':
        setStartDate(aMonthAgo.toISOString());
        setEndDate(today.toISOString());
        break;
      case 'year':
        setStartDate(aYearAgo.toISOString());
        setEndDate(today.toISOString());
        break;
      default:
        return;
    }
  };

  return (
    <PageLayout title={pageInfo.title} description={pageInfo.description}>
      <PageHeader title={pageInfo.title} subtitle={pageInfo.description} />
      <div className="content-filters">
        <div className="content-filters__item">
          <label htmlFor="language" className="form-label">
            Language:
          </label>
          <select
            id="language"
            name="language"
            className="form-control form-control--select"
            onChange={handleSetLanguage}
          >
            <option value="javascript">JavaScript</option>
            <option value="typescript">TypeScript</option>
            <option value="python">Python</option>
            <option value="css">CSS</option>
            <option value="html">HTML</option>
          </select>
        </div>
        <div className="content-filters__item">
          <label htmlFor="period" className="form-label">
            Period:
          </label>
          <select
            id="period"
            name="period"
            className="form-control form-control--select"
            onChange={handleSetPeriod}
          >
            <option value="day">Daily</option>
            <option value="week">Weekly</option>
            <option value="month">Monthly</option>
            <option value="year">Yearly</option>
          </select>
        </div>
      </div>
      <ContentGrid>
        {data
          ? data.items.map(
              ({
                id,
                name,
                html_url,
                description,
                owner,
                language,
                stargazers_count,
                created_at,
              }) => (
                <ContentCard
                  key={id}
                  url={html_url}
                  title={name}
                  subtitle={owner?.login}
                  description={description}
                  extra={
                    <ul className="icons-list">
                      <li
                        className="icons-list__item"
                        title="Stars"
                        aria-label="Stars"
                      >
                        <Star width={18} height={18} />
                        {stargazers_count}
                      </li>
                      <li
                        className="icons-list__item"
                        title="Date created"
                        aria-label="Date created"
                      >
                        <Clock width={18} height={18} />
                        {dateFormatter(new Date(created_at))}
                      </li>
                    </ul>
                  }
                  tags={[language?.toLowerCase()]}
                />
              ),
            )
          : [...Array(12)].map((_, i) => (
              <div key={i} className="content-placeholder">
                <div
                  className="line"
                  style={{
                    width: '100%',
                    height: '2rem',
                  }}
                />
                <div
                  className="line"
                  style={{
                    width: '50%',
                    height: '1.75rem',
                  }}
                />
                <div
                  className="line"
                  style={{
                    width: '100%',
                    height: '4rem',
                  }}
                />
                <div className="line" style={{ width: '50%' }} />
                <div className="line" style={{ width: '30%' }} />
              </div>
            ))}
      </ContentGrid>
    </PageLayout>
  );
}
