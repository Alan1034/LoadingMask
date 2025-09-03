/**
 * @format
 * @Author: 陈德立*******419287484@qq.com
 * @Date: 2025-09-03 11:21:43
 * @LastEditTime: 2025-09-03 11:41:22
 * @LastEditors: 陈德立*******419287484@qq.com
 * @Github: https://github.com/Alan1034
 * @Description:
 * @FilePath: \LoadingMask\src\method.ts
 */

/**
 * @description: 参考https://github.dev/element-plus/element-plus
 * @return {*}
 */
/** @format */

import { createVNode, render } from "vue";

import LoadingMaskCom from "./LoadingMask.vue";
import AnyMaskCom from "./AnyMask.vue";

interface MaskInstance {
  defaultSlot?: any;
  maskType?: string;
  imgSlot?: any;
}
const createMask = (options: MaskInstance) => {
  const { maskType = "any" } = options;
  let com;
  if (maskType === "loading") {
    com = LoadingMaskCom;
  }
  if (maskType === "any") {
    com = AnyMaskCom;
  }
  const container = document.createElement("div");
  const props = {
    ...options,
    onDestroy: () => {
      render(null, container);
    },
  };

  // https://cn.vuejs.org/guide/extras/render-function.html#passing-slots
  const vnode = createVNode(com, props, {
    default: () => options.defaultSlot,
    imgSlot: () => createVNode("img", { ...options.imgSlot }),
    // bar: () => [createVNode("span", "one"), createVNode("span", "two")],
  });
  render(vnode, container);
  document.body.appendChild(container);
  const vm = vnode.component;
  const handler = {
    close: () => {
      vm.exposed.close();
    },
    show: () => {
      vm.exposed.show();
    },
    setText: (text: string | number) => {
      vm.exposed.setText(text);
    },
  };
  const instance = {
    vnode,
    vm,
    handler,
    props: (vnode.component as any).props,
  };
  return instance;
};
const loadMask = (options: MaskInstance) => {
  const instance = createMask(options);
  return instance.handler;
};

export default loadMask;
