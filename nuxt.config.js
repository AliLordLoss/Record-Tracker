import colors from 'vuetify/es5/util/colors'

export default {
  target: 'static',
  generate: {
    fallback: "404.html"
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '',
    title: 'Archery Record Calculator',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/style.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/pwa',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['nuxt-twa-module', {
      /* module options */
      defaultUrl: 'https://alilordloss.github.io',
      hostName: 'alilordloss.github.io',
      applicationId: 'io.github.alilordloss',
      launcherName: 'Archery Record Calculator',
      versionCode: 1,
      versionName: '1.0',
      statusBarColor: 'blue',
      // The sha256Fingerprints by is an array with one SHA-256 key string.
      // But if you have multiple you can add them to the array. More information about the website asociation:
      // https://developer.android.com/training/app-links/verify-site-associations#web-assoc
      sha256Fingerprints: ['E3A1E2E52B56690800D2134F1F3EEEC142959BF6D1FAA52D37D6A2658179E480'],
      /* optional */
      /* overwrite default location for icon */
      iconPath: '/static/icon.png',
      /* Overwrite folder where to put .wellknown */
      distFolder: '.nuxt/dist/client',
    }],
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
