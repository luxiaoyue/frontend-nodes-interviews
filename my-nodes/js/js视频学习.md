# 数据类型

### 值类型与对象

```javascript
let hd = "houdunren";//使用字面量
let cms = new String("hdcms"); //使用对象方法
console.log(typeof hd, typeof cms); //string object
```

### String

- 定义

  ```javascript
  let hd = new String('houdunren');
  // 获取字符串长度
  console.log(hd.length);
  // 获取字符串
  console.log(hd.toString());
  
  let content = '后盾人';
  console.log(content);
  ```

  

- 转义 
  - js在string中输出 “ \ ‘  等之前需要加\ 进行转义；
  - js串中，\t来进行空格的显示
  - html中，无论多少个\t均显示一个，需要用&nbsp对象进行页面空格的显示

- 字符串拼接：

  - 连接运算符

    ```javascript
    let year = 2010,
    name = '后盾人';
    console.log(name + '成立于' + year + '年');
    ```

  - 模板字面量

    ```javascript
    let url = 'houdunren.com';
    console.log(`后盾人网址是${url}`); //后盾人网址是houdunren.com
    console.log(`后盾人网址是${3+5}`);
    ```

    模板字面量支持嵌套

    ```javascript
    let lessons = [
    	{title: '媒体查询响应式布局'},{title: 'FLEX 弹性盒模型'},{title: 'GRID 栅格系统'}
    ];
    
    function template() {
      return `<ul>
          ${lessons.map((item)=>`
              <li>${item.title}</li>
          `).join('')}
      </ul>`;
    }
    document.body.innerHTML = template();
    ```

    标签模板实例：

    ![image-20220210214600110](C:\Users\cuiyue\AppData\Roaming\Typora\typora-user-images\image-20220210214600110.png)

- 字符串基本函数使用

  - .length

  - toUpperCase()

  - toLowerCase()

  - trim() 删除字符串左右空白

    ![image-20220211165739297](C:\Users\cuiyue\AppData\Roaming\Typora\typora-user-images\image-20220211165739297.png)

  - trimLeft 删除左侧空白

  - trimright 删除右侧空白

  - charAt() 从0开始的位置获取字符

  - 使用数字索引
  
    ```text
    console.log('houdunren'[3])
    ```

    ![image-20220211170217532](C:\Users\cuiyue\AppData\Roaming\Typora\typora-user-images\image-20220211170217532.png)

  - 截取字符串

    - slice substr substring  填写一个参数 表示从此位置开始截取

    - slice 第二个参数为截取的结束位置   -3从后边位置开始
  
    - substr 第二个参数指定获取字符数量   -3从0位置开始
  
    - substring  第二个参数为截取的结束位置   -3从后边位置开始算
    
      ```javascript
      let hd = 'houdunren.com';
      console.log(hd.slice(3)); //dunren.com
      console.log(hd.substr(3)); //dunren.com
      console.log(hd.substring(3)); //dunren.com
      
      console.log(hd.slice(3, 6)); //dun
      console.log(hd.substring(3, 6)); //dun
      console.log(hd.substring(3, 0)); //hou 较小的做为起始位置
      console.log(hd.substr(3, 6)); //dunren
      
      console.log(hd.slice(3, -1)); //dunren.co 第二个为负数表示从后面算的字符
      console.log(hd.slice(-2));//om 从末尾取
      console.log(hd.substring(3, -9)); //hou 负数转为0
      console.log(hd.substr(-3, 2)); //co 从后面第三个开始取两个
      ```
    
  - 字符串检索
  
    - indexOf('o') 默认从第一个开始；找不到返回-1；
  
  - 类型转换
  
    - string —number
  
      ```
      
      ```
  
    - number—string
  
      ```javascript
      let hd = 99 + '';
      console.log(typeof hd); //string
      ```
  
    - string—数组
  
      ```javascript
      console.log("1,2,3".split(",")); //[1,2,3]
      ```
  
      



### Boolean

- 定义

  - 使用对象形式创建

    ```javascript
    let bool=new Boolean(true);
    ```

  - 使用字面量创建

    ```javascript
    let bool=true;
    ```

- 隐式转换

  - 使用转换

    基本所有的类型都可以隐式的转换为Boolean类型

    ![image-20220212211212421](C:\Users\cuiyue\AppData\Roaming\Typora\typora-user-images\image-20220212211212421.png)

    

    

    ```javascript
    let number=99;
    if(number)//number 会自动转换为boolean 为true
    //false  0    true   1
    console.log(number===true)//false true转换为数值
    
    //字符串与Boolean比较时，两边都会转化为数值类型
    let hd='0'
    console.log(hd===false)//true
    let hd='1'
    console.log(hd===true)//true
    let hd='11'
    console.log(hd===true)//false
    console.log(Bolean(hd))//true
    //比较
    console.log(Number("houdunren")); //NaN
    console.log(Boolean("houdunren")); //true
    console.log("houdunren" == true); //false
    console.log("1" == true); //true
    //数组的表现和字符串原理一样，会先转化为数值
    console.log(Number([])); //0
    console.log(Number([3])); //3
    console.log(Number([1, 2, 3])); //NaN
    console.log([] == false); //true
    console.log([1] == true); //true
    console.log([1, 2, 3] == true); //false
    //引用类型转换：数组 对象 是真
    //数值除了0，为真
    //字符串除了空，是真
    ```

- 显示转换

  - 使用！ 将布尔类型取反；！！转换为布尔类型

    ```javascript
    let hd = '';
    console.log(!!hd); //false
    hd = 0;
    console.log(!!hd); //false
    hd = null;
    console.log(!!hd); //false
    hd = new Date("2020-2-22 10:33");
    console.log(!!hd); //true
    ```

  - 使用Boolean函数 显示转换为

    ```javascript
    let hd = '';
    console.log(Boolean(hd)); //false
    hd = 0;
    console.log(Boolean(hd)); //false
    hd = null;
    console.log(Boolean(hd)); //false
    hd = new Date("2020-2-22 10:33");
    console.log(Boolean(hd)); //true
    ```

- 实际操作

### Number

- 声名

  - 显示

    ```javascript
    let hd = new Number(3);
    console.log(hd+3); //6
    ```

  - 字面量：Number用于表示整数和浮点数，数字是 `Number`实例化的对象，可以使用对象提供的丰富方法。

    ```javascript
    let num = 99;
    console.log(typeof num);
    ```

- 基本函数

  - isInteger 判断是否是整数
  - toFixed  对于指定返回的

- NaN

  - 表示无效的数值

    ```javascript
    console.log(Number("houdunren")); //NaN
    console.log(2 / 'houdunren'); //NaN
    ```

  - NaN不能用==比较，使用以下代码来判断结果是否正确

    ```javascript
    var res = 2 / 'houdunren';
    if (Number.isNaN(res)) {
    	console.log('Error');
    }
    ```

  - 也可以用Object.is

    ```javascript
    var res = 2 / 'houdunren';
    console.log(Object.is(res, NaN));
    ```

- 类型转换

  - number函数

    ```javascript
    console.log(Number('houdunren')); //NaN
    console.log(Number(true));	//1
    console.log(Number(false));	//0
    console.log(Number('9'));	//9
    console.log(Number([]));	//0
    console.log(Number([5]));	//5
    console.log(Number([5, 2]));	//NaN
    console.log(Number({}));	//NaN
    ```

  - parseInt

    ```javascript
    console.log(parseInt('  99houdunren'));	//99
    console.log(parseInt('18.55'));	//18
    ```

  - parseFloat

    ```javascript
    console.log(parseFloat('  99houdunren'));	//99
    console.log(parseFloat('18.55'));	//18.55
    ```

- 舍入操作 toFixed可对数值舍入操作，参数指定保存的小数

  ```javascript
  console.log(1.556.toFixed(2)); //1.56
  ```

- 浮点精度

### Math数学计算

- 取极限值

  - 取最大最小

    ```javascript
    console.log(Math.min(1, 2, 3));
    console.log(Math.max(1, 2, 3));
    ```

  - apply从数组取值

    ```javascript
    console.log(Math.max.apply(Math, [1, 2, 3]));
    console.log(Math.max.apply(null, [1, 2, 3]));
    ```

- 舍入操作

  - 向上取整

  - 向下取整

  - 四舍五入

    ```javascript
    console.log(Math.ceil(1.111)); //2
    console.log(Math.floor(1.555)); //1
    console.log(Math.round(1.5)); //2
    ```

- random

  ```javascript
  //random随机数返回0-1的随机数(包括0，不包括1)
  Math.random()
  //取0-5的随机数不包括5
  console.log(Math.floor(Math.random() * 5));
  //0-5 包括5
  console.log(Math.floor(Math.random() * (5+1)));
  //2-5包括5  Math.floor(Math.random() * max-min+1)+min
  console.log(Math.floor(Math.random() * 5-2+1)+2);
  //数组随机点名
  let stus = ['小明', '张三', '王五', '爱情'];
  let pos = Math.floor(Math.random() * stus.length);
  console.log(stus[pos]);
  //封装成函数 start end 数组的个数1开始
  function arrayRandomValue(array,start=0,end){
      end=end?end:array.length;
      start--
      const index=start+Math.floor(Math.random()*(end-start))
      return array[index]
  }
  ```

### Date

- 定义

  ```javascript
  let now = new Date();
  console.log(now);
  console.log(typeof date); //object
  console.log(now * 1); //获取时间戳
  
  //直接使用函数获取当前时间
  let now = Date();
  console.log(now);
  console.log(typeof now); //string
  console.log(now * 1); //Nan
  //获取当前时间戳单位毫秒
  console.log(Date.now());
  //创建时间
  let now = new Date('2028-02-22 03:25:02');
  console.log(now);
  
  now = new Date(2028, 4, 5, 1, 22, 16);
  console.log(now);
  
  let info = [2020, 2, 20, 10, 15, 32];
  let date = new Date(...info);
  console.dir(date);
  ```

- 类型转换

  ```
  //标准时间和时间戳的转换
  //转换为时间戳
  let hd = new Date("2020-2-22 10:33:12");
  console.log(hd * 1);
  console.log(Number(hd));
  console.log(hd.valueOf())
  console.log(date.getTime());
  
  //转换为标准日期
  const param = [1990, 2, 22, 13, 22, 19];
  const date = new Date(...param);
  const timestamp = date.getTime();
  console.log(timestamp);
  console.log(new Date(timestamp));
  ```

- 对象方法

  ```
  //格式化输出
  
  //封装函数
  function dateFormat(date, format = "YYYY-MM-DD HH:mm:ss") {
    const config = {
      YYYY: date.getFullYear(),
      MM: date.getMonth() + 1,
      DD: date.getDate(),
      HH: date.getHours(),
      mm: date.getMinutes(),
      ss: date.getSeconds()
    };
    for (const key in config) {
      format = format.replace(key, config[key]);
    }
    return format;
  }
  console.log(dateFormat(new Date(), "YYYY年MM月DD日"));
  ```

  

- moments

# 第四章——数组

### 声明数组

- 对象方式

  ```
  console.log(new Array(1, '后盾人', 'hdcms')); //[1, "后盾人", "hdcms"]
  ```

- 字面量

  ```
  const array = ["hdcms", "houdunren"];
  ```

- 多维

  ```
  const array = [["hdcms"], ["houdunren"]];
  console.log(array[1][0]);
  
  ```

- **数组是引用类型可以用const声名并且修改它的值**

  ```
  const array = ["hdcms", "houdunren"];
  array.push("houdunwang");
  console.log(array);
  //.length 
  let hd = ["后盾人", "hdcms"];
  console.log(hd.length); //2
  //数组可以设置任何值，使用索引添加数组
  let hd = ["后盾人"];
  hd[1] = "hdcms";
  //直接设置3号数组，会将1/2设置为空
  let hd = ["后盾人"];
  hd[3] = "hdcms";
  console.log(hd.length); //4
  //
  let hd = new Array(3);
  console.log(hd.length);
  console.log(hd);
  ```

- 使用`Array.of` 与 `new Array` 不同是设置一个参数时不会创建空元素数组

  ```
  let hd = Array.of(3);
  console.log(hd); //[3]
  
  hd = Array.of(1, 2, 3);
  console.log(hd); //[1, 2, 3]
  ```

- 使用 isArray 判断是否是数组

### 类型转换

- 字符串

  ```
  //使用toString转换
  console.log(([1, 2, 3]).toString()); // 1,2,3
  //String()方法
  console.log(String([1, 2, 3]));
  //使用join()
  console.log([1, 2, 3].join("-"));//1-2-3
  
  //把其他转换为数组
  let str="hdcms"
  console.log(str.split(""))//["h","d","m","s"]
  
  ```

