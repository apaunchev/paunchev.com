const DateFormater = ({ dateString, locale = "en-GB", options = {} }) => (
  <time dateTime={dateString}>
    {new Date(dateString).toLocaleDateString(locale, options)}
  </time>
);

export default DateFormater;
