---
title: 踩坑之路
date: 2019-05-22 10:20:21
categories:
  - common
header_image: https://source.unsplash.com/random
---
1. ### border dashed在部分机型(ios/Android)上不显示
   解决方法: 添加属性border-radius, 值设置为0.5或者1都行, 实际中设置了0.1, 样式影响很小. 附上大佬们在github上的讨论:  
   [*borderStyle ‘dashed’ didn’t work when borderBottomWidth set*](https://github.com/facebook/react-native/issues/12817)  

2. ### 元素设置transform scale后的定位问题
   scale缩放相当于使用放大镜看局部的元素, 眼睛看到元素变大或者缩小了, 但是他实际的大小和占位是不变的, 不会影响周围元素的排布. 如果元素是绝对定位的, left和top是根据元素本来的大小尺寸定位来计算的, 和放大后眼睛看到的'虚像'无关, 但是鼠标点点击区域和眼睛看到的区域值一致的.
   