- Array.from

  - 使用`Array.from`可将类数组转换为数组，类数组指包含 `length` 属性或可迭代的对象。

    - 第一个参数为要转换的数据，第二个参数为类似于map函数的回调方法

    ```
    let str = '后盾人';
    console.log(Array.from(str)); //["后", "盾", "人"]
    ```

  - 为对象设置`length`属性后也可以转换为数组，但要下标为数值或数值字符串

    ```
    let user = {
      0: '后盾人',
      '1': 18,
      length: 2
    };
    console.log(Array.from(user)); //["后盾人", 18]
    ```

  - DOM元素转换为数组后来使用数组的函数，第二个函数类似于map函数的方法，可以对数组元素进行处理

    ```
    <body>
        <button message="后盾人">button</button>
        <button message="hdcms">button</button>
    </body>
    
    <script>
        let btns = document.querySelectorAll('button');
        console.log(btns); //包含length属性
        Array.from(btns, (item) => {
            item.style.background = 'red';
        });
    </script>
    ```

- 展开语法

### 展开语法

- 数组合并

  ```javascript
  let a = [1, 2, 3];
  let b = ['a', '后盾人', ...a];
  console.log(b); //["a", "后盾人", 1, 2, 3]
  ```

- 函数参数

  ```javascript
  //使用展示语法可以替代 arguments 来接收任意数量的参数
  function hd(...args) {
    console.log(args);
  }
  hd(1, 2, 3, "后盾人"); //[1, 2, 3, "后盾人"]
  //也可以用于接收部分参数
  function hd(site, ...args) {
    console.log(site, args); //后盾人 (3) [1, 2, 3]
  }
  hd("后盾人", 1, 2, 3);
  ```

- 节点转换

  ```
  <body>
      <button message="后盾人">button</button>
      <button message="hdcms">button</button>
  </body>
  
  <script>
      let btns = document.querySelectorAll('button');
      //btns先转换为数组
      Array.from(btns).map((item) => {
          console.log(item); 
      })
      //使用原型链中的方法
      Array.prototype.map.call(btns,(item) => {
          console.log(item); 
      })
      //。。。语法
      let divs = document.querySelectorAll("div");
    	[...divs].map(function(div) {
      div.addEventListener("click", function() {
        this.classList.toggle("hide");
      });
    });
  </script>
  ```

### 解构赋值

- 解构：是一种更简洁的赋值特性，可以理解为分解一个数据的结构

- 解构：把右侧的值平均分配到左侧；

- 基本使用

  ```javascript
  //数组使用
  let [name, url] = ['后盾人', 'houdunren.com'];
  console.log(name);
  //解构赋值数组
  function hd() {
  	return ['houdunren', 'hdcms'];
  }
  let [a, b] = hd();
  console.log(a); //houdunren
  
  //剩余解构指用一个变量来接收剩余参数
  //放在变量位置 吸收
  let [a, ...b] = ['后盾人', 'houdunren', 'hdcms'];
  console.log(b);
  //放在值位置  散开
  let temp=["cms",...b]
  console.log(temp)//["cms","houdunren","hdcms"]
  //使用空进行占位
  let [, url] = ["hdcms.com", "houdunren.com"];
  console.log(url); 
  ```

- 严格模式

- 简洁定义

- 默认值

  ```
  let [name, site = 'hdcms'] = ['后盾人'];
  console.log(site); //hdcms
  ```

- 函数参数

  ```
  function hd([a, b]) {
  	console.log(a, b);
  }
  hd(['后盾人', 'hdcms']);
  ```

### 管理元素

- 基本使用

- 扩展语法

  ```javascript
  //追加
  let arr = [1, "后盾人", "hdcms"];
  arr[arr.length] = 'houdunren.com';
  console.log(arr); //[1, "后盾人", "hdcms", "houdunren.com"]
  
  //使用展示语法批量添加元素
  let arr = ["后盾人", "hdcms"];
  let hd = ["houdunren"];
  hd.push(...arr);
  console.log(hd); //["houdunren", "后盾人", "hdcms"]
  
  /*
  	push 压入元素，直接改变元数组，返回值为数组元素数量
  */
      let arr = ["后盾人", "hdcms"];
      console.log(arr.push('向军大叔', 'houdunren')); //4
      console.log(arr); //["后盾人", "hdcms", "向军大叔", "houdunren"]
  
  /*
  	pop 弹出末尾元素，直接改变原数组，返回
  */
      let arr = ["后盾人", "hdcms"];
      console.log(arr.pop()); //hdcms
      console.log(arr); //["后盾人"]
  
  /*
  	shift  从数组前面取出一个元素
  */
      let arr = ["后盾人", "hdcms"];
      console.log(arr.shift()); //后盾人
      console.log(arr); //["hdcms"]
  
  /*
  	unshift  从数组前面添加元素
  */
      let arr = ["后盾人", "hdcms"];
      console.log(arr.unshift('向军大叔', 'houdunren')); //4
      console.log(arr); //["向军大叔", "houdunren", "后盾人", "hdcms"]
  
  /*
  	fill  填充
  */
  	console.log([1, 2, 3, 4].fill("后盾人", 1, 2)); //[1, "后盾人", 3, 4]
  
  /*	slice  
  	数组中截取部分元素组合成新数组（并不会改变原数组），
  	不传第二个参数时截取到数组的最后元素。
  */
      let arr = [0, 1, 2, 3, 4, 5, 6];
      console.log(arr.slice(1, 3)); // [1,2]
      let arr = [0, 1, 2, 3, 4, 5, 6];
      console.log(arr.slice()); //[0, 1, 2, 3, 4, 5, 6]
  
  /*	splice  
  	可以添加、删除、替换数组中的元素，
  	会对原数组进行改变，返回值为删除的元素。
  */
      let arr = [0, 1, 2, 3, 4, 5, 6];
      console.log(arr.splice(1, 3)); //返回删除的元素 [1, 2, 3] 
      console.log(arr); //删除数据后的原数组 [0, 4, 5, 6]
  	//通过指定第三个参数来设置在删除位置添加的元素
  	let arr = [0, 1, 2, 3, 4, 5, 6];
  	//替换
      console.log(arr.splice(1, 3, 'hdcms', '后盾人')); //[1, 2, 3]
      console.log(arr); //[0, "hdcms", "后盾人", 4, 5, 6]
  	//向末尾添加元素
  	let arr = [0, 1, 2, 3, 4, 5, 6];
  	console.log(arr.splice(arr.length, 0, 'hdcms', '后盾人')); //[]
  	console.log(arr); // [0, 1, 2, 3, 4, 5, 6, "hdcms", "后盾人"]
  	//向数组前添加元素
  	let arr = [0, 1, 2, 3, 4, 5, 6];
  	console.log(arr.splice(0, 0, 'hdcms', '后盾人')); //[]
  	console.log(arr); //["hdcms", "后盾人", 0, 1, 2, 3, 4, 5, 6]
  
  //清空数组
  	let hd=[1,2,3,4]
      let arr=hd;
  	hd=[] //arr还是[1,2,3,4] hd新开辟的一块 指向空
  	hd.length=0//arr hd均为空了
  	
  	let user = [{ name: "hdcms" }, { name: "后盾人" }];
  	user.splice(0, user.length);
  	console.log(user);
  	
      let user = [{ name: "hdcms" }, { name: "后盾人" }];
      while (user.pop()) {}
      console.log(user);
  ```

### 合并拆分

```javascript
//split
    let price = "99,78,68";
    console.log(price.split(",")); //["99", "78", "68"]
//join 连接成字符串
    let arr = [1, "后盾人", "hdcms"];
    console.log(arr.join('-')); //1-后盾人-hdcms 使用join可以指定转换的连接方式
//concat  方法用于连接两个或多个数组，元素是值类型的是复制操作，如果是引用类型还是指向同一对象
    let array = ["hdcms", "houdunren"];
    let hd = [1, 2];
    let cms = [3, 4];
    console.log(array.concat(hd, cms)); //["hdcms", "houdunren", 1, 2, 3, 4]
	console.log([...array, ...hd, ...cms]);
//copyWithin 从数组中复制一部分到同数组中另外位置
	array.copyWithin(target, start, end)
    //target	必需。复制到指定目标索引位置。
    //start	可选。元素复制的起始位置。
    //end	可选。停止复制的索引位置 (默认为 array.length)。如果为负值，表示倒数。
const arr = [1, 2, 3, 4];
console.log(arr.copyWithin(2, 0, 2)); //[1, 2, 1, 2]
```

### 查找元素

- indexOf  lastIndexOf

  ```javascript
  /*
  indexOf
  从前向后查找元素出现的位置，如果找不到返回 -1
  indexOf 类似于===是严格类型约束
  */
  let arr = [7, 3, 2, 8, 2, 6];
  console.log(arr.indexOf(2)); // 2 从前面查找2出现的位置
  
  let arr = [7, 3, 2, '8', 2, 6];
  console.log(arr.indexOf(8)); // -1 使用 indexOf 查找字符串将找不到，因为indexOf 类似于===是严格类型约束。
  
  let arr = [7, 3, 2, 8, 2, 6];
  //从第二个元素开始向后查找
  console.log(arr.indexOf(2, 3)); //4
  
  /*
  lastIndexOf
  从后向前查找元素出现的位置，如果找不到返回 -1
  第二个参数用于指定查找开始的位置
  */
  let arr = [7, 3, 2, 8, 2, 6];
  console.log(arr.lastIndexOf(2)); // 4 从后查找2出现的位置
  let arr = [7, 3, 2, 8, 2, 6];
  //从第五个元素向前查找
  console.log(arr.lastIndexOf(2, 5));
  //从最后一个字符向前查找
  console.log(arr.lastIndexOf(2, -2));
  ```

- includes：查找字符串返回值是布尔类型更方便判断

  ```javascript
  let arr = [7, 3, 2, 6];
  console.log(arr.includes(6)); //true
  //不可以用来查找引用类型，因为在内存地址上不相等
  ```

- find findIndex 

  ```javascript
  /*
  find方法
  找到后会把值返回出来 返回第一次找到的值，不继续查找 ；
  找不到返回值为undefined；
  可以方便的查找引用类型
  */
  let arr = ["hdcms", "houdunren", "hdcms"];
  let find = arr.find(function(item) {
    return item == "hdcms";
  });
  console.log(find); //hdcms
  
  const user = [{ name: "李四" }, { name: "张三" }, { name: "后盾人" }];
  const find = user.find(user => (user.name = "后盾人"));
  console.log(find);
  
  /*
  findIndex方法
  返回的是索引值，找不到返回-1
  参数也是 : 当前值，索引，操作数组。
  */
  let arr = [7, 3, 2, '8', 2, 6];
  console.log(arr.findIndex(function (v) {
  	return v == 8;
  })); //3
  
  //find原理
  let arr = [1, 2, 3, 4, 5];
  function find(array, callback) {
    for (const value of array) {
      if (callback(value) === true) return value;
    }
    return undefined;
  }
  let res = find(arr, function(item) {
    return item == 23;
  });
  console.log(res);
  ```

### 数组排序

```javascript
/*sort
每次使用两个值进行比较 Array.sort((a,b)=>a-b)
    返回负数 a 排在 b前面，从小到大
    返回正数 b 排在a 前面
    返回 0 时不动
*/
let arr = [1, 4, 2, 9];
console.log(arr.sort()); //[1, 2, 4, 9]

/*reverse
*/
let arr = [1, 4, 2, 9];
console.log(arr.reverse()); //[9, 2, 4, 1]
```

### 循环

```javascript
/*	for
	根据数组长度结合for 循环来遍历数组
*/
let lessons = [
	{title: '媒体查询响应式布局',category: 'css'},
  	{title: 'FLEX 弹性盒模型',category: 'css'},
	{title: 'MYSQL多表查询随意操作',category: 'mysql'}
];

for (let i = 0; i < lessons.length; i++) {
  lessons[i] = `后盾人: ${lessons[i].title}`;
}
console.log(lessons);
/*	forEach
	使函数作用在每个数组元素上，但是没有返回值。
*/
let lessons = [
	{title: '媒体查询响应式布局',category: 'css'},
  {title: 'FLEX 弹性盒模型',category: 'css'},
	{title: 'MYSQL多表查询随意操作',category: 'mysql'}
];

lessons.forEach((item, index, array) => {
    item.title = item.title.substr(0, 5);
});
console.log(lessons);

/*	for/in
	遍历时的 key 值为数组的索引
*/
let lessons = [
	{title: '媒体查询响应式布局',category: 'css'},
  {title: 'FLEX 弹性盒模型',category: 'css'},
	{title: 'MYSQL多表查询随意操作',category: 'mysql'}
];

for (const key in lessons) {
    console.log(`标题: ${lessons[key].title}`);
}
/*	for/of
	与 for/in 不同的是 for/of 每次循环取其中的值而不是索引。
*/
let lessons = [
	{title: '媒体查询响应式布局',category: 'css'},
  	{title: 'FLEX 弹性盒模型',category: 'css'},
	{title: 'MYSQL多表查询随意操作',category: 'mysql'}
];

for (const item of lessons) {
  console.log(`
    标题: ${item.title}
    栏目: ${item.category == "css" ? "前端" : "数据库"}
  `);
}
```

