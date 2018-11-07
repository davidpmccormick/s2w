import Vuex from 'vuex';
import cookie from 'cookie-cutter';

export default () => {
  return new Vuex.Store({
    state: {
      toggleExperiments: []
    },
    mutations: {
      setExperiments(state, value) {
        cookie.set('s2w_experiments', JSON.stringify(value), {
          path: '/',
          expires: 'Fri, 31 Dec 2036 23:59:59 GMT'
        });

        state.toggleExperiments = value;
      }
    },
    getters: {
      hasToggleTest(state) {
        const toggleTest = state.toggleExperiments.find(e => e.name === 'toggleTest');

        return toggleTest && toggleTest.value;
      }
    }
  });
};
