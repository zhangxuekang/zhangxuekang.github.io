---
title: 使元素的高度根据宽度变化的一种实现方式
date: 2019-12-11 17:05:03
categories:
  - css
tags:
  - css
header_image: https://source.unsplash.com/random
---

如果padding属性的值是百分比值,这个值是根据父元素的宽度(X周属性)计算的,即使是Y轴上的padding(padding-top,padding-bottom)也是如此,根据这个特性,可以实现Y轴尺寸和X轴尺寸相关联的效果.  
比如这样写css:
```css
.target {
  width: 50%;
  height: 0;
  padding-bottom: 50%;
  background-color: black;
}
```
width:50%,宽度是父元素宽度的50%;height:0,内容高度设置为0,使元素所占空间完全由padding决定;padding-bottom: 50%,元素的下部padding的宽度是父元素宽度的50%,这个计算标准和元素的高度保持一致,所以就能实现一个正方型的区域.  
其实,虽然元素的内容区域高度是0,只要padding有位置,内部还是可以正常放置子元素的.
[在线demo](https://zhangxuekang.com/src/blog/width-height/index.html)

