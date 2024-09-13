/**
 * @description: 参考https://github.dev/element-plus/element-plus
 * @return {*}
 */
/** @format */

import { createVNode, render } from "vue";
import LoadingMaskCom from "./LoadingMask.vue";

const createLoadingMask = (options) => {
  const container = document.createElement('div')
  const props = {
    ...options,
    onDestroy: () => {
      render(null, container)
    },
  };
  const vnode = createVNode(
    LoadingMaskCom,
    props,
    // isFunction(props.message) || isVNode(props.message)
    //   ? {
    //       default: isFunction(props.message)
    //         ? props.message
    //         : () => props.message,
    //     }
    //   : null
  );
  render(vnode, container)
  document.body.appendChild(container)
  const vm = vnode.component
  const handler= {
    close: () => {
      vm.exposed.close()
    },
    show: () => {
      vm.exposed.show()
    },
    setText: (text: string | number) => {
      vm.exposed.setText(text)
    },
  }
  const instance = {
    vnode,
    vm,
    handler,
    props: (vnode.component as any).props,
  }
  return instance
};
const loadingMask = (options) => {
  const instance = createLoadingMask(options)
  return instance.handler
};

export default loadingMask;
