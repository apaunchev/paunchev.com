const formatFilters = ({ startDate, endDate, language }) => {
  const formattedFilters = {};
  const dateRangeFilter = `created:${startDate}..${endDate}`;
  const languageFilter = language ? `language:${language}` : '';

  formattedFilters.q = `${dateRangeFilter} ${languageFilter}`;
  formattedFilters.sort = 'stars';
  formattedFilters.order = 'desc';

  return formattedFilters;
};

const github = async (req, res) => {
  const { startDate, endDate, language } = req.query;
  const filtersParams = new URLSearchParams(
    formatFilters({ startDate, endDate, language }),
  );
  const reposResponse = await fetch(
    `https://api.github.com/search/repositories?${filtersParams}`,
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`,
      },
    },
  );
  const repos = await reposResponse.json();

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1200, stale-while-revalidate=600',
  );

  return res.status(200).json(repos);
};

export default github;
