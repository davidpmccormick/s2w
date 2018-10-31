module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'somewhere to wear',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Amatic+SC:700'},
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  plugins: [
    { src: '~/plugins/ga.js', ssr: false }
  ],
  modules: [
    '@nuxtjs/sentry'
  ],
  sentry: {
    dsn: 'https://cbf37ea76a9f4f0883c7fb2fb304ebce:dd85443da6ba442e8a906816d7179746@sentry.io/1309056'
  },
  css: [
    '~/assets/styles/main.scss'
  ],
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

