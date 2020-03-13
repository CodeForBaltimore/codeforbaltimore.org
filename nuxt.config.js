require('dotenv').config();

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
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { hid: 'keywords', name: 'keywords', content: 'civic, tech, social, good, baltimore, maryland, software, development' }
    ]
  },
  generate: {
    fallback: true
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#71489D' },
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
    '~/plugins/vue-carousel',
    '~/plugins/vue-cookie-accept-decline',
    {
      src: '@/plugins/vuelayers',
      ssr: false
    }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/moment'
  ],
  moment: {
    defaultTimezone: 'America/New_York'
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    'nuxt-fontawesome',
    '@nuxtjs/markdownit',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@dansmaculotte/nuxt-security',
    '@bazzite/nuxt-optimized-images',
    '~/modules/vuelayers',
    '~/modules/vue-cookie-accept-decline',
    ['@nuxtjs/pwa', { workbox: false, onesignal: false }],
  ],
  /*
  ** Security configuration
  */
  security: {
    csp: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'","'unsafe-inline'","'unsafe-eval'"],
        connectSrc: ["'self' *.contentful.com"],
        imgSrc: ["'self' data: images.ctfassets.net *.tile.openstreetmap.org"],
        styleSrc: ["'self' fonts.googleapis.com","'unsafe-inline'"],
        fontSrc: ["'self' data: fonts.gstatic.com",],
        frameSrc: ["'self' www.youtube.com youtube.com"]
      },
      loose: false,
      reportOnly: false,
      setAllHeaders: true,
      disableAndroid: false,
      browserSniff: true
    },
    referrer: 'same-origin',
    features: {
      accelerometer: ["'none"],
      ambientLightSensor: ["'none"],
      autoplay:  ["'none"],
      camera: ["'none"],
      documentDomain: ["'none"],
      documentWrite: ["'none"],
      encryptedMedia: ["'none"],
      fontDisplayLateSwap: ["'none"],
      fullscreen: ["'none"],
      geolocation: ["'none"],
      gyroscope: ["'none"],
      layoutAnimations: ["'none"],
      legacyImageFormats: ["'none"],
      loadingFrameDefaultEager: ["'none"],
      magnetometer: ["'none"],
      microphone: ["'none"],
      midi: ["'none"],
      notifications: ["'none"],
      oversizedImages: ["'none"],
      payment: ["'none"],
      pictureInPicture: ["'none"],
      serial: ["'none"],
      speaker: ["'none"],
      syncScript: ["'none"],
      syncXhr: ["'none"],
      unoptimizedImages: ["'none"],
      unoptimizedLosslessImages: ["'none"],
      unsizedMedia: ["'none"],
      usb: ["'none"],
      verticalScroll: ["'none"],
      vibrate: ["'none"],
      vr: ["'none"],
      wakeLock: ["'none"],
      xr: ["'none"]
    },
    securityFile: {
      contacts: 'mailto:hello@codeforbaltimore.org',
      preferredLanguages: 'en',
      acknowledgements: 'https://codeforbaltimore.org/about#team',
      policies: 'https://codeforbaltimore.org/code-of-conduct',
      hirings: 'https://codeforbaltimore.org/get-involved'
    },
    additionalHeaders: true
  },
  /*
  ** Sitemap config
  */
  sitemap: {
    hostname: 'https://codeforbaltimore.org'
  },
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
  ** PWA config
  */
  pwa: {
    meta: {
      twitterCard: 'summary',
      twitterSite: '@CodeForBmore',
      twitterCreator: '@CodeForBmore',
      ogHost: 'https://codeforbaltimore.org',
      ogTitle: 'Code For Baltimore',
      ogUrl: 'https://codeforbaltimore.org',
      ogImage: {
        path: '/social.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg'
      }
    }
  },
  /*
  ** Image config
  */
  optimizedImages: {
    optimizeImages: true
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
  env: {
    NODE_ENV: process.env.NODE_ENV,
    CONTENTFUL_SPACE_ID: process.env.CTF_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN,
    SLACK_LINK: process.env.SLACK_LINK
  }
}
