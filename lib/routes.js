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
  notes: {
    href: '/notes',
    activePaths: ['/notes', '/notes/[slug]'],
    title: 'Notes',
  },
  projects: {
    href: '/projects',
    activePaths: ['/projects'],
    title: 'Projects',
  },
};
