export const routes = {
  about: {
    href: '/',
    activePaths: ['/'],
    title: 'About',
  },
  bookmarks: {
    href: '/bookmarks',
    activePaths: ['/bookmarks'],
    title: 'Bookmarks',
  },
  snippets: {
    href: '/snippets',
    activePaths: ['/snippets', '/snippets/[type]/[slug]'],
    title: 'Snippets',
  },
};
