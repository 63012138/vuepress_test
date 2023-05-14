---
title: 面试题123 # 页面标题
lang: zh-CN # 默认en-US
description: null # 描述
# layout: Layout #页面布局
navbar: true #是否开启导航栏
sidebar: auto # 自动生成侧边栏
sidebarDepth: 2 # 侧边栏深度
search: true #是否开启搜索框
tags: #配置搜索tags
  - 问题
prev: true # 上一页 true为默认 false禁用 也可指定地址
next: false # 下一页
---

# 面试题（整理）

### 1．CSS 选择器常用

!important >行内/内联样式(1000) > ID(100) > 类 = 伪类(10) > 元素选择器 (html 标签 1) > 通配符(\*)

后代选择器：可以选子孙 (.main span i 层级:12)

子选择器 >：父选择器的一级子元素 (.main > span 层级:11)

相邻兄弟选择器 +：拥有相同父元素(body)，且两个元素相邻 (.header + .main 层级:20)

```html
<body>
  <div class="header"></div>
  <div class="main">
    <span>
      <i></i>
    </span>
  </div>
</body>
```

### 2．BFC 是什么 触发 BFC 的条件

Block fromatting context，块级格式化上下文，BFC 是一个独立的布局环境，其的元素布局元素布局是不受外界影响，并且在一个 BFC 中，块盒和行盒都会垂直的沿着父元素的边框排列

**优点**

- 形成独立的渲染区域
- 内部元素度渲染不会影响外界

**触发的条件：**

- 浮动：float 不是 none
- 定位：position 是 absolute/ fixed
- 块级元素: overflow 不是 visible
- flex 元素
- inline-block 元素

**应用场景**

- 清除浮动

  > 清除浮动的其它方式
  >
  > 1. 在浮动的子元素后面加多一个空标签，设置 clear: both;
  >
  > 2. 在父元素的 ::after 伪元素中设置 clear:both;display:block;
  >
  >    > ::after ::before 是伪元素 :hover :focus 之类的是伪类

- 解决外边距塌陷

- 阻止元素被浮动元素覆盖

### 3．布局方式 常用的有哪些

1. **静态布局**（固定宽高）

2. **弹性布局**（flex）

3. **圣杯布局**

4. **自适应布局**（为不同的屏幕分辨率定义的布局 @media 媒体查询技术）

   > @media 设置字体大小，配合 rem 使用
   >
   > ```css
   > html {
   >   font-size: 20px;
   > }
   > @media only screen and (min-width: 401px) {
   >   html {
   >     font-size: 25px !important;
   >   }
   > }
   > @media only screen and (min-width: 428px) {
   >   html {
   >     font-size: 26.75px !important;
   >   }
   > }
   > @media only screen and (min-width: 481px) {
   >   html {
   >     font-size: 30px !important;
   >   }
   > }
   > @media only screen and (min-width: 569px) {
   >   html {
   >     font-size: 35px !important;
   >   }
   > }
   > @media only screen and (min-width: 641px) {
   >   html {
   >     font-size: 40px !important;
   >   }
   > }
   > ```

5. **流式布局**（宽高用百分比，按屏幕分辨率调整，布局不发生变化）

6. **响应式布局**（使用 meta 标签，宽高随窗口调整自动适配，适应布局和流式布局的综合方式）

7. **栅格布局**（在一个特定区域内划分出有规律的格子，依靠这些格子进行有规律的版面布局。）

8. **table 布局**（使用表格进行页面排版和样式设置）

9. **定位布局**

   1. static
   2. fixed
   3. relative
   4. absolute
   5. sticky

### 4．跨域有了解过吗？什么情况会导致跨域，跨域的方式

跨域是因为浏览器的同源策略限制，协议，域名，端口号不同都会导致跨域

- jsonp

  jsonp 只能发送 get 请求

  通过回传脚本执行方法并将请求返回的数据通过传参的形式传输。

  需要后端配合返回指定格式的数据

  浏览器只对 XHR(XMLHttpRequest)请求有同源请求限制，而对 script 标签 src 属性、link 标签 ref 属性和 img 标签 src 属性没有这这种限制，利用这个“漏洞”就可以很好的解决跨域请求。

- proxy 代理

  - webpack 本地代理
  - nginx 反向代理

  原理：proxy 本质上利用了 http-proxy-middleware http 代理中间件，实现将请求转发给其他服务器。通过 proxy 实现代理请求后，会在浏览器与服务器之间添加一个代理服务器，本地发送请求时，中间代理服务器接收后转发给目标服务器，目标服务器返回数据，中间代理服务器将数据返回给浏览器。中间代理服务器与目标服务器之间不存在跨域资源问题。

- iframe

  iframe 相当于多开了一个网页，所以不存在跨域
  但需要注意，在 iframe 存在 src 时，和父页面的通信也是存在跨域的，可以通过 postMessge 进行通信
  所以可以在 iframe 的 src 中设置和后端同源的 src，然后在 iframe 中发送 ajax 请求，并通过 postMessage 发送给父页面

- cors

  > 服务端设置 Access-Control-Allow-Origin 即可，前端无须设置，若要带 cookie 请求，前后端都需要设置。

  一个 W3C 标准，定义了跨域资源时浏览器与服务器沟通方案。使用 CORS，你会发现你在发起非简单请求时，浏览器会发起两次请求

### 5．web 安全是怎么做的

- #### XSS 跨站脚本攻击

  跨站脚本攻击是指通过存在安全漏洞的 Web 网站注册用户的浏览器内运行非法的 HTML 标签或 JavaScript 进行的一种攻击。

  **XSS 的原理**：是恶意攻击者往 返回的 HTML 页面里插入恶意可执行网页脚本代码，当用户浏览该页之时，嵌入其中 Web 里面的脚本代码会被执行，从而可以达到攻击者盗取用户信息或其他侵犯用户安全隐私的目的。

  **XSS 类型**

  - 反射型：通过 url 注入可执行的脚本，不过 chrome 等浏览器内置了 xss 过滤器，能防止大部分反射型的 xss

    `https://xxx.com/xxx?default=<script>alert(document.cookie)</script>`

  - 存储型：一般存在于提交 form 表单中，存储一些可执行的脚本，当这些脚本被放到页面中渲染时会执行

    ```html
    // 常见的有
    <img src="1" onerror="()=>{alert(document.cookie)}" />
    // 可以直接使用document.write()清空页面 // 也可以用死循环卡死用户电脑
    <div style="color:red;">123</div>
    ```

  **影响**：

  - 利用虚假输入表单骗取用户个人信息。
  - 利用脚本窃取用户的 Cookie 值，被害者在不知情的情况下，帮助攻击者发送恶意请求
  - 显示伪造的文章或图片。

  **防御：**

  - CSP：建立白名单，开发者明确告诉浏览器哪些外部资源可以加载和执行。我们只需要配置规则，如何拦截是由浏览器自己实现的。我们可以通过这种方式来尽量减少 XSS 攻击。

  - 转义字符：用户的输入永远不可信任的，最普遍的做法就是转义输入输出的内容，对于引号、尖括号、斜杠进行转义

    ![](https://api.onedrive.com/v1.0/shares/s!AsQmQbRb5c66hiRftySPwMRktE1p/root/content)

  - HttpOnly Cookie：这是预防 XSS 攻击窃取用户 cookie 最有效的防御手段。Web 应用程序在设置 cookie 时，将其属性设为 HttpOnly，就可以避免该网页的 cookie 被客户端恶意 JavaScript 窃取，保护用户 cookie 信息。

- #### CSRF 跨站请求伪造

  **攻击步骤：**A 页面登录未退出，cookie 保存在本地，此时用户在 B 页面通过 form 表单，`action`设置为 A 页面要攻击的 API，并提交表单，此时这个请求就会携带 A 页面的 cookie 发送给服务器，达到攻击的目的。

  **CSRF 的原理**：

- 用户已经登录了站点 A，并在本地记录了 cookie

- 在用户没有登出站点 A 的情况下（也就是 cookie 生效的情况下），访问了恶意攻击者提供的引诱危险站点 B (B 站点要求访问站点 A)。

- 站点 A 没有做任何 CSRF 防御

  **防范 CSRF 攻击可以遵循以下几种规则：**

- cookie 设置`SameSite=Lax`

- 请求时附带验证信息，比如验证码或者 Token

https://blog.csdn.net/howgod/article/details/93729459

### 6．cors 跨域请求会发几次

有两种不同的请求类型。（首先是预请求以 OPTIONS 形式发送，有当"预检"请求成功返回，实际请求才开始执行）

- 简单跨域请求

1. HTTP 方法是 get、post、(head)
2. HTTP 的头信息不超出以下几种字段：
   - Accept
   - Accept-Language
   - Content-Language
   - Last-Event-ID
   - Content-Type：只限于三个值，application/x-www-form-urlencoded、multipart/form-data、text/plain

- 复杂跨域请求(带预检的跨域请求)

一个复杂请求不止发送一个包含通信内容的请求，其中最先发送的是一种"预检"请求，此时作为服务端，也需要返回"预回应"作为响应。"预检"请求实际上是对服务端的一种权限请求，只有当"预检"请求成功返回，实际请求才开始执行。预请求以 OPTIONS 形式发送。

options 预检请求会查看服务器是否支持当前的跨域请求，并且会返回支持的方法

### 7．HTTP 1.0 和 http2.0 区别

**http1.0 和 http1.1**

- http1.0 比较久远，缺点比较明显：短链接，每次请求都必须重新建立 tcp 连接，且第二个请求必须等待第一个请求响应返回了，才能发起。
- http1.1
  - 默认支持长连接`Connection: keep-alive`，在同一个 tcp 连接中可以传输多个 http 请求，断开的话可以在请求头中携带`Connection:false`。
  - 增加了管道传输`pipline`，多个请求可以同时发送，但是服务器还是按照顺序返回，如果前面的请求响应慢的话，后面的请求就会排队等着，这就称为队头堵塞
  - 支持缓存
  - 支持断点续传

**http1.1 和 http2.0**

- **二进制分帧**，HTTP2.0 通过在应用层和传输层之间增加一个二进制分层帧，突破了 HTTP1.1 的性能限制，改进传输性能。
- **多路复用**（MultiPlexing），复用`TCP`连接，在一个连接里，客户端和浏览器都可以同时发送多个请求或回应，而且不用按照顺序一一对应，这样就避免了”队头堵塞”
- **头部压缩**，双方各自维护一个 header 的索引表，使得不需要直接发送值，通过发送 key 缩减头部大小
- **服务端推送**（server push），同 SPDY 一样，HTTP2.0 也具有 server push 功能。

### 8．作用域链

因为函数的嵌套形成作用域的层级关系。当函数执行时，从当前作用域开始搜，没有找到的变量，会向上层作用域查找，直至全局函数，这就是作用域链。

在 JavaScript 中，作用域为`function(){}`内的区域，称为函数作用域。

全局函数无法查看局部函数的内部细节，但局部函数可以查看其上层的函数细节，直至全局细节

### 9．NULL 和 undefined 区别

null: 表示"没有对象"，即该处不应该有值

（1） 作为函数的参数，表示该函数的参数不是对象。

（2） 作为对象原型链的终点。

```js
// getPrototypeOf 返回指定对象的原型
Object.getPrototypeOf(Object.prototype); // null
```

undefined: 表示"缺少值"，就是此处应该有一个值。

（1）变量被声明了，但没有赋值时，就等于 undefined。

（2) 调用函数时，应该提供的参数没有提供，该参数等于 undefined。

（3）对象没有赋值的属性，该属性的值为 undefined。

（4）函数没有返回值时，默认返回 undefined。

### 10．token 带在哪里的，请求头的几种请求方式（？？应该是 content-type 吧？）

放在请求头，我的话一般在二次封装 axios 中的请求拦截中设置

**常见的 content-type 有**

- ##### application/x-www-form-urlencoded

  最常见的 POST 提交数据的方式。浏览器的原生 form 表单，如果不设置 enctype 属性，那么最终就会以 application/x-www-form-urlencoded 方式提交数据。提交的数据按照 key1=val1&key2=val2 的方式进行编码，key 和 val 会进行了 URL 转码。

- ##### multipart/form-data

  这也是一个常见的 POST 数据提交的方式。我们使用表单上传文件时，就要让 form 的 enctype 等于这个值。这种方式一般用来上传文件。

- ##### application/json

  json 格式，get 请求默认 content-type

### 11．http 状态码

- 200 成功

- 300 重定向

  - 301 永久移除
  - 302 临时跳转到其它地址

  - 304 请求的资源并没有被修改过

- 400 客户端方面的问题

  - 400("Bad Request")

    请求无效

    - 产生原因：

      前端提交数据的字段名称和字段类型与后台的实体没有保持一致

      前端提交到后台的数据应该是 json 字符串类型，但是前端没有将对象 JSON.stringify 转化成字符串。

    - 解决方法：

      对照字段的名称，保持一致性

      将 obj 对象通过 JSON.stringify 实现序列化

  - 404("Not Found")

    404 表明服务器无法把客户端请求的 URI 转换为一个资源。找不到资源

- 500 服务器端方面的问题

### 12．401 和 403 的区别

401 状态码表示该请求尚未应用，因为它缺少针对目标资源的有效身份验证凭据.

403 错误可能是已登录的情况，但是用户没有足够的特权来访问请求的资源。

### 13．事件循环 js 引擎事件循环 宏任务 微任务

> **为什么**

    js是单线程语言，只有一个调用栈，事件循环就是为了保证同步任务和异步任务都有有序的执行，因此js又是一个非阻塞、异步、并发式的编程语言。

宏任务：包括整体代码 `script`，`setTimeout`，`setInterval`、`事件的回调函数`等

微任务：Promise 的 then、catch、finally 的回调函数，async 函数 await 之后的代码，`process.nextTick`(别给自己挖坑了，别答这个)

> ```js
> async function async1() {
>   console.log('async1 start');
>   await async2();
>   console.log('async1 end');
> }
> ```
>
> 相当于，async/await 就是 promise 的语法糖
>
> ```js
> async function async1() {
>   console.log('async1 start');
>   Promise.resolve(async2()).then(() => {
>     console.log('async1 end');
>   });
> }
> ```

js 是单线程的，js 会将同步的代码放到主线程执行；异步的代码放到`任务队列`执行，任务队列中也分为宏任务队列和微任务对列，将 setTimeout 一类的宏任务放到宏任务队列，promise.then 一类的微任务放至微任务队列，执行完目前的同步代码后，开始执行任务队列中的微任务，执行完所有微任务后，进行页面渲染，渲染完成后再开始执行任务队列中的宏任务。

循环上面的操作就是常说的事件循环了

### 14．兼容性问题（高频）

比较常见的兼容问题就是 ie8 的 event 事件对象

```js
// ie8的event对象必须从window中取出
var event = e || window.event;
```

还有 ie 不支持 promise 等 es6 语法， 可以通过 webpack 和 babel 解决，也可以使用垫片解决。

```html
// 引入browser-polyfill
<script src="https://cdn.polyfill.io/v2/polyfill.min.js"></script>
```

在现代浏览器中，比较常出现兼容问题的一般都是 firefox 和 safari，因为其它浏览器基本都是 blink 内核，火狐使用的是 Gecko 内核，safari 使用 webkit 内核，且 safari 的版本是和 macos 的版本绑定的，不能直接升级 safari 的版本，也就导致了很多 safari 用户的浏览器版本老旧的问题。

firefox 兼容问题：

- 不支持 backdrop-filter、zoom 等等比较少见的 c3 属性
- 拖拽事件中的 evnet 也不会直接拿 client 值，不过可以通过 dragover 获取在 document 的值、webrtc 中不支持 connectionstatechange 事件，不过可以使用 oniceconnectionstatechange 事件替代，一般都会有替代的方案

safari 兼容问题：

safari 大多的兼容问题不是因为浏览器本身不兼容，而是因为 safari 对代码语法的要求更为严格，一些比较模糊的语法就可能会导致浏览器报一些比较奇怪的错误，具体记不太清了，就记得是当初使用 contenteditable 做输入框时有比较大的兼容问题

