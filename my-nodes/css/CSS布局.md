# 盒子模型

### 盒子模型

![image-20220224200750860](C:\Users\cuiyue\AppData\Roaming\Typora\typora-user-images\image-20220224200750860.png)

```html
<html>
  <head>
    <meta charset="UTF-8" />
    <style>
      article {
        border: solid 2px #ddd;
      }
      div {
        border: solid 3px red;//边框
        margin: 20px 30px 40px 50px;//外边距
        padding: 50px;//内边距
      }
    </style>
  </head>
  <body>
    <article>
      <div>123456</div>
    </article>
  </body>
</html>
```

- 居中设置

  ```
    margin-left: auto;
    margin-right: auto;
    
    margin：auto；
  ```

### 外边距

### 内边距

### BOX-SIZING

```
h2 {
  border: solid 10px #ddd;
  height: 300px;
  width: 300px;
  padding:50px;
  box-sizing: border-box;//无论padding怎么变 均是300x300
}
```

### 边框设计

```css
div {
  width: 100px;
  height: 100px;
  border: solid 3px red;
  border-radius: 50%;
}

border-radius: 10px 30px 50px 100px;
```

### 轮廓线

```css
/*元素在获取焦点时产生，并且轮廓线不占用空间。可以使用伪类 :focus 定义样式。
轮廓线显示在边框外面
轮廓线不影响页面布局
*/
outline-style: double;
```

### DISPLAY

![image-20220224222938538](C:\Users\cuiyue\AppData\Roaming\Typora\typora-user-images\image-20220224222938538.png)

### VISIBILITY

### 溢出控制

![image-20220224223136900](C:\Users\cuiyue\AppData\Roaming\Typora\typora-user-images\image-20220224223136900.png)

# 背景处理

### 背景

```css
//背景色：
h2 {
	background-color: red;
}
//背景图片
background-image: url(icon-s.jpg);
//背景裁切 border-box包括边框 padding-box包括内边距 content-box内容区域
background-clip: border-box;
//背景重复 repeat repeat-x repeat-y no-repeat space
background-repeat: repeat-y
//背景滚动 scroll滚动 fixed固定
background-attachment: fixed;
/*背景位置*/
//居中对齐
background-position: center;
background-position: 50% 50%;
//水平居右 垂直居中
background-position: right center;
background-position: 100% 50%;

/*背景尺寸
cover 背景完全覆盖，可能会有背景溢出
contain 图片不溢出的放在容器中，可能会漏出部分区域
*/
background-size: 50% 100%;
background-size: 200px 200px;
//宽度固定 高度自动
background-size: 50% auto;

/*多个背景

*/
background-image: url(xj-small.png), url(bg.png);
//可以一次定义多个背景图片
background: url(xj-small.png) left 50% no-repeat,
                url(bg.png) right 100% no-repeat red;

/*组合设置*/
background: red url(xj-small.png) no-repeat right 50% fixed;
```

### 盒子阴影

```css
/*box-shadow对盒子元素设置阴影 水平偏移 垂直偏移 模糊度 颜色*/
box-shadow: 10px 10px 5px rgba(100, 100, 100, .5);
```

### 渐变



# 数据样式



# 浮动布局

### 浮动布局

- 文档流

  - 浏览器解析的时候从上到下，块元素默认独占一行，从上到下
  - 行元素从左到右
  - 使用float之后，脱离文档流
  - 浮动是对后面元素的影响
  - 行元素 使用float会变为块元素

- 丢失空间

  - 如果只给第一个元素设置浮动，第二个不设置，后面的元素会占用第一个元素的空间

    ```
    div:first-of-type {
        float: left;
        border: solid 2px red;
    }
    
    div:last-of-type {
        background: green;
    }
    ```

    ![image-20220228105317402](C:\Users\cuiyue\AppData\Roaming\Typora\typora-user-images\image-20220228105317402.png)
    
  
- 使用空间：

  - 两个元素都设置浮动，会并排显示

    ```
    div:first-of-type {
        float: left;
        border: solid 2px red;
    }
    
    div:last-of-type {
        float: left;
        background: green;
    }
    ```

    

  - 为第二个元素设置右浮动时将移动到右边

    ```
    div:first-of-type {
        float: left;
        border: solid 2px red;
    }
    
    div:last-of-type {
        float: right;
        background: green;
    }
    ```

- 浮动边界：浮动元素，不能超过父元素的padding，

![image-20220228112323023](C:\Users\cuiyue\AppData\Roaming\Typora\typora-user-images\image-20220228112323023.png)

### 清除浮动

