---
title: 初探链表-贪吃蛇游戏
date: 2019-03-30 10:43:45
categories:
  - javascript
tags:
  - javascript
  - 贪吃蛇
  - 链表
# header_image: https://source.unsplash.com/random
---
&emsp;&emsp;链表的用处是在特定应用场景下省时间. 不过这篇文章不是要讨论链表什么时候用、怎么用、空间复杂度、时间复杂度巴拉巴拉... 链表一节连一节, 像极了一节一节的蛇, 如果这个蛇能前进不能后退, 那就是单向链表, 如果这个蛇不但能前进还能后退, 那就是双向链表, 如果这个蛇是乌洛波洛斯蛇, 那就是循环链表. 用单向链表模拟一条蛇岂不是很形象.  
&emsp;&emsp;首先要做的就是要实现单向链表结构, 实现细节就不展示了, 文章最后贴上github
```js
/**
 * 链表节点类
 */
class LinkItem {
  constructor(value) {
    this.value = value
    this.next = null
  }
}
/**
 * 链表类
 */
 class LinkedList {
  constructor(list = []) {
    this.head = null
    this.length = 0
    list.forEach((item) => {
      this.addLast(item)
    })
  }
  // 尾部添加节点
  addLast(node) {/*...*/}
  // 首部添加节点
  addFirst(node) {/*...*/}
  // 尾部移除节点
  removeLast() {/*...*/}
  // 首部移除节点
  removeFirst() {/*...*/}
  // 其他方法...
}
```
&emsp;&emsp;游戏本身需要有两个类, 游戏主类Game和蛇类Snake.
```js
const DIRECTIONS = [37, 38, 39, 40] // 移动方向
// Snake类部分方法
constructor() {
  this.direction = 39 // 记录前进的方向
  this.step = 1 // 记录前进的步数
  this.food = 0 // 记录吃下的食物
  this.body = new LinkedList() // 蛇的身体
}
// 转向
turn(type) {
  // ...
  this.direction = type
  // ...
}
// 移动, 往头部加一个节点, 尾部去掉一个节点实现移动, 如果吃到食物, 不去节点.
move(eat = false) {
  // ...
  this.body.addFirst()
  if (!eat) {
    // 如果没有吃到食物, 就去掉一节
    // ...
  } else {
    this.food++
  }
  this.step++
}
// ...
```
