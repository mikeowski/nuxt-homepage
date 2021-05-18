export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Burak Mike',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Burak Mike personal page',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/auth.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint

    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  serverMiddleware: [{ path: '/api/comment', handler: '~/api/comment.js' }],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    'nuxt-svg-loader',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },
  svgLoader: {
    svgoConfig: {
      plugins: [
        { prefixIds: false }, // Disables prefixing for SVG IDs
      ],
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    authdomain: process.env.authdomain || 'dev-03z1b31t.eu.auth0.com',
    authclient: process.env.authclient || 'YBR6Ej8LfEwxJYkKvJq4uhilB2TxrgVF',
    redis:
      process.env.NUXT_ENV_Redis ||
      'redis://:c24c148968a94037bcd9c29ded967a17@eu1-capital-sparrow-31880.upstash.io:31880',
  },
  adminId: process.env.Admin_ID || 'wK20754dll8ev3SBmG8R6fYdUAv02nTd',
}
