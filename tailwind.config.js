const colors = require('tailwindcss/colors');

module.exports = {
  purge: false,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Quicksand', 'sans-serif'],
      },
      colors: {
        gray: {
          ...colors.gray,
          700: '#171717',
          800: '#101010',
          900: '#0d0d0d',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
