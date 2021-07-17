export const hyphenize = str => str.replace(/\s+/g, '-').toLowerCase();

export const formatDate = (
  date,
  locale = 'en-GB',
  options = {
    weekday: undefined,
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  },
) => date.toLocaleDateString(locale, options);

export const githubLink = (type, slug, extension) =>
  `https://github.com/apaunchev/paunchev.com/edit/master/content/${type}/${slug}.${extension}`;
