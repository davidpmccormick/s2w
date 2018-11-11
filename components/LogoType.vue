<template>
  <div>
    <h1 class="haas"><span>SOMEWHERE</span> <span>TO</span> <span>WEAR</span></h1>
    <span class="din subtitle">FASHION FOR THE TRAVEL GENERATION</span>
  </div>
</template>

<style lang="scss" scoped>
  @media (min-width: 600px) {
    div {
      text-align: center;
    }
  }

  h1 {
    letter-spacing: 0.25em;
    font-size: 9vw;
    line-height: 1.2;

    span {
      display: block;
    }

    @media (min-width: 600px) {
      font-size: 38px;

      span {
        display: inline;
      }
    }
  }

  .subtitle {
    margin-top: 20px;
    padding: 0.2em 0 0.1em;
    letter-spacing: 0.15em;
    line-height: 1;
    display: inline-block;
    text-align: center;
    border-top: 2px solid #333;
    border-bottom: 2px solid #333;
    font-size: 4vw;

    @media (min-width: 600px) {
      font-size: 20px;
    }
  }
</style>
