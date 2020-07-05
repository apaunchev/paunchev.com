const parser = require("xml2json");

const getBooks = async (shelf) => {
  const response = await fetch(
    `https://www.goodreads.com/review/list/40107870.xml?v=2&shelf=${shelf}&sort=date_read&key=${process.env.GOODREADS_API_KEY}`
  );
  const text = await response.text();
  const json = parser.toJson(text);

  return transform(JSON.parse(json));
};

const transform = (data) => {
  const parseDate = ($) => {
    if ($.length > 0) {
      $ = new Date($).toJSON();
      $ = $.split("T")[0];
      return $;
    } else {
      return $;
    }
  };

  const formatObject = ($) => ({
    id: $.id,
    rating: $.rating,
    finished: parseDate($.read_at),
    started: parseDate($.started_at),
    url: $.url,
    book: {
      author: $.book.authors.author.name,
      title: $.book.title,
      image: $.book.image_url,
      url: $.book.link,
    },
  });

  data = data?.GoodreadsResponse?.reviews?.review;

  if (Array.isArray(data)) {
    return data.map(($) => formatObject($));
  } else {
    return [formatObject(data)];
  }
};

export default async (req, res) => {
  try {
    const books = await getBooks(req.query.shelf);

    res.status(200).json(books);
  } catch (error) {
    res.status(500).send(error);
  }
};
