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
    { src: '~plugins/prismic-api.js' }
  ],
  modules: [
    '@nuxtjs/axios',
    ['nuxt-sass-resources-loader', '~/assets/styles/_resources.scss']
  ],
  css: ['~/assets/styles/tailwind.scss'],
  env: { dev: true },
  build: {
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
