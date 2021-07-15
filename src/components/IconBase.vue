<template>
  <svg xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :viewBox="box"
    :aria-labelledby="iconName"
    role="presentation"
    :class="iconName"
  >
    <title
      lang="en"
    >{{iconName}} icon</title>
    <g :fill="iconColor" :class="iconName">
      <slot />
    </g>
  </svg>
</template>

<script >
export default {
  props: {
    iconName: {
      type: String,
      default: 'box'
    },
    width: {
      type: [Number, String],
      default: 18
    },
    height: {
      type: [Number, String],
      default: 18
    },
    iconColor: {
      type: String,
      default: 'currentColor'
    },
    box: {
      type: String,
      default: '0 0 18 18'
    }
  }
}
</script>
<style lang="scss" scoped>
  .right{
    margin-left: 5px;
  }
</style>
