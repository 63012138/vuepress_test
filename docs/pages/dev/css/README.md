## css 常用语法

##### 1、禁止选中文本

​ user-select:none;

##### 2、拖动框

```js
// 拖动属性框的回调
    moveDialog(e) {
      // console.log(e);
      // console.log([e.target]);
      let dialog;
      if (e.target.className != "Attribute") {
        dialog = e.target.parentNode;
      } else {
        return;
      }
      //算出鼠标相对元素的位置
      let disX = e.clientX - dialog.offsetLeft;
      let disY = e.clientY - dialog.offsetTop;
      let pageWidth = document.body.clientWidth;
      let pageHeight = document.body.clientHeight;
      // console.log(pageWidth, pageHeight);
      document.onmousemove = (e) => {
        // console.log(e);
        //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
        let left = e.clientX - disX;
        let top = e.clientY - disY;

        top = top < 100 ? 100 : top;
        top = top > pageHeight - 225 ? pageHeight - 225 : top;
        left = left < 245 ? 245 : left;
        left = left > pageWidth - 325 ? pageWidth - 325 : left;
        console.log(top, left);

        //移动当前元素
        dialog.style.left = left + "px";
        dialog.style.top = top + "px";
      };
      // 鼠标松开时清空事件
      document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    },
```

##### 3、隐藏滚动条

```css
类名::-webkit-scrollbar {
  display: none;
}
```

##### 4、页面滚动到指定位置

https://blog.csdn.net/weixin_41804429/article/details/102954146

滚动到底部

```
// 假设要滚动的框为message
message.scrollTop = message.scrollHeight
```

##### 5、offsetTop、clientTop、scrollTop、offsetTop

这里是 javascript 中制作滚动代码的常用属性

页可见区域宽： document.body.clientWidth;
网页可见区域高： document.body.clientHeight;

window.innerHeight;
网页可见区域宽： document.body.offsetWidth (包括边线的宽);
网页可见区域高： document.body.offsetHeight (包括边线的宽);
网页正文全文宽： document.body.scrollWidth;
网页正文全文高： document.body.scrollHeight;
网页被卷去的高： document.body.scrollTop;
网页被卷去的左： document.body.scrollLeft;
网页正文部分上： window.screenTop;
网页正文部分左： window.screenLeft;
屏幕分辨率的高： window.screen.height;
屏幕分辨率的宽： window.screen.width;

屏幕可用工作区高度： window.screen.availHeight;

<img src="C:\Users\PENG\AppData\Roaming\Typora\typora-user-images\image-20210916222123446.png" alt="image-20210916222123446" style="zoom: 33%;" />![image-20210916222151698](C:\Users\PENG\AppData\Roaming\Typora\typora-user-images\image-20210916222151698.png)

<img src="C:\Users\PENG\AppData\Roaming\Typora\typora-user-images\image-20210916222123446.png" alt="image-20210916222123446" style="zoom: 33%;" />

<img src="C:\Users\PENG\AppData\Roaming\Typora\typora-user-images\image-20210916222151698.png" alt="image-20210916222151698" style="zoom:33%;" />

###### 结论：

1.offsetTop:

当前对象到其上级层顶部的距离.

不能对其进行赋值.设置对象到页面顶部的距离请用 style.top 属性.

2.offsetLeft :

当前对象到其上级层左边的距离.

不能对其进行赋值.设置对象到页面左部的距离请用 style.left 属性.

3.offsetWidth :

当前对象的宽度.

与 style.width 属性的区别在于:如对象的宽度设定值为百分比宽度,则无论页面变大还是变小,style.width 都返回此百分比,而 offsetWidth 则返回在不同页面中对象的宽度值而不是百分比值

4.offsetHeight :

与 style.height 属性的区别在于:如对象的宽度设定值为百分比高度,则无论页面变大还是变小,style.height 都返回此百分比,而 offsetHeight 则返回在不同页面中对象的高度值而不是百分比值

5.offsetParent :

当前对象的上级层对象.

6.scrollLeft :

