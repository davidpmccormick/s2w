<template>
  <div>
    <h1 ref="h1" class="haas"><span>SOMEWHERE</span> <span>TO</span> <span>WEAR</span></h1>
    <span ref="sub" class="din subtitle">FASHION FOR THE TRAVEL GENERATION</span>
  </div>
</template>

<script>
  export default {
    mounted() {
      this.$refs.h1.classList.add('logo-type--slide');
      this.$refs.sub.classList.add('logo-type--slide');

      setTimeout(() => {this.$refs.h1.classList.remove('logo-type--slide')}, 500);
      setTimeout(() => {this.$refs.sub.classList.remove('logo-type--slide')}, 1500);
    }
  }
</script>

<style lang="scss" scoped>
  .logo-type--slide {
    opacity: 0;
    transform: translateY(5px);
  }

  @media (min-width: 600px) {
    div {
      text-align: center;
    }
  }

  h1 {
    transition: transform 1000ms ease, opacity 1000ms ease;
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
    transition: transform 1000ms ease, opacity 1000ms ease;
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
