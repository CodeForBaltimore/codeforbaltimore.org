require('dotenv').config();

const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/CfB-websiteV3/'
  }
} : {}

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Code for Baltimore',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/main.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vue-carousel'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/dotenv'
  ],
  dotenv: {
    /* module options */
    systemvars: true,
    path: './'
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    'nuxt-fontawesome',
    '@nuxtjs/markdownit',
    '@nuxtjs/axios', ,
    '@nuxtjs/proxy'
  ],
  /*
  ** Fontawesome config
  */
  fontawesome: {
    component: 'fa',
    imports: [
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['faGithub', 'faLinkedin']
      }
    ]
  },
  /*
  ** Markdownit config
  */
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true
  },
  /*
  ** Axios config
  */
  axios: {
    proxy: true
  },
  /*
  ** Proxy config
  */
  proxy: {
    '/Code-for-Baltimore/events/rss/': 'https://www.meetup.com'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  /*
  ** env vars not added to .env or system environment
  */
  env: {
    CONTENTFUL_SPACE_ID: process.env.CTF_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN
  },
  routerBase
}
