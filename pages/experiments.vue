<template>
  <div class="container">
    <h1>Experiments</h1>
    <ToggleSwitch v-model="answer" />
  </div>
</template>

<script>
import ToggleSwitch from '~/components/ToggleSwitch';

export default {
  components: {
    ToggleSwitch
  },
  async asyncData({ app }) {
    const { data } = await app.$axios.get('https://yesno.wtf/api');

    return {
      answer: data.answer === 'yes'
    };
  }
};
</script>
