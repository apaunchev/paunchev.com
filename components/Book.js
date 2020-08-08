import DateFormater from "./DateFormatter";
import { isEmpty } from "../lib/utils";

const Book = ({ rating, finished, started, book }) => {
  rating =
    rating !== "0" ? `${"★".repeat(rating)}${"☆".repeat(5 - rating)}` : null;

  return (
    <div className="Book">
      <img
        className="Book__cover"
        src={book.image}
        alt={book.title}
        width={100}
        height={150}
      />
      <div className="Book__details">
        <p>
          <a href={book.url}>{book.title}</a>
        </p>
        <p>Author: {book.author}</p>
        {!isEmpty(finished) ? (
          <p>
            Finished: <DateFormater dateString={finished} />
          </p>
        ) : !isEmpty(started) ? (
          <p>
            Started: <DateFormater dateString={started} />
          </p>
        ) : null}
        {rating ? <p>My rating: {rating}</p> : null}
      </div>
    </div>
  );
};

export default Book;