对象的最左边到对象在当前窗口显示的范围内的左边的距离．

即是在出现了横向滚动条的情况下，滚动条拉动的距离．

7.scrollTop

对象的最顶部到对象在当前窗口显示的范围内的顶边的距离．

即是在出现了纵向滚动条的情况下，滚动条拉动的距离．

##### 6、[css 修改滚动条样式](https://www.cnblogs.com/sherryweb/p/11023311.html)

###### css 样式

```
/*修改滚动条样式*/
div::-webkit-scrollbar{
  width:10px;
  height:10px;
  /**/
}
div::-webkit-scrollbar-track{
  background: rgb(239, 239, 239);
  border-radius:2px;
}
div::-webkit-scrollbar-thumb{
  background: #bfbfbf;
  border-radius:10px;
}
div::-webkit-scrollbar-thumb:hover{
  background: #333;
}
div::-webkit-scrollbar-corner{
  background: #179a16;
}
```

###### 参数说明

```
::-webkit-scrollbar 滚动条整体部分
::-webkit-scrollbar-thumb  滚动条里面的小方块，能向上向下移动（或往左往右移动，取决于是垂直滚动条还是水平滚动条）
::-webkit-scrollbar-track  滚动条的轨道（里面装有Thumb）
::-webkit-scrollbar-button 滚动条的轨道的两端按钮，允许通过点击微调小方块的位置。
::-webkit-scrollbar-track-piece 内层轨道，滚动条中间部分（除去）
::-webkit-scrollbar-corner 边角，即两个滚动条的交汇处
::-webkit-resizer 两个滚动条的交汇处上用于通过拖动调整元素大小的小控件
```

注意：需要设置 -webkit-scrollbar 后 其它属性才会生效

最常用的

```
.iconTypeListContainer::-webkit-scrollbar {
  width: 10px;
}
.iconTypeListContainer::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #ccc;
}
```

效果：

<img src="C:\Users\PENG\AppData\Roaming\Typora\typora-user-images\image-20210702170024249.png" alt="image-20210702170024249" style="zoom: 33%;" />

##### 7、box-shadow

```
div
{
    box-shadow: 10px 10px 5px #888888;
}
```

box-shadow: _h-shadow v-shadow blur spread color_ inset;

| _h-shadow_ | 必需的。水平阴影的位置。允许负值                                                                          |
| ---------- | --------------------------------------------------------------------------------------------------------- |
| _v-shadow_ | 必需的。垂直阴影的位置。允许负值                                                                          |
| _blur_     | 可选。模糊距离                                                                                            |
| _spread_   | 可选。阴影的大小                                                                                          |
| _color_    | 可选。阴影的颜色。在[CSS 颜色值](https://www.runoob.com/cssref/css_colors_legal.aspx)寻找颜色值的完整列表 |
| inset      | 可选。从外层的阴影（开始时）改变阴影内侧阴影                                                              |

##### 8、动态绑定多个属性

动态绑定多个 style：

![image-20210706180135647](C:\Users\PENG\AppData\Roaming\Typora\typora-user-images\image-20210706180135647.png)

动态绑定多个 class：

![image-20210706180143064](C:\Users\PENG\AppData\Roaming\Typora\typora-user-images\image-20210706180143064.png)

##### 9、字体间隔

```letter-spacing:10px;
	letter-spacing:10px;
```

##### 10、文字竖直排列

https://blog.csdn.net/sangjinchao/article/details/60139706

```
writing-mode: vertical-lr;
```

##### 11、两行溢出

```
 /* 两行溢出 */
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
```

##### 12、textarea 禁止调节大小

```
resize: none;
```

##### 13、position 的 sticky

巨好用 可用作侧边栏和广告栏一类

根据父元素的高度定位和移动 一般设置父元素的高度为页面的高度 或直接用页面作为父元素 当 sticky 转为 fixed 时 仍保留当前位置

position:sticky 是 css 定位新增属性；可以说是相对定位 relative 和固定定位 fixed 的结合；它主要用在对 scroll 事件的监听上；简单来说，在滑动过程中，某个元素距离其父元素的距离达到 sticky 粘性定位的要求时(比如 top：100px)；position:sticky 这时的效果相当于 fixed 定位，固定到适当位置。
使用：
#sticky-nav {
position : sticky ;
top : 100px ;
}
设置 position:sticky 同时给一个(top,bottom,right,left)之一即可
使用条件：
1、父元素不能 overflow:hidden 或者 overflow:auto 属性。
2、必须指定 top、bottom、left、right4 个值之一，否则只会处于相对定位
3、父元素的高度不能低于 sticky 元素的高度（好像一定要设置高度）
4、sticky 元素仅在其父元素内生效

