const GITHUB_API = 'https://api.github.com';
const GITHUB_REPO_ENDPOINT = `${GITHUB_API}/users/apaunchev/starred?per_page=100`;
const GITHUB_HEADERS = new Headers({
  Authorization: `Token ${process.env.GITHUB_ACCESS_TOKEN}`,
});

export const STALE_DURATION = 86400;
export const FRESH_DURATION = STALE_DURATION / 2;

export default async function starred(req, res) {
  try {
    const response = await fetch(GITHUB_REPO_ENDPOINT, {
      headers: GITHUB_HEADERS,
    });
    const json = await response.json();
    const repos = json.map(repo => ({
      url: repo.html_url,
      name: repo.name,
      description: repo.description,
      stars: repo.stargazers_count,
      language: repo.language,
    }));

    res
      .setHeader(
        'Cache-Control',
        `public, s-maxage=${FRESH_DURATION}, max-age=${FRESH_DURATION}, stale-while-revalidate=${STALE_DURATION}`,
      )
      .status(200)
      .json(repos);
  } catch (err) {
    res.status(500).send(err);
  }
}
