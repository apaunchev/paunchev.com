export default ({ rating, book }) => {
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
        <p>{book.author}</p>
        {rating && <p>{rating}</p>}
      </div>
    </div>
  );
};
