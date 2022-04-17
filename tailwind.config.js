const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./{pages,layouts,components}/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
