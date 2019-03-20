* [Event Loop](https://zhuanlan.zhihu.com/p/33058983) 宏任务（macro task）和微任务（micro task）  
  在当前执行栈完成后,进行下一轮循环开始前,首先选择微任务列表中的任务, 微任务列表中没有任务后,再去找宏任务列表.  
  微任务: process.nextTick, promise, Object.observe, MutationObserver  
  宏任务: script, setTimeout, setInterval, setImmediate, I/O, UI rendering  
* 在调用new的时候会发生4件事  
  新生成了一个对象  
  链接到原型  
  绑定 this  
  返回新对象  
* instanceof 可以正确的判断对象的类型，因为内部机制是通过判断对象的原型链中是不是能找到类型的 prototype  
* 浏览器跨域  
  那么是出于什么安全考虑才会引入这种机制呢？ 其实主要是用来防止 CSRF 攻击的。简单点说，CSRF 攻击是利用用户的登录态发起恶意请求。也就是说，没有同源策略的情况下，A 网站可以被任意其他来源的 Ajax 访问到内容。如果你当前 A 网站还存在登录态，那么对方就可以通过 Ajax 获得你的任何信息。当然跨域并不能完全阻止 CSRF.  
  jsonp, CORS(服务端设置Access-Control-Allow-Origin), document.domain(主域名相同的情况), postMessage(嵌入页面情况)  
* 存储  
  特性|	cookie	|localStorage|	sessionStorage|	indexDB
  ---|---|---|---|---
  数据生命周期	|一般由服务器生成，可以设置过期时间|	除非被清理，否则一直存在|	页面关闭就清理|	除非被清理，否则一直存在
  数据存储大小	|4K	|5M	|5M	|无限
  与服务端通信	|每次都会携带在 header 中，对于请求性能影响|	不参与|	不参与	|不参与  
* 重绘和回流  
  重绘是当节点需要更改外观而不会影响布局的，比如改变 color 就叫称为重绘;  
  回流是布局或者几何属性需要改变就称为回流;  
  回流必定会发生重绘，重绘不一定会引发回流。回流所需的成本比重绘高的多;
* XSS 跨站脚本攻击(Cross-site scripting), 攻击者想尽一切办法将可以执行的代码注入到网页中.  
  CSRF 跨站请求伪造,原理就是攻击者构造出一个后端请求地址，诱导用户点击或者通过某些途径自动发起请求。如果用户是在登录状态下的话，后端就以为是用户在操作，从而进行相应的逻辑。  
  点击劫持 点击劫持是一种视觉欺骗的攻击手段。攻击者将需要攻击的网站通过 iframe 嵌套的方式嵌入自己的网页中，并将 iframe 设置为透明，在页面中透出一个按钮诱导用户点击.

  
