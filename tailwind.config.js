const { fontFamily, spacing } = require('tailwindcss/defaultTheme')
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
      boxShadow: {
        bookmark_dark: 'inset 0 4px 8px 0 rgba(31, 41, 55,0.08)',
      },
      colors: {
        gray: colors.gray,
        svgSpecial: '#1B1D1C',
        svgSpecial_dark: '#3C485E',
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: 'inherit',
            'h2, h3, h4, h5': {
              'scroll-margin-top': spacing[32],
            },
            hr: {
              'border-color': colors.gray['200'],
            },
            '*': {
              color: 'inherit !important',
            },
          },
        },
        dark: {
          css: {
            hr: {
              'border-color': colors.gray['700'],
            },
          },
        },
      }),
    },
  },
  variants: {
    typography: ['dark'],
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
