import Vuex from 'vuex';

export default () => {
  return new Vuex.Store({
    state: {
      experiments: []
    },
    mutations: {
      setExperiments(state, value) {
        state.experiments = value;
      }
    },
    getters: {
      hasToggleTest(state) {
        const toggleTest = state.experiments.find(e => e.name === 'toggleTest');
        return toggleTest && toggleTest.value;
      }
    }
  });
};
