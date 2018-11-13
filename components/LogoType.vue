<template>
  <div class="mt-20 sm:text-center">
    <div ref="heading" class="transition-all-slow">
      <h1 class="text-3xl font-normal font-haas sm:text-4xl md:text-5xl leading-tight tracking-x-wide"><span class="block sm:inline">SOMEWHERE</span> <span class="block sm:inline">TO</span> <span class="block sm:inline">WEAR</span></h1>
    </div>
    <div ref="sub" class="inline-block transition-all-slow mt-2 pt-2 pb-1 border-t-2 border-b-2 border-black border-solid">
      <span class="font-din md:text-xl mt-5 leading-none tracking-wide">FASHION FOR THE TRAVEL GENERATION</span>
    </div>
  </div>
</template>

<script>
  export default {
    mounted() {
      this.$refs.heading.classList.add('dmc-slide');
      this.$refs.sub.classList.add('dmc-slide');

      setTimeout(() => {
        this.$refs.heading &&
        this.$refs.heading.classList.remove('dmc-slide')
      }, 500);
      setTimeout(() => {
        this.$refs.sub &&
        this.$refs.sub.classList.remove('dmc-slide')
      }, 1500);
    }
  }
</script>

<style lang="scss" scoped>
  .dmc-slide {
    opacity: 0;
    transform: translateY(5px);
  }
</style>
