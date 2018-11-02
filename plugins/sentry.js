import Vue from 'vue';
import * as Sentry from '@sentry/browser';

Sentry.init({
  dsn: 'https://cbf37ea76a9f4f0883c7fb2fb304ebce@sentry.io/1309056'
});

Vue.prototype.$sentry = Sentry;
