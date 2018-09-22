<template>
  <div class="container">
    <vue-typed-js
      :typeSpeed="100"
      :strings="['to what', 'to who', 'to wear']"
      :showCursor="false"
      :smartBackspace="false"
      :backSpeed="60"
      @onComplete="setAnimationFinished">
      <h1>somewhere <span class="typing"></span></h1>
    </vue-typed-js>
    <SignupForm />
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import SignupForm from '~/components/SignupForm';

export default {
  components: {
    SignupForm
  },
  methods: {
    ...mapMutations(['setAnimationFinished'])
  }
}
</script>
