# JS面经重点

- [x] 数据类型
- [ ] 攻击
- [ ] DOM BOM
- [x] 事件循环 
- [x] promise
- [x] 原型 原型链
- [x] 继承
- [ ] 创建对象
- [x] this
- [x] 作用域
- [x] 闭包
- [x] 垃圾回收
- [ ] 预编译
- [x] 缓存

## 一、JS特点

#### **语言特点**

- 运行在客户端浏览器
- 不用编译，直接解析执行代码
- 弱类型语言，较为灵活
- 与操作系统无关，跨平台
- 脚本语言、解释型语言

#### **内存空间**

- 栈：存放变量
- 堆：存放复杂对象
- 池（一般归类于栈中）：存放常量

## 二、数据类型

[想自学JS吗？想提升JS底层原理吗？76张脑图带你彻底搞懂原生JS - 掘金 (juejin.cn)](https://juejin.cn/post/6844904166192578567#heading-11)

#### **数据分类**

基础数据类型：null undefined boolean number string，还有ES6添加的Symbol和ES10添加的BigInt

- Symbol：使用Symbol('xxx')创建一个Symbol对象，使用Symbol.for()创建共享的Symbol；每次新创建的Symbol都是唯一的，不会产生重复，可以使用Symbol作为唯一值 不会重复；可以作为私有属性，除了[`Object.getOwnPropertySymbols()` ](https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FJavaScript%2FReference%2FGlobal_Objects%2FObject%2FgetOwnPropertySymbols)函数获取，否则其他代码无法访问这个属性。

- BigInt：BigInt的写法是`数字`后面再加上`n`。它的数据类型是`bigint`。最大精度的整数是`Math.pow(2, 53) - 1`, 超过的话js就不能保证准确了

引用类型：Object 类型，数组 函数

#### 存储

> 栈：存放基础类型，指向引用类型的指针  堆：引用类型
>
> 栈：编译器管理的自动分配和回收；堆：程序员分配和释放
>
> 栈：先进后出 堆：优先级队列

#### undefine和undeclared

> undefined 没定义，变量初始化但是没有赋值  不会报错
>
> undeclare 未声明，会报错

#### null和undefine 

基础类型只有一个 本身

> null 基础类型 ，希望表示一个对象被人为的重置为空对象，而非一个变量最原始的状态 。 在内存里的表示就是，栈中的变量没有指向堆中的内存对象。使用typeof 得到的是object对象。
> - 如果定义的变量在将来用于保存对象，那么最好将该变量初始化为null；
> - 当一个数据不再需要使用时，我们最好通过将其值设置为null来释放其引用，这个做法叫做解除引用；
>
> undefined 基础类型  没定义，变量初始化但是没有赋值，undefined 表示一个变量自然的、最原始的状态值， 不会报错
>
> undefine：可以通过 void 0来获取

#### NaN 

不是一个数字，用于指出数字类型中的错误情况，非自反的 ，就是自己不等于自己

> isNaN:会先将...转换为数字，所有非数字的都返回true，影响判断
>
> Number.isNaN: 先判断是否是数字，在判断是不是NaN

#### 判断 instanceof  typeof

> instanceof  判断对象是否出现在实例的原型上  引用类型
>
> typeof A 是一个操作符，判断基础类型，返回的是一个字符串  typeof typeof  A  => string
>
> object.prototype.toString.call(A)最完美的解决方案；
>
> 返回的是字符串类型，例如Object.prototype.toString.call(1) == '[object Number]'  （true）

#### 转换为数字：

> Number()函数(转换为数字，不允许非数字字符出现)：string非数字NaN，  true  1   ， false  0    ，[] 0，[2] 2，[2,3] NaN 
>
> parseInt()函数(从左向右解析字符串，遇到非数字停止)：
>
> toNumber()函数：null  0,undefined nan,true 1,false 0,string同number方法，

for in   for of

> for in
>
> for of 

==和===

> ==：两边值类型不同时，强制转换成number再进行比较（null==undefined→true）
>
> ===：严格比较运算符，不会进行强制类型转换（+0===-0 true；NaN===NaN false）
>
> Object.is()：与===基本一致（Object.is(+0,-0) false；Object.is(NaN,NaN) true）

#### 其他函数

> parseInt()解析字符串，从左到右，遇到非数字停止
>
> Number()不允许出现非数字字符，否则失败会返回NaN

> eval 把字符串解析成JS代码并运行
>
> Math.ceil()向上取整
>
> Math.floor()向下取整
>
> Object.assign()方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。

## 三、函数

#### **纯函数与副作用**

- 纯函数：函数在相同的输入值，产生相同的输出，函数的输入输出以外的其他信息均隐藏或状态无关；
- 副作用：对调用函数产生了附加的影响；

#### **arguments和rest操作符**

- arguments对象是function中一个一个特殊的局部变量；arguments内部的元素，跟函数实际传入参数的数值一致；其index对应的数值，跟实际参数出传入的顺序也是一一对应的；函数每次执行有自己的arguments对象
- arguments的原型指向Object，是个类数组；
- rest parameter剩余参数：是个数组，必须放在最后；
- 异同：只包含没有对应形参的实参，而argumennts对象包含了传给函数的所有实参；arguments是类数组，剩余参数是数组；

#### **箭头函数 匿名函数 普通函数**

- 声明方式不同：
- this指向不同：普通函数this是指向函数运行时所在的对象，箭头函数没有自己的this，内部的this就是定义时作用域的this；  
- 箭头函数的this永远不会变，call apply bind都无法改变；
- 箭头函数没有原型，arguments，不能当成构造函数；

#### **立即执行函数(IIFE)**

- 声明 马上调用 立即销毁—因为没有引用了

```
(function(){
//执行语句
})();
```

- 特点：立即执行函数中的代码，又不会在内存中留下对该函数的引用；函数内部的所有变量都会被立即销毁（除非这些变量赋值给了包含作用域中的变量）
- 作用：创建独立的作用域；解决变量冲突；

![image-20220508180618444](C:\Users\cuiyue\AppData\Roaming\Typora\typora-user-images\image-20220508180618444.png)

#### **setTimeout、setInterval和requestAnimationFrame**

- setTimeout/clearTimeout : 延时执行参数指定代码
- setInterval/clearInterval  : 每隔一段时间执行指定代码
- setImmediate：事件插入到队尾执行
- 进入到队列的是具体的执行事件
- requestAnimationFrame : 在浏览器每次刷新页面之前执行：1. 会把每一帧中所有的DOM操作集中起来，在一次重绘或回流中就完成，并且重绘或回流的时间间隔紧紧跟随浏览器的刷新频率；2. 对于隐藏元素不会进行重绘或回流，减少了CPU、GPU和内存使用量；3. 由浏览器专门为动画提供的API，在运行时浏览器会自动优化方法的调用；页面如果不是激活状态，动画会暂停播放，有效节省了CPU开销
- requestAnimationFrame详解 ： https://www.jianshu.com/p/fa5512dfb4f5

#### apply call bind

- 都可以改变this的指向；
- 第一个参数都是this要指向的对象，如果没有或者参数为undefined/null则默认指向全局的window；
- 三者传参不同，call是参数列表 apply是数组  call和apply都是一次性传入，bind可以分多次传入；
- bind返回的绑定this之后的函数，便于稍后调用；call apply则是立即执行；
- **bind会返回一个新的函数，如果这个返回的新函数作为构造函数创建一个新的对象，那么此时this不在指向传入给bind的第一个参数，而是指向new创建的实例；**

#### 其他数学函数

parseInt()解析字符串，从左到右，遇到非数字停止

Number()不允许出现非数字字符，否则失败会返回NaN

eval 把字符串解析成JS代码并运行

Math.ceil()向上取整

Math.floor()向下取整

Object.assign()方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象

## 四、数组

#### 判断数组的方法

> 1、**instanceof操作符判断**  	arr  instanceof  Array
>
> 2 、**Array.prototype.isPrototypeOf(arr)**    一个对象是否存在于另一个对象的原型链上
>
> 3、**Object.getPrototypeOf(arr)** === Array.prototype
>
> 4、**Object.prototype.toString.call()** 
>
> 5、**Array.isArray**

#### 数组常用方法

|          方法           |                           说明                            | 改变 |
| :---------------------: | :-------------------------------------------------------: | ---- |
|          pop()          |                      添加元素到末尾                       | 改变 |
|         push()          |                       删除末尾元素                        | 改变 |
|        unshift()        |                      添加元素到头部                       | 改变 |
|         shift()         |                   删除数组最前面的元素                    | 改变 |
|        indexOf()        |                查看某个元素在数组中的位置                 | 不   |
|          map()          |                 遍历数组，返回一个新数组                  | 不   |
|        forEach()        |                   遍历数组，没有返回值                    | 无   |
|     some(func,this)     |     检测是否有元素满足条件，若有返回T，遇到一个就停止     | n    |
|         every()         |          检测所有的元素是否满足条件，均满足返回T          | n    |
|        filter()         |        筛选出符合条件的元素，返回条件为T的一个数组        | n    |
|    slice(bagin,end)     |         浅拷贝数组并返回拷贝后的新数组(左闭右开)          | 不   |
| splice(start,num,value) | 实现增删改操作(start开始，num个数，value插入或者替换元素) | 改变 |
|         from()          |     从一个类似数组或可迭代对象中创建一个新的数组实例      | 不   |
|  fill(value,start,end)  |        用一个固定值填充数组中[start,end)的全部元素        | 改变 |
|        concat()         |           数组连接，返回拼接好的，不影响之前的            | 不   |
|        reduce()         |                 迭代函数，案例：用来计数                  |      |

## 5.String

|         方法         |                             说明                             |
| :------------------: | :----------------------------------------------------------: |
|       split()        |                 把一个字符串分割成字符串数组                 |
|        join()        |                    将数组元素转换为字符串                    |
| substr(start,length) |   方法可在字符串中抽取从 *start*下标开始的指定数目的字符。   |
|   JSON.stringify()   | 方法用于将 JavaScript 值转换为 JSON 字符串，可用来判断空对象 |
|   JSON.parse(str)    |                  由JSON字符串转换为JSON对象                  |
|  str.toUpperCase()   |                             大写                             |
|  str.toLowerCase()   |                             小写                             |
|   repalceAll(a,b)    |                       用b来替换所有的a                       |

#### **<u>JS中string的startswith和indexof两种方法的区别**</u>

- str.startsWith(searchString, position)（判断是否以此字符串开始）

searchString：要搜素的子字符串，position（可选）：搜索searchString的开始位置，默认为0，能找到返回true，找不到返回false

- str.indexOf(searchValue, fromIndex)

searchValue：要搜索的字符串，fromIndex（可选）：开始查找的位置，默认为0，没找到返回-1，否则返回searchValue第一次出现的索引

## 6.对象

```
var person = {  name: "nick"};
console.log( person["name"] ); // "nick";
console.log( person.name ); // "nick";
```

- **方括号法**

可以通过变量访问对象的属性，而点表示法不可以；

须加双引号或单引号，可以是任何字符串。

- **点表示法**

可以访问对象的属性，但是不支持通过变量访问对象的属性。

这种方法较为直观，结合实际情况使用。

- 一个代码题

```
var a = { name: "Sam" };
var b = { name: "Tom" };
var d = ["name", "a"];
var c = 1;
var o = {};
o[a] = 1; //将a的值作为属性名 因为a是个对象，会通过getDefaultValue得到默认的值 为'[object Object]'
console.log(o);
o[b] = 2; //同 通过getDefaultValue 得到'[object Object]' 会对a的进行覆盖；
o[c] = 3; //c基本类型 c的值就是属性值
o[d] = 4; //array转换为字符串得到属性值
console.log(o); //{ '1': 3, '[object Object]': 2, 'name,a': 4 }
```

#### 属性

```
function Foo(name) {
    let age = 25              // 私有属性
    function sex() {          // 私有方法
      console.log('male')
    }

    this.name = name          // 实例属性
    this.run = function() {   // 实例方法
      console.log('run')
    }
}

Foo.home = 'Beijing'        // 静态属性
Foo.talk = function() {     // 静态方法
    console.log('talk')
}

Foo.prototype.height = 180        // 原型属性
Foo.prototype.swim = function() { // 原型方法
    console.log('swim')
}
```



|                |                                                              |
| -------------- | ------------------------------------------------------------ |
| 私有属性和方法 | 在函数体外不能直接通过属性访问符. 访问，若想访问可以使用闭包 |
| 静态属性和方法 | 定义在构造函数之上的属性，可以在函数体外直接访问。ES6 使用static来声明， |
| 实例属性和方法 | 是绑定到函数返回的实例上的，可以通过this定义，也可以在构造函数实例化之后的实例上定义；当然，函数得作为构造函数使用`new`调用。 |
| 原型属性和方法 | 是挂在函数的原型对象上的                                     |
|                | 实例的原型对象会关联到函数的原型对象，当访问实例的属性和方法时，如果实例上找不到，会通过原型委托到函数的原型上。 |
|                | 但是，当直接访问函数的静态属性和方法时，如果找不到，不会去函数的原型上查找 |

```
function Person(name){
    // 在构造函数内部的this上进行定义实例属性
    this.name = name;
}
// 在构造函数上定义静态属性
Person.sex = 'male';
// 在构造函数的原型对象上定义原型属性
Person.prototype.weight = 20
let person = new Person('wang');
// 在构造函数实例化以后的对象上进行定义实例属性
person.age = 23;

// 访问实例属性name
console.log(person.name) // wang
// 访问实例属性age
console.log(person.age) // 23
// 访问静态属性sex
console.log(Person.sex) // male
// 访问原型属性weight
console.log(person.weight) // 20
// 通过构造函数访问原型属性weight
console.log(Person.prototype.weight); // 20

```



## 7.数据结构

#### **map 键值对**

> let map=new Map()：存储键值对
>
> 存set  取get  有has  删除delete
>
> 元素的顺序就是插入的顺序

- set/get都是O(n)时间复杂度的
- ？？？？

#### **set 无重复列表**

> let set=new Set()：存储值
>
> 添加add  删除delete  有has  遍历forEach
> 
> Set 加入值时认为`NaN`等于自身,两个对象总是不相等的

#### **Map和Object的区别**

- object的键只能是字符串或者Symbol，Map的键可以是任意值；
- Map的键值对数量可以通过size获取，Object则需要通过Object.keys(obj).length类似的方式获取；
- Map的键值对有序，object无序；
- Object有自己的原型，原型链上的键名可能与对象的键名产生冲突；

## 7.ES6新特性

- **let  var const**

  | 类型  | 变量提升 | 暂时性死区 | 重复声明 | 初始值 |  作用域  |
  | :---: | :------: | :--------: | :------: | :----: | :------: |
  |  var  |    有    |     无     |    可    | 不需要 | 全局函数 |
  |  let  |    无    |     有     |    不    | 不需要 |    块    |
  | const |    无    |     有     |    不    |  需要  |    块    |
  > **1.变量提升**：变量可以在声明之前使用，优点：解析和预编译过程中的变量提升可以提高性能，让函数可以在执行时预先为变量分配栈空间；变量提升还可以提高JS代码的容错率，使一些不规范的代码也可以正常的执行；
  >
  > **2.const定义的对象**：指的是地址不可变，内部属性是可以改变的，若想要内部的属性值也不可以改变可以用使用**Object.freeze(obj)**冻结obj，就能使其内部的属性不可变
  >
  > let的原理：借助闭包和函数作用域来实现块级作用域。

- 模板字面量：方便将字符串和常量连接起来  `` ${}


- 解构赋值


- 函数扩展

  > 函数默认值,rest参数
  >
  > 箭头函数：
  >
  > > this：没有this对象，内部的this就是定义时所在的对象，若没有上下文函数对象，为window；使用call/apply/bind改变不了this的指向
  > >
  > > 没有自己的arguments，在全局中无，在函数作用域中arguments是外层函数的arguments，
  > >
  > > 可以用rest风格的参数，用于获取函数不定数量的参数数组
  > >
  > > 不可以用yield命令
  > >
  > > 没有原型对象

- 引入Class作为对象的模板，实现更好的面向对象编程

- 引入模块方便模块化编程

- 引入新的数据类型symbol，新的数据结构set和map
- promise
- await/async

## 8.事件模型

- 事件：用户操作页面时发生的交互动作，如点击等；事件被封装成一个event对象，包含了事件发生时的所有相关信息——属性，以及可以对事件进行的操作——方法。


- 阻止冒泡：event.stopPropagation() 或者 ie 下的方法 event.cancelBubble = true;

#### DOM0级


> 事件就是直接处理的监听事件，不传播，没有事件流的概念
>
> <input type="button" onclick="func1()" />
>
> 优点：兼容；缺点：逻辑与显示没有分离；事件只能绑定一个；没有委托

#### IE事件模型

> 事件处理：执行目标节点的监听函数
>
> 事件冒泡：从目标节点的位置向上冒泡到document对象，依次查看是否有监听事件需要完成
>
> attachEvent("type","handler")
>
> detachEvent("type","handler")

#### DOM2

> 事件捕获：从document向下查找到目标节点，一次检查经过的节点是否有监听函数，有则判断addEventListener类型是否需要执行，则执行
>
> 事件处理：顺序执行目标节点的监听函数
>
> 事件冒泡：从目标节点的位置向上冒泡到document对象，依次查看是否有监听事件需要完成
>
> 注意”所有的事件类型都会经历captruing phase但是只有部分事件会经历bubbling phase阶段,例如submit事件就不会被冒泡。

## 9.事件委托

- 原理：不给每个子节点单独设置事件监听器，而是设置在父结点上，然后利用冒泡原理设置每个子节点；

- 原因：事件处理程序的会不断的操作dom，引起浏览器的重绘和回流会越多，所以需要**减少dom操作**；而且，每一个事件处理函数，都是一个对象，还会占用内存；使用了事件委托，只对父级一个对象进行操作，与dom的操作只需要交互一次，减少了操作dom的次数，提高性能。**动态绑定事件**，因为事件绑定在父级元素，所以新增的元素同样也可以触发事件。

- 给父元素添加监听事件，监听子元素的冒泡，通过event.target获取到事件发生元素的事件，event.currentTarget代理事件的

  ```
  // 给父层元素绑定事件
  document.getElementById('list').addEventListener('click', function (e) {
    // 兼容性处理
    var event = e || window.event;
    var target = event.target || event.srcElement;
    // 判断是否匹配目标元素
    if (target.nodeName.toLocaleLowerCase === 'li') {
      console.log('the content is: ', target.innerHTML);
    }
  });
  ```


## 10.DOM BOM

> DOM文档对象模型，把一个文档当作对象来对待；
>
> BOM浏览器对象模型，把浏览器当作一个对象来对待；核心时window

#### <u>JS常用事件</u>

- **onchange内容改变事件**。当input、textarea、select的内容元素发生改变时，就会触发该事件；

- **onclick点击事件。**HTML元素被点击会触发

- **onfocus获得焦点事件。**焦点即鼠标的光标，当鼠标落在HTML元素时，就会触发。

- **onblur失去焦点事件。**该事件与focus事件刚好相反，当HTML元素失去光标时，就会触发该事件；

- **onload加载事件。**当页面载入完毕后执行JS代码，常用形式为<body onload="myFunction">

- **onkeydown键盘按键按下事件。**当键盘的某个键按下去时，就会触发该事件。这个事件需要元素处于被激活状态才会生效，例如，在input框输入内容时，每按下一个按键就会触发onkeydown事件。

- **onkeypress释放键盘按键事件。**与onkeydown相反，当按下键盘后，离开键盘按键时，就会触发onkeypress事件。例如，在input框输入内容时，按键弹起来时就会触发onkeypress事件。

- **mouseover/mouseout**鼠标移入元素子元素均会触发，有一个重复触发的过程；mouseenter/mouseleave鼠标移入元素本身会触发事件，不会冒泡；

- ##### **e.target 和 e.currentTarget区别：**

  e.target指向的是触发事件的元素e.currentTarget指向的是添加监听事件的元素；

- ##### **addeventListener和onclick的区别**

  1. addEventListener可以对同一个元素绑定多个事件，执行顺序从上到下依次执行。而onclick同一个元素只能绑定一个事件，如有多个，后面的事件会覆盖前面的事件。
  2. addEventListener的第三个参数为布尔类型，默认为false，也就是执行的冒泡机制，如为true，则执行捕获机制
  3. 在移除事件上，onclick使用的是指针指向null，例如document.onclick = null，而addEventListener则使用的是独有的移除方法removeListener（要使用此方法，addEventListener必须执行的是外部函数或存在函数名，不然则不能使用）

- ##### input元素的oninput事件和onchange事件的区别

  - oninput事件是在输入框中输入时就会触发
  - onchange事件是在输入框输入完内容后，输入框失焦后触发
  - onchange事件兼容性好，主流浏览器都支持

#### <u>显示区域</u>

- clientHeight：可视区域高度，不包含border和滚动条；
- offsetHeight：可视区域高度，包含border和滚动条；
- scrollHeight：所有区域高度，包含被滚动条隐藏的部分；
- clientTop：边框border的厚度；
- offsetTop：获取指定对象相对于版面或者布局中设置position属性的父容器顶端位置的距离；
- scrollTop：滚动后被隐藏的高度，获取对象最顶端与窗口中可见内容

#### 判断在不在页面显示区域内



## 11.事件循环 同步异步

- **微任务： promise   process.nextTick    mutationObserver**
  - Promise(async/await) => Promise并不是完全的同步，在promise中是同步任务，执行resolve或者reject回调的时候，此时是异步操作，会先将then/catch等放到微任务队列。当主栈完成后，才会再去调用resolve/reject方法执行，然后去执行微任务
  - process.nextTick （node中实现的api，把当前任务放到主栈最后执行，当主栈执行完，先执行nextTick，再到等待队列中找
  - MutationObserver  （创建并返回一个新的 MutationObserver 它会在指定的DOM发生变化时被调用。）

- **宏任务：script   setTimeout    setInterval     setImmediate    I/O    UI rendering**

- 执行过程：

  > 那最开始是执行script -宏任务  开始进去执行栈 执行，会执行里边的任务；遇到微任务会放到对应的微任务队列，
  > 如果遇到宏任务会放到宏任务队列；当函数调用栈执行完成，会去先执行微任务对接中任务，执行完微任务队列中，所有的任务之后，再去宏任务队列取下一个任务执行

- 为什么有同步还引入异步:

  > JS是单线程的，一些任务会阻塞，引起长时间的等待，这样页面就会产生卡顿，所以引入异步，在页面加载的过程中；异步加载资源。

- 为什么有宏任务还引入微任务

  > 而区分微任务和宏任务的根本原因是为了插队。由于微任务执行快，一次性可以执行很多个，在当前宏任务执行后立刻清空微任务可以达到伪同步的效果，这对视图渲染效果起到至关重要的作用。

## 12.原型 原型链

```
原型：构造函数内部有一个属性prototype对象，包含所有属性共享的值和方法，当使用构造函数生成对象时，对象内部会有指针指向构造函数的prototype,在ES5中这个属性值被称为原型。一般是不能获取到的，浏览器提供了_proto_来访问，ES5提供了Object.getPrototypeOf()方法。
原型链：当我们访问对象的一个方法，对象上没有，就会去原型上查找，原型对象还会有原型；就构成了一个链式结构，叫做原型链。
所有原型最后都会到object.prototype

//获取原型的方法
p._proto_
p.constructor.prototype
Object.hasPrototypeOf()
```

## 13.继承

```javascript
//1原型
function Father(){}
Father.prototype.name="father"
functuon Son(){}
Son.prototype=Object.create(Father.prototype);//!!!!!
son.prototype.constructor=son;
let s1=new son()

//2构造函数
function Father(){}
functuon Son(){
    Father.call(this);
}
let s1=new son()
//3原型链
function Father(){}
Father.prototype.name="father"
functuon Son(){}
Son.prototype=new father()
let s1=new son()
//4原型链构造函数组合
function Father(){}
Father.prototype.name="father"
functuon Son(){
    Father.call(this);//继承属性
}
Son.prototype = new Father();//继承方法
let s1=new son()

//5寄生
function createP(obj){
    var clone=Object(obj);
    clone.getName=function(){
        console.log("create");
    }
    return clone;
}
//6组合寄生
function inheritPrototype(subType, superType){
    var prototype = object(superType.prototype); // 创建原型对象是超类原型对象的一个实例对象  
    prototype.constructor = subType; // 弥补因为重写原型而失去的默认的 constructor 属性。 
    subType.prototype = prototype; // 实现原型继承
}
```

## 14.对象

创建对象：

<u>获得对象属性</u>:

- for(let i in obj)：遍历一个对象及其原型链中所有可枚举的属性；
- Object.keys(obj)：返回一个包含所有可枚举的属性名称的数组(values可以返回每个属性的属性值)
- Object.getOwnPropertyNames(obj)：返回一个包含不可枚举的属性的数组

## 15.New操作符

> 创建一个类的实例：创建一个空对象obj，将对象的原型指向构造函数的prototype
>
> 初始化实例：this指向这个对象，执行代码this赋值；
>
> 返回实例obj

new调用函数，return出来的是什么？

> 没有return，则返回的是这个新创建的对象；
>
> 返回值是非对象类型的数据，则还是返回新创建的对象；
>
> 返回的是对象类型的返回值，返回显示声明的对象；

```
function mynew(Func, ...args) {
    // 1.创建一个新对象
    const obj = {}
    // 2.新对象原型指向构造函数原型对象
    obj.__proto__ = Func.prototype
    // 3.将构建函数的this指向新对象
    let result = Func.apply(obj, args)
    // 4.根据返回值判断
    return result instanceof Object ? result : obj
}
```

## 16.this——call/apply/bind

[(5条消息) JavaScript——call、apply和bind方法的用法以及区别_yangwei_sir的博客-CSDN博客_callapplybind的区别](https://blog.csdn.net/yangwei234/article/details/84451165)

[2022年了你还不了解箭头函数与普通函数的区别吗？ - 掘金 (juejin.cn)](https://juejin.cn/post/7069943937577779214)

**this指向**

> this指向是在调用函数时根据执行上下文动态确定的，this指向最后调用他的对象；箭头函数的this就是定义的this的指向，运行的时候外层是什么就是什么；
>
> 规则：
>
> > 全局this，一般是window；在函数中，this永远指向最后调用他的那个对象；
> >
> > 构造函数new调用，this指向创建的实例
> >
> > call、apply、bind中显式调用，this绑定到指定参数对象
> >
> > 箭头函数:
> >
> > > 根据外层上下文绑定的this，定义时的this（继承外部环境且永远不变！！call()/.apply()/.bind()无法改变箭头函数中this的指向，这里注意下匿名函数的this指向window）
> >>
> > > 箭头函数的this无法通过bind、call、apply来直接修改;
> > >
> > > 字面量对象中没有函数上下文时,箭头函数不会绑定到对象上  this是window，因为对象不单独构成一个作用域
> 
> new >显式>隐式>默认
>
> 注意：
>
> > (function () { })()在这个上下文（执行环境）中匿名函数并没有绑定到任何一个对象中，意味着this指向window
>>
> > 再就是如果你把一个函数当成参数传递时，也会被隐式赋值.doFoo(obj.foo) obj的this是window

![在这里插入图片描述](https://img-blog.csdnimg.cn/2020070611041244.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDkzMjU1Mg==,size_16,color_FFFFFF,t_70)

**call/apply/bind**

- call()：第一个参数为要改变指向的对象，之后的参数arg1，arg2 ...，函数立即执行；
- apply()：第一个参数为要改变指向的对象，第二个参数为一个arguments，函数立即执行；
- bind()：返回一个新的函数，不会立即执行，当这个新函数被调用时，它的this值是传递给bind()的第一个参数；
- call和apply作用：改变this的指向；借用别的对象的方法；调用函数

## 17.作用域 作用域链

- 作用域Scope：就是一个独立的地盘，用来隔离变量，不同作用域下同名变量不会冲突。
- 全局作用域：最外层的函数和和在外面定义的变量；未定义直接赋值的变量；window对象的属性，属于全局作用域
- 函数作用域：是指声明在函数内部的变量；块语句，如if switch或者for while循环语句，不会创建新的作用域，其中var声明的变量会保留在已经存在的作用域中（变量提升）；
- 块级作用域：在引入块作用域之后，使用let const声明，所声明的变量在指定块的作用域外部无法被访问；
  - 创建：在一个函数内部；在一个花括号内部；
  - 特点：无变量提升，禁止重复声明；
- 作用域链：
  - 作用域链的本质上是一个指向变量对象的指针列表。变量对象是一个包含了执行环境中所有变量和函数的对象。
  - 作用域链的前端始终都是当前执行上下文的变量对象。全局执行上下文的变量对象（也就是全局对象）始终是作用域链的最后一个对象。
    - 当我们查找一个变量时，如果当前执行环境中没有找到，我们可以沿着作用域链向后查找。
- 作用域！=执行上下文 ：**执行上下文在运行时确定，随时可能改变；作用域在定义时就确定，并且不会改变**。

```
建立过程：
	1 全局上下文阶段，创建全局对象。
	2 将全局对象压入作用域链
	3 为全局对象中所有函数创建[[Scope]]属性，并将作用域链保存到该属性。（若无函数则跳过此步骤）
	4 每一个函数上下文阶段，复制函数的[[Scope]]属性，创建作用域链
	5 创建活动对象，并用 arguments 创建活动对象
	6 将活动对象压入当前上下文中的作用域链
	7 为活动对象中所有函数创建[[Scope]]属性，并将作用域链保存到该属性。（若无函数则跳过此步骤）
```

## 18.闭包

- 含义：闭包是可以访问另一个函数作用域的函数，最常见的就是在函数内部创建另一个函数；

- 应用：模仿块级作用域；在函数外部可以访问到函数内部的变量；创建了私有变量；使变量存在于内存中；

- 闭包中的变量并不保存在栈内存中，而是保存在堆内存中，所以函数调用之后闭包还能引用到函数内的变量；

- 好处：

  ①保护函数内的变量安全 ，实现封装，防止变量流入其他环境发生命名冲突

  ②在内存中维持一个变量，可以做缓存（但使用多了同时也是一项缺点，消耗内存）

  ③匿名自执行函数可以减少内存消耗

- 坏处：

  ①被引用的私有变量不能被销毁，增大了内存消耗，造成内存泄漏，解决方法是可以在使用完变量后手动为它赋值为null；

  ②其次由于闭包涉及跨域访问，所以会导致性能损失，我们可以通过把跨作用域变量存储在局部变量中，然后直接访问局部变量，来减轻对执行速度的影响

## 19.内存泄漏

- 定义：程序未能释放哪些已经不再使用的内存，造成内存的浪费；

- 原因

  - 由于未声明而意外产生的全局变量

  - 没有回收的定时器和回调函数

  - 闭包（闭包之间是共享作用域的）

  - DOM元素的引用

- 解决：

  - 减少不必要的全局变量，使用严格模式避免意外创建全局变量

  - 使用完数据后及时解除引用（DOM引用、闭包中的变量、定时器清除）

  - 组织好函数逻辑，避免死循环等造成浏览器卡顿和崩溃

## 20.垃圾回收



## 21.异步

js为什么是单线程的：为了避免复杂

- 回调函数 根据执行情况去调用回调函数，可能会亦称一层的嵌套，产生回调地狱的情况
- promise：支持链式调用，可以解决回调函数的嵌套问题，更加灵活；有pending resolved rejected三个状态 进入一个状态的过程是不可逆的；拥有 reject resolve then catch all race等方法；
- promise每次调用返回的都是一个新的promise实例；then返回的是一个结果则会被下一个then的成功回调，出现异常则走失败；在then使用了return 那么return的值会被Promise.resolve包装；then中可以不传递参数，会透传；
- promise存在问题：无法消除promise，错误需要通过回调函数捕获
- **generator** ES6提供的一种异步编程的解决方案，可以控制函数的执行，是一个状态机，封装了多个内部状态；使用yield可暂停，next方法可以启动，每次返回的是yield后的表达式结果；
- async/await：是基于promise实现的，不能用于普通的回调函数，是非阻塞的；函数加上async 该函数就会返回一个promise；

## 22.promise

- promise：支持链式调用，可以解决回调函数的嵌套问题，更加灵活；有pending resolved rejected三个状态 进入一个状态的过程是不可逆的；拥有 reject resolve then catch all race等方法；
- promise每次调用返回的都是一个新的promise实例；then返回的是一个结果则会被下一个then的成功回调，出现异常则走失败；在then使用了return 那么return的值会被Promise.resolve包装；then中可以不传递参数，会透传；
- promise存在问题：无法消除promise，错误需要通过回调函数捕获

## 23.Generator

```
function* helloWorldGenerator() {
  yield 'hello';
  return 'ending';
}
var hw = helloWorldGenerator();
hw.next()// { value: 'hello', done: false }
hw.next()// { value: 'ending', done: true }
hw.next()// { value: undefined, done: true }
```

- 每个yield都是一个状态，只有调用next方法才会进入下一个内部状态；每次遇到yield会暂停后面的操作，将紧跟在yield后面的那个表达式的值作为返回对象的value值，下一次调用next继续向下执行直到yield或者return为止，并将return的值作为对象的value；

- yield和return：相似之处在于都可以返回后面紧跟的值；不同之处可以多个yield 但只有一个return，遇到yield会暂停执行，下一次从这个位置继续 但是遇到return不具有记忆功能。

- 注意：yield只可用在generator函数内部，yield 如果用在表达式里 必须放在括号之中；

- yield表达式本身没有返回值，或者说总是返回undefind，**next方法的参数可以当作上一个yield表达式的返回值**；

  ```
  function* foo(x) {
    var y = 2 * (yield (x + 1));
    var z = yield (y / 3);
    return (x + y + z);
  }
  
  var a = foo(5);
  a.next() // Object{value:6, done:false}
  a.next() // Object{value:NaN, done:false} next没有带参数 导致yield(x+1)的返回值为undefined
  a.next() // Object{value:NaN, done:true}
  
  var b = foo(5);
  b.next() // { value:6, done:false } x=5 
  b.next(12) // { value:8, done:false }x=5 y=2*12=24 
  b.next(13) // { value:42, done:true }x=5 y=24 z=1
  ```

- for-of循环可以自动便利generator函数运行时生成的Iterator对象，直到遇到返回对象done属性为true时 循环会终止。

- //throw 还没学

## 24.预编译



## 25.模块化

#### 模块化开发：

```
一个模块是实现一个特定功能的一组方法，在最开始的时候，js只实现一些简单的功能，所以并没有模块化的概念，但是随着程序的越来越复杂，模块的概念越来越重要。
函数：独立作用域的特点，最原始的写法是使用函数是使用几个函数作为模块，但是这种方式容易造成全局变量的污染，而且模块间没有联系。
对象写法：将函数作为一个对象的方法来实现，这样解决了直接使用函数作为模块的一些缺点，但是会暴露所有模块成员，外部代码可以修改内部属性的值。
立即执行函数的写法，通过利用闭包来实现模块私有作用域的建立。
```

#### 模块规范

```
1.CommonJS：通过require来引入模块，通过module.exports定义模块的输出接口。这种模块的加载方案是服务端的解决方案，是同步的。
    // 定义模块math.js
    var basicNum = 0;
    function add(a, b) {
      return a + b;
    }
    module.exports = { //在这里写上需要向外暴露的函数、变量
      add: add,
      basicNum: basicNum
    }

    // 引用自定义的模块时，参数包含路径，可省略.js
    var math = require('./math');
    math.add(2, 5);

2.AMD：异步方式加载模块，模块加载不影响后面语句执行，所有依赖于这个模块的语句都定义在一个回调函数里，等到加载完在执行回调函数。
    // 定义math.js模块
    define(function () {
        var basicNum = 0;
        var add = function (x, y) {
            return x + y;
        };
        return {
            add: add,
            basicNum :basicNum
        };
    });
    // 引用模块，将模块放在[]内
    require(['jquery', 'math'],function($, math){
      var sum = math.add(10,20);
      $("#sum").html(sum);
    });
3.CMD：和AMD方案也是为了解决异步模块加载的问题。
    define(["a", "b", "c", "d", "e", "f"], function(a, b, c, d, e, f) { 
        // 等于在最前面声明并初始化了要用到的所有模块
        if (false) {
          // 即便没用到某个模块 b，但 b 还是提前执行了
          b.foo()
        } 
    });
4.ES6：使用 import 和 export 的形式来导入导出模块。

/** 定义模块 math.js **/
var basicNum = 0;
var add = function (a, b) {
    return a + b;
};
//定义输出
export default { basicNum, add };
//引入
import math from './math';
function test(ele) {
    ele.textContent = math.add(99 + math.basicNum);
}
```

#### AMD CMD区别

```
主要有两个方面的区别：
1.在模块定义时，对依赖的处理不同。AMD推崇前置，在模块定义时就声明其依赖的模块；CMD推崇就近依赖，只有在用到某个模块的时候再去require。
2.对依赖模块的执行时机处理不同，二者均是异步加载，AMD在模块加载完后就直接执行依赖模块 依赖模块的执行顺序和我们书写的顺序不一定一致；CMD在模块加载完之后并不执行，等所有依赖模块都加载好之后，进入回调函数逻辑，遇到require语句才执行对应的模块，执行顺序和书写顺序保持一致。
```

#### ES6模块 CommonJS模块

```
1.CommonJS模块输出的是一个值的拷贝，ES6模块输出的是值的引用。
2.CommonJS模块是运行时加载，ES6模块是编译时输出接口。
```

#### requireJS的核心原理

```
require.js 的核心原理是通过动态创建 script 脚本来异步引入模块，然后对每个脚本的 load 事件进行监听，如果每个脚本都加载完成了，再调用回调函数。
```

## 26.请求

### xhr ajax fetch axios

```
//xhr 
let xhr=new XMLHttpRequest();
xhr.open("GET",url,true);//规定请求地址
xhr.setResponseHeader();
xhr.onreadyStatechange=function(){//等待服务器响应
	if(this.readyState!=4) return;
	if(this.status==200){
		handle()
	}else{
		console.log()
	}
}
xhr.send(null)//发送请求
```

优点：

> 无刷新更新数据；异步通信
>
> 前端后端负载均衡；界面应用相分离

缺点：

> ajax不支持浏览器back按钮
>
> 安全问题 Aajax暴露了与服务器交互的细节
>
> 对搜索引擎的支持比较弱
>
> 破坏了Back与History后退按钮的正常行为等浏览器机制

json转换

> 把JSON格式转成对象：JSON.parse()     eval('(' + jsonstr + ')')  
>
> 把对象转成标准json：JSON.stringify()

get post

|      |                                   |          |
| ---- | --------------------------------- | -------- |
| get  | 简单便捷，效率高，有缓存，url可见 | 安全性低 |
| post | 没缓存，体积可以无限大，url不可见 |          |

使用post

> 　　1. 无法使用缓存文件（更新服务器上的文件或数据库）
> 　　　2. 向服务器发送大量数据（POST 没有数据量限制）
> 　　　3. 发送包含未知字符的用户输入时，POST 比 GET 更稳定也更可靠

axios链式调用

```
 export function request(config) {
   // 1.创建axios的实例
   const instance = axios.create({
     baseURL: 'http://123.207.32.32:8000',
     timeout: 5000
   })

   // 发送真正的网络请求
   instance(config.baseConfig)
     .then(res => {
       // console.log(res);
       config.success(res);
     })
     .catch(err => {
       // console.log(err);
       config.failure(err)
     })
 }
```



## DOM

#### 获取标签的方式

- document.getElementById,根据元素的`ID`，获得这个**元素对象**
- [context].getElementsByTagName([标签名]),
  - 指定的上下文中，基于元素的标签名获取一组**元素集合**
  - 获取的结果是`HTMLCollection`元素集合（类数组：数字作为索引，`length`代表长度）
  - 集合中的每一项都是一个单独的元素对象
- `[context].getElementsByClassName([样式类])`
  - 在指定上下文中，基于样式类名获取对应的**元素集合**
  - *集合就是集合，想操作某一项需要通过索引获取后在操作**
  - 不兼容`IE6～8`低版本浏览器
- document.getElementsByName([NAME 属性名])
  - 根据元素的`Name` 属性值，在整个文档中获取一组**元素集合**
  - 真实项目中也是基于它操作表单元素的，尤其是单选框或者复选框
  - 在`IE9`以下只对表单元素作用
- 获取HTML
  - `document.documentElement`
  - 获取整个`HTML`元素对象
  - `HTML`是页面的根节点
- 获取BODY
  - document.body
- 获取HEAD
  - document.head

#### DOM元素的增删改

- 创建 document.createElement()
- 增加 
  - [container].appendChild([元素])
  - [container].insertBefore([新元素]，[页面元素])
- 删除
  - [container].removeChild([元素])在指定容器溢出

#### 操作DOM元素的样式

- 元素.style.xxx
- 元素.className

![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/5/21/17237910c5c3f3b9~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)

#### document.write和innerHTML区别

```
document.write:会代替整个文档的内容，重写整个
innerHTML:
```

#### ele.getElementsByClassName和ele.querySelectorAll的区别

> ele.getElementsByClassName返回一个动态的；
>
> ele.querySelectorAll返回一个静态的

## 其他

#### **高频度触发事件的优化方案**

- 防抖：抖动结束的时间超过指定时间间隔时才执行任务(否则一次也不执行，因为一直在取消定时器)
- 节流：指定时间间隔内只执行一次任务(执行一次之后，才可以开启新的定时器)

## 跨域

#### 同源政策：

```
同源：两个域的协议、域名、端口号必须相同，否则不是一个域
限制三个方面：
1 当前域的js不能访问其他域下的cookie、localStorage和indexDB
2 当前域下的js不能操作其他域的dom
3 当前域下的ajax无法发送跨域请求
```

#### 跨域场景

<img src="C:\Users\cuiyue\AppData\Roaming\Typora\typora-user-images\image-20220312095514972.png" alt="image-20220312095514972" style="zoom: 50%;" />

#### 如何解决跨域问题

根据不同的目的来实现划分

- ajax无法提供跨域请求

  - jsonp

  - cors

    - 普通跨域请求：只服务端设置Access-Control-Allow-Origin即可，前端无须设置，若要带cookie请求：前后端都需要设置。

    - 前端设置

      - 原生ajax

        ```
        // 前端设置是否带cookie
        xhr.withCredentials = true;
        ```

      - axios

        ```
        axios.defaults.withCredentials = true
        ```

    - 后端设置

      - java

        ```
        /*
         * 导入包：import javax.servlet.http.HttpServletResponse;
         * 接口参数中定义：HttpServletResponse response
         */
        // 允许跨域访问的域名：若有端口需写全（协议+域名+端口），若没有端口末尾不用加'/'
        response.setHeader("Access-Control-Allow-Origin", "http://www.domain1.com"); 
        // 允许前端带认证cookie：启用此项后，上面的域名不能为'*'，必须指定具体的域名，否则浏览器会提示
        response.setHeader("Access-Control-Allow-Credentials", "true"); 
        // 提示OPTIONS预检时，后端需要设置的两个常用自定义头
        response.setHeader("Access-Control-Allow-Headers", "Content-Type,X-Requested-With");
        ```

      - nodejs

        ```
        var http = require('http');
        var server = http.createServer();
        var qs = require('querystring');
        
        server.on('request', function(req, res) {
            var postData = '';
        
            // 数据块接收中
            req.addListener('data', function(chunk) {
                postData += chunk;
            });
        
            // 数据接收完毕
            req.addListener('end', function() {
                postData = qs.parse(postData);
        
                // 跨域后台设置
                res.writeHead(200, {
                    'Access-Control-Allow-Credentials': 'true',     // 后端允许发送Cookie
                    'Access-Control-Allow-Origin': 'http://www.domain1.com',    // 允许访问的域（协议+域名+端口）
                    /* 
                     * 此处设置的cookie还是domain2的而非domain1，因为后端也不能跨域写cookie(nginx反向代理可以实现)，
                     * 但只要domain2中写入一次cookie认证，后面的跨域接口都能从domain2中获取cookie，从而实现所有的接口都能跨域访问
                     */
                    'Set-Cookie': 'l=a123456;Path=/;Domain=www.domain2.com;HttpOnly'  // HttpOnly的作用是让js无法读取cookie
                });
        
                res.write(JSON.stringify(postData));
                res.end();
            });
        });
        
        server.listen('8080');
        console.log('Server is running at port 8080...');
        ```

  - websocket

    - WebSocket protocol是HTML5一种新的协议。它实现了浏览器与服务器全双工通信，同时允许跨域通讯，是server push技术的一种很好的实现。

    - 原生WebSocket API使用起来不太方便，我们使用Socket.io，它很好地封装了webSocket接口，提供了更简单、灵活的接口，也对不支持webSocket的浏览器提供了向下兼容。

    - 实现：

      - 前端

        ```
        <div>user input：<input type="text"></div>
        <script src="https://cdn.bootcss.com/socket.io/2.2.0/socket.io.js"></script>
        <script>
        var socket = io('http://www.domain2.com:8080');
        
        // 连接成功处理
        socket.on('connect', function() {
            // 监听服务端消息
            socket.on('message', function(msg) {
                console.log('data from server: ---> ' + msg); 
            });
        
            // 监听服务端关闭
            socket.on('disconnect', function() { 
                console.log('Server socket has closed.'); 
            });
        });
        
        document.getElementsByTagName('input')[0].onblur = function() {
            socket.send(this.value);
        };
        </script>
        ```

      - 后端

        ```
        var http = require('http');
        var socket = require('socket.io');
        
        // 启http服务
        var server = http.createServer(function(req, res) {
            res.writeHead(200, {
                'Content-type': 'text/html'
            });
            res.end();
        });
        
        server.listen('8080');
        console.log('Server is running at port 8080...');
        
        // 监听socket连接
        socket.listen(server).on('connection', function(client) {
            // 接收信息
            client.on('message', function(msg) {
                client.send('hello：' + msg);
                console.log('data from client: ---> ' + msg);
            });
        
            // 断开处理
            client.on('disconnect', function() {
                console.log('Client socket has closed.'); 
            });
        });
        ```

        

  - 服务器代理nginx



