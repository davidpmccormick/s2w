import cookie from 'cookie-cutter';

export default(({ store }) => {
  const experiments = cookie.get('s2w_experiments') || '[]';

  store.commit('setExperiments', JSON.parse(experiments));
});
