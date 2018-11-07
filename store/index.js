import Vuex from 'vuex';

export default () => {
  return new Vuex.Store({
    state: {
      toggleExperiments: []
    },
    mutations: {
      setExperiments(state, value) {
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
