module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js', './layouts/**/*.js'],
  darkMode: 'media',
  theme: {
    extend: {
      gridTemplateColumns: {
        full: 'repeat(auto-fill, minmax(300px, 1fr))',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
