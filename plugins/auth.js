import Vue from 'vue'
import { Auth0Plugin } from '../auth/'

Vue.use(Auth0Plugin, {
  domain: process.env.NUXT_ENV_AUTH_DOMAIN,
  clientId: process.env.NUXT_ENV_AUTH_CLIENT,
  onRedirectCallback: (appState) => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    )
  },
})
