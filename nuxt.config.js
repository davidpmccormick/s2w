const fs = require('fs');

const sha = fs.readFileSync('./sha.txt', 'utf8');

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
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ]
  },
  loading: { color: '#333' },
  /*
  ** Build configuration
  */
  plugins: [
    { src: '~plugins/s2w.js', ssr: false },
    { src: '~/plugins/ga.js', ssr: false },
    { src: '~plugins/sentry.js', ssr: false },
    { src: '~plugins/web-font-loader.js', ssr: false }
  ],
  modules: [
    '@nuxtjs/axios'
  ],
  css: [
    '~/assets/styles/main.scss'
  ],
  env: {
    sha: sha,
    dev: true
  },
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
        });
      }
    }
  },
  static: {
    setHeaders(res, path) {
      if (path.match(/\.js$/)) {
        res.setHeader('Cache-Control', 'public, max-age=600'); // 10 minutes
      }

      if (path.match(/analytics\.js$/)) {
        res.setHeader('Cache-Control', 'public, max-age=7200'); // 2 hours
      }

      if (path.match(/\.css/)) {
        res.setHeader('Cache-Control', 'public, max-age=86400'); // 24 hours
      }
    }
  }
};
