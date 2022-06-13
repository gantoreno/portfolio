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
          600: '#808080',
          700: '#303030',
          725: '#2b2b2b',
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
        cyan: {
          ...colors.purple,
          400: '#8ac6c7',
        },
        pink: {
          ...colors.pink,
          400: '#A37F9F',
        },
        magenta: {
          ...colors.magenta,
          400: '#d166ae',
        },
        orange: {
          ...colors.orange,
          400: '#B6856B',
        },
        red: {
          ...colors.red,
          400: '#ac616a',
        },
        white: {
          ...colors.white,
          DEFAULT: '#d0d0d0',
        },
        clear: {
          ...colors.clear,
          400: '#d0d0d0',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
