import Bookmark from "../../components/Bookmark";
import Layout from "../../components/Layout";
import { BASE_URL } from "../../constants";

const pageInfo = {
  title: "Bookmarks",
  description:
    "I collect articles and other resources that inspired me or taught me something new. Just like old photos, it’s nice to revisit these in the future.",
};

export default ({ bookmarks }) => (
  <Layout {...pageInfo}>
    <div className="Page Page--wide">
      <h1>{pageInfo.title}</h1>
      <p className="lead">{pageInfo.description}</p>
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
