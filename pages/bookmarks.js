import Layout from "../components/Layout";
import Bookmark from "../components/Bookmark";
import bookmarks from "../data/bookmarks";

export default () => (
  <Layout>
    <h1>Bookmarks</h1>
    <div className="Bookmarks">
      {bookmarks.map((b, i) => (
        <Bookmark key={i} {...b} />
      ))}
    </div>
  </Layout>
);
