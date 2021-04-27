const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
module.exports = {
  jit: true,
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.gray,
        svgSpecial: '#1B1D1C',
        svgSpecial_dark: '#3C485E',
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
