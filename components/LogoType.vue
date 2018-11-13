<template>
  <div class="mt-20 sm:text-center">
    <div ref="heading" class="transition-all-slow">
      <h1 class="text-3xl font-normal font-haas sm:text-4xl md:text-5xl leading-tight tracking-x-wide"><span class="block sm:inline">SOMEWHERE</span> <span class="block sm:inline">TO</span> <span class="block sm:inline">WEAR</span></h1>
    </div>
    <div ref="sub" class="transition-all-slow">
      <span class="font-din md:text-xl subtitle mt-5 pt-2 pb-1 leading-none border-t-2 border-b-2 border-black border-solid tracking-wide">FASHION FOR THE TRAVEL GENERATION</span>
    </div>
  </div>
</template>

<script>
  export default {
    mounted() {
      this.$refs.heading.classList.add('slide');
      this.$refs.sub.classList.add('slide');

      setTimeout(() => {
        this.$refs.heading &&
        this.$refs.heading.classList.remove('slide')
      }, 500);
      setTimeout(() => {
        this.$refs.sub &&
        this.$refs.sub.classList.remove('slide')
      }, 1500);
    }
  }
</script>

<style lang="scss" scoped>
  .slide {
    opacity: 0;
    transform: translateY(5px);
  }
</style>
