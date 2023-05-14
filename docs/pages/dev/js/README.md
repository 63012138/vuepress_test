# js 常用语法

##### 1、保留 n 为小数 .toFixed()

##### 2、join() 数组以指定字符连接成字符串

##### 3、常用的处理字符串的方法：

​ slice:删除字符串中指定位置的字符串

​ substr:在字符串中抽取从 _start_ 下标开始的指定数目的字符

​ substring: 第一个参数是 start 下标，第二个参数是截取个数

​ split():根据指定符号将字符串分割为数组

​ indexOf:返回某个指定的字符串值在字符串中首次出现的位置。

​ charAt:返回指定位置的字符。

​ match:可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。

​ concat:连接字符串，也可以连接数组

​ trim:去除字符串前后的空格

​ charCodeAt(index): 获得字符在 unicode 中的位置,index 是字符在字符串中的位置

##### 4、数组常用方法

- reverse: 不改变原数组
- unshift:unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。
- shift:shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。
- indexOf():方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。
- includes:方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回 false
- concat
- splice
- slice
- sort
- map
- find
- findIndex: 对于空数组，函数是不会执行回调的，会直接返回-1。没有符合条件的返回-1。相比 indexOf，findIndex 使用范围更广，因为可以执行回调函数

##### 5、阻止 focus 定位

阻止 focus 输入框导致直接跳转到输入框的位置

.focus({ preventScroll: true})

##### 6、sort 排序

注：原数组发生改变

升序：

```
var arr3 = [30,10,111,35,1899,50,45];
		arr3.sort(function(a,b){
			return a - b;
		})
		console.log(arr3);//输出  [10, 30, 35, 45, 50, 111, 1899]
```

降序

```
var arr4 = [30,10,111,35,1899,50,45];
		arr4.sort(function(a,b){
			return b - a;
		})
		console.log(arr4);//输出 [1899, 111, 50, 45, 35, 30, 10]
```

根据数组中的对象的某个属性值排序；

```
var arr5 = [{id:10},{id:5},{id:6},{id:9},{id:2},{id:3}];
		arr5.sort(function(a,b){
			return a.id - b.id
		})
		console.log(arr5);
		//输出新的排序
		//		{id: 2}
		//		{id: 3}
		//		{id: 5}
		//		{id: 6}
		//		{id: 9}
		//		{id: 10}
```

根据数组中的对象的多个属性值排序，多条件排序；

```
		var arr6 = [{id:10,age:2},{id:5,age:4},{id:6,age:10},{id:9,age:6},{id:2,age:8},{id:10,age:9}];
		arr6.sort(function(a,b){
			if(a.id === b.id){//如果id相同，按照age的降序
				return b.age - a.age
			}else{
				return a.id - b.id
			}
		})
		console.log(arr6);
		//输出新的排序
		//		{id: 2, age: 8}
		//		{id: 5, age: 4}
		//		{id: 6, age: 10}
		//		{id: 9, age: 6}
		//		{id: 10, age: 9}
		//		{id: 10, age: 2}
```

##### 7、时间处理

`console.log('helloworld')`

Date.parse()：该方法接受一个表示日期的字符串参数，然后尝试根据这个日期返回日期的毫秒数。

##### 8、同步变异步技巧

可以通过 setTimeout 不设置时间值将同步的任务变为异步，以放到同步代码之后执行

##### 9、localStorage 创建、清除、读取

1.创建缓存

```
 localStorage.setItem('userInfo', userInfo);
```

2.读取缓存

```
  localStorage.getItem('doEdit', this.doEdit);
```

3.清除所有缓存

```
localStorage.clear();
```

4 清楚指定缓存

```
localStorage.removeItem('userinfo');
```

##### 10、contains()

js 的 contains 方法用来查看 dom 元素的包含关系，

##### 11、监听滚轮事件

window.onmousewheel = (e)=> { ... }

滚轮方向可以通过 deltaY 的正负值获得

##### 12、鼠标事件

(movementX 受分辨率影响,需要除去 e.view.devicePixelRatio(设备像素比))

movementX：**`MouseEvent.movementX`** 是只读属性，它提供了当前事件和上一个`mousemove (en-US)`事件之间鼠标在水平方向上的移动值。换句话说，这个值是这样计算的 : `currentEvent.movementX = currentEvent.screenX - previousEvent.screenX`.

MouseEvent 的类别有以下：
mousedown 鼠标按下
mouseup 鼠标释放
click 左键单击
dblclick 左键双击
mousemove 鼠标移动
mouseover 鼠标经过
mouseout 鼠标滑出
mouseenter 鼠标进入
mouseleave 鼠标离开
contextmenu 右键菜单

注意：

- 执行顺序：mousedown —> mouseup —> click
- 区别：mouseover 和 mouseout 子元素也会触发，可以冒泡触发
- 区别：mouseenter 和 mouseleave 是针对侦听的对象触发，阻止了冒泡

https://blog.csdn.net/Charissa2017/article/details/103863588?utm_medium=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-1.control&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-1.control

