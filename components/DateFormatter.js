import { format, parseISO } from "date-fns";

export default function DateFormater({ dateString }) {
  const date = parseISO(dateString);

  return <time dateTime={dateString}>{format(date, "d LLLL, yyyy")}</time>;
}
