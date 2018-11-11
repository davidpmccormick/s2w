<template>
  <nav>
    <ul>
      <li><nuxt-link to="/">Home</nuxt-link></li>
      <li><nuxt-link to="about">About</nuxt-link></li>
      <li><nuxt-link to="experiments">Experiments</nuxt-link></li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
  nav {
    margin: 20px 0 60px;
    text-transform: uppercase;
    font-size: 0.8em;
    font-weight: 600;
  }

  ul {
    display: flex;
  }

  li {
    margin-right: 20px;
  }

  a {
    text-decoration: none;
    position: relative;

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      height: 3px;
      width: 0;
      background: $c-black;
      transition: width 400ms ease;
    }

    &.nuxt-link-exact-active:after {
      width: 100%;
    }
  }
</style>
