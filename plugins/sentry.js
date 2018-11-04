import Vue from 'vue';
import * as Sentry from '@sentry/browser';

export default (({ env }) => {
  Sentry.init({
    dsn: 'https://cbf37ea76a9f4f0883c7fb2fb304ebce@sentry.io/1309056',
    release: `s2w@${env.sha}`
  });

  Vue.prototype.$sentry = Sentry;
});