### 迭代

```javascript
/*	keys
	通过迭代对象获取索引hd.keys()
*/
const hd = ["houdunren", "hdcms"];
const keys = hd.keys();
console.log(keys.next());
console.log(keys.next());
//获取数组所有键
"use strict";
const arr = ["a", "b", "c", "后盾人"];
for (const key of arr.keys()) {
  console.log(key);
}


/*	values
	通过迭代对象获取值hd.values()
*/
const hd = ["houdunren", "hdcms"];
const values = hd.values();
console.log(values.next());
console.log(values.next());
console.log(values.next());
//获取数组所有值
"use strict";
const arr = ["a", "b", "c", "后盾人"];
for (const value of arr.values()) {
  console.log(value);
}

/*	entries
	返回数组所有键值对
*/
const arr = ["a", "b", "c", "后盾人"];
for (const [key, value] of arr.entries()) {
  console.log(key, value);
}

//解构获取内容
const hd = ["houdunren", "hdcms"];
const iterator = hd.entries();

let {done,value: [k, v]} = iterator.next();
console.log(v);
```

### 扩展

- every—some

  ```javascript
  /*	every
  	用于递归的检查元素，要所有元素操作都要返回真，结果才为真
  */
  const user = [
    { name: "李四", js: 89 },
    { name: "马六", js: 55 },
    { name: "张三", js: 78 }
  ];
  const resust = user.every(user => user.js >= 60);
  console.log(resust);
  
  /*	some
  	用于递归的检测元素，如果有一个返回true，表达式结果就是真；
  	第一个参数为元素，第二个参数为索引，第三个参数为原数组
  	下面是使用 some 检测规则关键词的示例，如果匹配到一个词就提示违规。
  */
  let words = ['后盾', '北京', '武汉'];
  let title = '后盾人不断分享技术教程'
  let state = words.some(function (item, index, array) {
  	return title.indexOf(item) >= 0;
  });
  
  if (state) console.log('标题含有违规关键词');
  ```

- filter 过滤数据中元素

  ```javascript
  let lessons = [
    {title: '媒体查询响应式布局',category: 'css'},
    {title: 'FLEX 弹性盒模型',category: 'css'},
    {title: 'MYSQL多表查询随意操作',category: 'mysql'}
  ];
  //值 索引  原数组
  let cssLessons = lessons.filter(function (item, index, array) {
    if (item.category.toLowerCase() == 'css') {
      return true;
    }
  });
  console.log(cssLessons);
  ```

- map 映射可以在数组的所有元素上的应用函数，用于映射出新的值。

  复制，数组里的内容是基础类型，则新数组改变了，原数组没变；数组里的内容是引用类型（数组和对象），则原数组改变，若想不改变需要使用浅拷贝知识。

  ```javascript
  let lessons = [
    {title: '媒体查询响应式布局',category: 'css'},
    {title: 'FLEX 弹性盒模型',category: 'css'},
    {title: 'MYSQL多表查询随意操作',category: 'mysql'}
  ];
  //获取数组所有标题组合的新数组
  console.log(lessons.map(item => item.title));
  
  //为所有标题添加上 后盾人
  lesson=lesson.map(function(item,index,array){
      item.title=`[后盾人]${item['title']}`;
      return item;
  })
  console.log(lessons)
  ```

- reduce------？？？？看视频学习一下

  ```javascript
  /*
  reduce与reduceRight函数可以迭代数组的所有元素，reduce从前开始reduceRight从后面开始。
  情况一：只传入第一个参数 不传第二个参数时从第二个元素开始循环
  	pre 第一个值 value 第二个值 索引 原数组
  	第二轮 pre代表返回值
  	arr.reduce((pre, value, index, array) => {
    		return pre;
  	})
  情况二：两个参数都传
  	第一个参数是执行函数，第二个参数为pre初始值；
  	传入第二个参数时将所有元素循环一遍
  */
  //统计元素出现的次数
  function countArrayELem(array, elem) {
    return array.reduce((total, cur) => (total += cur == elem ? 1 : 0), 0);
  }
  function countArrayELem(array, elem) {
    return array.reduce(function(total, cur){
        total += cur == elem ? 1 : 0;
        return total;
    }, 0);
  }
  let numbers = [1, 2, 3, 1, 5];
  console.log(countArrayELem(numbers, 1)); //2
  
  //获取数组中最大值
  function arrayMax(array) {
    return array.reduce(
    	(max, elem) => (max > elem ? max : elem), array[0]
    );
  }
  console.log(arrayMax([1, 3, 2, 9]));
  
  //去重
  let arr = [1, 2, 6, 2, 1];
  //pre 第一个值 cur 第二个值 索引 原数组
  //第二轮 pre代表返回值
  let filterArr = arr.reduce((pre, cur, index, array) => {
    if (pre.includes(cur) === false) {
        pre = [...pre, cur];
    }
    return pre;
  }, [])
  console.log(filterArr); // [1,2,6]
  ```
  

# 函数进阶

函数是将复用的代码封装起来的模块，在JS中函数还有其他语言所不具有的特性。

### 基础知识

- 声明定义

  ```javascript
  /*
  JS函数：对象函数 Function类创建的实例  函数是对象
  标准是：使用函数声名定义
  全局函数：会声明在window对象中，不正确
  let/const声名： 不会压入window
  */
  
  //JS函数 对象函数 Function类创建的实例  函数是对象
  let hd = new Function("title", "console.log(title)");
  hd('后盾人');
  //标准语法  使用函数声名来定义函数
  function hd(num) {
  	return ++num;
  }
  console.log(hd(3));
  //全局函数会声名在window对象中，不正确 建议使用后面的章节的模块处理
  //当自定义screenX函数 会覆盖window.screenX方法
  console.log(window.screenX); //2200
  function screenX() {
    return "后盾人";
  }
  console.log(screenX()); //后盾人
  //let/const不会压入栈
  let hd = function() {
    console.log("后盾人");
  };
  window.hd(); //window.hd is not a function
  ```

- 匿名函数

  ```javascript
  /*
  函数是对象，可以通过赋值 来指向到函数对象的指针，当然指针也可以传递给其他变量
  注意：后面以“ ； ”结束
  	函数优先级：标准声名的函数优先级更高，标准声名高于赋值声名
  */
  let hd = function(num) {
    return ++num;
  };
  console.log(hd instanceof Object); //true
  let cms = hd;
  console.log(cms(3));
  
  console.log(hd(3)); //4 标准声名高于赋值声名
  function hd(num) {
    return ++num;
  }
  var hd = function() {
    return "hd";
  };
  
  ```

- 立即执行

  ```javascript
  /*	立即执行函数指函数定义时立即执行
  	可以用来定义私有作用域防止污染全局作用域
  */
  "use strict";
  (function () {
      var web = 'houdunren';
  })();
  console.log(web); //web is not defined
  //使用let/const有块作用域特性，所以使用以下方式也可以产生私有作用域
  {
  	let web = 'houdunren';
  }
  console.log(web);
  ```

- 函数提升

  ```javascript
  //函数会提升到前面，优先级
  console.log(hd()); //后盾人
  function hd() {
  	return '后盾人';
  }
  //变量函数定义 不会提升
  console.log(hd()); //后盾人
  function hd() {
  	return '后盾人';
  }
  var hd = function () {
  	return 'hdcms.com';
  }
  ```

- 形参实参

  ```javascript
  /*	形参是在函数声明时设置的参数，实参指在调用函数时传递的值
  	形参数量大于实参时，没有传参的形参值为 undefined
  	实参数量大于形参时，多于的实参将忽略并不会报错
  */
  function sum(n1, n2) {// n1,n2 为形参
  	return n1+n2;
  }
  console.log(sum(2, 3)); //5  参数 2,3 为实参
  ```

- 默认参数

  ```javascript
  //1
  //total:总价 year:年数
  function avg(total, year) {
    year = year || 1;
    return Math.round(total / year);
  }
  console.log(avg(2000, 3));
  //2
  function avg(total, year = 1) {
    return Math.round(total / year);
  }
  console.log(avg(2000, 3));
  //3
  function sortArray(arr, type = 'asc') {
  	return arr.sort((a, b) => type == 'asc' ? a - b : b - a);
  }
  console.log(sortArray([1, 3, 2, 6], 'desc'));
  ```

- 函数参数

  ```javascript
  //函数可以作为参数传递
  function filterFun(item) {
  	return item <= 3;
  }
  let hd = [1, 2, 3, 4, 5].filter(filterFun);
  console.log(hd); //[1,2,3]
  ```

- arguments

  ```javascript
  //arguments 是函数获得到所有参数集合
  function sum() {
    return [...arguments].reduce((total, num) => {
      return (total += num);
    }, 0);
  }
  console.log(sum(2, 3, 4, 2, 6)); //17
  //使用展示语法
  function sum(...args) {
   return args.reduce((a, b) => a + b);
  }
  console.log(sum(2, 3, 4, 2, 6)); //17
  ```

- **箭头函数：是函数声明的简写形式，在使用递归调用、构造函数、事件处理器时不建议使用箭头函数。无参数时，使用空括号即可。函数为单一表达式时，不需要return返回处理；**

  ```javascript
  /*箭头函数：是函数声明的简写形式，
  在使用递归调用、构造函数、事件处理器时不建议使用箭头函数；
  无参数时，使用空括号即可；
  函数为单一表达式时，不需要return返回处理；
  多个参数传递和普通声明函数一样使用逗号分隔；
  只有一个参数时可以省略括号；
  */
  
  let sum = () => {
  	return 1 + 3;
  }
  console.log(sum()); //4
  
  let sum = () => 1 + 3;
  console.log(sum()); //4
  
  let hd = [1, 8, 3, 5].filter(item => item <= 3);
  console.log(hd);
  ```

- 递归调用

  ```javascript
  /*递归调用
  	递归：函数内部调用自身的方式
  	主要用于数量不确定的循环操作
  	要有退出时机否则会陷入死循环
  */
  function sum(...num) {
  	return num.length == 0 ? 0 : num.pop() + sum(...num);
  }
  console.log(sum(1, 2, 3, 4, 5, 7, 9)); //31
  ```

- 回调函数

  ```html
  /* 
  在某个时刻被其他函数调用的函数称为回调函数，比如处理键盘、鼠标事件的函数
  */
  
  <button id='hd'>button</button>
  <script>
       document.getElementById('hd').addEventListener('click', () => alert('通过回调函数调用'));
  </script>
  ```

  

- 展开语法

  ```javascript
  /*
  展开语法或称点语法：收/放特性，做值时是放，接收变量时是收；
  */
  let hd = [1, 2, 3];
  let [a, b, c] = [...hd];
  console.log(a); //1
  console.log(b); //2
  console.log(c); //3
  [...hd] = [1, 2, 3];
  console.log(hd); //[1, 2, 3]
  
  //也可用于接收部分参数
  function hd(site, ...args) {
    console.log(site, args); //后盾人 (3) [1, 2, 3]
  }
  hd("后盾人", 1, 2, 3);
  
  //使用。。。可以接受传入的多个参数合并为数组，下面是使用点语法进行求和计算
  function sum(...params) {
  	console.log(params);
  	return params.reduce((pre, cur) => pre + cur);
  }
  console.log(sum(1, 3, 2, 4));
  ```

- 标签函数

### this

- 函数调用

  ```javascript
  /*
  全局环境下 this就是window对象的引用
  使用严格模式时，在全局函数内this为undefined
  */
  
  ```