- safari 不支持正则的零宽断言匹配

  ```js
  // js只支持零宽先行断言,又分为正向零宽先行断言和负向零宽先行断言
  let str = '我爱祖国,我是祖国的花朵';
  // 正向先行断言
  let reg1 = /我是祖国的(?=123)/;
  let reg2 = /我是祖国的(?=花朵)/;
  str.match(reg1); // null
  str.match(reg2); // 我是祖国的

  // 正向零宽先行断言
  // 零宽断言就是不匹配特定的字符（括号中的字符）
  let reg3 = /我是祖国的(?=[花朵])/; //'我是祖国的'

  /// 正向后行断言
  let reg4 = /(?<=我是祖国的).+/;

  // 负向先行断言
  let reg5 = /祖国(?!的花朵)/;
  str.match(reg5); // 匹配的是'我爱祖国'中的祖国

  // 负向后行断言
  let reg6 = /祖国(?<!的花朵)/;
  str.match(reg6); // 匹配的是'我是祖国的花朵'的祖国
  ```

- safari 对于比较老版本的浏览器可能不支持 es6 语法, 黑苹果的版本也可能会比较老

- safari 有些表现上的不一致，比如手机端的双击可输入区域会自动放大，control + enter 键也有回车的效果等

- 移动端 safari 点击会有 0.3s 延迟, 可以通过阻止放大, 或者阻止默认点击事件,再创建事件模拟

### 15．promise 的用法（高频）

Promise 对象用于异步操作，它表示一个尚未完成且预计在未来完成的异步操作。

```js
new Promise((resolve, reject) => {
  if (success) {
    resolve(res);
  } else {
    reject(err);
  }
})
  .then(
    (res) => {
      console.log(res);
    },
    (err) => {
      console.log(err);
    },
  )
  .finally(() => {
    console.log('finally');
  });
```

`.then(res,err)`有两个参数,如果不传第二个参数，也可以在后面`.catch(err)`拿到 err，catch 只是一个语法糖而己 还是通过 then 来处理的

**promise 链式调用解决回调地狱**

```js
let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});
let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
    // reject(2)
  }, 2000);
});
let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3);
  }, 3000);
});

// 3秒后输出 3 2 1
p3.then((res3) => {
  console.log(res3);
  return p2;
})
  .then((res2) => {
    console.log(res2);
    return p1;
  })
  .then((res1) => {
    console.log(res1);
  });
```

**Promise.all()和 Promise.then()**

```js
let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});
let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
    // reject(2)
  }, 2000);
});
let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3);
  }, 3000);
});

Promise.all([p1, p2, p3]).then((res) => {
  // 三秒后打印 [1,2,3]  如果有reject 则不会返回res，直接返回err
  console.log(res);
});

// Promise.race([p1, p2, p3]).then(res => {
//   // 1秒后打印 1   且只打印 1
//   console.log(res);
// })
```

**Promise.allSettled()和 Promise.any()**

```js
// promise.allSettled 遇到一个reject 不会像all一样马上返回reject 而是等待所有的执行完再返回
Promise.allSettled([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
```

<img src="https://www.hualigs.cn/image/615a71aca6839.jpg" style="zoom: 50%;" />

```js
// Promise.any() 只要其中的一个 promise 成功，就返回那个已经成功的 promise, 不会像race一样只返回最快的那个，不管是resolve还是reject，这个只返回resolve
// 如果全部都为reject，则返回AggregateError: All promises were rejected
Promise.any([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
```

#### promise 实现原理

promise 的本质是回调函数，then 方法的本质是依赖收集，它把 fulfilled 状态要执行的回调函数放在一个队列， rejected 状态要执行的回调函数放在另一个队列。待 promise 从 pending 变为 fulfilled/rejected 状态后，把相应队列的所有函数，执行一遍。

### 16．es6 及以上会用到哪些（高频）

- let 和 const

- 解构

- promise

- 拓展运算符...

- 模板字符串

- rest 参数

- 箭头函数

- Object.assign() 浅拷贝

- Set

  ```js
  // 基本用法
  const s = new Set();

  [2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));

  for (let i of s) {
    console.log(i);
  }
  // 2 3 5 4


  // 去除数组的重复成员
  const array = [1, 1, 2, 3, 4, 4]
  [...new Set(array)]
  // [1, 2, 3, 4]

  ```

- async await

      await 的错误可以用`.catch`接收

- import export

  ```js
  //import 导入模块、export 导出模块
  export let name = 'my name';
  export let age = 'my age';
  export let getName = function () {
    return 'my name';
  };

  // 导入默认与部分
  import example3, { name, age } from './example1.js';
  ```

- class extends

### 17．从请求到响应的过程（高频）

1. 在浏览器输入一个网址或在页面里点击一个超链接
2. 本机上的 dns 开始解析，看最近这两天有没有访问过这个网站(本机 dns 最多存储 1000 个最近访问的网址)，有的话直接返回。没有的话，本机 dns 会将这个网址发送给 dns 根服务器
3. dns 根服务器收到这个网址以后，进行解析(具体解析过程见下文)，最后会返回一个 ip 地址给浏览器
4. 浏览器拿到这个 ip 以后，也就是知道这个 web 服务器的地址了，就开始对其进行访问
5. 首先通过 tcp 三次握手与这个 web 服务器进行连接
6. 连接建立以后，浏览器开始往服务器发送 http 请求（get 或 post 之类）
7. web 服务器收到这个请求，解析以后，返回对应的静态资源和动态资源（html 页面和 js），浏览器解析，显示在页面
8. 浏览器接受资源完毕以后，与 web 服务器进行 tcp 四次挥手断开连接

### 18．Computed watch methods 区别（高频）

**computed 计算属性**

- 计算属性计算时所依赖的属性一定是响应式依赖，否则计算属性不会执行
- 计算属性是基于依赖进行缓存的，就是说在依赖没有更新的情况，调用计算属性并不会重新计算，可以减少开销

computed 可用通过 return function 传参

**method 方法属性**

    所有的方法将写在method属性中

**watch 侦听属性**

侦听属性是专门用来观察和响应 vue 实例上的数据变动，同步的操作 watch 能做到的 computed 也能做到，且 computed 开销更小，但是 computed 一般用于处理同步操作，watch 用于进行异步操作

**watch 的三个参数**

- `immediate: true`可以监听值第一次绑定时的变化，默认为 false
- `deep:true`可以监听对象内的属性值的变化
- `handler(oldVal,newVal)`深度监听一个对象的时候 这两个形参对应的都是新值

deep 的原理是监听器一层层往下遍历，给对象的所有属性都添加上监听器，所以性能开销会很大

### 19．性能优化（高频）

**减少 http 请求次数和大小**

- 使用雪碧图(表情框, 事件委托)
- 合并压缩 js 和 css 文件
- 图片懒加载
- 取消音视频的预加载 `preload="none"`
- 使用 base64 图片
- CDN
- 使用字体图标 icon 或矢量图 svg

**缓存和长连接**

**代码优化**

- 减少对闭包的使用

- 动画中

  - 能用 css 解决的不用 js
  - 能用 transform 处理的不用传统的 css
  - 能用 requestAnimationFrame 解决的不用定时器

- 避免使用 iframe

  > 缺点：会阻塞页面的 onload 事件
  >
  >     	搜索引擎无法解读这种页面，不利于SEO
  >
  >     	iframe和主页面共享连接池，而浏览器对相同区域有限制所以会影响性能

- 减少直接对 DOM 的操作

- 低耦合高内聚：基于封装的方式：方法封装、插件、组件、框架、类库等封装，减少冗余代码，提高代码使用率

- 尽可能使用事件委托

- 避免出现死循环和嵌套循环

- 项目中尽可能使用异步编程模拟出多线程的效果，避免主线程阻塞

- 防抖节流

  - 防抖：设置一个定时器，在定时器结束前再次触发则重置定时器
  - 节流：触发后在规定时间内无法再次触发

- 减少 filter 滤镜的使用

- 尽可能减少选择器的层级

- 尽可能较少 TABLE 布局

- 手动回收堆栈内存 ( 赋值为 null )

- webworker

### 20．预加载 懒加载（高频）

#### 懒加载也就是延迟加载。

当访问一个页面的时候，先把 img 元素或是其他元素的背景图片路径替换成一张大小为 1\*1px 图片的路径（这样就只需请求一次，俗称占位图），只有当图片出现在浏览器的可视区域内时，才设置图片正真的路径，让图片显示出来。这就是图片懒加载。

**意义：**
懒加载的主要目的是作为服务器前端的优化，减少请求数或延迟请求数。

#### 预加载

    提前加载图片，当用户需要查看时可直接从本地缓存中渲染

**意义:**
预加载可以说是牺牲服务器前端性能，换取更好的用户体验，这样可以使用户的操作得到最快的反映。

**实现方法**

    常用的是new Image();设置其src来实现预载，再使用onload方法回调预载完成事件。只要浏览器把图片下载到本地，同样的src就会使用缓存，这是最基本也是最实用的预载方法。当Image下载完图片头后，会得到宽和高，因此可以在预载前得到图片的大小(方法是用记时器轮循宽高变化)。

```js
let img = new Image();
img.onload = function () {
  alert('img is loaded');
  img = null;
};
img.src =
  'https://s.cn.bing.net/th?id=OHR.HertfordshireBluebells_ZH-CN1027832085_UHD.jpg&rf=LaDigue_UHD.jpg&w=3840&h=2160&c=8&rs=1&o=3&r=0';
```

### 21．深浅拷贝（高频）

#### 浅拷贝

- ES6：Object.assign()

  > ```js
  > // 使用
  > // Object.assign(target, ...sources)
  > let arr = [1, 2, 3];
  > // 前面的参数是目标对象,后面的是源对象
  > console.log(Object.assign([], arr));
  > ```
  >
  > 和 Object.create(proto[, propertiesObject])的区别
  >
  > Object.create 是 es5 的，也能实现 Object.assign()的功能
  >
  > Object.assign 是 es6 的

- 展开运算符…

- 自己封装函数实现

#### 深拷贝

- JSON.parse() (但是如果里面有 reg， function 和 undefined 不可用)**注意 null 可以识别**

- lodash

  ```
  var obj = {id:1,name:{a:'xx'},fn:function(){}};
  var obj2 = _.cloneDeep(obj);
  ```

- 自己封装 (递归)

### 22．Css 常用单位

- rem(html 标签) em
- px
- vh vw vmax vmin
- %

### 23．opacity 和 rgba 区别

opacity 属性的值，可以被其子元素继承，给父级 div 设置 opacity 属性，那么所有子元素都会继承这个属性，而 RGBA 设置的元素的后代不会继承该属性及属性值。

### 24．js 数据类型（高频）

1. 基本数据类型

   - Number

   - String

   - Null

   - Undefined

   - Boolean

   - Symbol

     > 注：Symbol 是 ES6 引入了一种新的原始数据类型，表示独一无二的值。
     >
     > Symbol 是原始值，不是引用类型。不用 new
     >
     > 简单说 symbol 就是永远不会重复的数据
     >
     > ```js
     > let a1 = Symbol();
     > let a2 = Symbol();
     > // false
     > console.log(a1 === a2);
     >
     > let a3 = Symbol.for('这个是a3'); //第二个a3 为key值，在使用时会检验全局有没有注册过这个key值
     > let a4 = Symbol.for('这个是a3');
     > // true 因为两个取值的 key值都是一样的，且是通过for定义的
     > console.log(a3 === a4);
     >
     > let a5 = Symbol('这个是a5');
     > let a6 = Symbol('这个是a5');
     > // false  虽然两个的内容是一样的，但是并不是通过for定义的，所以还是不相等的
     > console.log(a5 === a6);
     >
     > // Symbol('这个是a3')
     > console.log(a3);
     > // 这个是a3
     > console.log(a3.description);
     > // keyFor 必须要通过Symbol.for定义才能使用keyFor，否则会返回undefined
     > ```
     >
     > console.log(Symbol.keyFor(a3));
     >
     > ```
     >
     > ```

2. 引用数据类型

   - Object
   - Function
   - Array

### 25．Less 和 scss 怎么定义变量（高频）

> less 和 scss 的区别
>
> less 是单独的一种文件，可以理解为 css 的升级版；
>
> sass 是一个相对新的编程语言，为 web 前端开发而生，可以用它来定义一套新的语法规则和函数；
>
> 区别：
>
> ① 表现方式不同：less 基于 javascript 运行，是在客户端处理；sass 基于 ruby 运行，是在服务器端处理；
>
> ② 变量区别：less 使用@，sass 使用$;
>
> ③ 单位换算：less 不可以处理无法识别的度量单位；sass 可以处理无法识别的度量单位并将其输出；
>
> ④ 条件语句：less 不支持；sass 可以使用条件语句、循环语句、add、or、not 及>、<、>=、<=、==等操作符；
>
> ⑤ 作用域不同：如果定义一个变量，当在某个选择器中修改该变量，less 只会在该选择器中有效，而 sass 会改变之后所有用到该变量的值；
>
> ⑥ 输出格式：less 没有输出设置；sass 提供四种输出：nested、compact、compressed、expanded。

```less
// less
@variable: 200px; //定义变量作为样式属性值使用
@classname: .nav_a; //变量值不可用中划线，此变量作为插值用于选择器名称

@{classname}{ //作为插值 必须加 {}
    width: @variable; //作为属性值直接调用
}
```

```scss
// scss
$bg-color: #ed795a;

.btn-default {
  background-color: $bg-color;
}
```

### 26．闭包（高频）

“定义在一个函数内部的函数”。内部的函数可以访问外部函数的变量。

闭包的实质是因为函数嵌套而形成的作用域链

闭包的定义即：函数 `A` 内部有一个函数 `B`，函数 `B` 可以访问到函数 `A` 中的变量，那么函数 `B` 就是闭包

**优点**

- 让外部可以访问函数内部的变量
- 局部变量会常驻在内存中
- 可以避免使用全局变量，防止全局变量污染

**缺点**

- 会造成内存泄漏（有一块内存空间被长期占用，而不被释放）

**闭包的创建**

闭包就是可以创建一个独立的环境，每个闭包里面的环境都是独立的，互不干扰。闭包会发生内存泄漏，**每次外部函数执行的时候，外部函数的引用地址不同，都会重新创建一个新的地址。**但凡是当前活动对象中有被内部子集引用的数据，那么这个时候，这个数据不删除，保留一根指针给内部活动对象。

### 27．vue 生命周期 获取数据放在哪个生命周期（高频）

beforeCreate ->inject -> Props -> Methods -> Data -> Computed -> Watch ->provide*->* created

- beforeCreated：el 和 data 并未初始化
- created :完成了 data 数据的初始化，el 没有
- beforeMount ：完成了 el 和 data 初始化
- mounted ：完成挂载，可进行 dom 操作
- beforeUpdate：数据有更新被调用
- updated：虚拟 dom 重新渲染补丁，以最小 dom 开支重新渲染 dom，这里 dom 已经渲染完成了
- beforeDestroy：实例销毁前的回调，这里还能访问实例的数据
- destroyed：去除 watcher、子组件、事件监听器等，还能访问 data，但不能访问真实的 DOM 结构了

一般在 created 里面发送请求向后端获取数据

