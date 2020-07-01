export default {
  mode: 'universal',

  head: {
    title: 'Kolby Kruger',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt + Prismic showcase' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },

  loading: {
    color: '#fff'
  },

  css: [
      '@/static/fonts/moderat/moderat.css'
  ],

  plugins: [
      '@/assets/css/bundle.scss',
      'node_modules/flickity/dist/flickity.min.css',
      'node_modules/@fortawesome/fontawesome-free/js/all.min.js',
      'node_modules/@fortawesome/fontawesome-pro/js/all.min.js'
  ],

  modules: [
    '@/modules/static',
    '@/modules/crawler',
    '@nuxtjs/color-mode',
    '@nuxtjs/svg',
    '@nuxtjs/prismic'
  ],

  prismic: {
    endpoint: 'https://kolby-kruger.cdn.prismic.io/api/v2',
    linkResolver: '@/plugins/link-resolver',
    htmlSerializer: '@/plugins/html-serializer',
  },

  build: {

    extend(config, ctx) {
      config.resolve.alias['vue'] = 'vue/dist/vue.common'
    }
  },

  generate: {
    fallback: '404.html'
  }
}
