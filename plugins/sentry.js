import Vue from 'vue';

Sentry.init({
  dsn: 'https://cbf37ea76a9f4f0883c7fb2fb304ebce@sentry.io/1309056',
  whitelistUrls: [/somewheretowear\.com/]
});

Vue.prototype.$sentry = Sentry;