![父子渲染顺序](https://www.hualigs.cn/image/6153ce3d039f0.jpg)

keep-alive 也有两个生命周期

- activated: 进入页面触发（第一次触发顺序 created->mounted->activated）
- deactivated：退出页面触发

### 28．$nextTick 作用（高频）

将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新。

> 网易云音乐播放样式的渲染

### 29．script 标签为什么放在 body 后面

script 代码执行会中断 html 解析并且阻断页面上其它 html 的解析，导致了不好的用户体验，所以要确保在脚本执行前页面已经完成了 DOM 树渲染，script 标签就要放在 body 的最后面再执行。

```js
window.onload = function(){}
<body onload="...">
<script defer src="...">
```

### 30．spa 是什么，优缺点（高频）

SPA 是单页面应用，目前主流的前端开发框架，如 vue 和 react，主要就是构建 SPA 页面的，SPA 页面是不会进行真实的页面跳转的，而是只在一个页面中进行前端的路由跳转。

**优点**

- SPA 页面无须重新加载整个页面，所以在切换页面时，速度会更快
- 不会有页面跳转的使用割裂感，体验更接近软件
- 无须考虑多页面的传值，开发更加简单方便

**缺点**

- SPA 页面不利于 SEO，因为大量 dom 都是通过 script 生成的，一个项目可能只用一个骨架页面

- SPA 页面的首屏加载速度会更慢，因为首屏需要加载整个项目需要的资源包，可以通过 CDN 和前端路由懒加载缓解此问题

  ```js
  // 路由懒加载
  {
      path: "/login",
      name: "login",
      component: () => import("../views/Login.vue"),
    },
  ```

### 31．http 和 https（高频）

> **http 特点**：
>
> 1.无连接：每一次请求都要连接一次，请求结束就会断掉，不会保持连接
>
> 2.无状态：每一次请求都是独立的，请求结束不会记录连接的任何信息
>
> 3.灵活：通过 http 协议中头部的 Content-Type 标记，可以传输任意数据类型的数据对象
>
> 4.简单快速：发送请求访问某个资源时，只需传送请求方法和 URL 就可以了
>
> > TCP 连接是传输层的，而 http 是应用层的，一次 TCP 连接可以发送多次的 HTTP 请求。HTTP 是基于 TCP 的
>
> **https 特点**：
>
> 1.基于 HTTP 协议，通过 SSL/TLS 提供加密处理数据、验证对方身份以及数据完整性保护
>
> 2.内容加密：采用混合加密技术（对称加密和非对称加密），中间者无法直接查看明文内容
>
> > 非对称加密使用的是公钥和私钥，会话密钥只能通过自己的私钥+（对方的私钥+公钥）才能得出，而私钥不会单独进行传输，中间者只能获取公钥和(双方的私钥+公钥)结合的密钥，无法获取最终的加密密钥，所以最终的加密密钥就可以用来对称加密请求了
> >
> > 服务器首先会发送一个公钥给客户端，客户端使用公钥加密传输给服务器，而加密的数据只能通过私钥解密
> >
> > 完整的 tls 加密步骤为：
> >
> > 1. 客户端生成一个随机数 1
> > 2. 服务器响应生成一个随机数 2 并返回 tsl 版本和加密套件
> > 3. 服务器发送公钥和证书给客户端
> > 4. 服务器告知客户端发送结束
> > 5. 客户端生成预主密钥并用公钥加密发送给服务器
> > 6. 服务器使用私钥解密得到预主密钥
> > 7. 客户端和服务器使用随机数 1+随机 2+预主密钥计算出会话密钥
> > 8. 之后的请求都通过会话密钥对数据进行对称加密
>
> 3.验证身份：通过证书认证客户端访问的是自己的服务器
>
> 4.保护数据完整性：防止传输的内容被中间人冒充或者篡改

1、https 协议需要到 ca 申请证书，一般免费证书较少，因而需要一定费用。

2、http 是超文本传输协议，信息是明文传输，https 则是具有安全性的 ssl 加密传输协议。

3、http 和 https 使用的是完全不同的连接方式，用的端口也不一样，前者是 80，后者是 443。

4、http 的连接很简单，是无状态的；HTTPS 协议是由 SSL+HTTP 协议构建的可进行加密传输、身份 认证的网络协议，比 http 协议安全。

### 32．vue 组件传值（高频）

- 父子传参 v-bind props

- 子父传参 $emit v-on

- 祖先传参 provide inject 注入

- 兄弟传参 eventBus

  ```js
  import Vue from 'vue';
  export defualt new Vue()
  ```

- vuex (localstorage、sessionstorage、url 都是可以传参的)

- pubsub-js 插件

  ```js
  import PubSub from 'pubsub-js';
  // 订阅
  PubSub.subscribe('MY TOPIC', mySubscriber);
  // 发布
  PubSub.publish('MY TOPIC', 'hello world!');

  var mySubscriber = function (msg, data) {
    console.log(msg, data);
  };
  ```

### 33．Vue v-for 中 key 的作用（高频）

**key 的作用主要是为了高效的更新虚拟 DOM**。因为 vue 是通过虚拟 dom 操作真实 dom 的，而虚拟 dom 中使用到了 diff 算法，diff 算法是判断当前 vnode 和上一次更新时的 vnode 的区别的，而判断两个节点是否为同一个节点的依据是判断当前两个 vnode 的 sel 和 key 是否相同。

另外 vue 中在使用相同标签名元素的过渡切换时，也会使用到 key 属性，其目的也是为了让 vue 可以区分它们，否则 vue 只会替换其内部属性而不会触发过渡效果。

diff 算法判断是否为同一个节点的根据是选择器系统且 key 相同

**diff 算法核心**

1. 两个相同的组件产生类似的 DOM 结构，不同的组件产生不同的 DOM 结构。
2. 同一层级的一组节点，他们可以通过唯一的 id 进行区分。

- 如果节点类型不同，直接干掉前面的节点，再创建并插入新的节点，不会再比较这个节点以后的子节点了。
- 如果节点类型相同，则会重新设置该节点的属性，从而实现节点的更新。

当某一层有很多相同的节点时，也就是列表节点时，Diff 算法的更新过程默认情况下也是遵循以上原则。

比如一下这个情况：

![img](https://images2017.cnblogs.com/blog/1170024/201710/1170024-20171018191056146-436654927.png)

我们希望可以在 B 和 C 之间加一个 F，Diff 算法默认执行起来是这样的：

![img](https://images2017.cnblogs.com/blog/1170024/201710/1170024-20171018191119318-368188268.png)

即把 C 更新成 F，D 更新成 C，E 更新成 D，最后再插入 E，是不是很没有效率？

所以我们**需要使用 key 来给每个节点做一个唯一标识，Diff 算法就可以正确的识别此节点，找到正确的位置区插入新的节点。**

所以设置`:key=index`是无意义的，甚至可能出现一些错误

![img](https://images2017.cnblogs.com/blog/1170024/201710/1170024-20171018191142334-13876328.png)

### 34．图片懒加载（高频）

可以将图片的 src 暂存到自定义属性`data-src`中，再通过监听页面滚动，scroll 事件触发频率特别高，需要加一个防抖做一个性能优化

```js
// 可视区域高度
var _clientHeight = document.documentElement.clientHeight;
// 视口距离顶部的高度
var _scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

// 假设图片元素为img
if (img.offsetTop < _clientHeight + _scrollTop) {
  img.src = img.getAttribute('data-src');
}
```

getBoundingClientRect 也可以获取图片当前的位置

也可以用 h5 的新 api，`IntersectionObserver`，兼容性也还好，除了 ie 其它现代浏览器基本几年前就兼容了。

```js
var observer = new IntersectionObserver(callback, options);
```

1. `callback`是当被监听元素的可见性变化时，触发的回调函数
2. `options`是一个配置参数，可选，有默认的属性值

一般在 vue 项目中会直接封装入自定义组件中

```typescript
export default {
  mounted(el: HTMLImageElement) {
    const observe = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const data_src = img.getAttribute('data-src');
          img.setAttribute('src', data_src as string);
          observe.unobserve(img);
        }
      });
    });

    // dom的创建渲染需要一定时间，这里延迟500毫秒获取，不然会获取不到里面的img属性
    setTimeout(() => {
      const imgs = el.querySelectorAll('img[data-src]');
      imgs.forEach((img) => {
        observe.observe(img);
      });
    }, 500);
  },
};
```

### 35．浏览器输入 url 到页面渲染的整个过程（高频）

1. 第一步 浏览器通过 DNS 查找该域名的 IP 地址
2. 第二步 浏览器根据解析得到的 IP 地址向 web 服务器发送一个 HTTP 请求
3. 第三步 服务器收到请求并进行处理
4. 第四步 服务器返回一个响应
5. 第五步 浏览器对该响应进行解码，解析 html 为 dom、解析 css 为 css-tree、dom+ css 生成 render-tree 绘图
6. 第六步 页面显示完成后，浏览器发送异步请求。
7. 第七步 整个过程结束之后，浏览器关闭 TCP 连接

**渲染详细过程**

1. 浏览器解析 html 源码，然后创建一个 DOM 树。并行请求 css/image/js 在 DOM 树中，每一个 HTML 标签都有一个对应的节点，并且每一个文本也都会有一个对应的文本节点。DOM 树的根节点就是 documentElement，对应的是 html 标签。

2. 浏览器解析 CSS 代码，计算出最终的样式数据。构建 CSSOM 树。对 CSS 代码中非法的语法它会直接忽略掉。解析 CSS 的时候会按照如下顺序来定义优先级：浏览器默认设置 < 用户设置 < 外链样式 < 内联样式 < html 中的 style。

3. DOM Tree + CSSOM --> 渲染树（rendering tree）。渲染树和 DOM 树有点像，但是是有区别的。

   DOM 树完全和 html 标签一一对应，但是渲染树会忽略掉不需要渲染的元素，比如 head、display:none 的元素等。而且一大段文本中的每一个行在渲染树中都是独立的一个节点。渲染树中的每一个节点都存储有对应的 css 属性。

4. 一旦渲染树创建好了，浏览器就可以根据渲染树直接把页面绘制到屏幕上。

   以上四个步骤并不是一次性顺序完成的。如果 DOM 或者 CSSOM 被修改，以上过程会被重复执行。实际上，CSS 和 JavaScript 往往会多次修改 DOM 或者 CSSOM。

**渲染阻塞**

1. 默认情况下，CSS 被视为阻塞渲染的资源，这意味着浏览器将不会渲染任何已处理的内容，直至 CSSOM 构建完毕。
2. JavaScript 不仅可以读取和修改 DOM 属性，还可以读取和修改 CSSOM 属性。

存在阻塞的 CSS 资源时，浏览器会延迟 JavaScript 的执行和 DOM 构建。另外：

1. 当浏览器遇到一个 script 标记时，DOM 构建将暂停，直至脚本完成执行。
2. JavaScript 可以查询和修改 DOM 与 CSSOM。
3. CSSOM 构建时，JavaScript 执行将暂停，直至 CSSOM 就绪。

**css 和 js 引入位置说明**

1. CSS 资源尽量放在 head 部分。
2. JS 资源尽量放在 body 结束标签之前
3. CSS 资源尽量优先于 JS 资源引入

### 36．Vuex（高频）

**原理**

Vuex 是通过全局注入 store 对象，来实现组件间的状态共享。

- state => 基本数据

- getters => 从基本数据派生的数据,是 store 的计算属性，使用和 state 一样是直接访问

- mutations => 提交更改数据的方法，同步！通过 commit 进行提交

- actions => 像一个装饰器，包裹 mutations，使之可以异步。通过 dispatch 调用，并需要在 actions 中 commit 到 mutations 中

- modules => 模块化 Vuex

  ```
  const moduleA = {
  state: { ... },
   mutations: { ... },
   actions: { ... },
   getters: { ... }
   }

  const moduleB = {
   state: { ... },
   mutations: { ... },
   actions: { ... }
   }

  const store = new Vuex.Store({
   modules: {
    a: moduleA,
    b: moduleB
  })
  ```

**vuex 文件配置**

```js
import Vue from 'vue';
import Vuex from 'vuex';

export default new Vuex.Store({
  state: {},
  mutations: {},
  getters: {},
  actions: {},
  modules: {},
});
```

### 37．css 两种盒子模型

- **W3C 盒子模型(标准盒模型)**

  ```css
  box-sizing: content-box;
  ```

  ![img](https://pic4.zhimg.com/80/v2-0ccf14bce917a263bbf734a35f06c8d3_720w.jpg)

- **IE 盒子模型(怪异盒模型)**

  ```css
  box-sizing: border-box;
  ```

  ![img](https://pic2.zhimg.com/80/v2-b4961242f8b1cd27e9d9da2d0f268a4d_720w.jpg)

### 38．回流和重绘（高频）

当我们增删 DOM 节点，修改一个元素的宽高，页面布局发生变化，DOM 树结构发生变化，那么肯定要重新构建 DOM 树，而 DOM 树与渲染树是紧密相连的，DOM 树构建完，渲染树也会随之对页面进行再次渲染，**这个过程就叫回流**。

当你给一个元素更换颜色，这样的行为是不会影响页面布局的，DOM 树不会变化，但颜色变了，渲染树得重新渲染页面，**这就是重绘**。

**回流的代价要远大于重绘。且回流必然会造成重绘，但重绘不一定会造成回流。**

**怎么减少回流**

- 减少 DOM 的增删行为

  如果要多加子元素，可以使用 documentfragment 文档片段

- 减少几何属性的变化

  如果你要改变多个属性，最好将这些属性定义在一个 class 中，直接修改 class 名，这样只用引起一次回流

- 减少元素位置的变化

  修改一个元素的左右 margin，padding 之类的操作，所以在做元素位移的动画，不要更改 margin 之类的属性，使用定位脱离文档流后改变位置会更好

### 39．第三方快捷登录的业务

先通过 a 标签跳转至对应的第三方登录地址，每个平台需要携带的参数都不太一样，gitee 需要 client_id、redirect_uri 和 response_type。然后第三方登录成功后跳转回前端的登录页面，并在请求携带一个参数证明已经经过了第三方登录，前端再拿这个证明发送向后端发送登录请求

### 40．MVVM

本质上是 MVC 的改进版

- M - Model 模型层，主要负责业务数据相关；
- V - View 视图层，顾名思义，负责视图相关，细分下来就是 html+css 层
- VM - ViewModel V 与 M 沟通的桥梁，负责监听 M 或者 V 的修改，是实现 MVVM 双向绑定的要点

MVVM 支持双向绑定，意思就是当 M 层数据进行修改时，VM 层会监测到变化，并且通知 V 层进行相应的修改，反之修改 V 层则会通知 M 层数据进行修改，以此也实现了视图与模型层的相互解耦；

<img src="https://upload-images.jianshu.io/upload_images/3360875-0165a2d4e529f192.png?imageMogr2/auto-orient/strip|imageView2/2/w/895/format/webp" alt="img" style="zoom: 80%;" />

### 41．git 有哪些命令

```cmd
 git add # 将工作区的修改提交到暂存区
 git commit # 将暂存区的修改提交到当前分支
 git reset --hard 版本号   回退到某一个版本
 git stash # 保存某次修改
 git pull # 从远程更新代码
 git push # 将本地代码更新到远程分支上
 git reflog # 查看历史命令
 git status # 查看当前仓库的状态
 git diff # 查看修改
 git log # 查看提交历史（查看版本号）
 git revert # 回退某个修改
 git branch	查看分支
 git checkout 切换分支
 git merge 合并分支
```

### 42. 简述 TCP 三次握手？

为了在不可靠的信道上，建立可靠的通信

第一次握手：客户端和服务器建立连接时，客户端向服务器发送握手信号（SYN）等待服务器确认。

第二次握手：服务器收到并确认握手信号，同时自己也发送一个握手信号和（SYN+ACK）确认包给客户端。服务器进入信号接收状态。

第三次握手：客户端收到服务器的握手信号和确认包，向服务器发送确认包（ACK）。客户端和服务器 TCP 连接成功，完成三次握手。

![三次握手](https://www.hualigs.cn/image/615136ad3731f.jpg)

**简述 TCP 四次挥手？**

第一次挥手：客户端发送关闭双方数据连接的信号给服务器，客户端进入终止等待 1（FIN-WAIT-1）状态

第二次挥手：服务器收到这个信号后，发送确认包给客户端，确认序号为收到序号+1，服务器进入终止等待 2（FIN-WAIT-2）状态

第三次挥手：服务器发送关闭双方数据连接的信号给客户端，服务器进入最后确认（LAST_ACK）状态。

第四次挥手：客户端收到这个信号后，进入时间等待（TIME-WAIT）状态，接着发送确认包给服务器，确认序号

为收到序号+1，服务器进入关闭状态，连接断开，完成四次挥手。

主动断开方最后需要进入一个 time-wait 状态，这个状态一般持续 4 分钟，4 分钟后才会进入 closed 状态并释放套接字资源，不过这个时间是可以调整的。这个状态的作用是防止如果接收方最后没有接收到 ack，会重发一个 fin 包，这时主动方就能立即接收到这个 fin 包，并重发 ack 包。

![四次挥手](https://www.hualigs.cn/image/615136ad814ee.jpg)

**【问题 1】为什么连接的时候是三次握手，关闭的时候却是四次握手？**

**确保数据能够完整传输。**
当被动方收到主动方的 FIN 报文通知时，它仅仅表示主动方没有数据再发送给被动方了。
但未必被动方所有的数据都完整的发送给了主动方，所以被动方不会马上关闭 SOCKET,它可能还需要发送一些数据给主动方后，（按照常理的话，第二次和第三次挥手应该一起回复 FIN=1 和 ACK=1 的，但是因为服务器端可能有数据没发完，所以不能也立刻去主动申请关闭，所以要把 ACK 和 FIN 分开）
再发送 FIN 报文给主动方，告诉主动方同意关闭连接，所以这里的 ACK 报文和 FIN 报文多数情况下都是分开发送的。

四次挥手是把第二步的 FIN+ACK 分开了，因为被动方可能还有数据未传输完成，所以比三次握手多了一次。

### 43. 简述 cookie 和 session 区别？

> cookie 编码格式 : encodeURI()

共同点：cookie 和 session 都是用来跟踪浏览器用户身份的会话方式

1. cookie 数据存放在客户的浏览器上, session 数据放在服务器上
2. cookie 不是很安全,别人可以分析存放在本地的 cookie 并进行 cookie 欺骗,考虑到安全应当使用 session
3. session 会在一定时间内保存在服务器上。当访问增多,会比较占用你服务器的性能考虑到减轻服务器性能方面,应当使用 cookie
4. 单个 cookie 保存的数据不能超过 4K,很多浏览器都限制一个站点最多保存 20 个 cookie。

**简述 webStorage（localStorage、sessionStorage）与 cookie 的区别？**

**1.** 存储大小不同：cookie 不能超过 4k，localStorage、sessionStorage：5m 或者更多。

**2.** 数据有效期不同：cookie 可以设置过期时间，若不设置则会随浏览器的关闭而销毁。localStorage 一直保持，手动清除。sessionStorage 关闭标签页或者浏览器就清除了。

**3.**作用域不同：sessionStorage 只能在当前页面有效。localStorage、cookie 不同页面(同源)也会存在。

**4.** cookie 会在所有请求中携带(即使不需要).

5、cookie 和 session 一般用于存储用户信息，localstorage 可以用来在页面传递参数，sessionstorage 可以用来保存一些临时的数据，

### 44. http1 请求限制多少个?

在 HTTP1 中浏览器限制了同一个域名下的请求数量（Chrome 下一般是六个），当在请求很多资源的时候，由于队头阻塞，当浏览器达到最大请求数量时，剩余的资源需等待当前的六个请求完成后才能发起请求。

### 45. flex

flex: 是 flex-grow 和 flex-shrink、flex-basis 的简写，默认值为 0 1 auto。

flex-grow：代表当父元素的宽度大于子元素宽度之和时，并且父元素有剩余，这时会分享父元素的空间了。

flex-shrink：代表当父元素的宽度小于子元素宽度之和时，并且超出了父元素的宽度，这时，就会按照一定的比例进行收缩。

flex-basis：占据页面的宽度，默认 auto 时, 为子元素设置的 width，优先级大于 width。

flex-warp:是否换行

flex-direction: 主轴方向

justity-content: center、space-between、around-between、flex-start、flex-end

ailgn-items: center、flex-start、flex-end

order: 排序

默认情况下：父盒子太大不会扩张，父盒子太小会收缩

https://blog.csdn.net/m0_37058714/article/details/80765562

## 1、event-loop

事件循环机制由三部分组成

- 调用栈
- 微任务队列
- 信息队列

```js
// event-Loop开始的时候会从全局一行一行的执行遇到函数调用会压入到调用栈中被压入的函数被称之为帧，当函数返回后会从调用栈中弹出
// function fun1() {
//   console.log(1);
// }
// function fun2() {
//   console.log(2);
//   fun1()
//   console.log(3);
// }
// fun2()

// js中的异步操作比如 fetch setTimeout setInterval压入到调用栈中的时候里面的消息会进去到消息队列中去，消息队列中，会等到调用栈清空之后再执行
// function func1() {
//   console.log(1);
// }
// function func2() {
//   setTimeout(() => {
//     console.log(2);
//   }, 0)
//   func1()
//   console.log(3);
// }
// func2()

// promise async await的异步操作的时候会加入到微任务中去会在调用栈清空的时候立即执行，调用栈中加入的微任务会立马执行
var p = new Promise((resolve) => {
  console.log(4);
  resolve(5);
});
function func1() {
  console.log(1);
}
function func2() {
  setTimeout(() => {
    console.log(2);
  }, 0);
  func1();
  console.log(3);
  p.then((resolve) => {
    console.log(resolve);
  });
}
func2(); // 4 1 3 5 2
```

## 2、js 中哪些操作会造成内存泄漏

- 闭包
- 意外的全局变量 ( let a = b =0 )
- 被遗忘的定时器
- 脱离 DOM 的引用 ( 获取了一个 DOM，后面这个 DOM 被删除了，但还一直保持这这个 DOM 的引用 )

## 3、高阶函数

高阶函数就是将函数作为参数或返回值的函数

```js
function highOrder(params, callback) {
  return callback(params);
}
```

## 4、数组扁平化

将一个多维数组变为一个一维数组

### 1、flat()

```js
const arr = [1, [2, [3, [4, 5]]], 6]; // => [1,2,3,4,5,6]
const res1 = arr.flat(Infinity); // 括号里面的参数代表有多少层，也可以传具体的层数，如果不传参默认只拍一层
```

### 2、利用正则

```js
const arr = [1, [2, [3, [4, 5]]], 6]; // => [1,2,3,4,5,6]
const res = JSON.parse('[' + JSON.stringify(arr).replace(/\[|\]/g, '') + ']');
```

### 3、reduce()

```js
const arr = [1, [2, [3, [4, 5]]], 6]; // => [1,2,3,4,5,6]
const flatten = (arr) => {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatten(cur) : cur);
  }, []);
};
const res = flatten(arr);
```

### 4、函数递归

```js
function flatFunc(arr) {
  let newArr = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      newArr.push(...flatFunc(item));
    } else {
      newArr.push(item);
    }
  });
  return newArr;
}

console.log(flatFunc(arr));
```

## 5、BFC

块级格式化上下文,它是指一个独立的块级渲染区域,只有 Block- level B0X ( 块级盒子 ) 参与,该区域拥有套渲染规则来约束块级盒子的布局,且与区域外部无关

**现象**

一个盒子如果不设置 height，当内容子元素都浮动时，无法撑起自身

**如何创建 BFC**

- 方法 ①: float 的值不是 none
- 方法 ②: position 的值不是 static 或者 relative
- 方法 ③: display 的值是 inline- block、flex 或者 inline-flex
- 方法 ④: overflow: hidden;

**BFC 的其它作用**

- BFC 可以取消盒子的 margin 塌陷
- BFC 可以阻止元素被浮动元素覆盖

## 6、ES6 引入问题

```js
// counter.js
let counter = 20;
export default counter;


// 引入
import mycounter from "./counter.js"
console.log(mycounter)	// 10
console.log(mycounter += 1)			// 报错, 因为自身没有mycounter变量
console.log(var mycounter += 1)	// NaN 因为var了以后会变量提升，导致引入的就失效了
```

## 7、属性中的一些问题

**for in 与 Object.keys 的区别**

- 前者可以把原型对象身上的属性枚举出来
- 后者不能把原型对象身上的属性枚举出来

**Object.defineProperty()**

`Object.defineProperty(obj, prop, descriptor)`

- obj：必需。目标对象
- prop：必需。需定义或修改的属性的名字
- descriptor：必需。目标属性所拥有的特性

**返回值：**

- 传入函数的对象。即第一个参数 obj

**注意**

- 使用 Object.defineProperty 定义的属性默认是不能通过 Object.keys 或 for..in 获取到的，因为 Object.defineProperty 默认 enumerable 是 false，是无法通过 keys 遍历的, 当可以通过`enumerable:true`设置

  ```js
  Object.defineProperty(obj, 'newKey', {
    value: 'hello',
    writable: true,
    enumerable: true,
    set: function (val) {
      input.value = val;
      p.innerHTML = val;
    },
    get: function () {
      return val;
    },
  });
  ```

**判断对象为空的方法**

- `JSON.stringify(obj) == '{}'`

- `Object.keys(obj).length === 0`

- ```js
  function isNull() {
    for (var key in obj) {
      if (key && obj.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  }
  ```

## 8、DOM 和 BOM

**BOM 即浏览器对象模型（brower object model）**

- window(alert、定时器之类的都属于 window 的方法)
- navigator(查询浏览器信息，也可以用户获取摄像头等设备的权限)
- screen（获取屏幕信息）
- history （获取浏览器的会话历史, 有 `back()、forward()、go()`等方法）
- location （控制页面跳转，有`replace(),reload(),href()`等方法）

**DOM 即文档对象模型（document object model）**

> W3C 组织推荐的处理可扩展标志语言的标准编程接口。在网页上，组织页面（或文档）的对象被组织在一个树形结构中，用来表示文档中对象的标准模型就称为 DOM。

- 整个文档是一个文档节点（document 对象）
- 每个 HTML 元素是元素节点（element 对象）
- HTML 元素内的文本是文本节点（text 对象）
- 每个 HTML 属性是属性节点（attribute 对象）
- 注释是注释节点（comment 对象）

**dom 的 api 有什么**

- 节点创建型 api
- 页面修改型 API
- 节点查询型 API
- 节点关系型 api
- 元素属性型 api
- 元素样式型 api 等

## 9、target、currentTarget 的区别？

- currentTarget 当前所绑定事件的元素
- target 当前被点击的元素

```js
 <ul class="father">
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
  </ul>

...
// 简单实现事件委托
    let father = document.querySelector('.father');
    father.addEventListener('click', (e) => {
      console.log(e.currentTarget, e.target); // father元素   当前点击的元素
      console.log(e); // 但是这里面的currentTartget是null，这是因为currentTarget 只能用于事件正在处理过程中，当回调结束，会被重新赋值。
      console.log(e.target.innerHTML);
    })
```

## 10、get、post 区别

get 一般用户获取数据，post 一般用户提交数据

1. get 参数通过 url 传递，post 放在 request body 中。
2. get 请求在 url 中传递的参数是有长度限制的，而 post 没有。
3. get 比 post 更不安全，因为参数直接暴露在 url 中，所以不能用来传递敏感信息。
4. get 请求只能进行 url 编码，而 post 支持多种编码方式
5. get 请求会浏览器主动 cache，而 post 不会。
6. get 请求参数会被完整保留在浏览历史记录里，而 post 中的参数不会被保留。
7. GET 和 POST 本质上就是 TCP 链接，并无差别。但是由于 HTTP 的规定和浏览器/服务器的限制，导致他们在应用过程中体现出一些不同。
8. GET 产生一个 TCP 数据包；POST 产生两个 TCP 数据包。

**http 支持的方法**

get, post, head, options, put, delete,trace, connect

## 11、setTimeOut

**setTimeOut 从第三个参数开始的后面所有参数都是函数表达式的参数。**

```js
for (var i = 0; i < 5; i++) {
  setTimeout(
    function (i) {
      console.log(i);
    },
    1000,
    i,
  );
}

// 0,1,2,3,4
```

## 12、webpack

- entry
- output
- module
- plugins
- mode
- devServer

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    // 入口文件的导出位置
    filename: 'js/built.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|png|gif|bmp)$/,
        loader: 'url-loader',
        options: {
          limit: 8 * 1024,
          name: '[hash:10].[ext]',
          // 关闭es6模块化
          esModule: false,
          // 文件导出位置
          outputPath: 'imgs',
        },
      },
      {
        // 处理html中img资源
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.js$/,
        // babel-core是babel的库
        // 需要安装babel-core babel-loader@7
        use: ['babel-loader'],
        exclude: '/node_modules/',
      },
      {
        // 处理其它资源
        exclude: /\.(html|js|css|less|jpg|png|bmp|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[hash:10].[ext]',
          outputPath: 'media',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],

  mode: 'development',

  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
    compress: true,
    port: 3000,
    // open: true
  },
};
```

### `lodaer` 与 `plugins` 的区别？

loader 是在打包构建过程中用来处理源文件的（JSX，Scss，vue 等），一次处理一个，将一个文件转换成另一个文件。plugins 并不直接操作单个文件，它直接对整个构建过程起作用，比如`HtmlWebpackPlugin`就是构建一个 html 文件出来，而不是单独的转换一个文件。

用法也不一样，plugins 需要 new 实例才能使用，loader 则是直接配置。

### webpack 常用 loader

1、file-loader：把⽂件输出到⼀个⽂件夹中，在代码中通过相对 URL 去引⽤输出的⽂件。
2、url-loader：和 file-loader 类似，但是能在⽂件很⼩的情况下以 base64 的⽅式把⽂件内容注⼊到代码中去。
3、source-map-loader：加载额外的 Source Map ⽂件，以⽅便断点调试。
4、image-loader：加载并且压缩图⽚⽂件。
5、babel-loader：将 ES6 转化为 ES5。
6、css-loader：加载 CSS，⽀持模块化、压缩、⽂件导⼊等特性。
7、style-loader：把 CSS 代码注⼊到 JavaScript 中，通过 DOM 操作去加载 CSS。
8、eslint-loader:通过 ESLint 检查 JavaScript 代码

### webpack 常用 plugin

1. HtmlWebpackPluign: 生成入口 HTML 文件
2. CleanWebpackPlugin: 清空上次打包内容
3. MiniCssExtractPlugin: 抽离并生成 css 文件
4. HotModuleReplacementPlugin： HMR，实现部分模块的局部热刷新
5. ImgageminPlugin：压缩图片
6. UglifyJsPlugin: 压缩 js 文件

### 为什么要配置 babel？

因为在 webpack 中，默认只能处理一部分 es6 的语法，一些更高级的 es6 和 es7 语法 webpack 不能处理，这时就需要第三方的 loader 即 babel 来帮助 webpack 来处理这些高级的语法

## 13、三栏布局

- 绝对定位：两边绝对定位，中间不设宽度，用 margin 撑开两边，或者 calc 计算

- 浮动：两边浮动，中间 margin 撑开，或中间触发 BFC，注意：因为 float 脱离文档流，又不像绝对定位一样能设置 top 值，所以 center 必须放在 left 和 right 之后

- flex 布局

- 圣杯布局

  ​ 将 center 放在中间可以优先渲染

  ```html
  <div class="box">
    <div class="center">center</div>
    <div class="left">left</div>
    <div class="right">right</div>
  </div>
  ```

  ```css
  .box {
    height: 100%;
    margin: 0;
  }

  .box {
    padding: 0 200px 0 150px;
  }

  .center,
  .left,
  .right {
    float: left;
    height: 100%;
  }

  .left {
    position: relative;
    left: -150px;
    width: 150px;
    background-color: pink;
    margin-left: -100%;
  }

  .right {
    position: relative;
    right: -200px;
    width: 200px;
    background-color: red;
    margin-left: -200px;
  }

  .center {
    width: 100%;
    background-color: orange;
    /* padding: 0 200px 0 150px;
        box-sizing: border-box; */
  }
  ```

- 双飞翼布局

```html
<div class="box">
  <div class="main">
    <div class="center">center</div>
  </div>
  <div class="left">left</div>
  <div class="right">right</div>
</div>
```

```css
.box {
  height: 100%;
  margin: 0;
}

.left,
.right {
  float: left;
  height: 100%;
}

.left {
  width: 150px;
  background-color: pink;
  margin-left: -100%;
}

.right {
  width: 200px;
  background-color: red;
  margin-left: -200px;
}

.center {
  background-color: orange;
  height: 100%;
  margin: 0 200px 0 150px;
}

.main {
  width: 100%;
  height: 100%;
  float: left;
}
```

### 双栏布局

一个定宽，一个自适应

- 浮动+margin-left / 浮动+overflow:hidden;(BFC)
- flex
- calc

## 14、drag 事件

drag 是属性 h5 的 api，一共有 7 个事件

| 针对对象     | 事件名称  | 说明                                             |
| ------------ | --------- | ------------------------------------------------ |
| 被拖动的元素 | dragstart | 在元素开始被拖动时候触发                         |
|              | drag      | 在元素被拖动时反复触发                           |
|              | dragend   | 在拖动操作完成时触发                             |
|              |           |                                                  |
| 目的地对象   | dragenter | 当被拖动元素进入目的地元素所占据的屏幕空间时触发 |
|              | dragover  | 当被拖动元素在目的地元素内时触发                 |
|              | dragleave | 当被拖动元素没有放下就离开目的地元素时触发       |

## 15、为什么 vue 中的 data 必须是一个函数

Object 是引用数据类型，如果不用 function 返回，每个组件的 data 都是内存的同一个地址，一个数据改变了其他也改变了；

JavaScript 只有函数构成作用域(注意理解作用域，**只有函数{}构成作用域**,对象的{}以及 if(){}都不构成作用域),data 是一个函数时，每个组件实例都有自己的作用域，每个实例相互独立，不会相互影响。

## 16、blob 下载

前端实现下载文件的功能，通过在请求头中设置响应类型`responseType:"blob"`发送请求，获得 blob 文件流，在通过`URL.createObjectURL()`将 blob 流转为文件地址，然后就可以通过 a 标签下载（a 标签需要设置 download 属性，属性的值为下载文件的文件名）

```html
<!-- 用于下载的a标签 -->
<a :href="downloadFileInfo.url" :download="downloadFileInfo.name" target="_blank" id="downloadCurrentFile"></a>
```

onDownloadProgress 可以监听 axios 的下载进度

```js
    downloadCurrentFile(name, url) {
      axios.get(url, { responseType: "blob" }).then((res) => {
        // 获取后台返回的blob流
        let blob = res.data;
        // 将blob流 转为 文件地址
        let url = URL.createObjectURL(blob);
        // console.log(url);
        // 通过创建a标签下载文件
        let a = document.querySelector("#downloadCurrentFile");
        this.downloadFileInfo.name = name;
        this.downloadFileInfo.url = url;
        this.$nextTick(() => {
          a.click();
          // 用完释放URL对象
          URL.revokeObjectURL(url);
        });
      });
    },
```

## 17、axios

> 为方便起见，为所有支持的请求方法提供了别名
> 在使用别名方法时， url、method、data 这些属性都不必在配置中指定

- axios.request(config)
- axios.get(url[, config])
- axios.delete(url[, config])
- axios.post(url[, data[, config]])
- axios.put(url[, data[, config]])

### `axios.request(config)`

```javascript
//原始的Axios请求方式
axios.request({
  method: 'post',
  url: '/user/12345',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  },
  timeout: 1000,
  ...//其他相关配置
});
```

### `axios.get(url[, config])`

```csharp
axios.get('demo/url', {
    params: {
        id: 123,
        name: 'Henry',
    },
   timeout: 1000,
  ...//其他相关配置
})
```

#### `axios.delete(url[, config])`

```javascript
//如果服务端将参数作为java对象来封装接受
axios.delete('demo/url', {
    data: {
        id: 123,
        name: 'Henry',
    },
     timeout: 1000,
    ...//其他相关配置
})
//如果服务端将参数作为url参数来接受，则请求的url为:www.demo/url?a=1&b=2形式
axios.delete('demo/url', {
    params: {
        id: 123,
        name: 'Henry',
    },
     timeout: 1000,
    ...//其他相关配置
})
```

#### `axios.post(url[, data[, config]])`

```javascript
axios.post('demo/url', {
    id: 123,
    name: 'Henry',
},{
   timeout: 1000,
    ...//其他相关配置
})
```

#### `axios.put(url[, data[, config]])`

```javascript
axios.put('demo/url', {
    id: 123,
    name: 'Henry',
},{
   timeout: 1000,
    ...//其他相关配置
})
```

总结： 通过以上案例可以看出，`get` `delete`请求方式中，第一个参数为请求的 url 地址，第二个参数为请求的一些配置项，需要传递给后端的参数包含在配置项的 data 或者 params 属性中，而`post` `put` `patch`请求则第一个参数为 url 地址，第二个参数是需要入参的 json 数据，第三个参数是入参以外的其他配置项。

**axios 二次封装**

```js
import axios from 'axios';

const client = axios.create({
  baseURL: '/api',
  timeout: 3000,
  // 是否携带cookie、token一类的头部授权
  withCredentials: true,
});

client.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  },
);

client.interceptors.response.use((res) => {
  return res;
});

export default client;
```

## 18、虚拟 DOM、VNode、diff

**虚拟 DOM**

前端发展很多年，直到出现了虚拟 DOM，才可以从操作 DOM 解脱出来。

JQuery 的出现，简化了操作 DOM 的过程，但是还是摆脱不了操作 DOM。

而虚拟 DOM 的目的是，使用虚拟节点代替真实节点，所有操作都发生在虚拟节点，然后通过 diff 算法对比新旧两棵虚拟 DOM，计算出更新真实 DOM 的最少操作，由框架代替用户执行这些操作，所以用户可以把大量的精力放在业务逻辑上。

**VNode**

在 Vue 里，使用 VNode 表示一个虚拟节点，可以简单理解为**普通对象**。就是将真实节点用对象的方式模拟出来。

```js
/**
 * 产生虚拟节点
 * 将传入的参数组合成对象返回
 * @param {string} sel 选择器
 * @param {object} data 属性、样式
 * @param {Array} children 子元素
 * @param {string|number} text 文本内容
 * @param {object} elm 对应的真正的dom节点(对象)，undefined表示节点还没有上dom树
 * @returns
 */
export default function (sel, data, children, text, elm) {
  const key = data.key;
  return { sel, data, children, text, elm, key };
}
```

**VNode 类别**

在 Vue 里，VNode 分两种类别：

1. 普通 VNode
2. 组件 VNode

它们的区别是普通 VNode 有 children 属性，而组件 VNode 的 children 属性为 undefined

**DOM Diff**

`dom diff` 其实就是对比两个虚拟节点，然后对比它们的差异。然后再对应真实 `dom` 上进行一个打补丁操作。我们的目的就是找到其中的差异，然后用最小的代价来操作 `dom`。因为操作 `dom` 相对而言比较耗性能。

通过比较两个新老虚拟节点，得到彼此的差异，形成一个补丁，最后再与真实的 `dom` 进行匹配，将这些补丁打到真实 `dom` 上去，最终，我们还是操作了原来的真实 `dom`，但是我们是用了差异化结果的 **最小的代价** 来操作的。

但其实 vdom 的性能在很多内容比较固定，不怎么频繁变动的页面中，是不如原生 dom 的，因为 vdom 需要经过 create(生成 js dom 对象)、diff、patch 等步骤，性能消耗也很厉害，而大部分页面是不会频繁改变已经存在的节点内容的，但是 vdom 可以帮助我们自动更新 dom，提高了开发效率和维护性，如果操作 dom 还需要我们手动控制 dom。且 vdom 可以做到跨平台，即使不是 web 平台，也可以使用同一套代码，只是最终的渲染的方式有所不同，而直接操作原生 dom，离开了 web 平台，就难免需要重构了。

## 19、使用 npx 开启一个静态服务器

```bash
npx http-server    #默认返回根目录下index.html
npx http-server -p 3000  #指定端口
```

## 20、原型、原型链

**什么是原型**

原型是 js 实现继承的一种方式

函数有原型，函数有一个属性叫 prototype，函数的这个原型指向一个对象，这个对象叫原型对象。这个原型对象有一个 constructor 属性，指向这个函数本身。

**原型对象：**在声明了一个函数之后，浏览器会自动按照一定的规则创建一个对象，这个对象就叫做**原型对象。**这个原型对象其实是储存在了内存当中。

每个函数都有 prototype 属性，该属性指向原型对象；使用原型对象的好处是所有对象实例共享它所包含的属性和方法。

**原型链**

主要解决了继承的问题；每个对象都拥有一个原型对象，通过\_\_proto\_\_ 指针指向其原型对象，并从中继承方法和属性，同时原型对象也可能拥有原型，这样一层一层，最终指向 null。

![原型链](https://i0.hdslb.com/bfs/album/c30552e78538cb66aafbafc5133fb80b42e37faa.jpg)

```js
// 构造函数本身就是函数，所以构造函数的原型对象是Function的原型对象，而Function本身也是函数，所以Function.prototype === Function.__proto__
(function a() {}).__proto__ === Function.prototype;
Object.__proto__ === Function.prototype;
Function.prototype === Function.__proto__;
```

**什么时候会用到原型**

不需要重写的属性和方法可以放在 prototype 中，避免每次 new 一个实例都要添加这些固定的方法和属性一次，造成性能浪费。

**原型的作用：**

1. 数据共享 节约内存空间
2. 实现继承

**instanceof**

**`instanceof`** **运算符**用于检测构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上。

```js
function Car() {}
var car = new Car();
function person() {}
var p = new Person();

console.log(p instanceof Car); // false
console.log(car instanceof Car); // true
console.log(car instanceof Object); // true
console.log([] instanceof Array); // true
console.log([] instanceof Object); // true
console.log({} instanceof Object); // true

// A对象的原型里到底有没有B的原型

// 实现instanceof
// instanceof 用来判断右边构造函数的原型对象,是否在左边实例对象的原型链上
function _instanceof(left, right) {
  let temp = left.__proto__;
  while (temp !== null) {
    if (temp === right.prototype) {
      return true;
    }
    temp = temp.__proto__;
  }
  return false;
}
console.log(_instanceof([], String));
```

```js
var a = [1，2，3];
// 判断是否为数组的方法
// f Array(){[native code]}
console.log(a.constructor);
// true
console.log(a instanceof Array);
// [object Array] 通过将this更改为a并调用Object的原型下的toString方法 打印出该结果 array自带的同string是经过重写的，打印的是1，2，3
console.log(Object.prototype.toString.call(a));
```

## 21、信息推送

- 长轮询
- 短轮询
- websocket

## 22、vue-router 路由

**原理**

更新视图而不重新请求页面, 有 history 和 hash 两种模式,

```js
// hash
// hash（“#”）符号的本来作用是加在URL中指示网页中的位置：
// hash虽然出现在URL中，但不会被包括在HTTP请求中。它是用来指导浏览器动作的，对服务器端完全无用，因此，改变hash不会重新加载页面
window.addEventListener('hashchange', funcRef, false);

// 每一次改变hash（window.location.hash），都会在浏览器的访问历史中增加一个记录
$router.push(); //调用方法
HashHistory.push(); //根据hash模式调用,设置hash并添加到浏览器历史记录（添加到栈顶）（window.location.hash= XXX）
History.transitionTo(); //监测更新，更新则调用History.updateRoute()
History.updateRoute(); //更新路由
{
  app._route = route;
} //替换当前app路由
vm.render(); //更新视图
```

```js
// history
// History interface是浏览器历史记录栈提供的接口，通过back(), forward(), go()等方法，我们可以读取浏览器历史记录栈的信息，进行各种跳转操作。
// 从HTML5开始，History interface提供了两个新的方法：pushState(), replaceState()使得我们可以对浏览器历史记录栈进行修改：
window.history.pushState(stateObject, title, URL);
window.history.replaceState(stateObject, title, URL);
```

这两个方法有个共同的特点：**当调用他们修改浏览器历史记录栈后，虽然当前 URL 改变了，但浏览器不会立即发送请求该 URL**。

- 代码结构以及更新视图的逻辑与 hash 模式基本类似，只不过将对 window.location.hash 直接进行赋值 window.location.replace()改为了调用 history.pushState()和 history.replaceState()方法。
- 同时我们可以监听 onpopstate 事件来处理 url 地址栏直接修改的情况。

用于组件之间的切换（单页面开发）

动态路由就是后面添加了`:id`等的 params 参数的

`npm install vue-loader`

```js
// router文件配置
import Vue from 'vue';
import VueRouter = from 'vue-router';

Vue.use(VueRouter);

const Home = () => import('../views/home/Home.vue');

const route = [
  {path:'/', redirect:'/home'},
  {path:'/home/id', name:"home", component:Home}
];

const router = new VueRouter({
	mode:'history',
  base:process.env.BASE_URL,
  route
})

// 路由拦截
router.beforeEach((to,from,next)=>{
	console.log(to.path);
  next();
})

export default router;
```

### $route 和 $router 的区别

**$route 对象表示当前的路由信息，包含了当前 URL 解析得到的信息。包含当前的路径，参数，query 对象等。**（用于查询路由信息）

- $route.path 字符串，对应当前路由的路径，总是解析为绝对路径，如"/foo/bar"。
- $route.params 一个 key/value 对象，包含了 动态片段 和 全匹配片段， 如果没有路由参数，就是一个空对象。
- $route.query 一个 key/value 对象，表示 URL 查询参数
- $route.hash 当前路由的 hash 值 (不带#) ，如果没有 hash 值，则为空字符串。锚点\*
- $route.fullPath 完成解析后的 URL，包含查询参数和 hash 的完整路径。
- $route.matched 数组，包含当前匹配的路径中所包含的所有片段所对应的配置参数对象。
- $route.name 当前路径名字
- $route.meta 路由元信息

  **$router 对象是全局路由的实例，是 router 构造方法的实例 **(用于操作路由信息)

- $router.push()	`$router.push()`
- $router.go()  页面路由跳转  前进或后退  `$router.go(-1)`
- $router.replace() (一般用于做 404 页面)

**路由钩子**

- **组件内的守卫(组件内钩子)**

  - beforeRouteEnter
  - beforeRouteUpdate
  - beforeRouteLeave

  ```js
  const Foo = {
    template: `...`,
    beforeRouteEnter: (to, from, next)=> {
      // 这个钩子的执行还在 beforeCreate 之前
      // 在渲染该组件的对应路由被 confirm 前调用
      // 不！能！获取组件实例 `this`
      // 因为当钩子执行前，组件实例还没被创建
    },
    beforeRouteUpdate: (to, from, next)=> {
      // 在当前路由改变，但是该组件被复用时调用
      // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
      // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
      // 可以访问组件实例 `this`
    },
    beforeRouteLeave: (to, from, next)=> {
      // 导航离开该组件的对应路由时调用
      // 可以访问组件实例 `this`
    }
  ```

- **全局导航钩子函数**

  **router.beforeEach（全局前置守卫）**
  **router.afterEach（全局后置守卫）**

  ```
  // 前置守卫 还没有出 from 的路由
    router.beforeEach((to, from, next) => {
  to: 即将要进入的目标 路由对象
  from: 当前导航正要离开的路由
  next: 一定要调用这个方法 不然会停在一个白板页面的
  	next() 允许跳转
  	next(false) 不允许跳转
  	next('url') 跳转到指定url
    })
    // 后置守卫  已经进入到 to 的路由
    router.afterEach((to, from) => {
        to: 到哪去
        form: 从哪来
        next()
    })
  ```

- **路由独享的守卫(路由内钩子)**

  - beforeEnter
  - beforeLeave

  ```js
  const router = new VueRouter({
    routes: [
      {
        path: '/foo',
        component: Foo,
        beforeEnter: (to, from, next) => {
          // ...
        },
        // 离开路由前执行 好像要被废弃了
      beforeLeave: (to, from, next) {
  	    next()
      },
      }
    ]
  ```

**history 和 hash 的区别**

hash 后面有个#锚点

history 更加美观

但是 history 刷新时可能会出现 404 问题，在部署时可以通过 nginx 的 try file 解决

## 23、vue 的入口文件配置

一般入口文件叫`main.js`

```js
import Vue from 'vue';
import router form './router/index.js';
import store from './store/index.js';

import App from './App.vue'

// 将二次封装的axios请求方法绑定到vue的原型中
import request from './plugins/request.js';
Vue.prototype.$request = request;

// 引入elemet
import './plugins/element.js'

// 引入全局样式
import './assets/css/base.less'

new Vue({
	router,
  store,
  render:h=>h(App)
}).$mounted('#app')
```

## 24、vue.config.js

文件配置

```js
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        assets: '@/assets',
        common: '@/common',
        components: '@/components',
        network: '@/network',
        views: '@/views',
        plugins: '@/plugins',
      },
    },
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://www.codeman.ink/api/',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
};
```

## 25、数组去重

1. foreach indexOf

   ```js
   let arr = [2, 3, 3, 2, 2, 4, 5, 7, 4, 5, 6, 6];
   let arr1 = [];
   arr.forEach((item) => {
     if (arr1.indexOf(item) == -1) {
       arr1.push(item);
     }
   });
   ```

2. Set

   ```js
   let item = [...new Set(arr)];
   ```

3. 利用对象属性不重复的特性

4. 双 for 循环和 splice

   ```js
   var ary = [1, 3, 2, 3, 2, 3, 1, 2, 2, 3, 1, 1, 1];

   for (var i = 0; i < ary.length; i++) {
     //console.log(ary[i]);返回数组中的每一项
     var cur = ary[i];
     for (var j = i + 1; j < ary.length; j++) {
       if (cur === ary[j]) {
         ary.splice(j, 1);
         j--;
       }
     }
   }
   console.log(ary);
   ```

## 26、强缓存、协商缓存

缓存分为两种：强缓存和协商缓存，根据响应的 header 内容来决定

|          | 获取资源形式 | 状态码              | 发送请求到服务器                 |
| -------- | ------------ | ------------------- | :------------------------------- |
| 强缓存   | 从缓存取     | 200（from cache）   | 否，直接从缓存取                 |
| 协商缓存 | 从缓存取     | 304（not modified） | 是，通过服务器来告知缓存是否可用 |

强缓存相关字段有 expires，cache-control。如果 cache-control 与 expires 同时存在的话，cache-control 的优先级高于 expires。

协商缓存相关字段有 Last-Modified/If-Modified-Since，Etag/If-None-Match。

etag 是毫秒级的， last-modified 是秒级的，etag 优先级更高

**由强缓存和协商缓存都是通过服务器进行设置**

## 27、h5 新增元素

首先 html5 为了更好的实践 web 语义化，增加了 header，footer，nav,aside,section 等语义化标签，在表单方面，为了增强表单，为 input 增加了 color, emial, data, range 等类型，在存储方面，提供了 sessionStorage，localStorage, 和离线存储，通过这些存储方式方便数据在客户端的存储和获取，在多媒体方面规定了音频和视频元素 audio 和 vedio，另外还有地理定位，canvas 画布，拖放，多线程编程的 web worker 和 websocket 协议

## 28、C3 新增属性

border-radius, box-shadow, background-size, transform(translate,rotate, scale...), animation @keyframes, transition...

## 29、Ajax

ajax 是一种在无需重新加载整个网页的情况下，能够更新部分网页的技术。

**ajax 返回的状态**

- 0 － （未初始化）还没有调用 send()方法
- 1 － （载入）已调用 send()方法，正在发送请求
- 2 － （载入完成）send()方法执行完成，已经接收到全部响应内容
- 3 － （交互）正在解析响应内容
- 4 － （完成）响应内容解析完成，可以在客户端调用了

**实现一个 Ajax**

AJAX 创建异步对象 XMLHttpRequest

操作 XMLHttpRequest 对象

1. 设置请求参数（请求方式，请求页面的相对路径，是否异步）
2. 设置回调函数，一个处理服务器响应的函数，使用 onreadystatechange ，类似函数指针
3. 获取异步对象的 readyState 属性：该属性存有服务器响应的状态信息。每当 readyState 改变时，onreadystatechange 函数就会被执行。
4. 判断响应报文的状态，若为 200 说明服务器正常运行并返回响应数据。
5. 读取响应数据，可以通过 responseText 属性来取回由服务器返回的数据。

```js
var xhr = new XMLHttpRequest();
// 第三个参数设置是否异步
xhr.open('get', 'aabb.php', true);
xhr.send(null);
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4) {
    if (xhr.status == 200) {
      console.log(xhr.responseText);
    }
  }
};
```

## 30、继承

**js 在 new 的过程中发生了什么？**

1. 创建一个新对象 this
2. 执行构造函数
3. 返回 this

```js
function Person(name) {
  // this = {}
  this.name = name;
  this.say = function () {
    console.log('say something');
  };
  // return this;
}
```

**继承方式**

- 原型链继承
- 构造函数继承
- 组合式继承（原型链和构造函数结合）（常用）
- 原型式继承
- 寄生式继承
- 寄生式组合继承（常用）

```js
// 原型链继承
// 缺点，引用属性在其中一个实例修改，其它实例也会受影响
function Person() {}

Person.prototype.eat = function () {
  console.log('eat');
};

Person.prototype.car = {
  first: 'Benz',
  second: 'Mazda',
};

Person.prototype.age = 30;

function Child() {}

Child.prototype = new Person();
Child.prototype.constructor = Child;

let child = new Child();
child.eat();
console.log(child.age);

let child1 = new Child();
child1.age = 20;
console.log(child.age, child1.age);
child1.car.second = 'Toyata';
console.log(child.car, child1.car);
```

```js
// 构造函数继承
// 缺点，不能继承父类原型上的属性
function Person(name, car) {
  this.name = name;
  this.car = car;
}

Person.prototype.age = 30;

function Child(name, car) {
  Person.apply(this, arguments);
}

let child = new Child('mike', {
  first: 'Benz',
  second: 'Mazda',
});

let child1 = new Child('john', {
  first: 'toyota',
});

console.log(child, child1);
console.log(child.age); // undefined
```

```js
// 组合继承
// 缺点：调用了两次父类（性能较差）
function Person(name, car) {
  this.name = name;
  this.car = car;
}

Person.prototype.age = 30;

function Child(name, car) {
  Person.apply(this, arguments);
}

Child.prototype = new Person();
Child.prototype.constructor = Child;

let child = new Child('mike', {
  first: 'Benz',
  second: 'Mazda',
});

let child1 = new Child('john', {
  first: 'toyota',
});

console.log(child, child1);
console.log(child.age); // 30
```

```js
// es6 class extends继承
class Person {
  constructor(name, car) {
    this.name = name;
    this.car = car;
  }
  say() {
    console.log('say something');
  }
}

class Child extends Person {
  constructor(name, car) {
    super(name, car);
  }
}

let child = new Child('mike', {
  first: 'benz',
  second: 'mazda',
});

child.say();
console.log(child.name, child.car);
```

```js
// 寄生式组合继承
// 实现继承的核心函数
function inheritPrototype(subType, superType) {
  function F() {}
  //F()的原型指向的是superType
  F.prototype = superType.prototype;
  //subType的原型指向的是F()
  subType.prototype = new F();
  // 重新将构造函数指向自己，修正构造函数
  subType.prototype.constructor = subType;
}
// 设置父类
function SuperType(name) {
  this.name = name;
  this.colors = ['red', 'blue', 'green'];
  SuperType.prototype.sayName = function () {
    console.log(this.name);
  };
}
// 设置子类
function SubType(name, age) {
  //构造函数式继承--子类构造函数中执行父类构造函数
  SuperType.call(this, name);
  this.age = age;
}
// 核心：因为是对父类原型的复制，所以不包含父类的构造函数，也就不会调用两次父类的构造函数造成浪费
inheritPrototype(SubType, SuperType);
// 添加子类私有方法
SubType.prototype.sayAge = function () {
  console.log(this.age);
};
var instance = new SubType('Taec', 18);
console.dir(instance);
```

![](https://upload-images.jianshu.io/upload_images/21468397-13ec3cc87381b3e8.png?imageMogr2/auto-orient/strip|imageView2/2/w/759/format/webp)

## 31、vue 常用修饰符

.sync、.stop、.once、.prevent、.enter、.space、.trim、.number、.lazy...

vue3 已经没有.sync 了，可以使用`v-model="xxx"` + `ref(props.xxx)`取代

.lazy 只在离开输入框时触发

## 32、js 异步编程模型

常用的几种异步编程模型，包括回调函数、事件监听、观察者模式（消息订阅/发布）、promise 模式。

**观察者模式和发布订阅的区别:**

发布订阅是有个中间层的, 绑定和触发事件都需要通过调用中间层的方法.

观察者模式没有中间层, 直接调用方法绑定触发

二者实现的思路是相同的, 只是发布订阅需要 new 一个实例, 再通过实例调用方法. 观察者模式是直接将方法放入要用的文件中直接调用.

## 33、ES6 的循环方式

### 1、forEach

forEach 和 for 的区别

1. for 循环可以使用 break 跳出循环，但 forEach 不能（可以通过 try..catch 强行跳出）。
2. for 循环可以控制循环起点(i 初始化的数字决定循环的起点)，forEach 只能默认从索引 0 开始。
3. for 循环过程中支持修改索引（修改 i）,但 forEach 做不到（底层控制 index 自增，我们无法左右它）

1、for…of：是 interator 的语法糖，它能够遍历出 interator 所有可迭代的所有数据类型和数据结构，Set、Map、字符串、数组，但不能遍历对象

2、forEach：只能遍历数组使用，不能用作其他也能迭代对象

3、for…in：是唯一一个可以迭代对象的一种语法结构，当然，也可以迭代数组、字符串。

### 2、map

- 和 foreach 一样不能中止循环
- 可 return 值
- 和 forEach 的区别：forEach()方法不会返回执行结果，而是 undefined。也就是说，forEach()会修改原来的数组。而 map()方法会得到一个新的数组并返回。

```javascript
// map 方法---不是通过下标的修改方式
const mapArray1 = [10, 20, 30, 40];
const mapRet = mapArray1.map((item) => item + 1);
console.log('map的结果--有返回值', mapRet);
console.log('map的原有数组--无变化', mapArray1);

// map方法---通过修改下标的方式
const mapArray2 = [20, 40, 60, 80];
const mapRet2 = mapArray2.map((item, index) => {
  mapArray2[index] = item + 1;
  return item;
});
console.log('map的mapArray2结果', mapRet2);
console.log('map的mapArray2原有数组', mapArray2);
```

<img src="https://www.hualigs.cn/image/61541d8b95622.jpg" alt="image-20210906111348803" style="zoom:50%;" />

### 3、every

一般用于找是否存在不符合条件的数，检测导存在后就返回 false

1、返回值的情况：如果是空数组.every，则一律返回 true；如果不是空数组，只要回调函数返回的值当中有一个是 false，则返回值是 false，否则返回值为 true；
2、原数组是否改变：如果是通过值类型的方式修改，则不会 改变，如果通过下标的方式或者通过引用类型的方式修改，则原数组可能会发生变化；注意返回值的情况，如果返回值为 false，则会中断整个循环，导致后续的数组项不会继续执行。
3、遍历中断条件：只要回调函数返回的值为 false，则会立即中断；

```javascript
// every 方法--- 用法1 如果所有都满足条件就返回true 否则返回false
const everyArray1 = [10, 20, 30, 40];
const everyRet = everyArray1.every((item) => item > 21);
console.log('every的everyArray1结果', everyRet);
console.log('every的everyArray1原有数组', everyArray1);

// every 方法--- 用法2  通过修改下标的方式修改原有数组
const everyArray2 = [20, 40, 60, 80];
const everyRet1 = everyArray2.every((item, index) => (everyArray2[index] = item + 1));
console.log('every的everyArray2结果', everyRet1);
console.log('every的everyArray2原有数组', everyArray2);

// every 方法--- 用法3  回调函数如果返回false 则循环会立刻终止
const everyArray3 = [120, 140, 160, 180];
const everyRet3 = everyArray3.every((item, index) => {
  console.log(`【前】index是${index}`);
  if (index === 2) {
    return false;
  }
  console.log(`【后】index是${index}`);
  return true;
});
console.log('every的everyArray3结果', everyRet3);
console.log('every的everyArray3原有数组', everyArray3);
```

<img src="https://www.hualigs.cn/image/61541d764b50c.jpg" alt="image-20210906112143768" style="zoom:50%;" />

<img src="https://www.hualigs.cn/image/61541d5d51716.jpg" alt="image-20210906112245960" style="zoom:50%;" />

### 4、some

一般用于寻找某个条件的 item，找到后就返回 true

1、返回值的情况：如果使用空数组.some，则一律返回 false;如果不是空数组，只要回调函数返回的值当中有一个是 true，则返回值是 true，否则返回值为 false；
2、原数组是否改变：如果是通过值类型的方式修改，则不会改变，如果通过下标的方式或者通过引用类型的方式修改，则原数组可能会发生变化；注意返回值的情况，如果返回值为 true，则会中断整个循环，导致后续的数组项不会继续执行。
3、遍历中断条件：只要回调函数返回的值为 true，则会立即中断；

```javascript
// some 方法--- 用法1 只要回调函数返回了true 则返回true 否则返回false
const someArray1 = [10, 20, 30, 40];
const someRet = someArray1.some((item) => item > 21);
console.log('some的someArray1结果', someRet);
console.log('some的someArray1原有数组', someArray1);

// some 方法--- 用法2  通过修改下标的方式修改原有数组
const someArray2 = [20, 40, 60, 80];
const someRet1 = someArray2.some((item, index) => (someArray2[index] = item + 1));
console.log('some的someArray2结果', someRet1);
console.log('some的someArray2原有数组', someArray2);

// some 方法--- 用法3  回调函数如果返回false 则循环会立刻终止
const someArray3 = [120, 140, 160, 180];
const someRet3 = someArray3.some((item, index) => {
  console.log(`【前】index是${index}`);
  if (index === 2) {
    return false;
  }
  console.log(`【后】index是${index}`);
  return true;
});
console.log('some的someArray3结果', someRet3);
console.log('some的someArray3原有数组', someArray3);
```

<img src="https://www.hualigs.cn/image/61541d4574d96.jpg" alt="image-20210906112352373" style="zoom:50%;" />

### reduce filter find

1、**reduce** 返回的是累计器累计完后的单个值，原数组不会发生变化；

```javascript
// reduce 方法
const reduceArray1 = [10, 20, 30, 40];
const firstVal = 100;
const reduceFunc = (lastReturn, item) => lastReturn + item;
const reduceRet = reduceArray1.reduce(reduceFunc, firstVal);
console.log('reduce的结果---有返回值', reduceRet);
console.log('reduce的原有数组--无变化', reduceArray1);
```

![image-20210906150349658](https://www.hualigs.cn/image/61541d29cddaf.jpg)

2、**filter** 返回的是一个新数组，数组里的内容是回调函数运行后为 true 的各项值

```javascript
// filter 方法
const filterArray1 = [10, 20, 30, 40];
const filterFunc = (item) => item > 22;
const filterRet = filterArray1.filter(filterFunc);
console.log('filter的结果---有返回值', filterRet);
console.log('filter的原有数组--无变化', filterArray1);
```

![image-20210906150414469](https://www.hualigs.cn/image/61541d139f005.jpg)

3、**find** 顾名思义，查找
返回第一个符合条件的 item 本身, 找不到返回 undefined

```js
var arr = [1, 2, 3, 4, 5, 6];
var res = arr.find((item) => item > 3);
console, log(res);
```

![image-20210906150524272](https://www.hualigs.cn/image/61541cf5c4739.jpg)

## 34、盒子垂直水平居中

1. flex 弹性盒子 (justify-content:center; align-items:center;)
2. 定位+translate (top:50%; left:50%; transform:translate(-50%, -50%))
3. 定位+margin(top:0; bottom:0; left:0; right:0; margin:auto)
4. calc+视口单位+margin/定位 calc(50vw - 100px) calc(50vh - 100px) （需要知道宽高）
5. 视口单位+transform 不需要知道宽高

## 35、js 同步和异步

**同步模式** 就是后一个任务等待前一个任务结束，然后再执行，程序的执行顺序与任务的排列顺序是一致的、同步的。

**异步模式** 则完全不同，每一个任务有一个或多个回调函数（callback），前一个任务结束后，不是执行后一个任务，而是执行回调函数，后一个任务则是不等前一个任务结束就执行，所以程序的执行顺序与任务的排列顺序是不一致的、异步的。

异步运行机制如下：

（1）所有同步任务都在主线程上执行，形成一个执行栈（execution context stack）。

（2）主线程之外，还存在一个"任务队列"（task queue）。只要异步任务有了运行结果，就在"任务队列"之中放置一个事件。（任务队列中有微任务先执行微任务，执行完所有微任务才执行宏任务）

（3）一旦"执行栈"中的所有同步任务执行完毕，系统就会读取"任务队列"，看看里面有哪些事件。那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行。

（4）主线程不断重复上面的第三步。

## 36、中断请求

**ajax**
`xhr.abort()`

```js
let xhr = new XMLHttpRequest();
// 开启异步，以执行到下面的中断命令
xhr.open('get', 'http://www.codeman.ink/api/playlist/hot', true);
xhr.send();
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    // console.log(xhr.response);
    document.write(xhr.response);
  }
};
// 中断请求
xhr.abort();
```

**axios**
需要在请求中设置`cancelToken`

```js
let that = this;
// 发送请求
this.$request
  .get('/playlist/hot', {
    cancelToken: new axios.CancelToken(function executor(c) {
      that.cancelResquestFunc = c;
    }),
  })
  .then((res) => {
    console.log(res);
  });
