export function hyphenize(string) {
  return string.replace(/\s+/g, '-').toLowerCase();
}

export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function dateFormatter(
  date,
  locale = 'en-GB',
  options = {
    weekday: undefined,
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  },
) {
  return date.toLocaleDateString(locale, options);
}
