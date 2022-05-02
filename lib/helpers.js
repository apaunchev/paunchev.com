export const delay = duration =>
  new Promise(resolve => setTimeout(resolve, duration));

export const getStarRating = rating => {
  if (Number.isInteger(rating)) {
    return Array(rating).fill('★').join('');
  } else {
    return Array(Math.floor(rating)).fill('★').join('') + ' ½';
  }
};

export const formatDaysAgo = (value, locale = 'en') => {
  if (!value) {
    return null;
  }

  const date = new Date(value);
  const deltaDays = (date.getTime() - Date.now()) / (1000 * 3600 * 24);
  const formatter = new Intl.RelativeTimeFormat(locale);

  return formatter.format(Math.round(deltaDays), 'days');
};
