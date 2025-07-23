<template>
  <div class="mask" v-if="maskVisable">

    <div class="loader">
      <div class="loader-tools">
        <img class="loader-tools-close" :src="closeSvg" alt="close" @click="$emit('update:maskVisable', false)" />
      </div>

      <CloseSvg></CloseSvg>
      <div>
        <slot></slot>
      </div>

    </div>
  </div>
</template>

<script>
import closeSvg from "./assets/close.svg";
export default {
  name: "AnyMask",
  data() {
    return {
      closeSvg
    }
  },
  props: {
    maskVisable: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style scoped>
@import "./assets/mask.css";

.loader {
  width: fit-content;
}

.loader-tools {
  text-align: end;
  margin-bottom: 30px;
  width: 100%;

  .loader-tools-close {
    cursor: pointer;
  }
}
</style>