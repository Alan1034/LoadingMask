<!--
 * @Author: 陈德立*******419287484@qq.com
 * @Date: 2021-11-16 10:55:30
 * @LastEditTime: 2021-11-24 17:34:19
 * @LastEditors: 陈德立*******419287484@qq.com
 * @Github: https://github.com/Alan1034
 * @Description: 
 * @FilePath: \LoadingMask\README.md
 * 
-->
# LoadingMask

一个带有动态Loading的遮罩层，vue2请使用@1版本，Vue3请使用@2版本 <br/>
A Vue variable loading mask, vue2 please use @1 version, Vue3 please use @2 version

![image-20211116115258955](https://raw.githubusercontent.com/Alan1034/PicturesServer/main/PicGo_imgs/202111161152173.png)

组件用法：

    import {LoadingMask} from "variable-loading-mask";
    import 'variable-loading-mask/style'
    
     <LoadingMask 
     :text="percentage"  // [String, Number]
     :maskVisable="maskVisable" // Boolean
     />

函数式调用：

```
import { LoadingMaskIns } from 'variable-loading-mask';
import 'variable-loading-mask/style'

const mask = LoadingMaskIns({ text: 'percentage' });
mask.show();
mask.setText("percentage+n")
mask.close();
```

安装：npm i variable-loading-mask<br/>
install: npm i variable-loading-mask