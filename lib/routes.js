export const routes = {
  home: {
    href: '/',
    activePaths: ['/'],
    title: 'Home',
  },
  bookmarks: {
    href: '/bookmarks',
    activePaths: ['/bookmarks'],
    title: 'Bookmarks',
  },
  snippets: {
    href: '/snippets',
    activePaths: ['/snippets'],
    title: 'Snippets',
  },
  books: {
    href: '/books',
    activePaths: ['/books', '/books/[slug]'],
    title: 'Books',
  },
};
