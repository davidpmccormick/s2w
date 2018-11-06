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
    }
  });
};