// 取消上面的请求
this.cancelResquestFunc('Cancel request');
```

## 37、src 和 href 区别

**它们之间的主要区别可以用这样一句话来概括：src 用于替代这个元素，而 href 用于建立这个标签与外部资源之间的关系。**

- 引用 css 文件时 ( link )：`href="cssfile.css"`
- 引用 js 文件时 ( script )：`src="myscript.js"`
- 引用图片 ( img )：`src="mypic.jpg"`
- 网站链接 ( a )：`href="http://www.webpage.com"`

## 38、定义对象和对象的方式

### 对象

- Object.create(null)

  > Object.create(proto) 里面放的是原型对象

- new Object()

- 直接赋值 {}

### 数组

- new Array(2) // [empty × 2]

- new Array('aaa',false,123) // ['aaa', false, 123]

- new Array() // []

- 直接赋值 [] // 和 new Array 的区别：new Array()可以直接设置数组的长度

## 39、静态方法和动态(实例)方法

1. 静态方法：在构造函数本身上定义的方法，只能通过构造函数本身调用，new 出来的对象不能够调用。
2. 也叫做实例方法，它是通过 prototype 原型对象添加的，所有的实例对象都能够继承调用。通过先定义一个引用变量，指向构造函数定义的新对象，数对象中的属性 prototype 可以形成一个指针，指向一个方法。

```js
function Animal() {
  // 设置实例方法
  this.run = function () {
    console.log('run');
  };
}

