<!--
 * @Author: 陈德立*******419287484@qq.com
 * @Date: 2025-07-23 14:53:02
 * @LastEditTime: 2025-09-03 15:09:51
 * @LastEditors: 陈德立*******419287484@qq.com
 * @Github: https://github.com/Alan1034
 * @Description: 
 * @FilePath: \LoadingMask\src\anyMask.vue
 * 
-->
<template>
  <div class="mask" v-if="visable" @click="(!tools) && close()">
    <div class="loader">
      <div class="loader-tools" v-if="tools">
        <img class="loader-tools-close" :src="closeSvg" alt="close" @click="close" />
      </div>
      <div>
        <slot></slot>
        <slot name="imgSlot"></slot>

      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>
import closeSvg from "./assets/close.svg";
import {
  //reactive, defineComponent,
  defineExpose, defineProps, onUnmounted, watch, ref,
} from 'vue'
const visable = ref<boolean>(false)
const props = defineProps({
  text: {
    type: [String, Number],
    default: "",
  },
  maskVisable: {
    type: Boolean,
    default: false,
  },
  tools: {
    type: Boolean,
    default: true,
  },
  onDestroy: {
    type: Function,
    default: () => { },
  },
})
const {// text, maskVisable, 
  onDestroy } = props
watch(
  () => props.maskVisable, (val, oldVal) => {
    visable.value = val
  }, {
  immediate: true
}
)

const show = () => {
  visable.value = true
}
const close = () => {
  visable.value = false
}

onUnmounted(() => {
  onDestroy()
})
defineExpose({
  show,
  close,
})
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

.loader-img {}
</style>