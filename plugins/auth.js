import Vue from 'vue'
// import { domain, clientId } from '../auth_config.json'
import { Auth0Plugin } from '../auth/'
Vue.use(Auth0Plugin, {
  domain: process.env.authdomain,
  clientId: process.env.authclient,
  onRedirectCallback: (appState) => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    )
  },
})
