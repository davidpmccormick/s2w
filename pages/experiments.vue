<template>
  <div class="container">
    <h1>Experiments
      <no-ssr>
        <span v-if="hasToggleTest">yo</span>
      </no-ssr>
    </h1>
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
import { mapGetters, mapState } from 'vuex';

export default {
  components: {
    ToggleSwitch
  },
  watch: {
    toggleExperiments: {
      deep: true,
      handler(value) {
        this.$store.commit('setExperiments', value);
      }
    }
  },
  computed: {
    ...mapState([
      'toggleExperiments'
    ]),
    ...mapGetters([
      'hasToggleTest'
    ])
  }
};
</script>
