import ContentCard from '@/components/ContentCard';
import PageGrid from '@/components/PageGrid';
import PageLayout from '@/layouts/page';
import fetcher from '@/lib/fetcher';
import { dateFormatter } from '@/lib/helpers';
import { useState } from 'react';
import useSWR from 'swr';

export const pageInfo = {
  title: 'Stargazer',
  description: 'Explore the most starred GitHub repos.',
};

const PERIODS = {
  DAY: 1000 * 60 * 60 * 24,
  WEEK: 1000 * 60 * 60 * 24 * 7,
  MONTH: 1000 * 60 * 60 * 24 * 30,
  YEAR: 1000 * 60 * 60 * 24 * 365,
};

export default function Stargazer() {
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
    <PageLayout {...pageInfo}>
      <div className="content-filters">
        <div className="content-filters__item">
          <label htmlFor="language" className="form-label">
            Language:
          </label>
          <select
            id="language"
            name="language"
            className="form-control select"
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
            className="form-control select"
            onChange={handleSetPeriod}
          >
            <option value="day">Daily</option>
            <option value="week">Weekly</option>
            <option value="month">Monthly</option>
            <option value="year">Yearly</option>
          </select>
        </div>
      </div>
      <PageGrid>
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
                    <ul className="extra-list">
                      <li
                        className="extra-list__item"
                        title="Stars"
                        aria-label="Stars"
                      >
                        <svg
                          height="16"
                          width="16"
                          viewBox="0 0 16 16"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
                          ></path>
                        </svg>{' '}
                        {stargazers_count}
                      </li>
                      <li
                        className="extra-list__item"
                        title="Date created"
                        aria-label="Date created"
                      >
                        <svg
                          height="16"
                          width="16"
                          viewBox="0 0 16 16"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M1.643 3.143L.427 1.927A.25.25 0 000 2.104V5.75c0 .138.112.25.25.25h3.646a.25.25 0 00.177-.427L2.715 4.215a6.5 6.5 0 11-1.18 4.458.75.75 0 10-1.493.154 8.001 8.001 0 101.6-5.684zM7.75 4a.75.75 0 01.75.75v2.992l2.028.812a.75.75 0 01-.557 1.392l-2.5-1A.75.75 0 017 8.25v-3.5A.75.75 0 017.75 4z"
                          ></path>
                        </svg>{' '}
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
                  style={{ width: '100%', height: '2rem' }}
                />
                <div
                  className="line"
                  style={{ width: '50%', height: '1.75rem' }}
                />
                <div
                  className="line"
                  style={{ width: '100%', height: '4rem' }}
                />
                <div className="line" style={{ width: '50%' }} />
                <div className="line" style={{ width: '30%' }} />
              </div>
            ))}
      </PageGrid>
    </PageLayout>
  );
}
