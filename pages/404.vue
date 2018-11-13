<template>
  <BasePage>
    <template slot="h1">Nowhere to wear</template>
    <p>Page not found</p>
    <p><nuxt-link to="/">Go home</nuxt-link></p>
  </BasePage>
</template>

<script>
  import BasePage from '~/components/BasePage';

  export default {
    components: {
      BasePage
    }
  }
</script>
