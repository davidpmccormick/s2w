<template>
  <div>
    <nuxt/>
  </div>
</template>

<style lang="scss">
  * {
    &,
    &:before,
    &:after {
      box-sizing: border-box;
    }
  }

  body {
    color: #333;
    font-family: 'Avenir';
    font-size: 20px;
  }

  h1 {
    font-size: 8.5vw;
    margin-bottom: 0.3em;

    @media (min-width: 800px) {
      font-size: 70px;
    }
  }

  .visually-hidden {
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    height: 1px; width: 1px;
    margin: -1px; padding: 0; border: 0;
  }
</style>

