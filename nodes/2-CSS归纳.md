

# 场景题

### 水平居中

- margin：auto

### 垂直居中

```

```



### 三角形

```
.div{
	width:0;
	height:0;
	border:20px solid;
	border:transparent transparent pink transparent;
}
```



### 两栏布局

```
.left{
	float:left;
	width:100px;
}
.right{
	position:absolute;
	left:100px;
}

.left{
	float:left;
	width:100px;
}
.right{
	position:absolute
	margin-left:100px;
}

.left{
	float:left;
	width:100px;
}
.right{
	overflow:hidden;
	margin-left:100px;
}

.outer{
	display:flex;
}
.left{
	width:100px;
}
.right{
	flex:1;
}
```

### 三栏布局

```
.left{
	width:100px;
	position:absolute;
	left:0;
}
.center{
	margin-left:100px;
	margin-right:100px;
}
.right{
	width:100px;
	position:absolute;
	right:0px;
}

.left{
	float:left;
	width:100px;
}
.right{
	float:right;
	width:100px
}
.center{
	margin-left:100px;
	margin-right:100px;
}

.outer{
	display:flex;
}
.left{
	width:100px;
}
.center{
	flex:1;
}
.right{
	width:100px
}
```

### 填充

一个高度自适应的div，里面有两个div，一个高度100px，希望另一个填满剩下的高度问题怎么解决？

```
.content { height: calc(100%-100px); }
.container { position:relative; } .content { position: absolute; top: 100px; bottom: 0; }
.container { display:flex; flex-direction:column; } .content { flex:1; }
```

### 字体<12

```
.shrink {
    -webkit-transform: scale(0.8);
    -o-transform: scale(1);
    display: inilne-block;
}
```



# CSS

<img src="C:\Users\cuiyue\AppData\Roaming\Typora\typora-user-images\image-20220427091434303.png" alt="image-20220427091434303"  />





## CSS三特性

- 层叠性，当重复设置样式，产生覆盖，遵循就近原则；不产生冲突，不重叠；
- 继承性，子标签会继承父标签某些样式；
- 优先级，important》行内》id》类 伪类》元素

## css开启硬件加速

浏览器在处理下列css时，会使用GPU渲染

- transform-3D变换样式会使用GPU加速
- opacity
- filter
- will-change

## CSS优化和提升性能

#### 加载性能

- css压缩，将写好的css进行打包压缩，可以减小文件体积
- css单一样式，margin-bottom/margin-left比magin：top 0 bottom 0 要优秀
- 减少使用@import，建议使用link，因为后者在页面加载时一起加载，前者是等待页面加载完成之后再进行加载

#### 选择器性能

- 避免使用通配规则，如*{}计算次数惊人，只对需要用到的元素进行选择。
- 尽量少的去对标签进行选择，而是用class。
- 尽量少的去使用后代选择器，降低选择器的权重值。后代选择器的开销是最高的，尽量将选择器的深度降到最低，最高不要超过三层，更多的使用类来关联每一个标签元素。
- 了解哪些属性是可以通过继承而来的，然后避免对这些属性重复指定规则。

#### 渲染性能

- 慎重使用高性能属性：浮动、定位。
- 尽量减少页面重排、重绘。
- 属性值为0时，不加单位。
- 不使用@import前缀，它会影响css的加载速度。
- 选择器优化嵌套，尽量避免层级过深。
- 正确使用display的属性，由于display的作用，某些样式组合会无效，徒增样式体积的同时也影响解析性能。

#### 可维护性 健壮性

- 将具有相同属性的样式抽离出来，整合并通过class在页面中进行使用，提高css的可维护性。
- 样式与内容分离：将css代码定义到外部css中。

## important points

#### <u>RAF RIC</u>