// 设置静态方法
Animal.eat = function () {
  console.log('eat');
};

// 设置实例方法
Animal.prototype.sleep = function () {
  console.log('sleep');
};

Animal.eat();

function Person() {
  Animal.apply(this, arguments);
}

Person.prototype = new Animal();
Person.prototype.constructor = Person;

let p = new Person();
// 报错 说明静态方法是不可通过 new继承的
// p.eat()
// sleep 说明实例方法是可继承的，但需要通过实例调用, 不能通过构造函数直接调用
p.sleep();
```

## 40、递归

**递归求和**

```js
function add(start, end) {
  if (start < end) {
    return start + add(++start, end);
  } else if (start == end) {
    return start;
  } else {
    return NaN;
  }
}
```

## 41、require 和 import 的区别

node 编程中最重要的思想就是模块化，`import`和`require`都是被模块化所使用。

##### 遵循规范

- `require` 是 AMD 规范引入方式
- `import`是 es6 的一个语法标准，如果要兼容浏览器的话必须转化成 es5 的语法

##### 调用时间

- require 是运行时调用，所以 require 理论上可以运用在代码的任何地方
- import 是编译时调用，所以必须放在文件开头

require / exports ：
遵循 CommonJS/AMD，只能在运行时确定模块的依赖关系及输入/输出的变量，无法进行静态优化。
用法只有以下三种简单的写法：

```js
const fs = require('fs');
exports.fs = fs;
module.exports = fs;
```

import / export：
遵循 ES6 规范，支持编译时静态分析，便于 JS 引入宏和类型检验。动态绑定。
写法就比较多种多样：

```js
import fs from 'fs'
import {default as fs} from 'fs'
import * as fs from 'fs'
import {readFile} from 'fs'
import {readFile as read} from 'fs'
import fs, {readFile} from 'fs'

