<template>
  <span
    class="toggle-switch"
    @click="$emit('input', !value)">
    <span
      class="toggle-switch__toggle"
      :class="{'is-active': value}" />
  </span>
</template>

<script>
export default {
  props: {
    value: Boolean,
    required: true
  }
};
</script>

<style lang="scss">
.toggle-switch {
  position: relative;
  width: 40px;
  height: 34px;
  display: inline-block;
  border: 3px solid #333;
  border-left: 0;
  border-right: 0;
  margin-left: 17px;
  background: white;

  &:before,
  &:after {
    content: '';
    position: absolute;
    z-index: -1;
    top: -3px;
    bottom: -3px;
    border: 3px solid #333;
    width: 34px;
    border-radius: 50%;
  }

  &:before {
    left: -17px;
  }

  &:after {
    right: -17px;
    left: auto;
  }
}

.toggle-switch__toggle {
  position: absolute;
  top: 1px;
  height: 26px;
  width: 26px;
  border-radius: 50%;
  display: inline-block;
  left: -12px;
  transition: transform 200ms ease;
  background: #333;

  &.is-active {
    transform: translateX(38px);
  }
}
</style>