- **requestAnimationFrame：** 告诉浏览器在下次重绘之前执行传入的回调函数(通常是操纵 dom，更新动画的函数)；由于是每帧执行一次，那结果就是每秒的执行次数与浏览器屏幕刷新次数一样，通常是每秒 60 次。
- **requestIdleCallback：**会在浏览器空闲时间执行回调，也就是允许开发人员在主事件循环中执行低优先级任务，而不影响一些延迟关键事件。如果有多个回调，会按照先进先出原则执行，但是当传入了 timeout，为了避免超时，有可能会打乱这个顺序。
- 可以深入的去问浏览器每一帧的渲染流程 [requestIdleCallback 和 requestAnimationFrame 详解](https://juejin.cn/post/6844903848981577735)
- requestAnimationFrame在每一帧的时间间隔里都会执行一次，之前是使用setTimeout 但是可能会造成卡帧的问题；

#### requestAnimationFrame

- 使用：异步的，传入的函数会在页面重绘之前执行

- 写法：

  - ##### handlerId = requestAnimationFrame(callback)

  - 传入一个回调函数，即动画函数；返回值handlerId为浏览器定义的、大于0的整数，唯一标识了该回调函数在列表中位置；

- 执行过程

  - 首先判断document.hidden属性是否为true，页面是可见的状态下才执行；
  - 浏览器清空上一轮的动画函数
  - 以`<handlerId , callback>` 进入到动画帧请求回调函数列；
  - 浏览器会遍历动画帧请求函数列表，根据handlerId的大小，依次执行相应的动画函数；

- **setTimeout**和**requestAnimationFrame**

  - 如果使用setTimeout的话，是通过一个时间间隔来改变图像的位置，从而达到动画的效果；但是使用settimeout会存在一些问题 卡断、丢帧的现象。

  - 原因：首先setTimeout并不是很准确 存在误差，其次刷新频率受屏幕分辨率和屏幕尺寸的影响，不同的屏幕频率不一致。——>`setTimeout`的执行步调和屏幕的刷新步调不一致，从而引起**丢帧**现象，**`setTimeout`的执行只是在内存中对图像属性进行改变，这个变化必须要等到屏幕下次刷新时才会被更新到屏幕上**。如果两者的步调不一致，就可能会导致中间某一帧的操作被跨越过去，而直接更新下一帧的图像。

  - **requestAnimationFrame**，是由系统决定回调函数的执行时机，**它能保证回调函数在屏幕每一次的刷新间隔中只被执行一次**，这样就不会引起丢帧现象，也不会导致动画出现卡顿的问题。

    ```
    var progress = 0;
    //回调函数
    function render() {  
      progress += 1; //修改图像的位置  
      if (progress < 100) {  //在动画没有结束前，递归渲染    
        window.requestAnimationFrame(render); 
      }
    }
    //第一帧渲染
    window.requestAnimationFrame(render);
    ```

  - 优势：cpu节能 函数节流

#### ！！！CSS3动画比基于脚本的动画有哪些优势？

跟脚本动画相比，使用`CSS3`动画具有以下优势：

- 易于使用，任何人都可以在不了解`javascript`的情况下创建它们；
- 即使在合理的系统负载下也能很好的执行。
- 由于简单的动画在`javascript`中的效果比较差，因此渲染引擎使用跳帧技术来使动画流畅进行；
- 允许浏览器控制动画序列，通过建撒谎哦在当前不可见的选项卡中执行的动画的更新频率来优化性能和效率；

#### css溢出

##### 单行多行元素的溢出隐藏

```
//单行的 
.class{//注意这是块级的 如果对内联元素需要加上
	//display：block 一句话
	white-space:nowrap;
	overflow:hidden;
	text-overflow:ellipsis;
}
//多行的
.class{
	overflow: hidden;
  	text-overflow: ellipsis;
  	display: -webkit-box;
  	-webkit-box-orient: vertical; /*设置对齐模式*/
  	-webkit-line-clamp: 2; /*设置多行的行数，示例为2行*/
}
```

如何判断一个元素 CSS 样式溢出，从而可以选择性的加 title 或者 Tooltip?

如何让 CSS 元素左侧自动溢出（... 溢出在左侧）？  direction: rtl;

#### 为什么有时候用translate改变位置而不是定位

- transform创建的是图层，不会导致重绘和重排；translate是transform的一个属性
- translate改变位置时，元素依然会占据其原始空间；而改变绝对定位会触发重新布局，进而触发重绘和复合。

#### ！！！伪元素 伪类

#### 奇数还是偶数的字体

- 使用偶数的字体

#### 设置元素浮动后，该元素的 display 值会如何变化？

- 设置元素浮动后，该元素的`display`值自动变成`block`。

## 基础

#### 包含块

- 定义：一个(元素的)框为它的子孙节点建造了包含块，包含块是相对的。

- 判定及范围：
  - 根元素存在的包含块，被叫做初始包含块 (initial containing block)
  - 静态定位元素和相对定位元素(position:relative/static)，由它最近的块级（即display属性为“block”，“list-item”，“table”）、单元格（table cell）或者行内块（inline-block）祖先元素的content区域 内容框1创建。
  - 固定定位元素：包含块是当前可视窗口。
  - 绝对定位元素：
    - 包含块由离它最近的position属性为absolute、relative或者fixed的祖先创建；若没有则为初始包含块。
    - 如果祖先是块级元素，由祖先的 padding edge 形成。
    - 如果祖先是内联元素，取决于祖先的direction属性。
    - 如果没有祖先，根元素盒子的内容边界确定为包含块。

#### 继承

- 可以继承的样式属性： `font-size`、`font-family`、`color`、`list-style`、`cursor`、`ul`, `li`, `dl`, `dd`, `dt`;

- 不可继承的样式属性： `width`、`height`、 `border`、 `padding`、 `margin`、 `background`；

  

#### 块元素、行内元素、行内块元素

<img src="C:\Users\cuiyue\AppData\Roaming\Typora\typora-user-images\image-20220318163223031.png" alt="image-20220318163223031" style="zoom: 67%;" />

#### 选择器 优先级

id选择器、类选择器、伪类选择器、标签选择器、伪元素选择器、通用选择器（*）

- important最高级的
- 内联            1，0，0，0
- id                 0，1，0，0
- 类 伪类        0，0，1，0
- 元素伪元素  0，0，0，1
- 通配符          0，0，0，0

为什么不使用统配：*

> 优点：写起来很简单
> 缺点：需要把所有的标签都遍历一遍，当网站较大时，样式会比较多，增加了网站运行的负载，会使网站加载很长一段时间，因此大型网站都有分层次的一套初始化样式。
> 因此出于性能的考虑，并不是所有的标签都会有padding和margin，因此只对常见的默认具有padding和margin的元素初始化即可。

#### **根据样式表来源划分的优先级**

- 内联样式>内部样式>外部样式>浏览器用户自定义样式>浏览器默认样式

#### @import link标签作用和区别

- 作用：引入CSS样式
- 区别：@import由css提供，只可引用样式，link是HTML标签，除了样式还可是图片等；@import只有IE5+才能识别，link没有兼容问题；link同时加载的，@import是等页面加载完菜价在；link权重高于@import

#### **为什么link用href获取资源 script和img用src**

- src：是source的缩写，指向外部资源的位置，指向的内容将会嵌入到文档中当前标签所在位置；
  - 当浏览器解析到该元素时，**会暂停其他资源的下载和处理**，直到将该资源加载、编译、执行完毕，图片和框架 等元素也如此，类似于将所指向资源嵌入当前标签内。**这也是为什么将js脚本放在底部而不是头部，例如<script src ="js.js"></script>** 
- href：是Hypertext Reference的缩写，指向网络资源所在位置，建立和当前元素（锚点）或当前文档（链接）之间的链接；
  - 在文档中添加link标签，浏览器会识别该文档为css文件，就会并行下载资源并且**不会**停止对当前文档的处理。

#### 度量

- px：相对长度单位，相对于显示器的屏幕分辨率而言

- em：相对长度单位，相对于当前对象内的文本字体的尺寸而言(参考物父元素的font-size)，若没有设置行内文本的字体尺寸，则使用浏览器默认字体，

- rem：相对长度单位，1rem=html根元素上字体设置的大小而言，如若没有设置，默认为浏览器的字体大小16px

- em和rem相对于px更灵活，个适用于响应式布局；通过浏览器转换为像素

- vw/vh：试图窗口宽度/长度

## 层叠

#### z-index不生效

- z-index必须设置在定位元素上，position不可以为static
- 同一父元素下的元素层叠效果是收到父元素的影响的，如果父元素的z-index很小，子元素设置再大也没用
- 不生效：
  - 元素本身没有设置position
  - 元素设置了float
  - 父元素的z-index比子元素的z-index小
  - 父元素设置了position:relative

## 动画

#### transition：过渡 

- 给属性添加过渡效果；当property发生改变时，触发动画
- **transition: property duration timing-function delay;**
- 需要事件触发，所以没法在网页加载时自动发生
- 是一次性的，不能重复发生，除非一再触发
- 只能定义开始状态和结束状态，不能定义中间状态，也就是说只有两个状态
- 一条transition规则，只能定义一个属性的变化，不能涉及多个属性。好像是错的 可以设置多个 transition:width 1s,height ease-in-out 2s;是可以的

> ```
>transition: opacity 1s ease 0;
> //相当于
>transition-property: all; /* 过渡属性 */
> transition-duration: 0; /* 耗时 */
> transition-timing-function: ease; /* 效果，默认 ease（缓入缓出） */
> transition-delay: 0; /* 延迟 */
> ```
> 

#### 动画animation

- 多个动作，有多个关键帧keyframes

- **animation: name duration timing-function delay iteration-count direction play-state fill-mode;**

  ![image-20220522152116901](C:\Users\cuiyue\AppData\Roaming\Typora\typora-user-images\image-20220522152116901.png)

- 

> ```
>animation: forward 4s; /* 执行 forward 动画，耗时 4s */
> /* 三个关键帧：
> 此例子定义了三个关键帧，如果要是不写0 100 默认是原样式
> */
> @keyframes forward {
> 0% {left: 0; }
> 50% {left: 200px; background-color: #009a61;}
> 100% {left: 400px; background-color: orange;}
> }
> //@keyframes中的百分比，代表时间尺度上的百分比 ，后面跟着的是此时间点的样式。
> 
> animation-name: none; /* 动画名称 */
> animation-duration: 0; /* 耗时 */
> animation-timing-function: ease; /* 效果，默认缓入缓出 step实现逐帧动画*/
> animation-delay: 0; /* 延迟 */
> animation-iteration-count: 1; /* 循环次数 */
> animation-direction: normal; /* 正放 or 倒放 */
> animation-fill-mode：none/*动画填充模式，动画开始前和动画开始后
> forwards，表示，动画完成后，元素状态保持为最后一帧的状态。
> backwards，表示，有动画延迟时，动画开始前，元素状态保持为第一帧的状态。
> both，表示上述二者效果都有。
> */
> animation-play-state://表示动画播放状态，默认值 running 表示播放， paused 表示暂停：
> ```

<img src="C:\Users\cuiyue\AppData\Roaming\Typora\typora-user-images\image-20220407154041235.png" alt="image-20220407154041235" style="zoom: 67%;" />



transform：向元素应用2D或3D转换，允许我们对元素进行旋转、缩放、移动或倾斜

> 变换，与动画无关，transition是一个状态到另一个状态的变化过程，transform仅仅是静止的最终状态
>
> 注意：原点位于元素中心
>
> - `matrix` 矩阵变换
>
>   matrix(*n*,*n*,*n*,*n*,*n*,*n*)
>
> - `translate` 位移
>
>   translate(*x*,*y*)   translateX(*x*)   translateY(*y*)
>
> - `scale` 缩放
>
>   scale(*x*,*y*)
>
> - `rotate` 绕轴旋转
>
>   rotate(*angle*)
>
> - `skew`[skju:] 倾斜
>
> - `perspective` 透视距离

## 隐藏元素

[在 CSS 中隐藏元素的 10 种方法 - 掘金 (juejin.cn)](https://juejin.cn/post/7065871783232012318)

| 指标                 | 描述                                                         | 可访问       | 影响布局 | 动画 | 事件 |
| -------------------- | ------------------------------------------------------------ | ------------ | -------- | ---- | ---- |
| opacity : N          | filter：opacity () filter属性用来设置元素的滤镜，opacity是滤镜重的透明度，用来设置元素的透明度。 | 0/0%隐藏内容 | ×        | √    | √    |
| color: rgba(0,0,0,0) | 将元素的color background-color 设置为 rgba(0,0,0,0)          | 可读         | ×        | √    | √    |
| visibility:hidden    | 不支持动画，元素不可见但仍然存在，不会改变页面布局，但不会触发该元素已经绑定的事件 | 不可         | ×        | ×    | ×    |
| display:none         | 当其值为 none 时元素就隐藏了。被隐藏的元素不会在页面中占据位置，也不会响应绑定的监听事件。 | 不可         | √        | ×    | ×    |
| z-index：-1          | 设置为负值，以实现元素的隐藏。这实际上就是将元素放在了我们看不到的层。 | 可读         | ×        | √    | ×    |
| position 属性        | 使用top、bottom、left、right 从页面中的默认位置移动元素。因此，绝对定位的元素可以通过左键：-9999px 等值移出屏幕 | 可读         | √        | √    | √    |
| 缩小尺寸             | 可以通过使用width、height、padding、border-width 或 font-size 来缩小元素的尺寸以实现元素的隐藏。可能还需要应用 overflow: hidden; 来确保内容不会溢出。 | 可读         | √        | √    | ×    |

##### display:none  visibility：hidden

- display：none 不会给被隐藏的对象保留其物理空间；

- visibility：hidden 所占据的位置依旧存在，仅视觉上完全透明；

- ```
  repaint(重绘) ，repaint发生更改时，元素的外观被改变，且在没有改变布局的情况下发生，如改变outline,visibility,background color，不会影响到dom结构渲染。
  reflow(渲染)，与repaint区别就是他会影响到dom的结构渲染，同时他会触发repaint，他会改变他本身与所有父辈元素(祖先)，这种开销是非常昂贵的，导致性能下降是必然的，页面元素越多效果越明显。
  ```

- display：none 会reflow；visibility：hidden 只会重绘

## position

- relative：相对定位，相对于之前的位置，不脱离文档流，之前的位置依旧存在，提升元素的层级
- absolute：绝对定位，脱离文档流，之前的位置不存在了，和left top等一起使用
  - 存在设置为position的祖先，相对于祖先元素
  - 不存在则相对于body元素
- fixed 可以简单说为特殊的absolute。fixed总是相对于body定位的。fixed定位使元素脱离文档流，因此不占据空间。fixed定位元素会和其他元素重叠。


- static：没有定位，出现在正常的文档流之中（忽略top、bottom、right、left、z-index声明），块元素默认是static 的


- <u>sticky</u>：元素先按普通文档流进行定位，然后相对于该元素在流中的flow root（BFC）和containing block（最近块级祖先元素）定位。而后，元素定位表现为在跨越特定阈值前为相对定位，之后为固定定位。
- inherit：

## display

- inlne：内联元素，只可容纳文本和内联，前后无换行符，不可设置宽高，padding和maigin在垂直方向无效；
  - 分为替换元素：img、input、textarea、select，可设置宽高
  - 非替换元素；

- block：块级元素，独占一行，可设置宽高 ，padding margin水平垂直均有效，默认为父元素的宽高


- inline-block：内联块，不独占一行，支持全部样式，默认为内容的宽高，盒子合并在一起；可设置width和height，padding和margin水平垂直方向均有效，前后无换行符；


- flex：设置为弹性布局


- table


- table-ceil


- none

absolute和flex

#### display float position的关系

- display：none；float和position都不起作用；
- 

## 盒子模型

- 标准盒子模型：width=content
- IE盒子模型：width=content+padding+border
- 可以通过 box-sizing：content-box/border-box来设置
- PS：background-color设置的颜色会填充元素的content、padding、border区域

## 格式化上下文

#### BFC 块级格式化上下文

- 块级格式化上下文，是一个独立的渲染区域，只有块级盒子参与，形成一个容器，内外不相关；
- 规则：
  - 内部会是从上到下的
  - 盒子内部margin会发生重叠
  - BFC不会和float重叠
  - BFC不会影响外部 ，外部不会影响内部
  - 计算BFC高度时，浮动元素也参与计算
- 计算：
  - 根元素
  - 设置 overflow不是visible
  - 设置浮动float left/right
  - 设置定位position为absolute或者fixed
- 作用：两栏布局，清除浮动，防止margin重叠

#### IFC行内格式化上下文

- 块级元素仅包含内联级别元素

- 规则：

- 应用：

  - 水平居中：当一个块要在环境中水平居中时，设置其为 inline-block 则会在外层产生 IFC，通过 text-align 则可以使其水平居中。

  - 垂直居中：创建一个 IFC，用其中一个元素撑开父元素的高度，然后设置其 vertical-align: middle，其他行内元素则可以在此父元素下垂直居中。

## 三种文档流￥

#### 普通流

- 普通流中，盒子一个接着一个排列

- 块级格式化上下文里，盒子竖着排列；行内格式化上下文中，盒子横着排列

- 当position为static或relative，并且float为none时会触发普通流

- position：static，盒的位置是常规流布局里的位置

- position：relative，盒偏移位置由top、bottom、left、right属性定义。即使有偏移，仍然保留原有位置，其他常规流不能占用这个位置

#### 定位流

- 盒从常规流中被移除，不影响常规流的布局

- 当position为fixed或absolute时为绝对定位元素

- position：absolute，元素定位将相对于上级元素中最近的一个relative、fixed、absolute，如果没有则相对于body

#### 浮动流

- 左浮动元素尽量靠左靠上，右浮动同理

- 除非设置clear，否则普通流环绕在其周围

- 浮动元素不影响块级元素的布局，但会影响行内元素的布局，让其围绕在自己周围，撑大父级元素，从而间接影响块级元素布局

- 浮动元素最高点不超过当前行的最高点和其前面的浮动元素的最高点；不超过它的包含块，除非元素本身已经比包含块更宽

- 行内元素只出现在左浮动元素的右边或右浮动元素的左边

## 页面布局方式￥

|              方式               |                           布局特点                           |                           设计方法                           |                             缺点                             |
| :-----------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
|    静态布局（Static Layout）    | 无论浏览器尺寸具体多少，网页布局始终按照最初写代码时的布局来实现 | 居中布局，所有样式使用绝对宽度和高度px；屏幕宽高调整时通过滚动条来浏览被遮掩部分 |              不能根据用户的屏幕尺寸做出不同表现              |
|    流式布局（Liquid Layout）    | 屏幕分辨率变化时，页面内元素的大小会变化而布局不变；屏幕太大或太小都会导致元素无法正常显示 | 使用%定义宽度，px定义高度，配合max-width/min-width控制尺寸流动范围以免过大或过小影响阅读 | 如果屏幕尺寸跨度太大，那么在相对其原始设计而言过小或过大的屏幕上不能正常显示 |
|  自适应布局（Adaptive Layout）  |    屏幕分辨率变化时，页面内元素的位置会变化而大小不会变化    | 创建多个静态布局，每个静态布局对应一个屏幕分辨率范围，屏幕分辨率改变时，切换不同的静态布局（通过@media媒体查询给不同尺寸的设备切换不同样式） | 需要需要为不同的设备开发不同的页面，增加开发成本；当需求改变时可能会改动多套代码，流程繁琐。 |
| 响应式布局（Responsive Layout） | 每个屏幕分辨率下会有一个布局样式，即屏幕分辨率变化时，元素位置和大小都会变 |                   @media媒体查询+流式布局                    |           媒体查询是有限的，只能适应主流媒体的宽高           |
|     弹性布局（rem/em布局）      | 包裹文字的各元素的尺寸采用rem/em做单位（em相对其父元素，rem始终相对html大小，即页面根元素），页面主要划分区域的尺寸仍使用百分数或px | 一般使用rem，根据屏幕大小来控制html元素的font-size，即可自动改变所有用rem定义尺寸的元素的大小 | 只做到了宽度自适应，无法满足一些对高度或者元素间距要求较高的设计 |

- 流式布局VS响应式布局

  流式布局用于解决类似的设备不同分辨率之间的兼容（分辨率差异较小）；

  响应式布局用于解决不同设备之间不同分辨率的兼容（分辨率差异较大）

- 自适应布局VS响应式布局

  共同点：检测设备，根据不同设备采用不同CSS，且CSS都采用百分比确定宽度

  区别：响应式布局在不同设备上看上去是不一样的，会随着设备的改变而改变展示样式；自适应布局在所有的设备上看上去是一样的模板，不过是长度或者图片变小了

## 布局-flex   

[flex深度剖析-解决移动端适配问题！ - 掘金 (juejin.cn)](https://juejin.cn/post/6844904097850589191)

- 弹性布局，任何一个容器都可以指定为弹性布局；采用flex布局的属性称为flex容器，所有子元素称为容器的成员，flex项目。


> ```
>//比如这样以后div就具有弹性了
> div{
> display:flex;
> }
>  ```
> 

- 使用flex后，float、clear、vertical-align均失效；

- 在容器上：
  - flex-direction：主轴方向      flex-wrap：定义是否换行          
  - 简写为flex-flow
  - **justify-content：**主轴上的对齐方式：flex-start | flex-end | center | space-between | space-around;
  - **align-items：**一根交叉轴的对齐方式：flex-start | flex-end | center | baseline | stretch;
  - **align-content：** 多根轴线的对齐方式

- 项目上：
  - order:项目的排列顺序，数值越小越靠前
  - **flex-grow**：定义项目的放大比例，默认为0(有剩余空间也不放大)
  - **flex-shrink：**缩小比例，默认为1，可缩小
  - **flex-basis：**在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。
  - **align-self：**属性用于设置弹性元素自身在侧轴（纵轴）方向上的对齐方式。

- **flex：1 ；相当于flex：1 1 auto**； flex: 是flex-grow、flex-shrink 、flex-basis的简写，默认值为0 1 auto，即不可放大、可缩小、大小与容器元素大小一致，后两个属性可选。


## 浮动 清除浮动

#### 为什么清除浮动

#### 清除的方式

- 使用BFC
- 添加一个父元素，使父元素 clear：both
- 父元素添加 after：{display：block；clear：both}

#### 使用clear的原理



## 水平居中

- margin：auto

## 垂直居中

[1.5 万字 CSS 基础拾遗（核心知识、常见需求） - 掘金 (juejin.cn)](https://juejin.cn/post/6941206439624966152#heading-14)

- 固定宽高

> - 使用flex，justify-content：center；align-items：center；
> - 使用absolute  利用top left right bottom 0；进行垂直居中
> - absolute 和负margin 值为长宽一半
> - absolute 和calc

- 不固定宽高：

  - flex

  - absolute+transform

    <img src="C:\Users\cuiyue\AppData\Roaming\Typora\typora-user-images\image-20220410214254315.png" alt="image-20220410214254315" style="zoom:33%;" />

  - IFC 父元素 设置line-height  子元素 display：inline-block  ；vertical-align：center

  - 使用table-cell：

    <img src="C:\Users\cuiyue\AppData\Roaming\Typora\typora-user-images\image-20220410214225163.png" alt="image-20220410214225163" style="zoom: 33%;" />

  - 使用grid

    <img src="C:\Users\cuiyue\AppData\Roaming\Typora\typora-user-images\image-20220410214340826.png" alt="image-20220410214340826" style="zoom:33%;" />

## 移动端适配

> 1px边框：CSS写1px时，由于是逻辑像素，需要根据设备像素比映射到设备上为2px或者3px，由于每个设备的屏幕尺寸不一样，导致每个物理像素渲染出来的大小也不一样；
>
> 解决：
>
> 适配：
>
> <meta name="viewport" content="width=device-width; initial-scale=1; maximum-scale=1; minimum-scale=1; user-scalable=no;">
>
> 理想视口，通过设置上述配置将真实视口设定为理想视口；
>
> 解决适配方法：
>
> > **1.rem适配：**
> >
> > 备注：rem相对于html根元素的大小
> >
> > 页面初始化时，给根元素设置一个font-size，接下来的元素根据rem来布局，这样就可以保证在页面大小变化时，布局可以自适应。
> >
> > **2、vw/vh布局：**
> >
> > 备注：vh、vw方案即将视觉视口宽度 window.innerWidth和视觉视口高度 window.innerHeight 等分为 100 份。
> >
> > vh和vw需要做单位转化，而且px转换成vw不一定能完全整除，因此有一定的像素差。
> >
> > **3、px为主，vx和vxxx（vw/vh/vmax/vmin）为辅，搭配一些flex（推荐）**
> >
> > > 1. 在head 设置width=device-width的viewport‘
> > >
> > > 2. 在css中使用px
> > >
> > > 3. 在适当的场景使用flex布局，或者配合vw进行自适应
> > >
> > > 4. 在跨设备类型的时候（pc <-> 手机 <-> 平板）使用媒体查询
> > >
> > > 5. 在跨设备类型如果交互差异太大的情况，考虑分开项目开发

## 媒体查询

- 媒体查询时指针对不同的设备、特定的设备特征或者参数进行定制化的修改网站样式；

- 可以通过给link 添加media属性来指定样式文件对什么设备生效，不指定默认all。media：all /print/ screen/ speech

- 还可以通过@media 让CSS规则在特定的条件下才能生效。

  **@media** (min-width: 1000px) {}

- 

## CSS3基础

### :first-of-type :nth-of-type 

:first-of-type表示一组兄弟元素中其类型的第一个元素；



:last-of-type表示了在（它父元素的）子元素列表中，最后一个给定类型的元素。

```html
/*element:last-of-type { style properties }*/
p em:last-of-type {
  color: lime;
}
<p>
  <em>我没有颜色 :(</em><br>
  <strong>我没有颜色 :(</strong><br>
  <em>我有颜色 :D</em><br>
  <strong>我也没有颜色 :(</strong><br>
</p>

<p>
  <em>我没有颜色 :(</em><br>
  <span><em>我有颜色!</em></span><br>
  <strong>我没有颜色 :(</strong><br>
  <em>我有颜色 :D</em><br>
  <span>
    <em>我在子元素里，但没有颜色!</em><br>
    <span style="text-decoration:line-through;"> 我没有颜色 </span><br>
    <em>我却有颜色！</em><br>
  </span><br>
  <strong>我也没有颜色 :(</strong>
</p>
```

:nth-of-type 这个 [CSS 伪类](https://developer.mozilla.org/en-US/docs/CSS/Pseudo-classes)是针对具有一组兄弟节点的标签, 用 n 来筛选出在一组兄弟节点的位置。

```javascript
/* 在每组兄弟元素中选择第四个 <p> 元素 */
p:nth-of-type(4n) {
  color: lime;
}
```

#### CSS3规范 all属性

```
all属性：所有CSS属性的缩写。表示，所有的CSS属性都怎样怎样，但是，不包括unicode-bidi和direction这两个CSS属性。
支持三个CSS通用属性值：
initial：初始值 除了unicode-bidi和direction，均为初始值
inherit：继承 除了unicode-bidi和direction，均为继承的值
unset：取消设置，也就是当前元素浏览器或用户设置的CSS忽略，然后如果是具有继承特性的CSS，如color，则使用继承值
；如果是没有继承特性的CSS属性，如background-color，则使用初始值。
```



## 其他

### 电子邮件链接标签

< a href=mailto:sample@163.com>send email</a>

### 清除盒模型的外边距折叠：

```html
1. display: inline-block
2. float属性值不是"none"的元素
3. 绝对定位 position:absolute;
```

### CSS background-clip 属性

规定背景的绘制区域：

```css
div{
	background-color:yellow;
	background-clip:content-box;
}
```

### -webkit

#### chrome支持小于12px：

```
1.-webkit-text-size-adjust:none 新版本chrome不支持了
2.-webkit-transform:scale(0.5) 整个元素的缩放，如果是内联需要转换为块元素。
3.使用图片
```

#### 页面字体变清晰、变细

```
-webkit-font-smoothing:用于字体抗锯齿，使用后字体看起来会更清晰舒服。
```

### italic和oblique

```
italic是使用当前字体的斜体字体，oblique只是单纯地让文字倾斜。
如果当前字体没有对应的斜体字体，则退而求其次，解析为oblique，也就是单纯形状倾斜。
```

### position:fixed;在 android 下无效怎么处理？

```
默认的viweport是layout viewport，大于屏幕宽度，会出现滚动条左右滑动，fixed的元素是相对layout viewport来固定位置的，而不是移动端屏幕来固定位置的，所以会出现感觉fixed无效的情况。 可以改成ideal viewport
<metaname="viewport"content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-sca
le=1.0,user-scalable=no"/>
```

## CSS 解析

#### 解析规则

- 从上到下，从右到左，这样会提高查找选择器所对应的元素的效率（至于原因，有兴趣的童鞋可以自行去了解）。

#### CSS规范 分类方法



## CSS预处理/后处理

### 预处理

#### sass

```
/*编译sass*/
//单文件转换命令
sass input.scss output.css

//单文件监听命令
sass --watch input.scss:output.css

/*基本用法*/
/*1.可以使用变量：$变量 在字符串之中#{}*/
$blue : #1875e7;　
div { color : $blue;}
$side : left;
.rounded {　border-#{$side}-radius: 5px;　} 
/*2.选择器嵌套*/
//sass写法
#main p{
    color:#eee;
    .redbox{
        color:#000000
    }
}
//编译后
#main p{
    color:#eee;
}
#main p .redbox{
    color:#000000
}
/*3.属性嵌套*/
//SASS语法，注意在外边加冒号
.funy{
  font:{
    family:fantasy;
    size:30em;
    weight:bold;
  }
}
//编译后
.funy{
   font-family:fantasy;
   font-size:30em;
   font-weight:bold;
}
/*4.伪类嵌套*/
//SASS写法
a{
  background:black;
  &:hover{background:red;}
}
//编译后
a{
  background:black;
}
a:hover{background:red;}

/*混合器 Mixins允许创建一组可以在整个样式表中重复使用的样式，而不需要重新创建非语义类*/
//使用@mixin命令，定义一个代码块。
　　@mixin left {
　　　　float: left;
　　　　margin-left: 10px;
　　}
//使用@include命令，调用这个mixin。
　　div {
　　　　@include left;
　　}
```



### 后处理







