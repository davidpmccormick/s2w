<template>
  <div class="container">
    <LogoType />
    <SignupForm />
  </div>
</template>

<script>
import LogoType from '~/components/LogoType';
import SignupForm from '~/components/SignupForm';

export default {
  components: {
    LogoType,
    SignupForm
  }
};
</script>
