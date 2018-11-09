import Vuex from 'vuex';
import cookie from 'cookie-cutter';

export default () => {
  return new Vuex.Store({
    state: {
      toggleExperiments: []
    },
    mutations: {
      setToggleExperiments(state, value) {
        state.toggleExperiments = value;
      }
    },
    actions: {
      updateExperiments({ commit }, value) {
        cookie.set('s2w_experiments', JSON.stringify(value), {
          path: '/',
          expires: 'Fri, 31 Dec 2036 23:59:59 GMT'
        });

        commit('setToggleExperiments', value);
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
