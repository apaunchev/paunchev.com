const GITHUB_API = 'https://api.github.com';

const GITHUB_ENDPOINT = (user, repository) => {
  return `${GITHUB_API}/repos/${user}/${repository}`;
};

const GITHUB_HEADERS = new Headers({
  Authorization: `Token ${process.env.GITHUB_ACCESS_TOKEN}`,
});

export const STALE_DURATION = 3600;
export const FRESH_DURATION = STALE_DURATION / 2;

export default async function route(req, res) {
  try {
    const {
      repository: [user, repository],
    } = req.query;
    const response = await fetch(GITHUB_ENDPOINT(user, repository), {
      headers: GITHUB_HEADERS,
    }).then(response => {
      if (!response.ok) throw new Error();

      return response.json();
    });

    res.setHeader(
      'Cache-Control',
      `public, s-maxage=${FRESH_DURATION}, max-age=${FRESH_DURATION}, stale-while-revalidate=${STALE_DURATION}`,
    );
    res.status(200).json({
      name: response.name,
      description: response.description,
      stars: response.stargazers_count,
      language: response.language,
    });
  } catch {
    res.status(500).send(undefined);
  }
}
