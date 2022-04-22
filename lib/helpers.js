export const delay = duration =>
  new Promise(resolve => setTimeout(resolve, duration));

export const getStarRating = rating => Array(rating).fill('★').join('');

export const formatDaysAgo = (value, locale = 'en') => {
  if (!value) {
    return null;
  }

  const date = new Date(value);
  const deltaDays = (date.getTime() - Date.now()) / (1000 * 3600 * 24);
  const formatter = new Intl.RelativeTimeFormat(locale);

  return formatter.format(Math.round(deltaDays), 'days');
};
