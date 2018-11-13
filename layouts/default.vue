<template>
  <div class="container mx-auto px-6">
    <no-ssr>
      <SiteNav v-if="hasNav" />
    </no-ssr>
    <nuxt/>
  </div>
</template>

<script>
  import SiteNav from '~/components/SiteNav';
  import { mapGetters } from 'vuex';

  export default {
    components: {
      SiteNav
    },
    computed: {
      ...mapGetters(['hasNav'])
    }
  };
</script>