- 方法调用

  ```javascript
  /*
  函数为对象时，this指向该对象，系统上下文指向的实例对象
  	函数是对象的属性方法，this为对象；普通的函数，this指向全局的对象 window
  	构造函数创建对象时，函数中的上下文指向实例对象
  	对象字面量：看是否属于对象
  	有些函数可以改变this指向，如forEach
  	箭头函数没有this，也可以理解为箭头函数中的this会继承定义函数时的上下文，可以理解为和父级作用域指向同一个this
  */
  
  function User() {
    this.name = "后盾人";
    this.say = function() {
      console.log(this); //User {name: "后盾人", say: ƒ}
      return this.name;
    };
  }
  let hd = new User();
  console.log(hd.say()); //后盾人
  
  //下例中的hd函数不属于对象方法所以指向window
  //show属于对象方法执向 obj对象
  let obj = {
    site: "后盾人",
    show() {
      console.log(this.site); //后盾人
      console.log(`this in show method: ${this}`); //this in show method: [object Object]
      function hd() {
        console.log(typeof this.site); //undefined
        console.log(`this in hd function: ${this}`); //this in hd function: [object Window]
      }
      hd();
    }
  };
  obj.show();
  
  //匿名函数的执行环境为全局，所以this指向window
  var name = 'hdcms';
  var obj = {
    name: '后盾人',
    getName: function () {
      return function () {
      	return this.name;
      }
    }
  }
  console.log(obj.getName()()); //返回window.name的值hdcms
  ```

​       

```javascript
//通过常量改变this的指向——作用域链
```



### apply/call/bind

改变this指针，也可以理解为对象借用方法，就像生活中向邻居借东西一样。

- 原理分析

  ```javascript
  /*
  构造函数中this 默认是一个空对象，然后构造函数处理后把这个空对象变得有值
  */
  function User(name) {
    this.name = name;
  }
  let hdcms = {};
  User.call(hdcms, "HDCMS");
  console.log(hdcms.name); //HDCMS
  ```

- apply/call

  ```html
  /*
  call和apply用于显示的设置函数的上下文，两个方法作用一样都是将对象绑定到this，只是在传递参数上有所不同。
  	apply 用数组传参
  	call 需要分别传参
  	与bind不同 call/apply会立即执行函数
  */
  <script>
  function show(title) {
      alert(`${title+this.name}`);
  }
  let lisi = {
      name: '李四'
  };
  let wangwu = {
      name: '王五'
  };
  show.call(lisi, '后盾人');
  show.apply(wangwu, ['HDCMS']);
  </script>
  
  //使用call设置函数上下文
  <body>
      <button message="后盾人">button</button>
      <button message="hdcms">button</button>
  </body>
  <script>
      function show() {
          alert(this.getAttribute('message'));
      }
      let bts = document.getElementsByTagName('button');
      for (let i = 0; i < bts.length; i++) {
          bts[i].addEventListener('click', () => show.call(bts[i]));
      }
  </script>
  
  ```

  ```javascript
  //找出数组中的最大值
  let arr = [1, 3, 2, 8];
  console.log(Math.max(arr)); //NaN
  console.log(Math.max.apply(Math, arr)); //8
  console.log(Math.max(...arr)); //8
  ```

  ```
  
  ```

- bind

  - bind是将函数绑定到某个对象上，比如a.bind(hd)可以理解为将a函数绑定到hd对象上即hd.a()
  - 与call/apply不同bind不会立即执行
  - bind是复制函数形为会返回新函数

  ```javascript
  //bind是复制函数行为
  let a = function() {};
  let b = a;
  console.log(a === b); //true
  //bind是新复制函数
  let c = a.bind();
  console.log(a == c); //false
  
  //绑定参数注意项
  
  ```

  

# 作用域与闭包

### 作用域

- **定义：**全局作用域只有一个，每个函数又都有作用域(环境)。
  - 编译器运行时会将变量定义在所在的作用域
  - 使用变量时会从当前作用域开始向上查找变量
  - 作用域就像攀亲戚一样，晚辈总是可以向前辈要东西

- **使用规范**

  - 作用域链只向上查找，找到全局的window即终止，应该尽量不要在作用域中添加变量

  ![image-20220216163414387](C:\Users\cuiyue\AppData\Roaming\Typora\typora-user-images\image-20220216163414387.png)

  - 函数被执行后其环境变量将从内存中删除，下面函数在每次执行后将删除函数内部的total变量；

    ```javascript
    function count() {
      let total = 0;
    }
    count();
    ```

  - 函数每次被调用都会创建一个新的作用域

    ```javascript
    let site = '后盾人';
    
    function a() {
      let hd = 'houdunren.com';
    
      function b() {
          let cms = 'hdcms.com';
          console.log(hd);
          console.log(site);
      }
      b();
    }
    a();
    //a有一个作用域  包含hd b
    //每次调用a 会有一个hd
    ```

  - 如果子函数被调用时父级环境将被保留，使用return延长了函数环境的生命周期

    ```javascript
    function hd() {
      let n = 1;
      return function hd1() {
        let b = 1;
        return function hd2() {
          console.log(++n);
          console.log(++b);
        };
      };
    }
    //通过return 延申了函数环境的生命周期
    let a = hd()();//hd() 执行到hd1 hd()()在更进一步 执行hd2
    a(); //2,2
    a(); //3,3
    
    //构造函数也是很好的环境例子，子函数被外部使用 父级环境将被保存
    function User() {
      let a = 1;
      this.show = function() {
        console.log(a++);
      };
    }
    let a = new User();//每次new 将会开辟一个新的空间
    //构造函数使用变量 会将变量留存
    a.show(); //1
    a.show(); //2
    let b = new User();
    b.show(); //1
    ```

- **let/const**

  - 使用let/const可以将变量声明在块作用域中(放在新环境中，而不是全局中)

    ```javascript
    {
    	let a = 9;
    }
    console.log(a); //ReferenceError: a is not defined
    if (true) {
    	var i = 1;
    }
    console.log(i);//1
    ```

  - 在for循环中使用let/const会在每一次迭代中重新生成不同的变量

    ```javascript
    //将函数情况 保存到数组中
    let arr = [];
    for (let i = 0; i < 10; i++) {
    	arr.push((() => i));//放进去的是函数
    }
    console.log(arr[3]()); //3 如果使用var声明将是10
    ```
    
  - 多级作用域嵌套详解
  
    ```javascript
    //将函数情况 保存到数组中
    let arr = [];
    for (let i = 0; i <= 3; i++) {
    	arr.push(function(){
            return i;
        });//放进去的是函数
    }
    console.log(arr[3]()); //3 如果使用var声明将是10
    
    //将函数情况 保存到数组中
    let arr = [];
    for (var i = 0; i <= 3; i++) {
    	arr.push(function(){
            return i;
        });//放进去的是函数
    }
    console.log(arr[3]()); //4 第几个都是4
    
    let arr = [];
    for (var i = 0; i <= 3; i++) {
        (function(){
            arr.push(function(){
            	return i;
        	});//放进去的是函数
        })(i)
    }
    console.log(arr[2]()); //0 1 2
    ```
  
    

### 闭包使用

- ​	**闭包指子函数可以访问外部作用域变量的函数特性**，即使在子函数作用域外也可以访问。如果没有闭包那么在处理时间绑定，异步请求时都会变得困难。
  - js中所有的函数都是闭包
  - 闭包一般在子函数本身作用域外执行，即延申作用域

- 基本示例

  ```javascript
  let arr = [3, 2, 4, 1, 5, 6];
  function between(a, b) {
    return function(v) {//子函数访问外部作用域的变量
      return v >= a && v <= b;
    };
  }
  console.log(arr.filter(between(3, 5)));
  ```

- 移动动画

  ```html
  <body>
    <style>
      button {
        position: absolute;
      }
    </style>
    <button message="后盾人">houdunren</button>
    <button message="hdcms">hdcms</button>
  </body>
  <script>
    let btns = document.querySelectorAll("button");
    btns.forEach(function(item) {
      item.addEventListener("click", function() {
          let left = 1;
         setInterval(function() {
            item.style.left = left++ + "px";
          }, 100);
      });
    });
  </script>
  //有个问题 重复点击会产生抖动
  ```

  ![image-20220217140202174](C:\Users\cuiyue\AppData\Roaming\Typora\typora-user-images\image-20220217140202174.png)

  如上图所示，每次点击都会产生一个left，left每次从最左边开始，看起来会发生了抖动。

  ```html
  //解决方式 将left向上提 每次点击共用left
  <body>
    <style>
      button {
        position: absolute;
      }
    </style>
    <button message="后盾人">houdunren</button>
    <button message="hdcms">hdcms</button>
  </body>
  <script>
    let btns = document.querySelectorAll("button");
    btns.forEach(function(item) {
       let left = 1; 
       item.addEventListener("click", function() {
         setInterval(function() {
            item.style.left = left++ + "px";
          }, 100);
      });
    });
  </script>
  //新的问题 随着点击次数的增加 速度变得越来越快
  ```

  ![image-20220217141853968](C:\Users\cuiyue\AppData\Roaming\Typora\typora-user-images\image-20220217141853968.png)

  ```html
  //解决 设定一个flag 只允许设定一次定时器
  <body>
    <style>
      button {
        position: absolute;
      }
    </style>
    <button message="后盾人">houdunren</button>
    <!-- <button message="hdcms">hdcms</button> -->
  </body>
  <script>
    let btns = document.querySelectorAll("button");
    btns.forEach(function(item) {
      let bind = false;
      item.addEventListener("click", function() {
        if (!bind) {
          let left = 1;
          bind = setInterval(function() {
            item.style.left = left++ + "px";
          }, 100);
        }
      });
    });
  </script>
  ```

  ![image-20220217142514028](C:\Users\cuiyue\AppData\Roaming\Typora\typora-user-images\image-20220217142514028.png)

- 闭包排序

  ```javascript
  let lessons = [
    {
      title: "媒体查询响应式布局",
      click: 89,
      price: 12
    },
    {
      title: "FLEX 弹性盒模型",
      click: 45,
      price: 120
    },
    {
      title: "GRID 栅格系统",
      click: 19,
      price: 67
    },
    {
      title: "盒子模型详解",
      click: 29,
      price: 300
    }
  ];
  function order(field) {
    return (a, b) => (a[field] > b[field] ? 1 : -1);
  }
  console.table(lessons.sort(order("price")));
  ```

- 闭包问题

  - 内存泄漏

    ```html
    //闭包特性中上级作用域会为函数保存数据，从而造成的如下所示的内存泄漏问题
    <body>
      <div desc="houdunren">在线学习</div>
      <div desc="hdcms">开源产品</div>
    </body>
    <script>
      let divs = document.querySelectorAll("div");
      divs.forEach(function(item) {
        item.addEventListener("click", function() {
          console.log(item.getAttribute("desc"));
        });
      });
    </script>
    //清除不需要的数据来解决内存泄漏
    <script>
    let divs = document.querySelectorAll("div");
    divs.forEach(function(item) {
      let desc = item.getAttribute("desc");
      item.addEventListener("click", function() {
        console.log(desc);
      });
      item = null;
    });
    </script>script>
    ```

    

  - this在闭包的历史遗留问题

    ```javascript
    /*this 总是指向调用该函数的对象，即函数在搜索this时只会搜索到当前活动对象。下面是函数因为是在全局环境下调用的，所以this指向window，这不是我们想要的。*/
    let hd = {
      user: "后盾人",
      get: function() {
        return function() {
          return this.user;
        };
      }
    };
    console.log(hd.get()()); //undefined
    
    //是用箭头函数解决问题
    let hd = {
      user: "后盾人",
      get: function() {
        return () => this.user;
      }
    };
    console.log(hd.get()()); //undefined
    ```

    

  

# 对象

对象是包括属性与方法的数据类型，JS中大部分类型都是对象如：String/Number/Math/RegExp/Date

### OOP

- 对象是属性和方法的集合即封装
- 将复杂的功能隐藏在内部，只开放给外部少量方法，更改对象内部的复杂逻辑不会对外部调用造成影响
- 继承是通过代码的复用减少冗余代码
- 根据不同形态的对象产生不同结果即多态

### 基础知识

- **OOP**

  - 对象是属性和方法的集合即封装
  - 将复杂的功能隐藏在内部，只开放给外部少量方法，更改对象内部的复杂逻辑不会对外部调用造成影响
  - 继承是通过代码的复用减少冗余代码
  - 根据不同形态的对象产生不同结果即多态

- 基本声明

  ```javascript
  //字面量形式声明
  let obj = {
    name: '后盾人',
    get:function() {
    	return this.name;
    }
    //属性方法简写
    get() {
      return this.name;
    }
  }
  console.log(obj.get()); //后盾人
  //其实字面量形式在系统内部也是使用构造函数创建的
  ```

