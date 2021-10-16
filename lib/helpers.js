export const hyphenize = str => str.replace(/\s+/g, '-').toLowerCase();

export const getHeadings = source => {
  const headingLines = source.split('\n').filter(line => {
    return line.match(/^###*\s/);
  });

  const headings = [];
  let baseLevel;

  headingLines.forEach((line, index) => {
    const title = line.replace(/^###*\s/, '');
    const slug = title
      .toLowerCase()
      .replace(/[^a-zA-Z0-9 -]/gi, '')
      .replace(/ /g, '-');
    const level = line.slice(0, 3) === '###' ? 3 : 2;

    if (index === 0) {
      baseLevel = level;
    }

    if (level === baseLevel) {
      headings.push({ slug, title, children: [] });
    } else {
      headings[headings.length - 1].children.push({ slug, title });
    }
  });

  return headings;
};

export const delay = duration =>
  new Promise(resolve => setTimeout(resolve, duration));

export const parseBookTitle = fullTitle => {
  if (!fullTitle.includes(':')) {
    return fullTitle;
  }

  const [title, subtitle] = fullTitle.split(':');

  return [title, subtitle];
};

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

export const classNames = (...args) => args.filter(Boolean).join(' ');
