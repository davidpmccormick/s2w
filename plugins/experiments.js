import cookie from 'cookie-cutter';
import tryPromise from '~/utils/try-promise';

export default ({ store, app }) => {
  async function experiments() {
    const { data } = await app.$axios.get('https://cdn.jsdelivr.net/gh/davidpmccormick/s2w@config/config/experiments.json');
    const { experiments } = data;
    const fetchedToggleExperiments = experiments.filter(e => e.type === 'toggle');
    const maybeCookies = cookie.get('s2w_experiments') || '[]';
    const cookies = JSON.parse(maybeCookies);
    const toggleExperiments = fetchedToggleExperiments.map(te => {
      const existingCookie = cookies.find(c => c.name === te.name);

      return { ...te, value: existingCookie ? existingCookie.value : false };
    });

    store.dispatch('updateExperiments', toggleExperiments);
  }

  tryPromise(experiments)();
};
