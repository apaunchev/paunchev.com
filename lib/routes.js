export const routes = {
  about: {
    href: '/',
    activePaths: ['/'],
    title: 'About',
  },
  library: {
    href: '/library',
    activePaths: ['/library', '/library/[type]'],
    title: 'Library',
  },
  snippets: {
    href: '/snippets',
    activePaths: ['/snippets', '/snippets/[slug]'],
    title: 'Snippets',
  },
  wishlist: {
    href: '/wishlist',
    activePaths: ['/wishlist'],
    title: 'Wishlist',
  },
  photos: {
    href: '/photos',
    activePaths: ['/photos'],
    title: 'Photos',
  },
  uses: {
    href: '/uses',
    activePaths: ['/uses'],
    title: 'Uses',
  },
};
