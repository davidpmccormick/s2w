<template>
  <div class="container">
    <h1>Experiments</h1>
    <div
      v-for="toggleExperiment in toggleExperiments"
      :key="toggleExperiment.name">
      <span>{{ toggleExperiment.name }}</span><br />
      <ToggleSwitch
        v-model="toggleExperiment.value"
        :label="toggleExperiment.name" />
    </div>
  </div>
</template>

<script>
import ToggleSwitch from '~/components/ToggleSwitch';
import cookie from 'cookie-cutter';

export default {
  components: {
    ToggleSwitch
  },
  data() {
    return {
      toggleExperiments: [],
    };
  },
  async mounted() {
    try {
      const { data } = await this.$axios.get('experiments.json');
      const { experiments } = data;
      const fetchedToggleExperiments = experiments.filter(e => e.type === 'toggle');
      const maybeCookies = cookie.get('s2w_experiments');
      const cookies = maybeCookies ? JSON.parse(maybeCookies) : [];
      const toggleExperiments = fetchedToggleExperiments.map(te => {
        const existingCookie = cookies.find(c => c.name === te.name);

        return {...te, value: existingCookie ? existingCookie.value : false };
      });

      this.toggleExperiments = toggleExperiments;
    } catch (err) {
      this.$sentry.captureException(err);
    }
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

        cookie.set('s2w_experiments', JSON.stringify(updatedCookieValue), {
          path: '/',
          expires: 'Fri, 31 Dec 2036 23:59:59 GMT'
        });

        this.$store.commit('setExperiments', updatedCookieValue);
      },
      deep: true
    }
  }
};
</script>
