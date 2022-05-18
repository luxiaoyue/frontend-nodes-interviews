♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥

## html语义化

- 语义化是根据内容的结构化（内容语义化），选择合适的标签（代码语义化），为了开发者写出更优雅的代码的同时，让浏览器更好的解析；
- 正确的标签做正确的事，样式丢失也能够让页面呈现出清晰的结构；有利于SEO(和搜索引擎建立良好的沟通，有助于爬虫抓取更多有效信息)
- 便于团队开发和维护，语义化更具有可读性，遵循W3C标准的团队都遵循这个标准，可以减少差异化；

## HTML5新增内容

- 新增语义化标签：header、footer、nav、section、aside、article、main、figure
- 新增input类型：color、url、email、data、week、time、number、range、search、tel
- 存储：提供了sessionStorage、localStorage和本地离线存储
- 多媒体：音频元素audio、视频元素vedio、source、embed
- 地理定位、canvas画布、拖放API、多线程编程的webworker、websocket协议

## meta viewport作用

- meta用于描述页面的一些信息，比如针对搜索引擎和更新频度的描述和关键词。

- viewport：viewport是meta标签的name属性中可选值中的一个；值web页面上用户可见的区域，用于移动端页面设计；

- <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

- 

## 行内元素 块级元素

- 块元素是指从新的一行开始的元素，而内联元素不会另起一行。
- 常见的块级元素有：`<div>、<p>、<h1>-<h6>、<hr>、<form>、<ul>、<ol>、<table>`等标签元素
-  常见的内联元素有：`<span>、<a>、<img>、<br/>、<input>、<select>、<em>、<strong>`等标签

## html5拖放API

在HTML5之前，如果要实现拖放效果，一般会使用mousedown、mousemove和mouseup三个事件进行组合来模拟出拖拽效果，比较麻烦。而HTML5规范实现了原生拖放功能，使得元素拖放的实现更加方便和高效。

- dragstart：事件主体是被拖放元素，在开始拖放被拖放元素时触发

- drag：事件主体是被拖放元素，在正在拖放被拖放元素时触发

- dragenter：事件主体是目标元素，在被拖放元素进入目标元素时触发

- dragover：事件主体是目标元素，在被拖放元素在目标元素内移动时触发

- dragleave：事件主体是目标元素，在被拖放元素移出目标元素时触发

- drop：事件主体是目标元素，在目标元素完全接受被拖放元素时触发

- dragend：事件主体是被拖放元素，在整个拖放操作结束时触发

## link和import区别：

- link是HTML标签，import是CSS提供的；页面被加载时，link会同时被加载，import引用的css会等到页面加载完在加载；
- import只在IE5以上才可以识别，link是XHTML标签，无兼容问题；
- link方式的样式的权重高于import的权重

## src和href区别

- src用于替换当前元素，是source的缩写，指向外部资源的位置，指向的内容将会嵌入到文档中当前标签所在位置；
- href用于在当前文档和引用资源之间确立联系，是`Hypertext Reference`的缩写,指向网络资源所在的位置，建立和当前元素或文档之间的连接

## Doctype和<!Doctype html>有何作用

- 文档声明 DOCTYPE ：是对We浏览器的一个指令, 说明该页面是用哪个版本的HTML编写的. 这确保了不同的Web浏览器以相同的方式解析该网页

- HTML5及更高版本：**`<!DOCTYPE>`是必须的，需要放到整个文档的顶部，格式为`<!DOCTYPE html>`**。 组织浏览器在渲染时进入混杂模式，确保浏览器进入标准模式。

  混杂模式和标准模式

- 严格模式：排版和JS运作模式是以该浏览器支持的最高标准运行的

- 混杂模式：向后兼容，模拟老式浏览器，防止浏览器无法兼容页面

## HTML5离线存储

- 离线存储指的是：在用户没有与因特网连接时，可以正常访问站点或应用，在用户与因特网连接时，更新用户机器上的缓存文件。
- 原理：HTML5离线缓存是基于一个新建的 .appcache 文件的缓存机制(不是存储技术)，通过这个文件上的解析清单离线存储资源，这些资源就会像cookie一样被存储下来，之后当网络处于离线状态时，浏览器会通过被离线存储的数据进行页面展示。

- 

## head标签

- 包含<base>, <link>, <meta>, <script>, <style>, 以及 <title>。
- 其中title时head部分中唯一必需的元素。
- 作用：加载网站的样式；加载和运行脚本；为搜索提供关键字，文档描述，帮助做SEO；设定viewport，告诉设备如何进行渲染；

## meta属性

**1.Keywords (关键字)**

说明：告诉搜索引擎你网页的关键字是什么。

用法：<meta name="keywords" content="SEO优化,SEO优化教程,网站优化,搜索引擎优化教程">

**2.Description (网页描述)**

 说明：Description用来告诉搜索引擎你的网页主要内容。

用法：<meta name="description" content="学习研究搜索引擎优化网提供专业的SEO优化教程，收集整理SEO优化文章、SEO优化工具，为网络营销贡献出自己的一份力量。" />

**3.Robots (机器人向导)**

 说明：Robots用来告诉搜索机器人哪些页面需要索引，哪些页面不需要索引。Content的参数有all、none、index、noindex、follow、nofollow。默认是all。

 用法：<meta name="robots" content="All|None|Index|Noindex|Follow|Nofollow">

 all：文件将被检索，且页面上的链接可以被查询；

 none：文件将不被检索，且页面上的链接不可以被查询；(和 "noindex, no follow" 起相同作用)

 index：文件将被检索；（让robot/spider登录）

 follow：页面上的链接可以被查询；

 noindex：文件将不被检索，但页面上的链接可以被查询；(不让robot/spider登录)

nofollow：文件将不被检索，页面上的链接可以被查询。(不让robot/spider顺着此页的连接往下探找) 

**4.Author (作者)**

 说明：标注网页的作者或制作组

 用法：<meta name="author" content="mycodewind，mycodewind@qq.com">

注意：Content可以是：你或你的制作组的名字,或Email

**5.Copyright (版权)**

 说明：标注版权

 用法：<meta name="copyright" content="本网站版权归CSDN所有">

**6.charset** 

规定 HTML 文档的字符编码：例如常用的charset="UTF-8"

## 一些标签

- label标签：为鼠标用户改进了可用性，当用户点击标签中的文本时，浏览器就会自动将焦点转到和该标签相关联的控件上；
- 
