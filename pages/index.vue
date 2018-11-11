<template>
  <div>
    <LogoType />
    <SignupForm />
  </div>
</template>

<script>
import LogoType from '~/components/LogoType';
import SignupForm from '~/components/SignupForm';
import { mapGetters } from 'vuex';

export default {
  components: {
    LogoType,
    SignupForm
  },
  computed: {
    ...mapGetters(['hasNav'])
  }
};
</script>