- 操作属性

  ```javascript
  //使用点语法 .操作更简洁
  let user = {
    name: "向军"
  };
  console.log(user.name);
  //使用[]获取  主要用于通过变量定义属性的场景
  console.log(user["name"]);
  //如果属性名不是合法变量名就必须使用括号的形式
  let user = {};
  user["my-age"] = 28;
  console.log(user["my-age"]);
  
  ```

- 对象方法

  ```
  
  ```

  

- **引用特性**

  ```javascript
  //对象和函数、数组一样是引用类型，即复制只会复制引用地址
  let hd = { name: "后盾人" };
  let cms = hd;
  cms.name = "hdcms";
  console.log(hd.name); //hdcms
  //对象做为函数参数使用时也不会产生完全赋值，内外共用一个对象
  let user = { age: 22 };
  function hd(user) {
    user.age += 10;
  }
  hd(user);
  console.log(user.age); //32
  ```

- this

  ```javascript
  /*
  this 指当前对象的引用，始终建议在代码内部使用this 而不要使用对象名，不同对象的this只指向当前对象。
  不使用this产生错误的场景：
  	删除了xj 变量，但在函数体内还在使用xj变量造成错误
  	使用 this 后始终指向到引用地址，就不会有这个问题
  */
  let xj = {
    name: "向军",
    show() {
      return xj.name;
    }
  };
  let hd = xj;
  xj = null;
  console.log(hd.show()); //Error
  
  //改用this之后一切正常
  let xj = {
    name: "向军",
    show() {
      return this.name;
    }
  };
  let hd = xj;
  xj = null;
  console.log(hd.show()); //Error
  ```

- 展开语法

  ```javascript
  //使用...可以展示对象的结构，下面是实现对象合并的示例
  let hd = { name: "后盾人", web: "houdurnen.com" };
  let info = { ...hd, site: "hdcms" };
  console.log(info);
  
  
  ```

### 对象转换

- 基础知识

  ```javascript
  /*
  系统直接参与计算时，系统会根计算的场景在String/number/default间转换
  	如果声明需要字符串类型，调用顺序为 toString > valueOf
  	如果场景需要数值类型，调用顺序为 valueOf > toString
  	声明不确定时使用 default ，大部分对象的 default 会当数值使用
  */
  let houdunren = new Number(1);
  console.log(houdunren + 3); //4
  
  let houdunren = new Number(1);
  console.log(houdunren + "3"); //13
  //不确定转换声明时使用 default ，大部分default转换使用 number 转换
  let houdunren = new Number(1);
  console.log(houdunren == "1"); //true
  ```

- Symbol.toPrimitive

  ```javascript
  let hd = {
    num: 1,
    [Symbol.toPrimitive]: function() {
      return this.num;
    }
  };
  console.log(hd + 3); //4
  ```

- valueOf/toString

  ```javascript
  let hd = {
    name: "后盾人",
    num: 1,
    valueOf: function() {
      console.log("valueOf");
      return this.num;
    },
    toString: function() {
      console.log("toString");
      return this.name;
    }
  };
  console.log(hd + 3); //valueOf 4
  console.log(`${hd}向军`); //toString 后盾人向军
  ```

### 解构赋值

是一种更加简洁的赋值特性，可以理解为分解一个数据的结构

```javascript
//基本使用 对象使用
let info = {name:'后盾人',url:'houdunren.com'};
let {name:n,url:u} = info
console.log(n); // 后盾人

//如果属性名与变量相同可以省略属性定义
let {name,url} = {name:'后盾人',url:'houdunren.com'};
console.log(name); // 后盾人

//严格模式：非严格模式可以不使用声明指令，严格模式下必须使用声明。所以建议使用 let 等声明。
"use strict";
let { name, url } = { name: "后盾人", url: "houdunren.com" };
console.log(name, url);

/*简介定义
  如果属性名与赋值的变量相同 可简写
  只赋值部分变量
  可以直接使用变量赋值对象属性
*/
let web = { name: "后盾人",url: "houdunren.com" };
let { name, url } = web;
console.log(name); //后盾人

let [,url]=['后盾人','houdunren.com'];
console.log(url);//houdunren.com

let name = "后盾人",url = "houdunren.com";
//标准写法如下
let hd = { name: name, url: url };
console.log(hd);  //{name: "后盾人", url: "houdunren.com"}

//如果属性和值变量同名可以写成以下简写形式
let opt = { name, url };
console.log(opt); //{name: "后盾人", url: "houdunren.com"}

//嵌套
const hd = {
  name:'后盾人',
  lessons:{
    title:'JS'
  }
}
const {name,lessons:{title}}  = hd;
console.log(name,title); //后盾人 JS
```

### 属性管理

```javascript
/*添加*/
let obj = {name: "后盾人"};
obj.site = "houdunren.com";
console.log(obj);

/*删除 delete可以删除属性*/
let obj = { name: "后盾人" };
delete obj.name;
console.log(obj.name); //undefined

/*检测  hasOwnProperty 检测对象是否包含指定属性，不检测原型链上继承的属性
 使用in可以在原型对象上检测
*/
let obj = { name: '后盾人'};
console.log(obj.hasOwnProperty('name')); //true
let hd = {
  web: "houdunren.com"
};
Object.setPrototypeOf(obj, hd);//设置hd为obj的新原型
console.log(obj);
console.log("web" in obj); //true
console.log(obj.hasOwnProperty("web")); //false

/*获取 Object.getOwnPropertyNames 获取对象的属性名*/
let hd = { name: '后盾人', year: 2010 }
const names = Object.getOwnPropertyNames(hd)
console.log(names)// ["name", "year"]

/*assign 静态方法 从一个或多个对象复制属性 
*/
"use strict";
let hd = { a: 1, b: 2 };
hd = Object.assign(hd, { f: 1 }, { m: 9 });
console.log(hd); //{a: 1, b: 2, f: 1, m: 9}

/*传值操作*/
let user = {
	name: '后盾人'
};
let hd = {
	stu: user
};
hd.stu.name = 'hdcms';
console.log(user.name);//hdcms
```

### 遍历对象

```javascript
/*
object.keys()
object.values()
object.entries()
*/

const hd = {
  name: "后盾人",age: 10
};
console.log(Object.keys(hd)); //["name", "age"]
console.log(Object.values(hd)); //["后盾人", 10]
console.table(Object.entries(hd)); //[["name","后盾人"],["age",10]]

/*for in*/
const hd = {
  name: "后盾人",
  age: 10
};
for (let key in hd) {
  console.log(key, hd[key]);
}

/*for of*/
const hd = {
  name: "后盾人",
  age: 10
};
//keys 属性 values 值  entries对象
for (const key of Object.keys(hd)) {
  console.log(key);
}/
```

### 对象拷贝

```javascript
//对象拷贝 对象赋值时复制内存地址，所以一个对象的改变直接影响另一个
let obj = {
  name: '后盾人',
  user: {
  	name: 'hdcms'
  }
}
let a = obj;
let b = obj;

/*浅拷贝 不会将深层的数据复制
Object.assign 函数可简单的实现浅拷贝，它是将两个对象的属性叠加后面对象属性会覆盖前面对象同名属性。
*/
let obj = {name: "后盾人"};
let hd = {};//这样不是内存地址的复制了
for (const key in obj) {
  hd[key] = obj[key];
}
hd.name = "hdcms";

let user = {
	name: '后盾人'
};
let hd = {
	stu: Object.assign({}, user)
};
hd.stu.name = 'hdcms';
console.log(user.name);//后盾人

/*深拷贝 拷贝对象各个层级的属性*/
let obj = {
  name: "后盾人",
  user: {
    name: "hdcms"
  },
  data: []
};

function copy(object) {
  let obj = object instanceof Array ? [] : {};
  for (const [k, v] of Object.entries(object)) {
    obj[k] = typeof v == "object" ? copy(v) : v;
  }
  return obj;
}

let hd = copy(obj);
hd.data.push("向军");
console.log(JSON.stringify(hd, null, 2));
console.log(JSON.stringify(obj, null, 2));
```

### 构建函数

```javascript
//对象可以通过内置或者自定义的构造函数创建

/*工厂函数 返回对象的函数称为工厂函数
  减少重复创建相同类型对象的代码
  修改工厂函数的方法影响所有同类对象
*/
function stu(name) {
  return {
    name,
    show() {
      console.log(this.name);
    }
  };
}
const lisi = stu("李四");
lisi.show();
const xj = stu("向军");
xj.show();

/*构造函数：和工厂函数相似构造函数也用于创建对象，它的上下文为新的对象实例。
  构造函数名每个单词首字母大写，即Pascal 命名规范
  this指当前创建的对象
  不需要返回this系统会自动完成
  需要使用new关键词生成对象
*/
function Student(name) {
  this.name = name;
  this.show = function() {
    console.log(this.name);
  };
  //不需要返回，系统会自动返回
  // return this;
}
const lisi = new Student("李四");
lisi.show();

/*严格模式 方法的this为undefined*/

/*对象函数 在JS中函数也是一个对象
  函数是由系统内置的Function构造函数创建的
*/
const User = new Function(`name`,`
  this.name = name;
  this.show = function() {
    return this.name;
  };
`);

const lisi = new User("李四");
console.log(lisi.show());
```

### 抽象特性

### 属性特征

```javascript
/*查看属性
Object.getOwnPropertyDescriptor(user, "name"`);查看对象属性的描述
Object.getOwnPropertyDescriptors(user);查看对象所有属性的描述

特性	           说明                                         	 默认值
configurable	能否使用delete、能否需改属性特性、或能否修改访问器属性	true
enumerable	    对象属性是否可通过for-in循环，或Object.keys() 读取	  true
writable	    对象属性是否可修改	                              true
value	        对象属性的默认值	                            undefined
*/

