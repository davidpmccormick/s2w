<template>
  <div class="container">
    <h1>Somewhere to wear</h1>
    <SignupForm />
  </div>
</template>

<script>
import SignupForm from '~/components/SignupForm';

export default {
  components: {
    SignupForm
  }
}
</script>

<style>
  .container {
    width: 800px;
    max-width: 100%;
    padding: 20vh 20px;
    margin: 0 auto;
  }
</style>

