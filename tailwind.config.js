module.exports = {
  purge: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      gridTemplateColumns: {
        library: 'repeat(auto-fill, minmax(300px, 1fr))',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
