<template>
  <div class="mt-20 sm:text-center">
    <h1 ref="h1" class="text-3xl font-normal font-haas sm:text-4xl md:text-5xl leading-tight tracking-x-wide"><span class="block sm:inline">SOMEWHERE</span> <span class="block sm:inline">TO</span> <span class="block sm:inline">WEAR</span></h1>
    <span ref="sub" class="font-din md:text-xl inline-block subtitle mt-5 pt-2 pb-1 leading-none border-t-2 border-b-2 border-black border-solid tracking-wide">FASHION FOR THE TRAVEL GENERATION</span>
  </div>
</template>

<script>
  export default {
    mounted() {
      this.$refs.h1.classList.add('logo-type--slide');
      this.$refs.sub.classList.add('logo-type--slide');

      setTimeout(() => {
        this.$refs.h1 &&
        this.$refs.h1.classList.remove('logo-type--slide')
      }, 500);
      setTimeout(() => {
        this.$refs.sub &&
        this.$refs.sub.classList.remove('logo-type--slide')
      }, 1500);
    }
  }
</script>

<style lang="scss" scoped>
  .logo-type--slide {
    opacity: 0;
    transform: translateY(5px);
  }

  h1,
  .subtitle {
    transition: opacity 2000ms ease,
    transform 2000ms ease;
  }
</style>
