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
  uses: {
    href: '/uses',
    activePaths: ['/uses'],
    title: 'Uses',
  },
  stargazer: {
    href: '/stargazer',
    activePaths: ['/stargazer'],
    title: 'Stargazer',
  },
};
