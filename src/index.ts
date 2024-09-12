/**
 * @format
 * @Author: 陈德立*******419287484@qq.com
 * @Date: 2021-11-16 10:55:32
 * @LastEditTime: 2024-09-12 19:22:31
 * @LastEditors: 陈德立*******419287484@qq.com
 * @Github: https://github.com/Alan1034
 * @Description:
 * @FilePath: \LoadingMask\src\index.ts
 */

import LoadingMaskCom from "./LoadingMask.vue";

export const LoadingMask = LoadingMaskCom;

// 函数式调用
import loadingMaskMethod from "./method";

export const LoadingMaskIns = loadingMaskMethod;
