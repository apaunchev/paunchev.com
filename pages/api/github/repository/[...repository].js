const GITHUB_API = 'https://api.github.com';
const GITHUB_REPO_ENDPOINT = (user, repository) =>
  `${GITHUB_API}/repos/${user}/${repository}`;
const GITHUB_HEADERS = new Headers({
  Authorization: `Token ${process.env.GITHUB_ACCESS_TOKEN}`,
});

export const STALE_DURATION = 86400;
export const FRESH_DURATION = STALE_DURATION / 2;

export default async function repository(req, res) {
  try {
    const {
      repository: [user, repository],
    } = req.query;
    const response = await fetch(GITHUB_REPO_ENDPOINT(user, repository), {
      headers: GITHUB_HEADERS,
    });
    const json = await response.json();

    res
      .setHeader(
        'Cache-Control',
        `public, s-maxage=${FRESH_DURATION}, max-age=${FRESH_DURATION}, stale-while-revalidate=${STALE_DURATION}`,
      )
      .status(200)
      .json({
        name: json.name,
        description: json.description,
        stars: json.stargazers_count,
        language: json.language,
      });
  } catch (err) {
    res.status(500).send(err);
  }
}