/*设置属性
Object.defineProperty 方法修改属性特性
*/
"use strict";
const user = {
  name: "向军"
};
Object.defineProperty(user, "name", {
  value: "后盾人",
  writable: false,
  enumerable: false,
  configurable: false
});
```

### 属性访问器

```javascript
/*getter方法用于获得属性值，setter方法用于设置属性，这是JS提供的存取器特性即使用函数来管理属性。
*/
const web = {
  name: "后盾人",
  url: "houdunren.com",
  get site() {
    return `${this.name} ${this.url}`;
  },
  set site(value) {
    [this.name, this.url] = value.split(",");
  }
};
web.site = "后盾人,hdcms.com";
console.log(web.site);
```

### 代理拦截

### JSON

# 原型与继承——通过原型来实现继承

### 原型基础

- 原型对象：每个对象都有一个prototype对象，并通过函数创建的对象也将拥有这个原型对象。原型是一个指向对象的指针。
  - 一些概念：

    - 可以将原型理解为对象的父亲，对象从原型对象继承来属性
    - 原型就是对象除了是某个对象的父母外没有什么特别之处
    - 所有函数的原型默认是 `Object`的实例，所以可以使用`toString/toValues/isPrototypeOf` 等方法的原因
    - 使用原型对象为多个对象共享属性或方法
    - 如果对象本身不存在属性或方法将到原型上查找，
    - 函数：拥有多个原型，__proto__和 **propotype**
    - 使用原型可以解决，通过构建函数创建对象时复制多个函数造成的内存占用问题
    - 原型包含 `constructor` 属性，指向构造函数
    - 对象包含 `__proto__` 指向他的原型对象

  - 代码：

    ```javascript
    //对象的原型都为Object，即JS中的根对象
    let x = {};
    let y = {};
    console.log(Object.getPrototypeOf(x) == Object.getPrototypeOf(y)); //true
    
    //创建根对象，没有原型  完全数据字典对象
    let xj = Object.create(null, {
      name: {
        value: "向军"
      }
    });
    console.log(xj.hasOwnProperty("name")); //Error 没有原型 故而没有原型上的方法
    
    //优先级：对象方法 > 原型方法
    
    
    /*
    函数拥有多个原型__proto__和propotype，
    propotype用于实例对象，_proto_用于函数对象使用
    */
    function User() {}
    User.__proto__.view = function() {
      console.log("User function view method");
    };
    User.view();
    
    User.prototype.show = function() {
      console.log("后盾人");
    };
    let hd = new User();//通过构造函数创建的对象
    hd.show();
    console.log(User.prototype == hd.__proto__);//true
    
    ```

    原型关系详解

    ```javascript
    /*
    function User(); {}的原型的原型是Object()的原型;
    let hd1 = new User(); hd1的原型是user的prototype
    */	
    
    	function User() {}//函数对象 __proto__和 prototype
        User.__proto__.view = function () {//作为函数对象使用__proto__
          console.log("User function view method");
        };
        User.view();
    
        User.prototype.show = function () {//函数实例使用的
          console.log("后盾人");
        };
        let hd1 = new User();
        hd1.show();
    	hd1.view();//报错 因为定义在了__proto__上，找不到
        console.log(User.prototype == hd1.__proto__);
    
        let hd = new Object();
        hd.name = "后盾人";
        Object.prototype.show = function () {//实例使用的
          console.log("hodunren.com");
        };
        hd.show();
    
        function User() {}
        let xj = new User();
        xj.show();
        User.show();原型之间的关系
    ```

    ![image-20220222155735039](C:\Users\cuiyue\AppData\Roaming\Typora\typora-user-images\image-20220222155735039.png)

    ```javascript
    function User() {}
    let hd = new User();
    let obj = new Object();
    console.log(hd.__proto__ == User.prototype);//t
    console.log(User.prototype.__proto__ == Object.prototype);//t
    console.log(User.__proto__.__proto__ == Object.prototype);//t
    console.log(Object.prototype == Object.__proto__.__proto__);//t
    ```

  - 构造函数创建对象的原型体现

    - **构造函数拥有原型，创建对象时构造函数把原型赋值给对象**

    - ![image-20220222163337487](C:\Users\cuiyue\AppData\Roaming\Typora\typora-user-images\image-20220222163337487.png)

      ```
      function User() {}
      let xj = new User();
      console.log(xj.__proto__ == User.prototype);
      
      //同样的看数组 字符串 boolean等
      let hd = [];
      console.log(hd);
      console.log(hd.__proto__ == Array.prototype);
      
      let str = "";
      console.log(str.__proto__ == String.prototype);
      ```

    - 

  - 自定义原型对象

    ```javascript
    let hd = {};
    let parent = { name: "parent" };
    Object.setPrototypeOf(hd, parent);
    console.log(hd);
    console.log(Object.getPrototypeOf(hd));
    ```

  - 使用构造函数自定义原型对象

    ```javascript
    function User(name) {
      this.name = name;
    }
    //这一步是创建了一个对象 替换原先的prototype 必须有constructor 否则没办法创建新的对象
    User.propotype={
    	constructor:User,
    	show(){
    	console.log(this.name);
    	}
    }
    
    function createByObject(obj, ...args) {
      const constructor = Object.getPrototypeOf(obj).constructor;
      return new constructor(...args);
    }
    
    let hd = new User("后盾人");
    let xj = createByObject(hd, "向军");
    console.log(xj);
    ```

- 原型链总结：

  ![image-20220222172538238](C:\Users\cuiyue\AppData\Roaming\Typora\typora-user-images\image-20220222172538238.png)

  - 总结：利用Object.setPrototypeOf可以设置对象的原型，obj>hd>cms

    ```javascript
    let obj = {
      name: "后盾人"
    };
    let hd = {
      web: "houdunren"
    };
    let cms = {
      soft: "hdcms"
    };
    //让obj继承hd，即设置obj的原型为hd
    Object.setPrototypeOf(obj, hd);
    Object.setPrototypeOf(hd, cms);
    console.log(obj.web);
    console.log(Object.getPrototypeOf(hd) == cms); //true
    ```

- 原型检测

  - **instanceof** 检测构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上

  - 使用`isPrototypeOf`检测一个对象是否是另一个对象的原型链中

    ```javascript
    function A() {}
    function B() {}
    function C() {}
    
    const c = new C();
    B.prototype = c;
    const b = new B();
    A.prototype = b;
    const a = new A();
    
    console.dir(a instanceof A); //true
    console.dir(a instanceof B); //true
    console.dir(a instanceof C); //true
    console.dir(b instanceof C); //true
    console.dir(c instanceof B); //false
    ```

- 属性遍历

  - **使用`in` 检测原型链上是否存在属性，使用 `hasOwnProperty` 只检测当前对象**

    ```javascript
    let a = { url: "houdunren" };
    let b = { name: "后盾人" };
    Object.setPrototypeOf(a, b);
    console.log("name" in a);//t
    console.log(a.hasOwnProperty("name"));//f
    console.log(a.hasOwnProperty("url"));//t
    ```

- 借用原型

  - 使用call或apply可以借用其他原型方法完成功能
    - 一个参数：call  多个：apply

- this和原型的关系

  - 谁调用 this指向谁;this始终是当前操作的对象

### 原型总结

- prototype

  ```javascript
  /* 函数有prototype和_proto_两个原型，propotype用于实例对象，_proto_用于函数对象使用
     prototype指向它的原型，为构造函数设置原型值，当使用构造函数创建对象时把这个原型赋予对象
     prototype指包含一个constructor属性的对象，constructor指向当前构造函数
     对象中保存引用类型会造成对象共享属性，所以一般只会在原型中定义方法
     防止原型滥用：为Object原型添加方法，会影响所有的
  */
  ```

- Object.create

  ```javascript
  /*
  	使用Object.create创建一个新对象时，现有对象作为新对象的原型对象
  */
  let user = {
    show() {
      return this.name;
    }
  };
  
  let hd = Object.create(user);//hd 原型指向user
  hd.name = "向军";
  console.log(hd.show());
  //强以在设置时使用第二个参数设置新对象的属性
  let hd = Object.create(user, {
    name: {
      value: "后盾人"
    }
  });
  console.log(hd);
  ```

- `_proto_`

  ```javascript
  /*_proto_没值的时候设置，有值的时候获取
  */
  let user = {
    show() {
      return this.name;
    }
  };
  let hd ={name:"123"};
  hd._proto_=user;//设置 非官方的 浏览器研究出来的
  console.log(hd.show())
  console.log(hd._proto_)//获取
  //标准的是setPrototypeOf  和getPrototypeOf
  
  /*_proto_
  不是一个严格的属性，是一个getter setter，可以根据设定的值进行判断
  */
  ```

### 构造函数

- 原型属性

  ```javascript
  /* 构造函数在被new 时把构造函数的原型（prototype）赋值给新对象。
     构造函数只会产生一个原型对象
     对象的原型引用构造函数的原型对象，是在创建对象时确定的，构造函数原型对象改变时会影响后面的实例对象。
  */
  ```

- constructor

  ```javascript
  /*构造函数的原型中包含属性 constructor 指向该构造函数
          prototype-->
    构造函数           原型
    	   <--constructor
    给prototype赋值时(需要多个函数写成对象的形式)注意不要丢失constructor
    User.prototype = {
    	constructor: User,
    	show: function() {}
    };
    优点：直接给构造函数添加函数，会产生函数的复制，制造内存浪费，切不可以共享，放到原型上可以共享，不会产生函数复制
  */
  function User(name) {this.name = name;}
  let hd = new User("后盾人");
  let xj = new hd.constructor("向军");//User==hd.constructor
  console.log(xj);
  ```

- 优化

  - 指的是 将构造函数内的函数放到原型对象上，这样函数只会产生一份，且可以共享使用。

### 继承多态

- 继承实现

  ```javascript
  /* 原型的继承 而不是改变构造函数的原型 admin.propotype=user.prototype
     
     继承是原型的继承
  */
  
  /*
               object.prototype
               user.prototype                object
  admin.prototype		member.prototype    user
      admin    			member
  */
  function User() {}
  User.prototype.getUserName = function() {};
  
  function Admin() {}
  Admin.prototype = Object.create(User.prototype);//创建了一个原型
  Admin.prototype.role = function() {};
  
  Admin.prototype.role = function() {};//原型对象不变 前后顺序没有影响
  Admin.prototype._proto_ = User.prototype;
  //Admin.prototype.role = function() {};
  
  function Member() {}
  Member.prototype = Object.create(User.prototype);
  Member.prototype.email = function() {};
  console.log(new Admin());
  console.log(new Member());
  ```

**一个有趣的地方**

function User() {}
User.prototype.getUserName = function() {};

function Admin() {}

let a=new Admin()//a指向的是之前的原型对象

Admin.prototype = Object.create(User.prototype);//创建了一个原型，之前的还在系统中

![image-20220223180622534](C:\Users\cuiyue\AppData\Roaming\Typora\typora-user-images\image-20220223180622534.png)

- 构造函数

  ```javascript
  function Admin() {}
  console.log(Admin == Admin.prototype.constructor); //true
  
  /*
  根据得到的对象获取构造函数，然后再创建新对象所以需要保证构造函数存在。
  直接设置了 Admin.prototype 属性会造成constructor丢失，所以需要再次设置constructor值。
  */
  function User() {}
  function Admin() {}
  Admin.prototype = Object.create(User.prototype);//constructor 丢失
  Admin.prototype.role = function() {};
  let xj = new Admin();
  console.log(xj.constructor); //constructor丢失，返回User构造函数
  Admin.prototype.constructor = Admin;//需要重新设置
  let hd = new Admin();
  console.log(hd.constructor); //正确返回Admin构造函数
  //现在可以通过对象获取构造函数来创建新对象了
  console.log(new hd.constructor());
  
  /*完全重写构建函数原型，只对后面应用对象有效*/
  function User() {}
  const lisi = new User();
  User.prototype = {
      show() {return "prototype show";}
  };
  const wangwu = new User();
  console.log(wangwu.show());
  console.log(lisi.show()); // lisi.show is not a function
  ```

- 方法重写

  ```javascript
  //子类重写父类的实例
  function Person() {}
  Person.prototype.getName = function() {
    console.log("parent method");
  };
  
  function User(name) {}
  User.prototype = Object.create(Person.prototype);
  User.prototype.constructor = User;
  
  User.prototype.getName = function() {
    //调用父级同名方法
    Person.prototype.getName.call(this);
    console.log("child method");
  };
  let hd = new User();
  hd.getName();
  ```

- 多态

  ```javascript
  function User() {}
  User.prototype.show = function() {
    console.log(this.description());
  };
  
  function Admin() {}
  Admin.prototype = Object.create(User.prototype);
  Admin.prototype.description = function() {
    return "管理员在此";
  };
  
  function Member() {}
  Member.prototype = Object.create(User.prototype);
  Member.prototype.description = function() {
    return "我是会员";
  };
  
  function Enterprise() {}
  Enterprise.prototype = Object.create(User.prototype);
  Enterprise.prototype.description = function() {
    return "企业帐户";
  };
  
  for (const obj of [new Admin(), new Member(), new Enterprise()]) {
    obj.show();
  }
  ```

### 深挖继承

​	继承是为了复用代码，继承的本质是将原型指向到另一个对象

- 构造函数_

  ```javascript
  //使用父类的构造函数
  function User(name) {
    this.name = name;
    console.log(this); // Admin
  }
  User.prototype.getUserName = function() {
    return this.name;
  };
  
  function Admin(name) {
    User.call(this, name);
  }
  Admin.prototype = Object.create(User.prototype);
  
  let xj = new Admin("向军大叔");
  console.log(xj.getUserName()); //向军大叔
  ```

  

- 原型工厂

  ```javascript
  //将继承的过程封装，使继承业务简单化
  function extend(sub, sup) {
    sub.prototype = Object.create(sup.prototype);
    sub.prototype.constructor = sub;
  }
  function Access() {}
  function User() {}
  function Admin() {}
  function Member() {}
  extend(User, Access); //User继承Access
  extend(Admin, User); //Admin继承User
  extend(Member, Access); //Member继承Access
  Access.prototype.rules = function() {};
  User.prototype.getName = function() {};
  console.log(new Admin()); // 继承关系: Admin>User>Access>Object
  console.log(new Member()); //继承关系：Member>Access>Object
  ```

- 对象工厂

  ```javascript
  /*
  在原型继承基础上，将对象的生成使用函数完成，并在函数内部为对象添加属性或方法。
  */
  function User(name, age) {
    this.name = name;
    this.age = age;
  }
  User.prototype.show = function() {
    console.log(this.name, this.age);
  };
  
  function Admin(name, age) {
    //声名一个对象
    let instance = Object.create(User.prototype);
    User.call(instance, name, age);
    instance.role=function(){
      console.log('admin.role');
    }
    return instance;
  }
  let hd = Admin("后盾人", 19);
  hd.show();
  
  function member(name, age) {
    let instance = Object.create(User.prototype);
    User.call(instance, name, age);
    return instance;
  }
  let lisi = member("李四", 28);
  lisi.show();
  ```

- 多继承的问题 js没有多继承

  ```
  多继承 会造成混乱
  ```

- Mixin模式

  ```javascript
  /* mixin混合功能
  定义一些功能的对象 然后将属性进行合并
  */
  function extend(sub, sup) {
    sub.prototype = Object.create(sup.prototype);
    sub.prototype.constructor = sub;
  }
  function User(name, age) {
    this.name = name;
    this.age = age;
  }
  User.prototype.show = function() {
    console.log(this.name, this.age);
  };
  const Credit = {
    total() {
      console.log("统计积分");
    }
  };
  const Request = {
    ajax() {
      console.log("请求后台");
    }
  };
  
  function Admin(...args) {
    User.apply(this, args);
  }
  extend(Admin, User);//继承
  Object.assign(Admin.prototype, Request, Credit);//属性合并
  let hd = new Admin("向军", 19);
  hd.show();
  hd.total(); //统计积分
  hd.ajax(); //请求后台
  
  //扩展：super 指this._proto_
  ```

  

- 实例操作

# 类

#### 基础知识

为了和其他语言继承形态一致，JS提供了`class` 关键词用于模拟传统的`class` ，但底层实现机制依然是原型继承。

```javascript
//声名
let a=class{}
console.log(a)
//使用类不需要添加逗号
class User {
  show() {}
  get() {
    console.log("get method");
  }
}
const hd = new User();//新建对象
hd.get();

