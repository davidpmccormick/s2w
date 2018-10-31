<template>
  <div>
    <nuxt/>
  </div>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      document.documentElement.classList.remove('wt-loading')
    }, 1000)
  }
}
</script>

<style lang="scss">
  .wt-loading {
    display: none;
  }

  * {
    &,
    &:before,
    &:after {
      box-sizing: border-box;
    }
  }

  body {
    color: #333;
    font-family: 'Amatic SC', sans-serif;
    font-weight: 700;
    font-size: 20px;
    line-height: 1.4;
  }

  h1 {
    font-size: 8.5vw;

    @media (min-width: 800px) {
      font-size: 70px;
    }
  }

  a {
    color: inherit;
  }

  .visually-hidden {
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    height: 1px; width: 1px;
    margin: -1px; padding: 0; border: 0;
  }

  .container {
    width: 800px;
    max-width: 100%;
    padding: 20vh 20px;
    margin: 0 auto;
  }
</style>

