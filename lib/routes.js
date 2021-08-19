export const routes = {
  home: {
    href: '/',
    activePaths: ['/'],
    title: 'Home',
  },
  library: {
    href: '/library',
    activePaths: ['/library', '/library/[type]'],
    title: 'Library',
  },
  snippets: {
    href: '/snippets',
    activePaths: ['/snippets'],
    title: 'Snippets',
  },
  resources: {
    href: '/resources',
    activePaths: ['/resources', '/resources/[slug]'],
    title: 'Resources',
  },
};
