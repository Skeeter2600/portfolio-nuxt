export default {
  target: 'static',
  head: {
    title: 'Beck Anderson - Software Engineer',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Portfolio of Beck Anderson, a Software Engineer specializing in Vue, Nuxt, React, and full-stack development' },
      { name: 'google-site-verification', content: 'Bd8B5XOSW9b0oPrIETRfytp7jrYGM7oP00g-OVG8HhI' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '~/public/favicon.ico' },
      { 
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap'
      }
    ]
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  buildModules: [
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    scss: [
      '~/assets/scss/variables.scss',
    ]
  },
  css: [
    '~/assets/scss/main.scss'
  ],
  components: true,
  modules: [
    '@nuxt/content'
  ],
  content: {},
  build: {
    publicPath: process.env.GITHUB_ACTIONS ? '/portfolio-nuxt/_nuxt/' : '/_nuxt/'
  },
  generate: {
    fallback: true
  },
  router: {
    base: process.env.GITHUB_ACTIONS ? '/portfolio-nuxt/' : '/'
  },

}