/*构造函数
constructor 会在 new 时自动执行
*/
class User {
  constructor(name) {
    this.name = name;//this是调用它的对象
    this.show = function() {};//构造函数方法
  }
  getName() {//原型方法，会自动放到原型当中，实例化对象可以公用
    return this.name;
  }
}
const xj = new User("向军大叔");
console.log(xj);

//class中的方法 没办法被遍历  enumber false
//class 默认在严格模式下
```

#### 静态访问

```javascript
/*静态属性 
	构造函数 拥有的属性是静态属性
	class 为属性添加static 变为静态属性 为所有对象公用的
  静态方法
	构造函数：放到原型prototype当中（不是静态的方法）
		User.show=function(){} 放到_proto_中
	class： static修饰函数 静态方法 使用类名调用是静态方法 使用实例对象调用是普通方法
*/
```

#### 访问器

```javascript
/*访问器
	使用访问器可以管控属性，有效的防止属性随意修改
	访问器就是在函数前加上 get/set修饰，操作属性时不需要加函数的扩号，直接用函数名
*/
class User {
  constructor(name) {
    this.data = { name };
  }
  get name() {
    return this.data.name;
  }
  set name(value) {
    if (value.trim() == "") throw new Error("invalid params");
    this.data.name = value;
  }
}
let hd = new User("向军大叔");
hd.name = "后盾人";
console.log(hd.name);
```

#### 访问控制

```javascript
/*
public 可以随意修改
保护属性：子类可以访问 外部不可以访问
	名字上的约定 比如加个下划线，类似于君子协定，
	使用Symbol的方式 定义私有属性，即在外部通过查看对象结构无法获取的属性
	WeakMap 是一组键/值对的集，下面利用WeakMap类型特性定义私有属性
private：加一个# 无法在外部访问 内部可以访问
*/
const protecteds = Symbol();
class Common {
  constructor() {
    this[protecteds] = {};
    this[protecteds].host = "https://houdunren.com";
  }
  set host(url) {
    if (!/^https?:/i.test(url)) {
      throw new Error("非常网址");
    }
    this[protecteds].host = url;
  }
  get host() {
    return this[protecteds].host;
  }
}
class User extends Common {
  constructor(name) {
    super();
    this[protecteds].name = name;
  }
  get name() {
    return this[protecteds].name;
  }
}
let hd = new User("后盾人");
hd.host = "https://www.hdcms.com";
// console.log(hd[Symbol()]);
console.log(hd.name);

```



#### 详解继承

- 属性继承

  ```java
  class User {
    constructor(name) {
      this.name = name;
    }
  }
  class Admin extends User {
    constructor(name) {
      super(name);//对应 原型的User.call(this, name); 
    }
  }
  let hd = new Admin("后盾人");
  console.log(hd);
  ```

- 继承原理

  内部使用的还是原型继承

- 方法继承

  ```javascript
  /*原生的继承主要是操作原型链，实现起来比较麻烦，使用 class 就要简单的多了。
   继承时必须在子类构造函数中调用 super() 执行父类构造函数
  super.show() 执行父类方法*/
  ```

- super原理

  ```javascript
  /*super表示从当前原型中执行方法
  super一直指向当前对象，当使用this模拟super时，需要用call传递this
  super 只能在类或对象的方法中使用，而不能在函数中使用
  */
  let user = {
    name: "user",
    show() {
      return this.name;
    }
  };
  let admin = {
    __proto__: user,
    name: "admin",
    show() {
      return this.__proto__.show();//show里的this指向当前对象，调用父类，结果并不是admin的name
      //需要进行修改
      // return this.__proto__.show.call(this);
      //但是多层继承还是会出现问题
    }
  };
  console.log(admin.show());
  ```

- constructor

  ```javascript
  /*super 指调父类引用，在构造函数constructor 中必须先调用super()
  super() 指调用父类的构造函数
  必须在 constructor 函数里的this 调用前执行 super()
  */
  function Parent(name) {
    this.name = name;
  }
  function User(...args) {
    Parent.apply(this, args);
  }
  User.prototype = Object.create(User.prototype)
  User.prototype.constructor = User;
  const hd = new User("后盾人");
  console.log(hd.name);
  ```

- 其



# 模块开发

模块就是一个独立的文件，里面是函数或者类库；

虽然JS没有命名空间的概念，使用模块可以解决全局变量冲突

模块需要隐藏内部实现，之对外开放接口

模块可以避免滥用全局变量，造成代码不可控

模块还可以复用

### 模块设计

```javascript
/**/

//定义一个module
let module = (function() {
  //模块列表集合
  const moduleLists = {};
  //
  function define(name, modules, action) {
    modules.map((m, i) => {
      modules[i] = moduleLists[m];
    });
    //执行并保存模块
    moduleLists[name] = action.apply(null, modules);
  }
  return { define };
})();

//声明模块不依赖其它模块
module.define("hd", [], function() {
  return {
    show() {
      console.log("hd module show");
    }
  };
});

//声明模块时依赖其它模块
module.define("xj", ["hd"], function(hd) {
  hd.show();
});
```

### 基础知识

```html
/*标签使用：html中导入模块 需要定义属性type=“module”*/
 <script type="module"></script>

/*引用模块 必须添加./  */
<script type="module">
  import { hd } from "./hd.js";
</script>

/*延迟解析 模块总是会在html解析后才执行的 
建议为用户提供加载动画提示，当模块运行时在去掉动画
*/

/*模块默认运行在严格模式下*/

/*作用域 模块都有顶级作用域 模块之间的文件相互独立*/
<script type="module" src="1.1.js"></script>
<script type="module" src="1.2.js"></script>

文件内容如下
# 1.1.js
let hd = "houdunren";

# 1.2.js
console.log(hd)

/*预解析 模块在导入时只执行一次解析，之后的导入不会再执行模块代码，而使用第一次的解析结果，并共享数据
	可以在首次导入时完成一些初始化工作
	如果模块内有后台请求，也只执行一次即可
*/
```

### 导入导出

```
/*一个文件一个模块*/

//具名导出
import { User, site, func } from "./hd.js";

//批量导出
 import * as api from "./hd.js";
 
```

### 别名使用

```
 import { User as user, func as action, site as name } from "./hd.js";
```

### 默认导出

```
/*
使用default 定义默认导出的接口，导入时不需要使用 {}

可以为默认导出自定义别名
只能有一个默认导出
默认导出可以没有命名
*/
export default class {
  static show() {
    console.log("User.method");
  }
}
class User {
  static show() {
    console.log("User.method");
  }
}
export { User as default };
<script type="module">
  import User from "./hd.js";
  User.show();
</script>
```

### 导出合并

### 动态加载

### 编译打包

# 正则表达式

### 基础知识

```javascript
/*创建 自面量形式创建 //包裹字面量 */
let hd = "houdunren.com";
let a = "u";
console.log(/u/.test(hd)); //true
console.log(eval(`/${a}/`).test(hd)); //true 变量的时候可以使用

/*使用对象的方式*/
let hd = "houdunren.com";
let web = "houdunren";
let reg = new RegExp(web);//检测有没有web变量
console.log(reg.test(hd)); //true

/*选择符 | 这个符号带表选择修释符，也就是 | 左右两侧有一个匹配到就可以。
 [12345]就有或者可选的意思 每个都是一个个体
 ()原子组 (12|34) 12或者34
*/
const hd = "houdunren";
console.log(/houdunren|hdcms/.test(hd)); //true

/*转义：
 .除换行外任何字符，要当成普通字符.使用 需要进行转义
 d普通字符串 \d代表0-9 

*/

/*字符边界
^ 
&
* 0或者多个
+ 不止一个
？
*/
```

### 元子字符

```javascript
/* 元字符
\d	匹配任意一个数字	[0-9]
\D	与除了数字以外的任何一个字符匹配	[^0-9] ^除了
\w	与任意一个英文字母,数字或下划线匹配	[a-zA-Z_]
\W	除了字母,数字或下划线外与任何字符匹配	[^a-zA-Z_]
\s	任意一个空白字符匹配，如空格，制表符\t，换行符\n	[\n\f\r\t\v]
\S	除了空白符外任意一个字符匹配	[^\n\f\r\t\v]
.	匹配除换行符外的任意字符
*/

let hd = `张三:010-9999999`;
console.log(hd.match(/[^-\d:\s]+/g));//输出中文 除了数字：空白

//匹配所有的字符
[\s\S][\d\D]
```

### 模式修饰

```javascript
/*
i	不区分大小写字母的匹配
g	全局搜索所有匹配内容
m	视为多行
s	视为单行忽略换行符，使用. 可以匹配所有字符
y	从 regexp.lastIndex 开始匹配
u	正确处理四个字符的 UTF-16 编码
模式可以组合使用
*/


```

```javascript
/*汉字与字符属性
每个字符都有属性，如L属性表示是字母，P 表示标点符号，需要结合 u 模式才有效。*/
//使用\p{L}属性匹配字母
let hd = "houdunren2010.不断发布教程，加油！";
console.log(hd.match(/\p{L}+/u));

//使用\p{P}属性匹配标点
console.log(hd.match(/\p{P}+/gu));
```

```javascript
/*lastIndex 控制开始搜索的位置 从0开始的 全局模式会记录上一次的位置
exec
*/
```

### 原子表

```javascript
/*
/ue/完整的匹配ue
/[ue]/单个的匹配
*/


//原子表字符不解析
// /[()]/  ()保留自己的本意匹配括号
// /[.+]/  .+也是
```

### 原子组

```javascript
/*原子组
  如果一次要匹配多个元子，可以通过元子组完成
  原子组与原子表的差别在于原子组一次匹配多个元子，而原子表则是匹配任意一个字符
  元字符组用 () 包裹
  在match中使用原子组匹配，会将每个组数据返回到结果中
	0 为匹配到的完成内容
	1/2 等 为原子级内容
	index 匹配的开始位置
	input 原始数据
	groups 组别名
*/

//邮箱匹配
let hd = "2300071698@qq.com";
let reg = /^[\w\-]+@[\w\-]+\.(com|org|cn|cc|net)$/i;
console.dir(hd.match(reg));

let hd = `admin@houdunren.com.cn`;
let reg = /^[\w-]+@([\w-]+\.)+(org|com|cc|cn)$/;
console.log(hd.match(reg));
```



### 重复匹配

```javascript
/*
*		重复零次或更多次
+		重复一次或更多次
?		重复零次或一次
{n}		重复n次
{n,}	重复n次或更多次
{n,m}	重复n到m次
因为正则最小单位是元字符，而我们很少只匹配一个元字符如a、b所以基本上重复匹配在每条正则语句中都是必用到的内容。
*/

```



```html
//验证密码必须包含大写字母并在5~10位之间
<body>
<input type="text" name="password" />
</body>
<script>
let input = document.querySelector(`[name="password"]`);
input.addEventListener("keyup", e => {
  const value = e.target.value.trim();
  const regs = [/^[a-zA-Z0-9]{5,10}$/, /[A-Z]/];
  let state = regs.every(v => v.test(value));
  console.log(state ? "正确！" : "密码必须包含大写字母并在5~10位之间");
});
</script>
```

禁止贪婪

```javascript
/* 当使用了*之后 会出现/hd+/ hdddddd 会匹配为hdddddd 尽可能多的匹配  可以通过一些操作来禁止贪婪
*?		重复任意次，但尽可能少重复
+?		重复1次或更多次，但尽可能少重复
??		重复0次或1次，但尽可能少重复
{n,m}?	重复n到m次，但尽可能少重复
{n,}?	重复n次以上，但尽可能少重复
*/

