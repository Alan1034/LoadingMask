<!--
 * @Author: 陈德立*******419287484@qq.com
 * @Date: 2021-11-15 18:23:09
 * @LastEditTime: 2021-11-15 19:00:39
 * @LastEditors: 陈德立*******419287484@qq.com
 * @Github: https://github.com/Alan1034
 * @Description: LoadingMask
 * @FilePath: \material-ui\src\components\LoadingMask\index.vue
 * 
-->

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
  name: "LoadingMask",
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
.mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
}
.loader {
  width: 150px;
  margin: 75px auto 70px;
  position: relative;
}
.loader .loading-1 {
  position: relative;
  width: 100%;
  height: 10px;
  border: 1px solid #69d2e7;
  border-radius: 10px;
  animation: turn 4s linear 1.75s infinite;
}
.loader .loading-1:before {
  content: "";
  display: block;
  position: absolute;
  width: 0%;
  height: 100%;
  background: #69d2e7;
  box-shadow: 10px 0px 15px 0px #69d2e7;
  animation: load 2s linear infinite;
}
.loader .loading-2 {
  width: 100%;
  position: absolute;
  top: 10px;
  color: #69d2e7;
  font-size: 22px;
  text-align: center;
  animation: bounce 2s linear infinite;
}
@keyframes load {
  0% {
    width: 0%;
  }
  87.5%,
  100% {
    width: 100%;
  }
}
@keyframes turn {
  0% {
    transform: rotateY(0deg);
  }
  6.25%,
  50% {
    transform: rotateY(180deg);
  }
  56.25%,
  100% {
    transform: rotateY(360deg);
  }
}
@keyframes bounce {
  0%,
  100% {
    top: 10px;
  }
  12.5% {
    top: 30px;
  }
}
</style>
