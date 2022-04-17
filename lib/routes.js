export const routes = {
  home: {
    href: '/',
    activePaths: ['/'],
    title: 'Home',
  },
  snippets: {
    href: '/snippets',
    activePaths: ['/snippets', '/snippets/[type]/[slug]'],
    title: 'Snippets',
  },
  bookmarks: {
    href: '/bookmarks',
    activePaths: ['/bookmarks'],
    title: 'Bookmarks',
  },
};