export default fs
export const fs
export function readFile
export {readFile, read}
export * from 'fs'
```

1. 通过 require 引入基础数据类型时，属于复制该变量。
2. 通过 require 引入复杂数据类型时，数据浅拷贝该对象。
3. 出现模块之间的循环引用时，会输出已经执行的模块，而未执行的模块不输出（比较复杂）
4. CommonJS 模块默认 export 的是一个对象，即使导出的是基础数据类型

| 加载方式   | 规范         | 命令    | 特点                                                                                                                               |
| ---------- | ------------ | ------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| 运行时加载 | CommonJS/AMD | require | 社区方案，提供了服务器/浏览器的模块加载方案。非语言层面的标准。只能在运行时确定模块的依赖关系及输入/输出的变量，无法进行静态优化。 |
| 编译时加载 | ESMAScript6+ | import  | 语言规格层面支持模块功能。支持编译时静态分析，便于 JS 引入宏和类型检验。动态绑定                                                   |

## 42、vue 自定义指令

自定义 DOM 操作，将 dom 操作封装了起来，可重复使用，也避免了在 html 中写逻辑的情况

```html
<ul
  v-select="{
        currentIndex,
        className: 'li_item',
        activeClass: 'active',
      }"
>
  <!-- 自定义指令 -->
  <li class="li_item" @click="currentIndex = 0">1</li>
  <li class="li_item" @click="currentIndex = 1">2</li>
  <li class="li_item" @click="currentIndex = 2">3</li>
