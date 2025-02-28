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
      { rel: 'icon', type: 'image/png', href: '/images/favicon.ico' }
    ]
  },
  css: [
    './assets/css/main.css'
  ],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  plugins: [],
  components: true,
  buildModules: [],
  modules: [
    '@nuxt/content'
  ],
  content: {},
  build: {},
  generate: {
    fallback: true
  },
  app: {
    baseURL: '/'
  }
}