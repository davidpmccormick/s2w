<template>
  <label>
    <span class="o o--l"></span>
    <span class="p"></span>
    <input
      type="checkbox"
      :checked="value"
      @input="$emit('input', $event.target.checked)" />
    <span class="o o--t"></span>
    <span class="visually-hidden">{{ label }}</span>
    <span class="o o--r"></span>
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
.o {
  width: calc(1.5em);
  border: 2px solid #333;
  border-radius: 50%;
  position: absolute;
  z-index: -1;
  height: calc(100%);

  &.o--l {
    left: 0;
  }

  &.o--r {
    right: 0;
  }

  &.o--t {
    left: 0;
    background: #333;
    z-index: 1;
    transition: transform 200ms ease;
    transform: scale(0.7);
  }
}

input[type=checkbox] {
  position: absolute;
  opacity: 0;

  &:checked + .o--t {
    transform: translateX(calc(3em - 100%)) scale(0.7);
  }
}

.p {
  background: white;
  border-top: 2px solid #333;
  border-bottom: 2px solid #333;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0.75em;
  right: 0.75em;
}

label {
  font-size: 20px;
  position: relative;
  width: 3em;
  height: 1.5em;
  display: inline-block;
}
</style>