- 补一个空的div

  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <style>
        .clearfix {
          clear: both;
        }
        main {
          width: 620px;
          border: solid 2px black;
          padding: 50px;
        }
        div {
          width: 300px;
          height: 200px;
          box-sizing: border-box;
        }
        div:first-of-type {
          float: left;
          border: solid 2px red;
        }
        div:last-of-type {
          float: right;
          background: green;
        }
      </style>
    </head>
    <body>
      <main>
        <div></div>
        <div></div>
        <article class="clearfix"></article>
      </main>
    </body>
  </html>
  
  ```

- 使用::after

  ```css
   main::after {
          content: "";
          clear: both;
          display: block;
        }
  ```

  

- 使用overflow 触发BFC清除浮动影响

  ```css
  /*子元素使用浮动后将不占用空间，这时父元素高度为将为零。通过添加父元素并设置 overflow 属性可以清除浮动。
  将会使用父元素产生 BFC 机制，即父元素的高度计算会包括浮动元素的高度。*/ 
  overflow: hidden;
  ```

### 页面布局

- 距离控制

  ```css
  /*
  margin-box	外边距环绕
  padding-box	内边距环绕
  border-box	边线环绕
  content-box	内容环绕
  */
  ```

- 显示区域

  ```css
  /*
  circle	圆形
  ellipse	椭圆
  polygon	多边形
  */
  ```

  

- 内移距离

  ```css
  /*
  shape-outside: inset(50px 30px 80px 50px) padding-box;
  */
  ```

  

- 环绕模式

  ```css
  /*
  circle	圆形环绕
  ellipse	椭圆环绕
  url	图片环绕
  polygan	多边环绕
  */
  ```

  

### 形状浮动

+

# 定位布局

### 基础知识

一般用在细节 特殊的元素，在文档流和float之后，才考虑用定位布局

- 定位类型

  ```
  /*
  static		默认形为，参考文档流
  relative	相对定位
  absolute	绝对定位
  fixed		固定定位
  sticky		粘性定位
  */
  ```

- 位置偏移

  ```
  /*
  top		距离顶边
  bottom	距离下边
  left	距离左部
  right	距离右边
  */
  ```

### 相对定位

- 相对定位：相对于元素原来的位置，原来位置是保留的

  ```html
  <style>
    body {
      padding: 50px;
    }
    article {
      width: 400px;
      height: 200px;
      border: solid 10px blueviolet;
      font-size: 14px;
      padding: 30px;
    }
    article img {
      width: 50px;
      position: relative;
      top: -20px;
    }
  
  </style>
  ...
  
  <article>
          <img src="xj.png" alt="">
          后盾人自2010年创立至今，免费发布了大量高质量视频教程，视频在优酷、土豆、酷六等视频网站均有收录，很多技术爱好者受益其中。除了免费视频外，后盾人还为大家提供了面授班、远程班、公益公开课、VIP系列课程等众多形式的学习途径。后盾人有一群认真执着的老师，他们一心为同学着想，将真正的知识传授给大家是后盾人永远不变的追求。
  </article>
  
  ```

  

### 绝对定位

- 绝对定位：

  - 原来位置是丢失的；

  - 参照元素：

    - 默认是参照页面的；
    - 如果父级元素设置了 `relative | fixed | sticky` ，绝对定位子元素将参数此父元素进行定位。

    ```html
    <style>
    	body {
        padding: 50px;
      }
      article {
          width: 400px;
          height: 100px;
          border: solid 6px blueviolet;
          position: relative;
      }
      div {
          font-size: 25px;
          background: #f2a67d;
          padding: 10px;
          position: absolute;
          top: 0;
          left: 0px;
      }
    </style>
    ...
    
    <article>
    	<div>houdunren.com</div>
    </article>
    
    ```

  - 设置位置：

    ```html
    <style>
    	body {
        padding: 50px;
      }
      article {
        width: 400px;
        height: 100px;
        border: solid 6px blueviolet;
        position: relative;
      }
      div {
      /*本身没有宽高 就会通过上下左右来设置元素的尺寸*/
        font-size: 25px;
        background: #f2a67d;
        padding: 10px;
        position: absolute;
        top: 50%;
        left: 50%;
        right: 0;
        bottom: 0;
      }
    </style>
    ```

  - 居中定位

    ```css
    /*
    水平居中：left 设置为50% ,并向左偏移子元素宽度一半
    垂直居中使用方式类似。*/
    div {
        width: 200px;
        height: 200px;
        background: #f2a67d;
        position: absolute;
        left: 50%;
        margin-left: -100px;
        top: 50%;
        margin-top: -100px;
      }
    ```

  - 多级定位的注意事项  参考离自己最近的

    ```html
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <style>
          body {
            padding: 50px;
          }
          main {
            width: 400px;
            height: 400px;
            border: solid 2px black;
            position: relative;
          }
          section {
            position: relative;
            background-color: aquamarine;
            width: 100%;
            height: 100%;
            left: 100px;
            top: 300px;
          }
          div {
            width: 200px;
            height: 200px;
            background: #f2a67d;
            position: absolute;
            left: 50%;
            margin-left: -100px;
            top: 50%;
            margin-top: -100px;
          }
        </style>
      </head>
      <body>
        <main>
          <section>
            <div></div>
          </section>
        </main>
      </body>
    </html>
    
    ```

  - 多级 有滚动条 会随之滚动

### 纵向重叠

### 固定定位

```html
/*元素相对于页面固定定位在某个位置，固定定位元素不会在滚动时改变位置 ，使用position: fixed 产生固定定位。
*/
<style>
  header {
    height: 60px;
    border-bottom: solid 5px #7f35c9;
    box-shadow: 0 5px 8px rgba(100, 100, 100, 0.6);
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
  }
  article {
    height: 3000px;
    margin-top: 80px;
    background: #f3f3f3;
    border: solid 5px #ddd;
  }
