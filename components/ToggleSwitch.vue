<template>
  <label class="relative inline-block w-12 h-6">
    <span class="w-6 z--1 border-2 boder-solid border-black rounded-full h-full absolute pin-l"></span>
    <span class="pin mx-3 bg-white absolute border-solid border-black border-t-2 border-b-2"></span>
    <input
      class="absolute opacity-0"
      type="checkbox"
      :checked="value"
      @change="$emit('input', $event.target.checked)" />
    <span class="dmc-o w-6 border-2 boder-solid border-black rounded-full h-full absolute pin-l z-1 bg-black"></span>
    <span class="absolute invisible">{{ label }}</span>
    <span class="z--1 w-6 border-2 boder-solid border-black rounded-full h-full absolute pin-r"></span>
  </label>
</template>

<script>
  export default {
    props: {
      value:  {
        type: Boolean,
        required: true
      },
      label: {
        type: String,
        required: true
      }
    }
  };
</script>

<style lang="scss" scoped>
  .dmc-o {
    transform: scale(0.7);
  }

  input[type=checkbox] {
    &:checked + .dmc-o {
      transform: translateX(calc(3rem - 100%)) scale(0.7);
    }
  }
</style>
