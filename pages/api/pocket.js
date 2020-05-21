const GetPocket = require("node-getpocket");

const pocket = new GetPocket({
  consumer_key: process.env.POCKET_CONSUMER_KEY,
  access_token: process.env.POCKET_ACCESS_TOKEN,
});

const getBookmarks = () =>
  new Promise((resolve, reject) =>
    pocket.get(
      {
        favorite: "1",
        contentType: "article",
      },
      function (err, res) {
        if (err) {
          return reject(err);
        }

        return resolve(res.list || []);
      }
    )
  );

export default async (req, res) => {
  try {
    const response = await getBookmarks();
    const bookmarks = Object.keys(response)
      .map((key) => response[key])
      .map((bookmark) => ({
        id: bookmark.item_id,
        title: bookmark.resolved_title,
        url: bookmark.resolved_url,
        timeAdded: bookmark.time_added,
        imageSrc: bookmark.top_image_url,
        excerpt: bookmark.excerpt,
      }))
      .sort((a, b) => b.timeAdded - a.timeAdded);

    res.status(200).json(bookmarks);
  } catch (error) {
    res.status(500).send(error);
  }
};
