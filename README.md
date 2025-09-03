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

# AnyMask

![image-20211116115258955](https://raw.githubusercontent.com/Alan1034/PicturesServer/main/PicGo_imgs/wechat_2025-09-03_151636_748.png)

tools：( Boolean )是否展示关闭按钮，如果为false则变为点击遮罩层关闭

```
import { loadMaskIns } from "variable-loading-mask";
import OpenInSysBrowser from '@/assets/img/openInSysBrowser.png'
import 'variable-loading-mask/style'

  const mask = loadMaskIns({ maskType: "any",  imgSlot: {
      src: OpenInSysBrowser,
      alt: '打开系统浏览器',
      style: { width: '215px', height: '95px', marginLeft: '100px' }
    }, tools: false });
  mask.show();
```

# loadMaskIns

函数式调用：

```
import { loadMaskIns } from 'variable-loading-mask';
import 'variable-loading-mask/style'

const mask = loadMaskIns({ text: 'percentage' });
mask.show();
mask.setText("percentage+n")
mask.close();
```

maskType：（String）loading：LoadingMask；any：AnyMask



安装：npm i variable-loading-mask<br/>
install: npm i variable-loading-mask