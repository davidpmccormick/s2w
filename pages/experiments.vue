<template>
  <div class="container">
    <h1>Experiments</h1>
    <ToggleSwitch v-model="switchValue" />
  </div>
</template>

<script>
import ToggleSwitch from '~/components/ToggleSwitch';

export default {
  components: {
    ToggleSwitch
  },
  data() {
    return {
      switchValue: true
    };
  }
};
</script>
