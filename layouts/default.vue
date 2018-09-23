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

  .typed-element {
    margin-bottom: 2.5em;

    @media (min-width: 600px) {
      margin-bottom: 3.5em;
    }
  }
</style>

