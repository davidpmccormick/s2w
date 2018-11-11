<template>
  <div class="no-js">
    <nuxt/>
  </div>
</template>

<script>
  export default {
    head() {
      return {
        htmlAttrs: {
          class: 'no-js'
        }
      }
    },
    beforeMount() {
      document.documentElement.classList.remove('no-js');
    }
  }
</script>
