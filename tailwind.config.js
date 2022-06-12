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
          600: '#404040',
          700: '#202020',
          750: '#171717',
          800: '#101010',
          900: '#0d0d0d',
        },
        yellow: {
          ...colors.yellow,
          400: '#bfa86b',
        },
        green: {
          ...colors.green,
          400: '#98b386',
        },
        purple: {
          ...colors.purple,
          400: '#999dd4',
        },
        red: {
          ...colors.red,
          400: '#ac616a',
        },
        white: {
          ...colors.white,
          DEFAULT: '#d0d0d0',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
