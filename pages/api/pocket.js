const GetPocket = require("node-getpocket");

const pocket = new GetPocket({
  consumer_key: process.env.POCKET_CONSUMER_KEY,
  access_token: process.env.POCKET_ACCESS_TOKEN,
});

const colors = [
  "rgb(251, 207, 213)",
  "rgb(254, 237, 208)",
  "rgb(187, 231, 229)",
  "rgb(143, 213, 252)",
];

const cache = {
  lastFetch: null,
  data: [],
};

const getBookmarks = () =>
  new Promise((resolve, reject) => {
    const timeSinceLastFetch = Date.now() - cache.lastFetch;

    if (timeSinceLastFetch <= 3600000) {
      return resolve(cache.data);
    }

    pocket.get(
      {
        favorite: "1",
        contentType: "article",
      },
      function (err, res) {
        if (err) {
          return reject(err);
        }

        const bookmarks = res.list || [];
        cache.lastFetch = Date.now();
        cache.data = bookmarks;

        return resolve(bookmarks);
      }
    );
  });

export default async (req, res) => {
  try {
    const response = await getBookmarks();
    const bookmarks = Object.keys(response)
      .map((key) => response[key])
      .map((bookmark) => ({
        title: bookmark.resolved_title,
        url: bookmark.resolved_url,
        time_added: bookmark.time_added,
        image: bookmark.top_image_url,
        color: colors[Math.floor(Math.random() * colors.length)],
        excerpt: bookmark.excerpt,
      }))
      .sort((a, b) => b.time_added - a.time_added);

    res.status(200).json(bookmarks);
  } catch (error) {
    res.status(500).send(error);
  }
};
