<template>
  <nav class="text-xs mt-6 mb-20">
    <ul class="flex uppercase list-reset">
      <li class="mr-2"><nuxt-link
        class="no-underline relative text-black"
        to="/">Home</nuxt-link></li>
      <li class="mr-2"><nuxt-link
        class="no-underline relative text-black"
        to="/about">About</nuxt-link></li>
      <li><nuxt-link
        class="no-underline relative text-black"
        to="/experiments">Experiments</nuxt-link></li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
  a {
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      height: 1px;
      width: 0;
      background: config('colors.black');
      transition: width config('speeds.default') ease;
    }

    &.nuxt-link-exact-active:after {
      width: 100%;
    }
  }
</style>
