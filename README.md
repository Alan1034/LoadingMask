<!--
 * @Author: 陈德立*******419287484@qq.com
 * @Date: 2021-11-16 10:55:30
 * @LastEditTime: 2025-07-23 11:53:03
 * @LastEditors: 陈德立*******419287484@qq.com
 * @Github: https://github.com/Alan1034
 * @Description: 
 * @FilePath: \LoadingMask\README.md
 * 
-->
# LoadingMask

一个带有动态Loading的遮罩层 <br/>
A Vue variable loading mask

![image-20211116115258955](https://raw.githubusercontent.com/Alan1034/PicturesServer/main/PicGo_imgs/202111161152173.png)

用法：

     import {LoadingMask} from "variable-loading-mask";
    
     <LoadingMask 
     :text="percentage"  // [String, Number]
     :maskVisable="maskVisable" // Boolean
     />

# AnyMask

自定义传入内容，可关闭

![image-20250723115940662](https://raw.githubusercontent.com/Alan1034/PicturesServer/main/PicturesServer/wechat_2025-07-23_143801_136.png)

用法：

```
import { AnyMask } from "variable-loading-mask";

<AnyMask v-bind:maskVisable.sync="maskVisable" >
  <img :src="shop" alt="主页预览"> //自定义的内容
</AnyMask>
```

安装：npm i variable-loading-mask<br/>
install: npm i variable-loading-mask