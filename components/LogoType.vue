<template>
  <div class="mt-20 sm:text-center uppercase">
    <h1
      ref="heading"
      class="yo-o yo-xslow yo-ease text-3xl font-normal font-haas sm:text-4xl md:text-5xl leading-tight tracking-xwide">
      <span class="block sm:inline">Somewhere</span>
      <span class="block sm:inline">to</span>
      <span class="block sm:inline">wear</span>
    </h1>
    <span
      ref="sub"
      class="yo-o yo-xslow yo-ease inline-block leading-none mt-3 md:mt-5 pt-1 pb-px border-t-2 border-b-2 border-black border-solid font-din text-sm md:text-xl tracking-wide">
        <span class="-mt-px inline-block">Fashion for the travel generation</span>
      </span>
  </div>
</template>

<script>
  export default {
    mounted() {
      this.$refs.heading.classList.add('opacity-0');
      this.$refs.sub.classList.add('opacity-0');

      setTimeout(() => {
        this.$refs.heading &&
        this.$refs.heading.classList.remove('opacity-0');
      }, 500);
      setTimeout(() => {
        this.$refs.sub &&
        this.$refs.sub.classList.remove('opacity-0');
      }, 1200);
    }
  };
</script>
