export function hyphenize(string) {
  return string.replace(/\s+/g, '-').toLowerCase();
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

export const githubLink = (type, slug, extension) =>
  `https://github.com/apaunchev/paunchev.com/edit/master/content/${type}/${slug}.${extension}`;
