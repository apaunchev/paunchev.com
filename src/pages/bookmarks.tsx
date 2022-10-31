import bookmarks from "../../content/bookmarks.json";
import { ExternalLink } from "../components/external-link";

export default function BookmarksPage() {
  return (
    <>
      <h1>Bookmarks</h1>
      <div className="flex flex-col gap-4">
        {bookmarks.map(({ url, title, description, quote }) => (
          <ExternalLink
            key={url}
            href={url}
            title={title}
            description={quote ? `“${quote}”` : description}
          />
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  return { props: { title: "Bookmarks" } };
}
