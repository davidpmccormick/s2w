import Vuex from 'vuex';

export default () => {
  return new Vuex.Store({
    state: {
      isAnimationFinished: false
    },
    mutations: {
      setAnimationFinished(state) {
        state.isAnimationFinished = true;
      }
    }
  });
}

