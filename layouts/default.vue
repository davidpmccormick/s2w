<template>
  <div class="container">
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
  }
</script>

