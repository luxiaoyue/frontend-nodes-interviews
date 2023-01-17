## DOM-文档对象类型

#### 1 节点层级

任何html或者xml都可以用DOM表示为一个由节点构成的层级结构。让标记可以表示为特定节点为根的树形结构。

![image-20220208160208583](C:\Users\cuiyue\AppData\Roaming\Typora\typora-user-images\image-20220208160208583.png)



![image-20220208160226508](C:\Users\cuiyue\AppData\Roaming\Typora\typora-user-images\image-20220208160226508.png)

document每个文档的根节点。

文档元素：<html>根节点的唯一子节点，是文档最外层的元素，每个文档只能有一个文档元素。

- ###### Node类型

  - nodeName nodeType  nodeValue

  - 节点关系 

    文档中的所有节点都与其他节点有关系---文档树类似于家谱   父子  同胞

    - 每个节点childNodes属性，

      - let firstChild = someNode.childNodes[0]; 

        let secondChild = someNode.childNodes.item(1); 

        let count = someNode.childNodes.length; 

      - 其中包含NodeList的实例。NodeList是一个类数组对象，用于存储可以按照可以按照位置存取的有序节点。

    - parentNode属性，指向DOM树的父元素；

    - childNodes列表中所有的节点都有同一个父元素，且彼此之间都是同胞；可以使用previousSibling 和 nextSibling 可以在这个列表的节点间导航。这个列表中第一个节点的 previousSibling 属性是 null，最后一个节点的nextSibling 属性也是 null。

    - 父节点第一个及最后一个子节点也有专门属性：firstChild 和 lastChild 分别指向childNodes 中的第一个和最后一个子节点。

      ![image-20220208171927970](C:\Users\cuiyue\AppData\Roaming\Typora\typora-user-images\image-20220208171927970.png)

    - hasChildNodes()，这个方法如果返回 true 则说明节点有一个或多个子节点。

  - 操纵节点

    - **appendChild() 用于在childNodes列表末尾添加节点**，添加新节点会更新相关的关系指针，包括父节点和之前的最后一个节点。

      let returnedNode = someNode.appendChild(newNode); 

      alert(returnedNode == newNode); // true 

      alert(someNode.lastChild == newNode); // true 

      把已经存在的节点传给 appendChild()，则这个节点会从之前的位置被转移到新位置。

    - **insertBefore() 用于把节点放到 childNodes 中的特定位置而不是末尾**，这个方法接收两个参数：**要插入的节点和参照节点**。

    - 参照节点是 null，则 insertBefore()与 appendChild()效果相同

    - removeChild() 移除节点，接受的参数是要移除的节点。

    - replaceChild()方法接收两个参数：要插入的节点和要替换的节点。使用 replaceChild()插入一个节点后，所有关系指针都会从被替换的节点复制过来。

    - 所有节点还共享了两个方法：

      - cloneNode()，会返回与调用它的节点一模一样的节点。cloneNode()方法接收一个布尔值参数，表示是否深复制。
      - normalize() 是处理文档子树中的文本节点。

- ###### Document文档对象

  在浏览器中，文档对象 document 是HTMLDocument 的实例（HTMLDocument 继承 Document），表示整个 HTML 页面。document 是 window对象的属性，因此是一个全局对象。

  document类型的节点有如下特征：

   nodeType 等于 9； 

   nodeName 值为"#document"； 

   nodeValue 值为 null； 

   parentNode 值为 null； 

   ownerDocument 值为 null； 

   子节点可以是 DocumentType（最多一个）、Element（最多一个）、ProcessingInstruction

  或 Comment 类型。

  - 文档子节点

    - documentElement属性 始终指向HTML页面中的<html>元素，相较于document.childNodes更直接更快访问html元素。

      let html = document.documentElement; // 取得对<html>的引用

      alert(html === document.childNodes[0]); // true 

      alert(html === document.firstChild); // true 

    - body属性 指向<body>元素

      let body = document.body; // 取得对<body>的引用

    - DocumentType   <!doctype>标签是文档中独立的部分，其信息可以通过 doctype 属性

      let doctype = document.doctype; // 取得对<!doctype>的引用

    - 严格来讲出现在<html>元素外面的注释也是文档的子节点，它们的类型是 Comment。不过，

      由于浏览器实现不同，这些注释不一定能被识别，或者表现可能不一致。

  - 文档信息

    document作为HTMLDocument的实例，还有一些标准Document对象上没有的属性。

    - title 包含title元素中的文本
    - URL 包含当前页面完整的URL——地址栏URL
    - domain 包含页面的域名
    - referrer  链接到当前页面的那个页面的URL ，如果当前页面没有来源，则referrer属性包含空字符串。

  - 定位元素  使用DOM

    - getElementById(‘元素ID’)  返回查找到的元素，没有返回空，多个返回第一个

      ```html
      <div id="myDiv">Some text</div> 
      可以使用如下代码取得这个元素：
      let div = document.getElementById("myDiv"); // 取得对这个<div>元素的引用
      ```

    - getElementsByTagName(‘获取元素的标签名’)   返回包含零个或者多个元素的NodeList

      ```javascript
      let images = document.getElementsByTagName("img");
      alert(images.length); // 图片数量
      alert(images[0].src); // 第一张图片的 src 属性
      alert(images.item(0).src); // 同上
      ```

    - namedItem() 可通过标签的name属性取得某一项的引用

      ```html
      <img src="myimage.gif" name="myImage"> 
      //那么也可以像这样从 images 中取得对这个<img>元素的引用：
      let myImage = images.namedItem("myImage");
      ```

    - 还提供了除了索引之外的另一种获取列表项的方式，从而为取得元素提供了便利。

      - 对于 name 属性的元素，还可以直接使用中括号来获取，如下面的例子所示：

        ```javascript
        let myImage = images["myImage"]; 
        ```

    - getElementsByName()  返回具有给定name属性的所有元素

- ###### Element

- ###### Text

- ###### Comment

- ###### CDATASection

- ###### DocumentType

- ###### DocumentFragment

- ###### Attr

#### 2 DOM编程

#### 3 MutationObserver接口













