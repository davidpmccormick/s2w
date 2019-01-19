import fs from 'fs';

const sha = fs.readFileSync('./sha.txt', 'utf8');

module.exports = {
  head: {
    title: 'somewhere to wear',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ],
    script: [
      { innerHTML: `document.documentElement.classList.add('enhanced')` }
    ],
    __dangerouslyDisableSanitizers: ['script']
  },
  loading: { color: '#333', height: '1px' },
  plugins: [
    { src: '~plugins/webfont-loader.js', ssr: false },
    { src: '~plugins/experiments.js', ssr: false },
    { src: '~/plugins/ga.js', ssr: false },
    { src: '~plugins/sentry.js', ssr: false },
    { src: '~/plugins/google-maps', ssr: false },
    { src: '~plugins/prismic-api.js', ssr: true }
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dotenv'
  ],
  css: ['~/assets/styles/tailwind.scss'],
  env: {
    dev: true,
    sha: sha
  },
  modern: 'client',
  build: {
    transpile: [/^vue2-google-maps($|\/)/],
    extend(config, { isDev }) {
      if (isDev && process.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  }
};
