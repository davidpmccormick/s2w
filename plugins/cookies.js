import Vue from 'vue';
import cookie from 'cookie-cutter';

const experiments = cookie.get('s2w_experiments') || [];

Vue.prototype.$experiments = experiments;
