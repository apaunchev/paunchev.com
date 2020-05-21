import Bookmark from "../../components/Bookmark";
import Layout from "../../components/Layout";
import { BASE_URL } from "../../constants";

export default ({ bookmarks }) => (
  <Layout title="Bookmarks">
    <div className="Page Page--wide">
      <h1>Bookmarks</h1>
      <p className="lead">
        I collect articles and other resources that inspired me or taught me
        something new. Just like old photos, it’s nice to revisit these in the
        future.
      </p>
      <div className="Grid">
        {bookmarks.map((bookmark) => (
          <Bookmark key={bookmark.id} {...bookmark} />
        ))}
      </div>
    </div>
  </Layout>
);

export async function getServerSideProps() {
  const res = await fetch(`${BASE_URL}/api/pocket`);
  const bookmarks = await res.json();

  return {
    props: { bookmarks },
  };
}
