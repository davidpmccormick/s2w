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
    font-family: 'helvetica neue';
    font-weight: bold;
    font-size: 20px;
  }

  .visually-hidden {
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    height: 1px; width: 1px;
    margin: -1px; padding: 0; border: 0;
  }
</style>

