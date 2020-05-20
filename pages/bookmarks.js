import Bookmark from "../components/Bookmark";
import Layout from "../components/Layout";
import { BASE_URL } from "../constants";

export async function getServerSideProps() {
  const res = await fetch(`${BASE_URL}/api/pocket`);
  const bookmarks = await res.json();

  return {
    props: { bookmarks },
  };
}

export default ({ bookmarks }) => (
  <Layout>
    <div className="Page Page--wide">
      <h1>Bookmarks</h1>
      <div className="Grid">
        {bookmarks.map((b, i) => (
          <Bookmark key={i} {...b} />
        ))}
      </div>
    </div>
  </Layout>
);
