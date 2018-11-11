<template>
  <div>
    <h1>Experiments</h1>
    <no-ssr>
      <div
        v-for="toggleExperiment in toggleExperiments"
        :key="toggleExperiment.name">
        <span>{{ toggleExperiment.name }}</span><br />
        <ToggleSwitch
          v-model="toggleExperiment.value"
          :label="toggleExperiment.name" />
      </div>
    </no-ssr>
  </div>
</template>

<script>
import ToggleSwitch from '~/components/ToggleSwitch';
import { mapState } from 'vuex';

export default {
  components: {
    ToggleSwitch
  },
  watch: {
    toggleExperiments: {
      deep: true,
      handler(value) {
        this.$store.dispatch('updateExperiments', value);
      }
    }
  },
  computed: {
    ...mapState([
      'toggleExperiments'
    ])
  }
};
</script>
