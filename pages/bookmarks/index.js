import Bookmark from "../../components/Bookmark";
import Layout from "../../components/Layout";
import { BASE_URL } from "../../constants";

const pageInfo = {
  title: "Bookmarks",
};

const BookmarksPage = ({ bookmarks }) => (
  <Layout {...pageInfo}>
    <div className="Page Page--wide">
      <h1>{pageInfo.title}</h1>
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

export default BookmarksPage;
