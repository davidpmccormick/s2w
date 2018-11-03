<template>
  <div class="container">
    <h1>Experiments</h1>
    <div
      v-for="toggleExperiment in toggleExperiments"
      :key="toggleExperiment.name">
      <ToggleSwitch v-model="toggleExperiment.value" />
    </div>
  </div>
</template>

<script>
import ToggleSwitch from '~/components/ToggleSwitch';

export default {
  components: {
    ToggleSwitch
  },
  async asyncData({ app }) {
    const { data } = await app.$axios.get('https://somewheretowear.com/experiments.json');
    const { experiments } = data;
    const tes = experiments.filter(e => e.type === 'toggle');
    const cookies = [{name: 'toggleTest', value: true}]; // TODO: get cookies from a plugin

    const toggleExperiments = tes.map(te => {
      const existingCookie = cookies.find(c => c.name === te.name);

      return {...te, value: existingCookie ? existingCookie.value : false };
    });

    return {
      toggleExperiments,
    };
  },
  watch: {
    toggleExperiments: {
      handler(value){
        const updatedCookieValue = value.map(({name, type, value}) => {
          return {
            name,
            type,
            value
          };
        });

        // TODO: update cookie values here
      },
      deep: true
    }
  }
};
</script>
