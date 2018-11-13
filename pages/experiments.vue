<template>
  <BasePage>
    <template slot="h1">Experiments</template>
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
  </BasePage>
</template>

<script>
import BasePage from '~/components/BasePage';
import ToggleSwitch from '~/components/ToggleSwitch';
import { mapState } from 'vuex';

export default {
  components: {
    BasePage,
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
