import Vue from 'vue';
import cookie from 'cookie-cutter';

export default((_, inject) => {
  const experiments = cookie.get('s2w_experiments') || [];

  inject('experiments', experiments);
});
