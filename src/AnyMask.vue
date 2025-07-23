<template>
  <div class="mask" v-if="maskVisable">
    <div class="loader">
      <div class="loading-1"></div>
      <div class="loading-2">{{ text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AnyMask",
  props: {
    text: {
      type: [String, Number],
      default: "",
    },
    maskVisable: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style scoped>
  
</style>