let str = "aaa";
console.log(str.match(/a+/)); //aaa
console.log(str.match(/a+?/)); //a
console.log(str.match(/a{2,3}?/)); //aa
console.log(str.match(/a{2,}?/)); //aa
```

### 全局匹配

```javascript
/*
match 全局获取页面中标签内容，但并不会返回匹配细节
matchAll 在新浏览器支持，返回一个迭代对象
exec 使用g模式并结合 exec 循环操作可以获取结果和匹配细节，和lastIndex配合 循环向后
*/

//matchAll
let str = "houdunren";
let reg = /[a-z]/ig;
for (const iterator of str.matchAll(reg)) {
  console.log(iterator);
}
//为低端浏览器添加matchAll方法
String.prototype.matchAll = function(reg) {
  let res = this.match(reg);
  if (res) {
    let str = this.replace(res[0], "^".repeat(res[0].length));
    let match = str.matchAll(reg) || [];
    return [res, ...match];
  }
};
let str = "houdunren";
console.dir(str.matchAll(/(U)/i));

//exec写search
function search(string, reg) {
  const res = [];
  while ((data = reg.exec(string))) {
    res.push(data);
  }
  return res;
}
console.log(search("abc", /[a-z]/g));
```

### 字符方法

```javascript
/*
search 检索字符串中的指定字符串，也可以用正则的形式，返回索引位置
match 直接使用字符串/正则
matchAll
split 用于使用字符串或正则表达式分隔字符串，下面是使用字符串分隔日期，如果日期的连接符不确定，那就要使用正则操作了
replace 可以执行基本字符替换，也可以进行正则替换
	$$	插入一个 "$"。
	$&	插入匹配的子串。
	$`	插入当前匹配的子串左边的内容。
	$'	插入当前匹配的子串右边的内容。
	$n	假如第一个参数是 RegExp 对象，并且 n 是个小于100的非负整数，那么插入第 n 个括号匹配的字符串。提示：索引是从1开始
*/

let str = "2023/02/12";
console.log(str.replace(/\//g, "-")); //2023-02-12
```



### 正则方法

```javascript
/* RegEx
test
exec
*/
```



### 断言匹配

```javascript
/*
(?=exp)
(?<=exp)
(?!exp)
(?<!exp)
*/
```



# Promise

JS是单线程

### promise

`Promise` 将异步操作队列化，按照期望的顺序执行，返回符合预期的结果。可以通过链式调用多个 `Promise` 达到我们的目的。

### 问题探究

单线程 就类似于主线程之外，会有专门的处理的部分，模块的工作完成之后，会把结果放到工作队列之中；当主线程执行完了，会去任务队列之中去找，然后进行执行。

- 加载文件

  ```
  # hd.js
  function hd() {
    console.log("hd function run");
  }
  # houdunren.js
  function houdunren() {
    console.log("houdunren function run");
    hd();
  }
  
  function load(file, resolve, reject) {
    const script = document.createElement("script");
    script.src = file;
    script.onload = resolve;
    script.onerror = reject;
  }
  load(
    "js/hd.js",
    script => {
      hd();
    },
    error => {
      console.log(` 加载失败`);
    }
  );
  //因为执行houdunren hd之前，改进之后如下，会导致嵌套
  //产生回调地狱
  load(
    "js/hd.js",
    script => {
      load(
        "js/houdunren.js",
        script => {
          houdunren();
        },
        error => {
          console.log(`${error.srcElement.src} 加载失败`);
        }
      );
    },
    error => {
      console.log(`${error.srcElement.src} 加载失败`);
    }
  );
  ```

### promise微任务处理机制

```javascript
let kfc = new Promise((resolve, reject) => {
  console.log("肯德基厨房开始做饭");
  resolve("我是肯德基，你的餐已经做好了");
});
let dad = kfc.then(msg => {
  console.log(`收到肯德基消息: ${msg}`);
  return {
    then(resolve) {
      setTimeout(() => {
        resolve("孩子，我吃了两秒了，不辣，你可以吃了");
      }, 2000);
    }
  };
});
let son = dad.then(msg => {
  return new Promise((resolve, reject) => {
    console.log(`收到爸爸消息: ${msg}`);
    setTimeout(() => {
      resolve("妈妈，我和向军爸爸吃完饭了");
    }, 2000);
  });
});
let ma = son.then(msg => {
  console.log(`收到孩子消息: ${msg},事情结束`);
});
//先执行同步的 在异步执行的 微任务 在宏任务
```

```javascript
/* 一个 `promise` 必须有一个 `then` 方法用于处理状态改变
pending
resolved
rejected

promise：微任务队列 为主
普通的是 宏任务队列
*/

new Promise((resolve,reject)=>{
	resolved()
}).then(value=>{
	//成功的业务处理
},reason=>{
	//失败的业务处理
})
```

### 异步状态

- **状态说明**
  
  - `pending` 指初始等待状态，初始化 `promise` 时的状态
  - `resolve` 指已经解决，将 `promise` 状态设置为`fulfilled`
  - `reject` 指拒绝处理，将 `promise` 状态设置为`rejected`
  - `promise` 是生产者，通过 `resolve` 与 `reject` 函数告之结果
  - `promise` 非常适合需要一定执行时间的异步任务
  - 状态一旦改变将不可更改
  
- **动态改变**

  ```
  /*
  Promise.then也是一个promise 见肯德基的例子
  */
  
  ```

### then

- then也是一个promise

  ```javascript
  /*
  Promise.then也是一个promise 见肯德基的例子
  */
  let kfc = new Promise((resolve, reject) => {
    console.log("肯德基厨房开始做饭");
    resolve("我是肯德基，你的餐已经做好了");
  });
  let dad = kfc.then(msg => {
    console.log(`收到肯德基消息: ${msg}`);
  });
  ```

- then返回值处理技巧

  ```javascript
  /*
  当一个promise有多个then的时候，默认then的返回是成功
  如果只关心成功则不需要传递 then 的第二个参数
  如果只关心失败时状态，then 的第一个参数传递 null
  */
  
  //promise 传向then的传递值，如果then没有可处理函数，会一直向后传递
  let p1 = new Promise((resolve, reject) => {
  	reject("rejected");
  })
  .then()
  .then(
    null,
    f => console.log(f)
  );
  ```

- 链式调用

  ```javascript
  /*
  每次的 then 都是一个全新的 promise，默认 then 返回的 promise 状态是 fulfilled；
  每次的 then 都是一个全新的 promise，不要认为上一个 promise状态会影响以后then返回的状态；
  */
  new Promise((resolve, reject) => {
    reject();
  })
  .then(
    resolve => console.log("fulfilled"),
    reject => console.log("rejected")
  )
  .then(
    resolve => console.log("fulfilled"),
    reject => console.log("rejected")
  )
  .then(
    resolve => console.log("fulfilled"),
    reject => console.log("rejected")
  );
    
  // 执行结果如下
    ejected
    fulfilled
    fulfilled
    
  /*
  如果内部返回 promise 时将使用该 promise
  如果 then 返回promise 时，后面的then 就是对返回的 promise 的处理，需要等待该 promise 变更状态后执行。
  */
  let promise = new Promise(resolve => resolve());
  let p1 = promise.then(() => {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(`p1`);
        resolve();
      }, 2000);
    });
  }).then(() => {
    return new Promise((a, b) => {
      console.log(`p2`);
    });
  });
  ```

- 其他类型

  ```javascript
  //循环调用 如果 then 返回与 promise 相同将禁止执行
  let promise = new Promise(resolve => {
    resolve();
  });
  let p2 = promise.then(() => {
    return p2;
  }); // TypeError: Chaining cycle detected for promise
  
  //如果返加值是 promise 对象，则需要更新状态后，才可以继承执行后面的promise
  /*
  包含 then 方法的对象就是一个 promise ，系统将传递 resolvePromise 与 rejectPromise 做为函数参数
  下例中使用 resolve 或在then 方法中返回了具有 then方法的对象
  该对象即为 promise 要先执行，并在方法内部更改状态
  如果不更改状态，后面的 then promise都为等待状态
  */
  new Promise((resolve, reject) => {
    resolve({
      then(resolve, reject) {
        resolve("解决状态");
      },
    });
  })
    .then((v) => {
      console.log(`fulfilled: ${v}`);
      return {
        then(resolve, reject) {
          setTimeout(() => {
            reject("失败状态");
          }, 2000);
        },
      };
    })
    .then(null, (error) => {
      console.log(`rejected: ${error}`);
    });
  ```

- **将AJAX封装成promise**

  ```
  
  ```

### catch

```javascript
/*
建议将错误交给catch处理，而不建议在then中完成
catch用于失败状态的处理函数，等同于 then(null,reject){}

建议使用 catch 处理错误  ，将 catch 放在最后面用于统一处理前面发生的错误

错误是冒泡的操作的，当没有任何一个then 定义第二个函数，将一直冒泡到 catch 处理错误

catch也可以捕获对then抛出的错误处理，见example3
*/
//example1
const promise = new Promise((resolve, reject) => {
  reject(new Error("Notice: Promise Exception"));
}).catch(msg => {
  console.error(msg);
});
//example2
new Promise((resolve, reject) => {
  reject(new Error("请求失败"));
})
.then(msg => {})
.then(msg => {})
.catch(error => {
  console.log(error);
});
//example3
new Promise((resolve, reject) => {
  resolve();
})
.then(msg => {
  throw new Error("这是then 抛出的错误");
})
.catch(() => {
  console.log("33");
});
```

- 使用建议

### finally

```javascript
/*
无论状态是resolve或reject都会执行此动作，finally与状态无关
*/
const promise = new Promise((resolve, reject) => {
  reject("hdcms");
})
.then(msg => {
  console.log("resolve");
})
.catch(msg => {
  console.log("reject");
})
.finally(() => {
  console.log("resolve/reject状态都会执行");
});
```

### 实例操作

- 封装ajax
- 定时器timeout
- 封装setInterval

### 链式操作

### 扩展接口

- resolve成功
- reject：失败了
- all：将所有的promise，同一进行处理
- allSettled：如果有拒绝的，存放起来
- race：从数组之中取一个，谁快用谁

### 任务队列

队列中的每一个成员都要是promise，成员的改变依赖于上一个promise

```javascript
/*

*/

function queue(nums) {
  let promise = Promise.resolve();
  nums.map(n => {
    promise = promise.then(v => {
      return new Promise(resolve => {
        console.log(n);
        resolve();
      });
    });
  });
}

queue([1, 2, 3, 4, 5]);

```

### async/await

- 语法糖

  - `async/await` 本质还是promise，只是更简洁的语法糖书写
  - `async/await` 使用更清晰的promise来替换 promise.then/catch 的方式

- async

  ```javascript
  /*
  函数前加上async，函数将返回promise，我们就可以像使用标准Promise一样使用了
  */
  async function hd() {
    return "houdunren.com";
  }
  console.log(hd());
  hd().then(value => {
    console.log(value);
  });
  ```

  

- await

  ```javascript
  /*使用 await 关键词后会等待promise 完
  	await 后面一般是promise，如果不是直接返回
  	await 必须放在 async 定义的函数中使用
  	await 用于替代 then 使编码更优雅
  */
  
  
  
  
  ```

  

- 加载进度

- 类中使用

- 其他声名

- 错误处理

  ```
  async function hd() {
    console.log(houdunren);
  }
  hd().catch(error => {
    throw new Error(error);
  });
  
  //await错误处理
  
  ```

  

- 并发执行



# 任务管理

### 任务管理

JavaScript 语言的一大特点就是单线程，也就是说同一个时间只能处理一个任务。为了协调事件、用户交互、脚本、UI 渲染和网络处理等行为，防止主线程的不阻塞，（事件循环）Event Loop的方案应用而生。

JavaScript 处理任务是在等待任务、执行任务 、休眠等待新任务中不断循环中，也称这种机制为事件循环。

- 主线程中的任务执行完后，才执行任务队列中的任务
- 有新任务到来时会将其放入队列，采取先进先执行的策略执行队列中的任务
- 比如多个 `setTimeout` 同时到时间了，就要依次执行
- 任务包括：script(整体代码)、 setTimeout、setInterval、DOM渲染、DOM事件、Promise、XMLHTTPREQUEST等
- 主线程》微任务》宏任务
- 任务共享内存

#### 原理分析

#### 任务拆分

#### 微任务处理

# Promise核心

promise

```
/*
class HD{
 contructou{
 	static  
 }
}
*/

```



# 网络请求

