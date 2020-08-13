import Book from "../../components/Book";
import Layout from "../../components/Layout";
import { BASE_URL } from "../../constants";
import { isEmpty } from "../../lib/utils";

const pageInfo = {
  title: "Books",
  description: "Books I am currently reading or have read previously.",
};

const BooksPage = ({ currently, previously }) => (
  <Layout {...pageInfo}>
    <div className="Page">
      <h1>{pageInfo.title}</h1>
      <p className="text-lead">{pageInfo.description}</p>
      {!isEmpty(currently) ? (
        <>
          <h2>Currently</h2>
          {currently.map((book) => (
            <Book key={book.id} {...book} />
          ))}
          <p>
            <a
              className="arrowed"
              href="https://www.goodreads.com/review/list/40107870-angel-paunchev?shelf=currently-reading"
            >
              See on Goodreads
            </a>
          </p>
        </>
      ) : null}
      {!isEmpty(previously) ? (
        <>
          <h2>Previously</h2>
          {previously.map((book) => (
            <Book key={book.id} {...book} />
          ))}
          <p>
            <a
              className="arrowed"
              href="https://www.goodreads.com/review/list/40107870-angel-paunchev?shelf=read"
            >
              See on Goodreads
            </a>
          </p>
        </>
      ) : null}
    </div>
  </Layout>
);

export async function getServerSideProps() {
  const currentlyResponse = await fetch(
    `${BASE_URL}/api/goodreads/currently-reading`
  );
  const previouslyResponse = await fetch(`${BASE_URL}/api/goodreads/read`);

  const currently = await currentlyResponse.json();
  const previously = await previouslyResponse.json();

  return {
    props: { currently, previously },
  };
}

export default BooksPage;