</ul>
```

```js
import select from '@/directives/fakeIf.js';

export default {
  data() {
    return {
      currentIndex: 0,
    };
  },
  directives: {
    select,
  },
};
```

```js
// select.js
export default {
  bind(el, bind, vnode) {
    // console.log(el, bind, vnode);
    let value = bind.value;
    let children = el.getElementsByClassName(value.className);
    children[value.currentIndex].className += ' ' + value.activeClass;
  },
  update(el, bind, vnode) {
    // console.log('update');
    let value = bind.value;
    let oldValue = bind.oldValue;
    let children = el.getElementsByClassName(value.className);
    children[oldValue.currentIndex].className = value.className;
    children[value.currentIndex].className += ' ' + value.activeClass;
  },
};
```

**vue2 自定义指令生命周期**

- bind：初始化设置。指令第一次绑定到元素上时执行
- inserted：绑定的元素加入到父节点时触发。不考虑有没有被渲染
- update： 在 VNode 更新时执行(VNode：虚拟 dom 节点)
- componentUpdated：指令所在组件的 VNode 及其子 VNode 全部更新后调用。
- unbind：只调用一次，指令与元素解绑时调用

**vue3 的指令生命周期和组件生命周期基本一致（没有 beforeCreate）**

## 43. iframe

iframe 可以用作脚本插入到其它的页面中，比较常见的方法就是填写 src，然后直接连接到对应的页面中，父子页面的通信通过 postMessage。

但在 chrome 等浏览器的无痕模式下，iframe 作为第三方页面，不能访问 localstorage 和 sessionStorage 以及 cookie。所以还有一种方法就是不填写 src，直接将第三方页面需要的资源和页面（一般直接把打包好的 index.html 插入就行,里面的资源需要添加域名）请求并插入到对应的 iframe 标签下。父子页面的通信也可以通过`window.frames[类名].contentWindow.对应的方法`

## 44. vue2 和 vue3 区别

vue3 是函数式编程，vue2 是面向对象编程，就是填写对应的配置项，再 new 一个实例，setup 把单独的功能模块全部都独立起来了，最后再又 setup 统一暴露给模板使用，还可以将功能模块抽离成 hook，提高维护性和复用性。

##### 1：vue2 和 vue3 双向数据绑定原理发生了改变

`vue2`的双向数据绑定是利用`ES5`的一个 API`Object.definePropert()` 对数据进行劫持，结合发布订阅模式的方式来实现的。
`vue3`中使用了`ES6`的`Proxy` API 对数据代理。
相比`vue2.x`，使用`proxy`的优势如下：

- `defineProperty`只能监听某个属性，不能对全对象监听
- 可以省去`for in`，闭包等内容来提升效率(直接绑定整个对象即可)
- 可以监听数组，不用再去单独的对数组做特异性操作`vue3.x`可以检测到数组内部数据的变化。

```js
// 实现双向绑定
let input = document.querySelector('input');
let h1 = document.querySelector('h1');
let obj = {};

// vue2
// Object.defineProperty(obj, "value", {
//   get () {
//     return val
//   },
//   set (newVal) {
//     val = newVal
//     h1.innerHTML = newVal
//     input.value = newVal
//   }
// })

// vue3
const observer = new Proxy(obj, {
  get(target, key) {
    console.log(target, key);
    // reflect的作用是当同时存在多个对同一对象的同一属性进行操作时不会报错，而是以第一个为准，reflect执行成功返回true，反之返回false
    return Reflect.get(target, key);
  },
  set(target, key, value) {
    console.log(target, key, value);
    h1.innerHTML = value;
    input.value = value;
    return Reflect.set(target, key, value);
  },
  deleteProperty(target, key) {
    return Reflect.deleteProperty(target, key);
  },
});

input.addEventListener('input', (e) => {
  observer.value = input.value;
});
```

##### 2: vue2 和 vue3 定义数据变量和方法的改变

在`vue2`中定义数据变量是`data(){}`，创建的方法要在`methods:{}`中。
而在`vue3`中直接在`setup(){}`中，在这里面定义的变量和方法因为最终要在模板中使用，所以最后都得 `return`。
如：

```javascript
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    //使用ref，说明这个数组就是全局在面板中可以使用了
    const girls = ref(['美女1','美女2','美女3'])
    const selectGirl = ref('2')
    //设置一个函数
    const selectGirlFun = (index: number) => {
      //改变selectGirl的值要加value
      //要得到值要加value ，这些都因为使用了ref函数
      selectGirl.value = girls.value[index]
    }
    //在标签中使用的变量要使用return
    //为什么要使用return，因为有的不需要在标签中使用的就不用return
   return{
      girls,
      selectGirl,
      selectGirlFun
    }
  },
});
</script>
```

##### 3: vue2 和 vue3 生命周期钩子函数的不同

- `vue2`中的生命周期
  - `beforeCreate` 组件创建之前
  - `created` 组件创建之后
  - `beforeMount` 组价挂载到页面之前执行
  - `mounted` 组件挂载到页面之后执行
  - `beforeUpdate` 组件更新之前
  - `updated` 组件更新之后
- `vue3`中的生命周期
  - `setup` 开始创建组件
  - `onBeforeMount` 组价挂载到页面之前执行
  - `onMounted` 组件挂载到页面之后执行
  - `onBeforeUpdate` 组件更新之前
  - `onUpdated` 组件更新之后
    而且`Vue3.x` 生命周期在调用前需要先进行引入。
    如：

```javascript
import {
 reactive,
 toRefs,
 onMounted,
 onBeforeMount,
 onBeforeUpdate,
 onUpdated,
} from "vue";w n
```

- 来一个总的生命周期对比，这样更便于记忆

```javascript
Vue2--------------vue3
beforeCreate  -> setup()
created       -> setup()
beforeMount   -> onBeforeMount
mounted       -> onMounted
beforeUpdate  -> onBeforeUpdate
updated       -> onUpdated
beforeDestroy -> onBeforeUnmount
destroyed     -> onUnmounted
activated     -> onActivated
deactivated   -> onDeactivated
errorCaptured -> onErrorCaptured
```

除了这些钩子函数外，`Vue3.x`还增加了`onRenderTracked` 和`onRenderTriggered`函数。

##### 3: vue3 中新加入了 TypeScript 和 PWA 的支持

##### 4. Vue3 的 template 支持多个根标签，使用了 flagment 代码片段

##### 5. Vue3 中的自定义指令生命周期变化

- created - 元素创建后，但是属性和事件还没有生效时调用。

- beforeMount- 仅调用一次，当指令第一次绑定元素的时候。

- mounted- 元素被插入父元素时调用.

- beforeUpdate: 在元素自己更新之前调用

- Updated - 元素或者子元素更新之后调用.

- beforeUnmount: 元素卸载前调用.

- unmounted -当指令卸载后调用，仅调用一次

## 45、全局对象

node 的全局对象是 global，浏览器是 window

## 46、延迟 script 加载的方式

方法一：`window.onload = function(){}`

方法二：利用`script`元素的`defer` 属性 `defer`属性只对外部脚本文件有效 可以延迟到文档完全被解析和显示之后再执行 如：`<script src="./j.js" defer></script>`

方法三: body 标签中添加 onload 时间，在 onload 的回调中执行 script

## 47、console 的常用方法

- log

- dir

- count

- table

- time / timeEnd

  ```js
  // 获取代码运行时间
  console.time('计时器');
  for (var i = 0; i < 1000; i++) {
    for (var j = 0; j < 1000; j++) {}
  }
  console.timeEnd('计时器');
  ```

- warn

- error

- `%c`标示符可以用各种 CSS 语句来为输出添加样式

  ```js
  console.log('%cMy name is classicemi.', 'color: #fff; background: #f40; font-size: 24px;');
  ```

## 48、commonjs 和 es6 的区别

**相同点**：都是 js 具有模块化功能的规范。
**区别：**
1、CommonJs 是在代码运行时加载模块，而 ES6 是在编译时进行导出模块；(加载时机不同)
2、CommonJS 是值的拷贝，而 ES6 是输出值的引用；(加载方式不同)
3、CommonJS 是模块的导出，而 ES6 可以导出单个函数；
4、导出方式：
`	CommonJS：module.exports ={} `
`ES6: export/export default `

## 49、websocket

websocket 和 http 一样属于应用层，也是走的 tcp 协议, 是 h5 提供的一种全双工的通讯技术

websocket 的连接建立过程:
1、客户端发送 GET 请求， upgrade

```
Upgrade: websocket
Connection: Upgrade
```

2、服务器给客户端返回交换协议` switching protocol`
3、就进行了 webSocket 的通信了

**使用原生 websocket 建立客服端与服务器的连接**

```js
// 客户端
// 打开一个 web socket，设定websocket服务器地址和端口
var ws = new WebSocket('ws://127.0.0.1:3000');

//开启连接open后客户端处理方法
ws.onopen = function () {
  // Web Socket 已连接上，在页面中显示消息
  document.getElementById('res').innerHTML = '当前客户端已经连接到websocket服务器';
};
// 点击按钮时给websocket服务器端发送消息
$('#btn').click(function () {
  var value = $('#demo').val();
  ws.send(value);
});
// 接收消息后客户端处理方法
ws.onmessage = function (evt) {
  console.log(evt.data);
  $('#res').text(evt.data);
};

// 关闭websocket
ws.onclose = function () {
  // 关闭 websocket
  alert('连接已关闭...');
};
```

```js
// 服务端
// websocket.js
const ws = require('nodejs-websocket');

const createServer = () => {
  let server = ws.createServer((connection) => {
    connection.on('text', function (result) {
      console.log('发送消息', result);
    });
    connection.on('connect', function (code) {
      console.log('开启连接', code);
    });
    connection.on('close', function (code) {
      console.log('关闭连接', code);
    });
    connection.on('error', function (code) {
      console.log('异常关闭', code);
    });
  });
  return server;
};

module.exports = createServer();

// index.js
// 导入nodejs-websocket模块
const io = require('nodejs-websocket');
// 执行websocket处理连接方法
io.createServer((connection) => {
  console.log('new connection...');
  //处理客户端发送过来的消息
  connection.on('text', function (data) {
    console.log('接收到的客户端消息:' + data);
    connection.sendText('服务器端返回数据:' + data);

    //监听关闭
    connection.on('close', function (code, reason) {
      console.log('Connection closed');
    });
    //监听异常
    connection.on('error', () => {
      console.log('服务异常关闭...');
    });
  });
}).listen(3000);
```

## 50、webrtc

webrtc 的信令层面使用的是 tcp 协议，音视频传输使用了 udp 协议，应用层中使用 RTP 和 RTCP 协议

建立 webrtc 连接的核心是：交换双方的 sdp 和 ice-candidate。

sdp: 描述会话的协议，用于会话实体之间的媒体协商

ice-candidate: webrtc 远程通信时使用的协议、IP 地址和端口

**建立 webrtc 的基本步骤**

1. 使用 RTCPeerConnection 创建一个 pc 实例

2. 使用 navigator.mediaDevices.getUserMedia({audio:true, video:true})

3. 将获取到的 mediaStream 绑定本地媒体数据到 pc 对象上

   ```js
   mediaStream.getTracks().forEach((track) => {
     pc.addTrack(track, mediaStream);
   });
   ```

4. 通过 pc.createOffer()创建 offer 并绑定到本地的 sdp 中，再将 sdp 发送给对方

   ```js
   pc.setLocalDescription(offer);
   ```

5. 对方接收到 offer 后，通过`pc.createAnswer()`创建 answer 并发送此 sdp，再绑定自己的 sdp 和接受到的 sdp

6. 绑定本地 sdp 后触发 onicecandidate，再将此事件的 candidate 发送给对方

7. 对方接受到 candidate 后，通过`pc.addIceCandidate(candidate)`绑定 candidate，完成 webrtc 连接

**代码大致实现**

```js
// 建立音视频通话
const pcOption = {
  iceServers: [
    { urls: 'stun:stun.xten.com' },
    { urls: 'stun:stun.voipbuster.com' },
  ]
}
const pc = new RTCPeerConnection(pcOption)

// 监听candidate, 在setLocalDescription后触发，一定要注意顺序
pc.onicecandidate = function(e){
  let candidate = e.candidate
  // 将candidate通过websocket发送给对方
  socket.emit(...)
}

// 监听对方的媒体track
pc.ontrack = function(e) {
		remoteVideo.srcObject = e.streams[0]
}

// 获取媒体流
async getLocalMediaStream(){
   mediaStream = await navigator.mediaDevices.getUserMedia({audio:true,video:true})
}

getLocalMediaStream().then(()=>{
	// 获取本地的sdp（offer） （如果是接收方就createAnswer）
  const offer = await pc.createOffer()
  // 绑定本地的sdp
  await pc.setLocalDescription(offer)
  // 将本地的sdp发送给对方
  socket.emit(...)
})

// 接收到sdp
socket.on(..., (offer)=>{
  pc.setRemoteDescription(offer)
})

