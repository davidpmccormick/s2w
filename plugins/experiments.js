import cookie from 'cookie-cutter';

export default(async ({ store, app }) => {
  const { data } = await app.$axios.get('/experiments.json');
  const { experiments } = data;
  const fetchedToggleExperiments = experiments.filter(e => e.type === 'toggle');
  const maybeCookies = cookie.get('s2w_experiments')  || '[]';
  const cookies = JSON.parse(maybeCookies);
  const toggleExperiments = fetchedToggleExperiments.map(te => {
    const existingCookie = cookies.find(c => c.name === te.name);

    return {...te, value: existingCookie ? existingCookie.value : false};
  });

  store.dispatch('updateExperiments', toggleExperiments);
});