但具有一定兼容性

![img](https://img-blog.csdn.net/20180714100231769?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM1NTg1NzAx/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

##### 14、background 属性

```
background: #00FF00 url(bgimage.gif) no-repeat fixed top;
background:bg-color bg-image position/bg-size bg-repeat bg-origin bg-clip bg-attachment initial|inherit;
```

##### 15、查用阴影参数

![image-20210805222236400](C:\Users\PENG\AppData\Roaming\Typora\typora-user-images\image-20210805222236400.png)

##### 16、显隐 transiton

通过 animation、visibility、opacity 实现

```css
animation: showMain 1.2s ease forwards;

@keyframes showMain {
  from {
    opacity: 0;
    visibility: hidden;
  }
  to {
    visibility: visible;
    opacity: 1;
  }
}
```

##### 17、justify-content

左边对齐是 flex-start 不然会报警告

##### 18、CSS 实现自适应正方形

[CSS 实现自适应正方形](https://www.cnblogs.com/xiaoan0705/p/10473480.html)

**方案一：CSS3 vw 单位**

css3 中新增了一组相对于可视区域百分比的长度单位 vw,vh,vmin,vmax。

vw 是相对于视口宽度的百分比， 1vw=1% viewport width

vh 是相对于视口高度的百分比， 1vh=1% viewport height

vmin 是相对于当前视口宽高中较小的一个百分比单位

vmin 是相对于当前视口宽高中较大的一个百分比单位

利用 vw 单位，我们可以很方便的做出自适应的正方形：

```
.placeholder{
        width: 100%;
        height: 100vw;
    }
```

优点：简洁方便
缺点：浏览器兼容不好

**方案二：设置垂直方向的 padding 撑开容器**

在 CSS 盒模型中，一个比较容易被忽略的就是 margin,padding 的百分比数值计算。按照规定，**margin、padding 的百分比数值是相对父元素宽度进行计算的**。由此可以发现只需将元素垂直方向的一个 `padding` 值设定为与 `width` 相同的百分比就可以制作出自适应正方形了：

```
.placeholder{
        width: 100%;
        padding-bottom: 100%;
    }
```

这种方案简洁明了，且兼容性好；但是填充内容后会出现问题，为了解决这个问题，我们可以设置容器的高度为 0

**方案三：利用伪元素的 margin(padding)-top 撑开容器**

在方案二中，我们利用百分比数值的 `padding-bottom` 属性撑开容器内部空间，但是这样做会导致在元素上设置的 `max-height` 属性失效

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](<javascript:void(0);>)

```
.placeholder{
        width: 100%;
        background: #0000FF;
        overflow: hidden;
    }
.placeholder:after{
        content: '';
        display: block;
        margin-top: 100%;    //当width=20%时，margin-top也是100%
}
```

##### 19、transform

**scale**

当 scale 为负数时会整体旋转 180 度，效果和 rotate(180deg)一样

##### 20、点击穿透

直接点击设置这个样式的元素，会跳过该元素，直接点击这个元素下面的元素

`pointer-events: none;`

##### 21. 常用伪类

:focus, :avtive,:hover,

:focus-within 该元素或该元素的后代获取焦点后触发

一般情况下只有表单元素支持 focus，但是可以通过给 div 等添加 tabindex="数字"实现其它元素的 focus