##### 13、对象深拷贝

深拷贝的方法：**JSON.parse(JSON.stringify(obj))**;即先把 json 对象转换为 json 字符串，然后在把 json 字符串转换为 json 对象。另外一种方法是用 Object.assign()这种方法，我还没有测试是否可行。

##### 14、操作 DOM

清空子节点

dom.innerHTML=''

##### 15、快速置换两个值

```
var a = 1,
      b = 2;
    [a, b] = [b, a]
    console.log(a, b);  // 2, 1
```

##### 16、search() 方法

search() 方法用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串。

如果没有找到任何匹配的子串，则返回 -1。

如果找到了，则返回与指定查找的字符串或者正则表达式相匹配的 String 对象起始位置。也是 Number

_string_.search(_searchvalue_)

##### 17、页面滚动

可以通过 window.scrollY 获得已滚动的高度

**window.outerHeight ：**浏览器高度。

**window.outerWidth ：**浏览器宽度。

**window.innerHeight ：**浏览器内页面可用高度；此高度包含了水平滚动条的高度(若存在)。可表示为浏览器当前高度去除浏览器边框、工具条后的高度。

**window.innerWidth ：**浏览器内页面可用宽度；此宽度包含了垂直滚动条的宽度(若存在)。可表示为浏览器当前宽度去除浏览器边框后的宽度。

**工具栏高/宽度 ：**包含了地址栏、书签栏、浏览器边框等范围。如：高度，可通过浏览器高度 - 页面可用高度得出，即：**window.outerHeight - window.innerHeight**。

##### 18、ES6 的循环方式

###### 1、forEach

###### 2、map

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

<img src="C:\Users\PENG\AppData\Roaming\Typora\typora-user-images\image-20210906111348803.png" alt="image-20210906111348803" style="zoom:50%;" />

###### 3、every

1、返回值的情况：如果是空数组.every，则一律返回 true；如果不是空数组，只要回调函数返回的值当中有一个是 false，则返回值是 false，否则返回值为 true；
2、原数组是否改变：如果是通过值类型的方式修改，则不会改变，如果通过下标的方式或者通过引用类型的方式修改，则原数组可能会发生变化；注意返回值的情况，如果返回值为 false，则会中断整个循环，导致后续的数组项不会继续执行。
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

<img src="C:\Users\PENG\AppData\Roaming\Typora\typora-user-images\image-20210906112143768.png" alt="image-20210906112143768" style="zoom:50%;" />

<img src="C:\Users\PENG\AppData\Roaming\Typora\typora-user-images\image-20210906112245960.png" alt="image-20210906112245960" style="zoom:50%;" />

###### 4、some

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

<img src="C:\Users\PENG\AppData\Roaming\Typora\typora-user-images\image-20210906112352373.png" alt="image-20210906112352373" style="zoom:50%;" />

###### reduce filter find

1、reduce 返回的是累计器累计完后的单个值，原数组不会发生变化；

```javascript
// reduce 方法
const reduceArray1 = [10, 20, 30, 40];
const firstVal = 100;
const reduceFunc = (lastReturn, item) => lastReturn + item;
const reduceRet = reduceArray1.reduce(reduceFunc, firstVal);
console.log('reduce的结果---有返回值', reduceRet);
console.log('reduce的原有数组--无变化', reduceArray1);
```

![image-20210906150349658](C:\Users\PENG\AppData\Roaming\Typora\typora-user-images\image-20210906150349658.png)

2、filter 返回的是一个新数组，数组里的内容是回调函数运行后为 true 的各项值

```javascript
// filter 方法
const filterArray1 = [10, 20, 30, 40];
const filterFunc = (item) => item > 22;
const filterRet = filterArray1.filter(filterFunc);
console.log('filter的结果---有返回值', filterRet);
console.log('filter的原有数组--无变化', filterArray1);
```

![image-20210906150414469](C:\Users\PENG\AppData\Roaming\Typora\typora-user-images\image-20210906150414469.png)

3、find 顾名思义，查找
其只返回 第一个符合条件

```js
var arr = [1, 2, 3, 4, 5, 6];
var res = arr.find((item) => item > 3);
console, log(res);
```

![image-20210906150524272](C:\Users\PENG\AppData\Roaming\Typora\typora-user-images\image-20210906150524272.png)

##### 19、获取元素的样式

[JS 如何获取元素样式? - 简书 (jianshu.com)](https://www.jianshu.com/p/5b87a9286b87)

- style，只获取标签上定义的行内样式
- cssRules 只获取 CSS 样式表中定义的样式
- getComputedStyle() 获取当前元素的计算样式

```js
console.log(getComputedStyle(box).cssText); // 注意不仅仅只打印现有样式简单的叠加覆盖结果，而是还会有很多其他样式
console.log(getComputedStyle(box).width); // "100px"
console.log(getComputedStyle(box).height); // "200px"
console.log(getComputedStyle(box).getPropertyValue('background-color')); // "rgb(255, 0, 0)"
```

##### 20、moment

https://juejin.cn/post/6844903971526541326
