import axios from "axios";
require('dotenv').config();
const { API_KEY } = process.env;


export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  mode: 'universal',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - ' + '健康大学',
    title: '健康大学',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: "twitter:card", name: "twitter:card", content: "summary_large_image"　},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    script: [
      { src: "https://platform.twitter.com/widgets.js", type: 'text/javascript' }
    ]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: '~/assets/sass/app.scss', lang: 'scss' },
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/persistedState.js'}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
     '@nuxtjs/dotenv',

    'vue-scrollto/nuxt',
    ['vue-scrollto/nuxt', { duration: 300 }],

    ['cookie-universal-nuxt', { parseJSON: false }],

    '@nuxtjs/style-resources',

    '@nuxtjs/google-gtag',
  ],
  'google-gtag': {
    id: 'G-ZB1CGWD9WN',
    debug: true, // Enable to track in dev mode.
  },

  generate: {
    async routes() {
      const pages = await axios
        .get('https://kenko-university.microcms.io/api/v1/blog', {
          headers: { 'X-API-KEY': process.env.API_KEY }
        })
        .then((res) =>
          res.data.contents.map((content) => ({
            route: `/${content.id}`,
            payload: content
          }))
        )
      return pages
    }
  },

  styleResources: {
    scss: [
      '@assets/sass/Foundation/variable.scss'
    ]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, { isDev, isClient }) {
      config.resolve.alias["vue"] = "vue/dist/vue.common"
    }
  },

  env: {
    API_KEY
  },
}
