<!--
 * @Author: 陈德立*******419287484@qq.com
 * @Date: 2025-07-23 14:53:02
 * @LastEditTime: 2025-07-25 16:54:11
 * @LastEditors: 陈德立*******419287484@qq.com
 * @Github: https://github.com/Alan1034
 * @Description: 
 * @FilePath: \LoadingMask\src\anyMask.vue
 * 
-->
<template>
  <div class="mask" v-if="maskVisable">

    <div class="loader">
      <div class="loader-tools">
        <img class="loader-tools-close" :src="closeSvg" alt="close" @click="closeMask" />
      </div>
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
    visableProps: {
      type: String,
      default: "maskVisable",
    },
  },
  // watch: {
  //   maskVisable: {
  //     handler(val) {
  //       console.log(val, this.visableProps, this.maskVisable)
  //     },
  //     immediate: true,
  //   }
  // },
  methods: {
    closeMask() {
      this.$emit(`update:${this.visableProps}`, false);
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