</style>
...

<header></header>
<article></article>

```

### 粘性定位



# 弹性布局*重要

### 了解弹性

- 传统的

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <style>
        * {
          padding: 0;
          margin: 0;
        }
        main {
          position: relative;
          height: 100vh;
        }
        main nav {
          width: 80px;
          position: absolute;
          left: 0px;
          top: 0;
          bottom: 0;
          background-color: bisque;
        }
        main article {
          background-color: burlywood;
          padding-left: 90px;
          background-clip: content-box;
          height: 100vh;
        }
      </style>
    </head>
    <body>
      <main>
        <nav></nav>
        <article>aa</article>
      </main>
    </body>
  </html>
  
  ```

  

- 弹性的

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <style>
        * {
          padding: 0;
          margin: 0;
        }
        main {
          display: flex;
          height: 100vh;
        }
        main nav {
          width: 80px;
          background-color: bisque;
        }
        main article {
          background-color: burlywood;
          flex: 1;
        }
      </style>
    </head>
    <body>
      <main>
        <nav></nav>
        <article>aa</article>
      </main>
    </body>
  </html>
  
  ```

### 弹性盒子

- 声明定义

  ```
  /*
  容器盒子里面包含着容器元素，使用 display:flex 或 display:inline-flex 声明为弹性盒子。
  */
  
  ```

- flex-direction：改变盒子里的元素的排列方向 

  ```css
  /*
  row				从左到右水平排列元素（默认值）
  row-reverse		从右向左排列元素
  column			从上到下垂直排列元素
  column-reverse	从下到上垂直排列元素
  */
  article {
      width: 500px;
      border: solid 5px silver;
      display: flex;
      box-sizing: border-box;
      padding: 10px;
      flex-direction: row-reverse;
    }
  ```

- flex-wrap：溢出的时候换行

  ```css
  /*
  nowrap	元素不拆行或不拆列（默认值）
  wrap	容器元素在必要的时候拆行或拆列。
  wrap-reverse	容器元素在必要的时候拆行或拆列，但是以相反的顺序
  */
  article {
      width: 500px;
      border: solid 5px silver;
      box-sizing: border-box;
      padding: 10px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
    article div {
      border: solid 5px blueviolet;
      width：200px;
      margin: 10px;
      text-align: center;
      font-size: 28px;
    }
  ```

- flex-flow：将direction和wrap组合起来

  ```css
  /*
  	flex-flow 是 flex-direction 与 flex-wrap 的组合简写模式。
  */
  flex-flow: row-reverse wrap-reverse;
  ```

- 轴说明

  - 水平排列时：主轴是水平的，当使用了flex-flow：row warp；之后换行出现竖向的交叉轴。

    - 主轴反转之后，开始和结束的方向掉过。

    ![image-20220303144610236](C:\Users\cuiyue\AppData\Roaming\Typora\typora-user-images\image-20220303144610236.png)

  - 垂直排列时：主轴是垂直的，当使用了flex-flow: column wrap之后，换行产生横向的交叉轴。

    - 反转同上。

    ![image-20220303144622047](C:\Users\cuiyue\AppData\Roaming\Typora\typora-user-images\image-20220303144622047.png)

- justify-content：在一个主轴上的元素的排列方式

  ```
  /*
  flex-start	元素紧靠主轴起点
  flex-end	元素紧靠主轴终点
  center	元素从弹性容器中心开始
  space-between	第一个元素靠起点，最后一个元素靠终点，余下元素平均分配空间
  space-around	每个元素两侧的间隔相等。所以，元素之间的间隔比元素与容器的边距的间隔大一倍
  space-evenly	元素间距离平均分配
  */
  
  article {
          display: flex;
          /* width: 500px; */
          height: 300px;
          flex-flow: row wrap;
          background-color: antiquewhite;
          justify-content: flex-start;
        }
        article div {
          border: solid 2px rebeccapurple;
          width: 100px;
          height: 100px;
          padding: 10px;
          box-sizing: border-box;
        }
  ```

  

- 交叉轴行

  - align-items：控制元素在行上的排列，设立交叉轴的方向，主轴是横向的，设立竖向的方向，

    ```css
    /*
    stretch		元素被拉伸以适应容器（默认值）
    center		元素位于容器的中心
    flex-start	元素位于容器的交叉轴开头
    flex-end	元素位于容器的交叉轴结尾
    */
    	article {
            display: flex;
            border: solid 2px red;
            height: 500px; width: 500px;
            flex-flow: row wrap;
            align-items: flex-end;
          }
          article div {
            border: solid 2px rebeccapurple;
            width: 200px; height: 100px;
            box-sizing: border-box;
          }
    ```

  - align-content：多行的时候交叉轴的方向，是控制行的

    ```css
    /*
    stretch			将空间平均分配给元素
    flex-start		元素紧靠主轴起点
    flex-end		元素紧靠主轴终点
    center			元素从弹性容器中心开始
    space-between	第一个元素靠起点，最后一个元素靠终点，余下元素平均分配空间
    space-around	每个元素两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍
    space-evenly	元素间距离平均分配
    */
    	article {
            display: flex;
            border: solid 2px red;
            height: 500px; width: 500px;
            flex-flow: row wrap;
            align-content: center;
          }
          article div {
            border: solid 2px rebeccapurple;
            width: 200px; height: 100px;
            box-sizing: border-box;
          }
    ```

### 弹性元素

- 放在容器中的元素即为弹性元素：

  - 不可以使用float与clear规则

  - 弹性元素均为块元素

  - 绝对定位的弹性元素不参与弹性布局

- align-self：单个元的交叉轴的控制

  ```
  /*
  用于控制单个元素在交叉轴上的排列方式，align-items 用于控制容器中所有元素的排列，而 align-self 用于控制一个弹性元素的交叉轴排列。
  stretch		将空间平均分配给元素
  flex-start	元素紧靠主轴起点
  flex-end	元素紧靠主轴终点
  center		元素从弹性容器中心开始
  */
  	article {
          display: flex;
          height: 500px; width: 500px;
          flex-flow: row wrap;
          background-color: antiquewhite;
        }
        article div {
          border: solid 2px rebeccapurple;
          width: 100px;   height: 100px;
          box-sizing: border-box;
        }
        article div:nth-of-type(2) {
          align-self: flex-end;
        }
        article div:nth-of-type(4) {
          align-self: flex-end;
        }
  ```

- flex-grow：对空用空间进行分配

  ```
  /*用于将弹性盒子的可用空间，分配给弹性元素。可以使用整数或小数声明。*/
   	article div:nth-of-type(1) {
          flex-grow: 1;
        }
        article div:nth-of-type(2) {
          flex-grow: 0;
        }
  ```

  //小米的例子 写一下

- flex-shrink：缩小比例

  ```
  /*与 flex-grow 相反 flex-shrink 是在弹性盒子装不下元素时定义的缩小值。*/
  	article {
          display: flex;
          border: solid 2px red;
          height: 500px; width: 500px;
        }
        article div {
          border: solid 2px rebeccapurple;
          width: 300px; height: 100px;
          box-sizing: border-box;
        }
        article div:nth-of-type(1) {
          flex-shrink: 1;
        }
        article div:nth-of-type(2) {
          flex-shrink: 3;
        }
        article div:nth-of-type(3) {
          flex-shrink: 0;
        }
  ```

  

- flex-basis：基准尺寸

  - 最大/最小》基准尺寸》宽高

- flex：放大 缩小 基准尺寸，flex是flex-grow、flex-shrink 、flex-basis缩写组合。

- order：改变顺序

### 弹性文本

### 绝对定位

### 自动空间

# 栅格系统

基本知识

生命容器

划分行列

间距定义

栅格命名

元素定位

区域定位

区域声明

栅格流动

对齐管理

自动排列

终极简写