// 接收到candidate
socket.on(..., (candidate)=>{
	pc.addIceCandidate(candidate)
})
```

## 51、跨页面通信

- localStorage + onstorage event

- Broadcast Channel

  ```js
  const bc = new BroadcastChannel('test');
  bc.onmessage = function (e) {
    console.log(e.data);
  };
  bc.postMessage('123');
  ```

- cookie + setInterval

**不同源的话可以使用 iframe 的方案**

iframe + postmessage

## 52、nginx 基础

- nginx 在 ubuntu 下的配置文件目录为/etc/nginx/sites-enabled

- 配置文件的后缀为.conf，直接使用 vim 进行编辑

- 修改完成后需要重载 nginx 服务

  ```
  nginx -s reload
  ```

- 配置文件如下：

  ```nginx
  server {
  		// 监听的端口号
      listen 2022;
  		// 打包文件地址
      root /home/dnmp/wwwroot/forum_raduation_project/dist;
  		// 默认打开的页面
      location / {
              try_files $uri $uri/ /index.html last;
              index index.html;
      }
  		// 代理地址
      location /forumApi/ {
              proxy_pass http://localhost:8848/;
      }
      location /cloud_space/ {
              proxy_pass http://localhost:8848/;
      }
  }
  ```

## 53、七层协议

![img](https://upload-images.jianshu.io/upload_images/9368274-49145b21b9b2ec09.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/479/format/webp)

## 54、类数组

**类数组的特点**

- 具有 length 属性
- 不继承于 Array.prototype，不具有数组的方法，类数组的原型是 Object

常见的类数组有方法的参数`arguments`和`dom列表`

**类数组转为数组**

```js
var argArr = Array.prototype.slice.call(arguments);
```

```js
var obj = {
  2: 3,
  3: 4,
  length: 2,
  splice: Array.prototype.splice,
  push: Array.prototype.push,
};

consol.log(obj); // [empty × 2, 2: 3, 3: 4]

obj.push(1);
obj.push(2);
// push的原理是根据length+1进行赋值的
consol.log(obj); // [empty × 2, 1, 2]
```

## 55、排序

数据量少时使用插入排序较快，数据量大时使用快速排序较快，像 es6 的 sort 方法就是结合了这两种算法的，在数组长度不超过 10 时使用的是插入排序，超过 10 则使用快排

```js
let arr = [123, 451, 66, 2, 561, 1, 666, 1, 113, 5125, 1, 56132];

// 定义一个交换数组的方法
Array.prototype.swap = function (originIndex, targetIndex) {
  if (originIndex === targetIndex) return;
  let temp = this[originIndex];
  this[originIndex] = this[targetIndex];
  this[targetIndex] = temp;
};

// 冒泡排序
function bubble(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      if (arr[i] > arr[j]) {
        arr.swap(i, j);
      }
    }
  }
  return arr;
}
// console.log(bubble(arr));

// 选择排序
function selectSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length - 1; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    arr.swap(i, min);
  }
  return arr;
}
console.log(selectSort(arr));

// 插入排序
function insertSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j > 1; j--) {
      if (arr[j - 1] > arr[j]) {
        arr.swap(j - 1, j);
      } else {
        break;
      }
    }
  }
  return arr;
}
console.log(insertSort(arr));

// 希尔排序
// 希尔排序是插入排序的一种
function shellSort(arr) {
  for (let i = Math.floor((arr.length - 1) / 2); i > 0; i = Math.floor(i / 2)) {
    for (let j = i; j < arr.length; j++) {
      while (arr[j - i] > arr[j]) {
        arr.swap(j - i, j);
        j = j - i;
      }
    }
  }
  return arr;
}

// console.log(shellSort(arr));

// 快速排序
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  let left = [];
  let right = [];
  let middle = Math.floor((arr.length - 1) / 2);
  let pivot = arr.splice(middle, 1);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

// console.log(quickSort(arr));
```

## 56、前中后序遍历

前序: 根左右

中序: 左根右

后序: 左右根

要根据两个序确定其它一个序，必须需要中序和其它任意一个序

## 57、web worker

web worker 是浏览器内置的 api，用于单独线程执行 js 代码，避免主线程阻塞，影响页面的响应

web worker 可以单独开启一个线程，通过 message 进行通信，不同页面可以共享一个 web worker(共享 worker 需要通过 port 进行管理)， 也可以创建多个线程

web worker 不能在本地文件中执行，需要挂到服务器上

**注意：**

- web worker 不能访问 window 和 dom
- 可以发送网络请求
- 修改 ui 的话需要通过发送 message 通知主线程修改
- 两边信息的通信都是深拷贝的
- 全局变量是 self

```js
// worker.js
onmessage = function (e) {
  const data = e.data;
  postMessage = data.sort((a, b) => a - b);
};
```

```js
let arr = [4, 3, 1, 9];
let worker = new Worker('worker.js');

sortBtn.onclick = () => {
  worker.postMessage(arr);
};

worker.onmessage = function (e) {
  resultArr.textContent = e.data;
};
```

## 58. 设计模式

常用的设计模式有: 工厂模式, 单例模式, 装饰器模式和观察者模式

**工厂模式**

工厂模式的主要功能就是帮助我们实例化对象, 用工厂帮助我们创建对象,将构造函数和创建者分离, 实现解耦

```js
// 屏幕工厂类
class ScreenFactory {
  createScreen(type) {
    if (type === 'hd') {
      return new HDScreen();
    } else if (type === 'normal') {
      return new NormalScreen();
    } else {
      return null;
    }
  }
}

// 高清屏幕类
class HDScreen {
  say() {
    console.log('I am HDScreen!');
  }
}

// 普通屏幕类
class NormalScreen {
  say() {
    console.log('I am NormalScreen!');
  }
}
// 创建屏幕工厂实例
var screenFactory = new ScreenFactory();

// 用统一接口 createScreen 分别创建高清屏幕和普通屏幕
var hdScreen = screenFactory.createScreen('hd');
var normalScreen = screenFactory.createScreen('normal');

hdScreen.say(); // => 'I am HDScreen!'
normalScreen.say(); // => 'I am NormalScreen!'
```

**单例模式**

只允许拥有一个实例

使用场景: 封装提示框, vuex 中的 store

```js
class LoginForm {
  ...
}

LoginForm.getInstance = (function () {
  // 将实例闭包在内存中, 创建实例需要通过此方法创建
  let instance
  return function () {
    if (!instance) {
      instance = new LoginForm()
    }
    return instance
  }
})()

let obj1 = LoginForm.getInstance()
obj1.show()

let obj2 = LoginForm.getInstance()
obj2.hide()

console.log(obj1 === obj2)
```

**观察者模式**

类似于消息的订阅发布

使用场景: vue 响应式, DOM 事件

```js
let handle = {};
// handle['myevent']  = [];
// handle = {myevent:[fn1,fn2]};
// 绑定事件；
function addEvent(eventName, fn) {
  if (handle[eventName] === undefined) {
    handle[eventName] = [];
  }
  handle[eventName].push(fn);
}
//触发事件
function trigger(eventName, ...arg) {
  if (typeof handle[eventName] === undefined) {
    return;
  }
  handle[eventName].forEach((fn) => {
    fn(...arg);
  });
}
// 移除事件
function removeEvent(eventName, fn) {
  if (!handle[eventName] in handle) {
    return;
  }
  for (let i = 0; i < handle[eventName].length; i++) {
    handle[eventName].splice(i, 1);
    break;
  }
}

function fn1() {
  console.log('fn1');
}
function fn2() {
  console.log('fn2');
}

// 绑定自定义事件
addEvent('myevent', fn1);
addEvent('myevent', fn2);
console.log(handle); // fn1,fn2
removeEvent('myevent', fn1);
// 触发自定义事件；
trigger('myevent'); //fn1
```

**装饰器模式**

在不改变原有代码的基础上,添加新需求

```js
function eat() {
  console.log('eat');
}

const food = function () {
  console.log('noodle');
};
Function.prototype.DecoratorFn = function (fn) {
  this();
  fn();
};
eat.DecoratorFn(food);
```

## 59. provide inject

提供/注入

```vue
<!-- vue2 -->
<script>
// 父组件
provide: {
provideVal:'注入测试',
},

 // 子组件
 inject:['provideVal']   // 然后就和data一样了
</script>

<!-- vue3 -->
<script>
setup(){
   // 父组件
   provide('info', '注入测试')

   // 子组件
   inject('info', '设置默认值') // 第二个参数可以不填
 }
</script>
```

## 60、doctype 和 meta 的作用

首先 doctype 的作用是为了告诉浏览器该文件的类型，让浏览器解析器知道他们应该用哪个规范来解析文档

\*\*meta 标签的组成：meta 标签共有两个属性，它们分别是 http-equiv 属性和 name 属性，不同的属性又有不同的参数值，这些不同的参数值就实现了不同的网页功能。

**meta 标签有下面的作用：**

1.搜索引擎优化（SEO）

2.定义页面使用编码

3.自动刷新并指向新的页面

4.实现网页转换时的动态效果

5.控制页面缓冲

6.网页定级评价

7.控制网页显示的窗口

## 61、tcp、udp 区别

![3a819be58c17309e0cd5ac309290d7f.png](https://img.php.cn/upload/image/183/308/585/1605056951790214.png)

## 62、this 指向

普通函数的 this 是谁调用 this 就指向谁
箭头函数 this 在定义时 this 就已经确定 是指向父级执行上下文的 this 箭头函数本身没有 this
可以通过`apply` `call` `bind` 改变 this 的指向

## 63、CDN

**CDN 原理：**将 CDN 资源缓存到全球各地的 CDN 节点上，当用户对源站发起请求时，就会根据距离、负载来寻找最适合用户的 CDN 节点获取数据，以达到最快的速度，不必到源站进行访问

**好处**

- 提高安全性，当用户访问 CDN 节点时，源站会被隐藏起来，达到防止攻击源站的效果
- 提高网站的访问速度，用户可以从就近的 CDN 节点中获取资源
- 提高了网站的最大承受连接数，因为使用了 CDN 可以减少可以减少源站的带宽压力

vue 项目引入 cdn 步骤

```js
// webpack 中的配置
const cdn = {
  js: [
    '//unpkg.com/vue@2.6.11/dist/vue.min.js',
    '//unpkg.com/vue-router@2.8.1/dist/vue-router.min.js',
    '//unpkg.com/vuex@3.1.2/dist/vuex.min.js',
  ],
};

module.exports = defineConfig({
  configureWebpack: {
    externals: {
      vue: 'Vue',
      'vue-router': 'VueRouter',
      vuex: 'Vuex',
    },
  },
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'index',
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
      cdn: cdn,
    },
  },
});
```

```html
// index.html中的配置 <% for (let i in htmlWebpackPlugin.options.cdn.js) { %>
<script type="text/javascript" src="<%= htmlWebpackPlugin.options.cdn.js[i] %>"></script>
<% } %>
```

## 64、Set 和 Map

### Set 对象

`Set`数据结构类似数组，但所有成员的值**唯一**。

- `add(value)`：添加某个值，返回 Set 结构本身。
- `delete(value)`：删除某个值，返回一个布尔值，表示删除是否成功。
- `has(value)`：返回一个布尔值，表示该值是否为 Set 的成员。
- `clear()`：清除所有成员，没有返回值。

常用于数组去重

```js
let a = new Set([1, 2, 3, 3, 3, 3]);
```

### Map 对象

`Map`结构提供了“**值—值**”的对应，是一种更完善的 Hash 结构实现。

**基础使用**：

```js
let a = new Map();
let b = { name: 'leo' };
a.set(b, 'my name'); // 添加值
a.get(b); // 获取值
a.size; // 获取总数
a.has(b); // 查询是否存在
a.delete(b); // 删除一个值
a.clear(); // 清空所有成员 无返回
```

```js
let a = new Map([
  ['name', 'leo'],
  ['age', 18],
]);

let a1 = [...a.keys()]; // a1 => ["name", "age"]
let a2 = [...a.values()]; // a2 =>  ["leo", 18]
let a3 = [...a.entries()]; // a3 => [['name','leo'], ['age',18]]
```

使用场景

```js
// 网络错误返回的错误码是number类型，而对象的键值key只能是string类型，所以在处理时需要将错误码转换为字符串类型才能访问到对应的数据，而Map就免去了这一步。
let errors = new Map([
  [400, 'InvalidParameter'],
  [404, 'Not found'],
  [500, 'InternalError'],
]);
```

## 65. 对称加密和非对称加密

对称和不对称指的就是**加密和解密用的秘钥是不是同一个**。

常见的对称加密算法有[DES](https://link.zhihu.com/?target=https%3A//zh.wikipedia.org/wiki/%E8%B3%87%E6%96%99%E5%8A%A0%E5%AF%86%E6%A8%99%E6%BA%96)、[3DES](https://link.zhihu.com/?target=https%3A//zh.wikipedia.org/wiki/3DES)、[AES](https://link.zhihu.com/?target=https%3A//zh.wikipedia.org/wiki/%E9%AB%98%E7%BA%A7%E5%8A%A0%E5%AF%86%E6%A0%87%E5%87%86)

常见的非对称加密有 RSA、ECC、DSA

## 66. uniapp 生命周期

1、应用级(App)生命周期钩子函数——App.vue —— 类似于小程序

    onLaunch：应用启动了，每次运行只能执行一次
    onShow：应用再次显示出来，每次显示出来都会调用
    onHide：应用再次隐藏起来，每次隐藏出来都会调用，例如：手机切换到切换到其它应用
    onPageNotFound：当用户访问了一个不存在的页面时调用

2、页面级(Page)生命周期钩子函数——page.vue —— 类似于小程序

```js
onLoad(data)：页面加载完成，每个页面仅执行一次
onShow：页面开始显示，可以多次执行
onReady：页面已就绪，每个页面仅执行一次
onHide：页面隐藏了，可以多次执行
onUnload：页面卸载/销毁了，每个页面仅执行一次
```

1. `onResize` :监听窗口尺寸变化
2. `onPullDownRefresh` :监听用户下拉动作，一般用于下拉刷新
3. `onReachBottom` :页面滚动到底部的事件（不是 scroll-view 滚到底），常用于下拉下一页数据
4. `onTabItemTap` :点击 tabBar 时触发
5. `onShareAppMessage` :用户点击右上角分享
6. `onPageScroll` :监听页面滚动
7. `onNavigationBarButtonTap` :监听原生标题栏按钮点击事件
8. `onBackPress` :监听页面返回
9. `onNavigationBarSearchInputChanged` :监听原生标题栏搜索输入框输入内容变化事件
10. `onNavigationBarSearchInputConfirmed` :监听原生标题栏搜索输入框搜索事件，用户点击软键盘上的“搜索”按钮时触发
11. `onNavigationBarSearchInputClicked` :监听原生标题栏搜索输入框点击事件

3、组件级(Component)生命周期钩子函数——component.vue —— 类似于 Vue.js2.0

    beforeCreate：组件创建之前
    created：组件创建完成
    beforeMount：组件挂载到节点树之前
    mounted：组件挂载到节点树
    beforeUpdate：组件状态更新之前
    updated：组件状态更新完成
    beforeDestroy：组件从节点树上销毁之前
    destroyed：组件从节点树上销毁了

## 67、移动端适配问题

**移动端适配方案：**

1. viewport（scale=1/dpr）
   > 通过  `<meta name="viewport">`  给视口设置固定的宽度，浏览器对页面自动缩放来实现页面的适配效果
   >
   > <meta name="viewport" content="width=540, user-scalable=no, target-densitydpi=device-dpi,minimum-scale=0,maximum-scale=5">
1. rem 基于 html 标签的 font-size (自适应布局 @media)
1. flex
1. vw/vh
1. rpx(小程序, 将屏幕宽度分为 750 份)

## 68、Vue.use

`Vue.use()`传入一个对象或方法，会传入两个参数(Vue, option)

- 如果传入的是对象，会自动执行传入对象里面的 install 函数。
- 如果传入的是方法，则直接执行方法

**使用场景**

- 组件库中全局注册组件

## 69、浏览器线程

- GUI 渲染线程
- JS 引擎线程
- 事件触发线程
- 定时器线程
- 异步 http 请求线程

## 70、for in 和 for of 区别

`for in` 的迭代对象的 key 的

`for of` 适用遍历数/数组对象/[字符串](https://so.csdn.net/so/search?q=%E5%AD%97%E7%AC%A6%E4%B8%B2&spm=1001.2101.3001.7020)/map/set 等拥有迭代器对象（iterator）的集合，但是不能遍历对象，因为没有迭代器对象，但如果想遍历对象的属性，你可以用 for in 循环（这也是它的本职工作）或用内建的 Object.keys()方法

## 71、vue 重置 data 的方法

`Object.assign(this.$data, this.$options.data());`

![蜘蛛侠](./imgs/wallhaven-pkmpmm.jpg)
