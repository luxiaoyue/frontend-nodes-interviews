- [x] react定义

- [x] 基础用法 state props ref

- [x] react生命周期

- [x] 为什么引入hooks

- [x] useMemo memo useCallback

- [ ]  rsdux

- [ ] **react是怎么渲染到页面的**

- [x] ##### jsx

- [x] 虚拟dom

- [x] ##### 不使用jsx，直接使用原生的

- [x] ##### 性能优化

- [x] 组件

- [x] DIFF算法

- [x] fiber

[聊聊 JSX 和虚拟 DOM - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/349459477)

[(9条消息) JSX 与虚拟 DOM_平安蜀黍的博客-CSDN博客](https://blog.csdn.net/marion_lau/article/details/112346988)

[React 组件类型定义的区别：JSX.Element vs ReactNode vs ReactElement - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/353239684)

## 1.react和vue

相同点：

- 数据驱动视图，提供响应式的视图组件
- 都有virtual DOM，组件化开发，通过props参数进行父子组件数据的传递，都实现webComponents规范
- 都支持服务端渲染 ssr
- 都有native解决方案，

不同点：

- 书写的时候：react拆分成组件的，vue是template的更像是html页面的
-    数据流：react是单向数据流，vue双向数据流
-    开发模式：react本身是严格的view层，MVC模式；Vue则是MVVM模式
- 响应式原理不同：
  -    vue是递归监听data的变化，直接修改，当数据改变时，自动找到组件重新渲染
  -    react基于状态机的，手动优化，数据不可变，需要通过setState驱动新的state代替旧的state

<img src="C:\Users\cuiyue\AppData\Roaming\Typora\typora-user-images\image-20220409234917633.png" alt="image-20220409234917633" style="zoom: 50%;" />

### react和vue孰优孰劣

- 
- vue适合小而精的项目，react则更适用于偏大的项目，但是立住这个结论的支点是不一样的，vue的组件由于一些复杂逻辑的复用方式和组件可应用模式的不足，以至于在大型项目中复用性与设计性是不如react的，但是在小而精的项目里，vue更友好的书写方式，更简化的代码与更声明式的指令都是很棒的优势与特点，而相反的react在中大型项目中能更好的完成vue的不足项

## 2.react首次渲染的流程

**render**

- 根组件的 `JSX` 定义会被 `babel` 转换为 `React.createElement` 的调用，其返回值为 `VNode树`。

- `React.render` 调用，实例化 `FiberRootNode`（Fiber的入口对象），并创建 `根  Fiber` 节点 `HostRoot` 赋值给 `FiberRoot` 的 `current` 属性；

  > FiberRoot{current :Fiber}
  >
  > Fiber{ setNode:HostRoot}
  >
  > `Fiber` 节点的 `stateNode` 属性为 `HostRoot` 类型的节点则该属性指向的是 `fiberRoot` 对象
  >
  > `current` 的值是一个 `HostRoot` 类型的 `Fiber` 节点，这个 `HostRoot` 的子节点就是程序的根组件（`App`）对应的 `Fiber` 节点。
  >
  > 在首次渲染调用 `React.render` 时，应用程序中其实只有一个 `HostRoot` 的 `Fiber` 节点，而在 `render` 过程中，才会将我们传入的 `App` 组件构建成 `HostRoot` 的子 `Fiber` 节点。

- 创建更新对象，其更新内容为 `React.render` 接受到的第一个参数 `VNode树`，将更新对象添加到 `HostRoot` 节点的 `updateQueue` 中；

  > 更新队列：主要是对同步的多次调用 `setState` 进行缓冲，避免冗余的渲染调用。

- 处理更新队列，从 `HostRoot` 节点开始遍历，在其 `alternate` 属性中构建 `WIP` 树，在构建 `Fiber` 树的过程中会根据 `VNode` 的类型进行组件实例化、生命周期调用等工作，对需要操作视图的动作将其保存到 `Fiber` 节点的 `effectTag` 上面，将需要更新在DOM上的属性保存至 `updateQueue` 中，并将其与父节点的 `lastEffect` 连接。

- 当整颗树遍历完成后，进入 `commit` 阶段，此阶段就是将 `effectList` 收集的 `DOM` 操作应用到屏幕上。

**commit**

- before mutation 此时dom节点还没有渲染到页面中,执行getSnapshotBeforeUpdate周期函数和useEffect钩子函数

- mutation 渲染DOM 根据effectList的tag标注进行dom元素的更新,删除,替换等

- layout 执行useLayoutEffect,componentDidMount,componentDidUpdate等相关逻辑 进行current和workInprogress的替换

- `commit` 完成将 `current` 替换为 `WIP` 树。

[图说React渲染流程 - 掘金 (juejin.cn)](https://juejin.cn/post/6943615245768196110)

[React 渲染流程 - 掘金 (juejin.cn)](https://juejin.cn/post/6959120891624030238#comment)

[从React源码分析渲染更新流程 - 掘金 (juejin.cn)](https://juejin.cn/post/6844904200824946696)

## 3.Virtual DOM及其原理

- 真实DOM是文档对象模型，一个结构化文本的抽象，页面上渲染的每个节点都是一个真实的DOM

- 虚拟DOM是真实DOM的JavaScript对象表达，相比，更容易更新，更便捷。

- 渲染成虚拟dom之后，会维护虚拟dom的副本，当修改时，会比较两个虚拟dom的当前状态和之前的状态，确定哪些发生了更改。将比较的差异更新到真实dom，在更新UI。

- 优势：
  - 简单方便
  - 性能：避免真实dom频繁更新，减少多次引起的回流与重绘
  - 跨平台

- 缺点：

  - 性能要求极高的应用中虚拟 DOM 无法进行针对性的极致优化
  - 首次渲染，因为多了一层虚拟dom 慢一点

- #### **虚拟DOM和真实DOM区别**

  - 虚拟dom不会进行排版和重绘，真实dom会频繁的重排与重绘
  - 虚拟dom总损耗：虚拟dom增删改+真实dom增删改+重排与重绘
  - 真实dom总损耗：真实dom完全增删改+排版与重绘
  - 真实dom：效率低、性能差频繁操作dom，易于导致重绘回流

<img src="C:\Users\cuiyue\AppData\Roaming\Typora\typora-user-images\image-20220411233239312.png" alt="image-20220411233239312" style="zoom: 50%;" />

- #### 虚拟dom转换为真实dom

  - 使用React.createElement或JSX编写React组件，实际上所有的 JSX 代码最后都会转换成React.createElement(...) ，Babel帮助我们完成了这个转换的过程。
  - createElement函数对key和ref等特殊的props进行处理，并获取defaultProps对默认props进行赋值，并且对传入的孩子节点进行处理，最终构造成一个虚拟DOM对象
  - ReactDOM.render将生成好的虚拟DOM渲染到指定容器上，其中采用了批处理、事务等机制并且对特定浏览器进行了性能优化，最终转换为真实DOM

## 4.JSX

- 定义:jsx是一种语法糖,在使用中会被babel编译转化成JS代码。`JSX` 就是为了简化直接调用 `React.createElement()` 方法

  > 1.JSX` 通过 `babel` 的方式转化成 `React.createElement` 执行，返回值是一个对象，也就是虚拟 `DOM
  > 2.在babel编译时会判断JSX的首字母：
  >        字母小写——原生DOM标签，createElemnet第一个变量被编译为字符串。
  >        字母大写——自定义的组件，createElemnet第一个变量被编译为对象。
  > 3.注：
  >
  > ```
  > React.createElement(
  >   'h1'，//标签名
  >   { className: 'hClass', id: 'hId' },//对象 存放id class等
  >   'hello world'//文本
  > )
  > ```

- 执行流程
  - 使用React.createElement或JSX编写React组件，最后都会转换成React.createElement(...) 
  - **createElement**函数对key和ref等特殊的props进行处理，并获取defaultProps对默认props进行赋值，并且对传入的孩子节点进行处理，最终构造成一个虚拟DOM对象
  - ReactDOM.render将生成好的虚拟DOM渲染到指定容器上，其中采用了批处理、事务等机制并且对特定浏览器进行了性能优化，最终转换为真实DOM

## 5.babel的原理

- parse：第一步是babel使用babylon将原始代码转换为抽象语法树；
- transform：第二步是babel通过babel-traverse对前面的抽象语法树进行遍历修改并获得新的抽象语法树；
- generator：第三步是babel使用babel-generator将抽象语法树转换为代码；

## 6.render的原理

> 1.存在的两种形式：在类组件中指render方法；在函数组件中，指的是函数组件本身。
>
> 2.触发时机
>
> - 类组件调用setState
> - 函数组件通过useState hook修改状态（只有改变了，才会render）
>
> 3.总结：
>
> `setState`就会执行`render`方法，`useState` 会判断当前值有无发生改变确定是否执行`render`方法，一旦父组件发生渲染，子组件也会渲染
>
> 优化：
>
> - shouldComponentUpdate
> - React.Memo
> - useMemo
> - useCallback

## 7.解决父组件更新子组件更新的优化

- shouldComponebUpdate 默认是true，可以用来做props的比较，避免不必要的render的发生；但是不建议做深层次的比较；对于引用类型，不改变值改变引用 简单的无法判断；——immutable 不可改变 一旦创建就无法改变
- pureComponent 在类组件中直接继承pureComponent即可；从而减少不必要的render；自带shallowEqual方法，会对props和state做浅层的比较；
- ReactMemo 是个高阶组件，适用于函数组件；仅仅检查props是否更新了；将组件用reactMemo进行包裹；
- useMemo(fn,[ xxxx]) 减少组件重新渲染时重复进行复杂的计算，只有[xxx]变化才会触发函数；[]空 返回上次计算结果，不传每次刷新都会正常计算；
- useCallback(fn,[ ]) 用于需要传递给子组件的函数，减少子组件的重复渲染；

- 对比：
  - useEffect(fn,[xxx]) 页面渲染之后才执行，相当于componentDidMounted componentDidUpdate 
  - useMemo(fn,[xxx]) 页面渲染时执行

## 8.HOOKS

#### 为什么有hooks

- class组件状态逻辑复用困难
- class的复杂组件难以理解
- 类组件需要理解class和this
- class 组件继承 React.Compoment 默认就会添加很多的生命周期方法

#### 使用规则：

- 只能在最顶层调用hooks，不要写在循环、条件语句或者嵌套方法中。遵循这个方式，你能保证每次组件渲染时Hooks都是按照相同的顺序被调用。这能使React在多个useState和useEffect的情形下正确保存state数据。
- 只能在function组件里调用hooks，不在普通的JS方法里调用HOOKs

#### 优点

- 可读性
- 组件层级浅

#### 缺点

- useEffect闭包问题
- hooks的useEffect只包括了componentDidMount，componentDidUpdate和componentWillUnmount这三 个生命周期，对于其他的class类组件的生命周期则是不支持

## 9.钩子函数

#### setState

- 是什么：通过setState修改状态的值，必须通过setState方法告知react组件state已经发生了改变

- 类型:
  - 同步：在setTimeout或原生dom事件中，是同步的函数
  - 异步：组件生命周期或react合成事件中，是异步的函数

- 批量更新
  - 对一个值多次setState，会覆盖,
  - 而在`setTimeout`或者原生`dom`事件中，由于是同步的操作，所以并不会进行覆盖现象

#### useState

- 通过在函数组件中调用 useState 来给函数组件添加内部state。useState 会返回一对值：当前状态 和 更新状态的函数。
- useState 唯一的参数就是 initialState，initialState 参数只有在第一次渲染时会被使用。
- 类型：
  - 正常的事件流：异步执行的
  - 异步事件中：同步执行的
- 批量更新：
  - 正常事件-异步函数-合并
  - 异步事件-同步函数-不会合并

#### setState和useState

- 正常的事件流
  - setState和useState是异步执行的（不会立即更新state的结果）
  - 多次的执行setSatate和useState，会合并更新，只会调用一次render
  - setState会进行state的合并，而useState不会
- 异步事件中
  - setState和useState是同步执行的（立即更新state的结果）
  - 多次执行setState和useState，每一次的执行setState和useState，都会调用一次render

#### useEffect

- useEffect(function{},[])空数组，初始化调用一次之后不再执行，相当于componentDidMount。
- useEffect(function{},[a])其中一个变量发生变化，则useEffect会再次运行
- useEffect(function{})初始化和更新都会执行，相当于componentDidMount  componentDidUpdate
- useEffect返回一个函数，这个函数会在组件卸载时执行。componentDidMount componentWillUnmount 的功能
- 副作用：死循环，监听state+set ，可以加判断；初始化调用axios，可以使用[]，只在初始化调用，以后不再调用了；

#### useMemo-针对当前组件的高开销的计算

- useMemo(fn,[ xxxx]) 减少组件重新渲染时重复进行复杂的计算，只有[xxx]变化才会触发函数；[]空 返回上次计算结果；不传每次刷新都会正常计算；

  ![image-20220428182336728](C:\Users\cuiyue\AppData\Roaming\Typora\typora-user-images\image-20220428182336728.png)

- useMemo说白了就是缓存一个函数执行或者不执行 如果依赖传入的变量 变了 函数肯定执行 没变肯定就不执行 但是如果不套一层 useMemo 那么只要 组件更新 里面的东西就都会渲染 ；

#### useCallback——优化针对子组件的渲染

- useCallback(fn,[ ]) 用于需要传递给子组件的函数，减少子组件的重复渲染；

- 返回的是一个回调函数，在依赖参数不变的情况下，返回的回调函数是同一个引用地址；每当依赖参数发生改变useCallback就会自动重新返回一个新的 memoized 函数（地址发生改变）；（不适用useCallback每次render都会生成新的回调函数）

- 可以和memo或者shouldComponentUpdate一起使用

  ![image-20220428183052230](C:\Users\cuiyue\AppData\Roaming\Typora\typora-user-images\image-20220428183052230.png)

- 父组件使用useCallback的时候 子组件如果想去响应父组件的useCallback的时候 如果用的函数组件 就要使用React.memo配合 如果是类组件就要用 pureComponent配合 是这样理解的吧

#### useRef

- const refContainer = useRef(initialValue);返回一个可变的ref对象，current属性为传入的初始值；

- 更新current不会触发re-render，与useState不同；

- useRef类似于类组件的this

- 简单示例：

   通过useRef定义个inputEl变量，在input 元素上定义ref={inputEl},这样通过inputEl.current就可以获取到input Dom 元素，选中则调用下focus函数即可

  ```
  import React, { MutableRefObject, useRef } from 'react'
  const TextInputWithFocusButton: React.FC = () => {
     const inputEl: MutableRefObject<any> = useRef(null)
     const handleFocus = () => {
         // `current` 指向已挂载到 DOM 上的文本输入元素
         inputEl.current.focus()
     }
     return (
         <p>
             <input ref={inputEl} type="text" />
             <button onClick={handleFocus}>Focus the input</button>
         </p>
     )
  }
  export default TextInputWithFocusButton
  
  ```

  还是可以使用useRef来保存数据，不会因为组件的更新而丢失数据

## 10.组件

#### 类组件 函数组件

> - 类组件：ES6形式编写，继承了React.component；实现render，在return中返回React对象
> - 函数组件：无状态 展示组件；react hooks 让函数组件有状态
> - 区别：
>   - 编写形式： 一个类 一个函数
>   - 状态管理：函数组件之前是无状态的，直到hooks出现
>   - 生命周期：函数组件无生命周期，useEffect可以代替生命周期的作用；类组件有，来自继承的react.component
>   - 调用方式：函数组件：react内部调用；类组件：react内部执行了实例化
>   - 获取渲染的值：？？？

#### 构建的方式

> - 函数式创建
> - 继承React.component
> - 通过React.createClass   react刚开始推荐的，已经不常用了

#### 组件通信

> - 父组件向子组件传值: props hooks context
> - 子组件向父组件传值:父组件向子组件传递一个函数，通过函数的回调，拿到子组件的值
> - 兄弟组件之间传值:通过共同的父亲
> - 父组件向后代组件传值:通过使用`React.createContext`创建一个`context`
> - 非关系组件传值:redux ;refs

## 11.组件

##### 受控组件

> 受控制的组件——组件的状态全程响应外部数据；
>
> 需要：初始状态和一个状态更新函数；

##### 非受控组件

> 非受控组件——不受我们控制的组件
>
> 在初始化时接受外部数据，然后再自己内部存储其自身状态

##### 容器组件

> 容器组件是处理获取数据、订阅 redux 存储等的组件。
>
> 它们包含展示组件和其他容器组件，里面没有html。

##### 高阶组件HOC

> 1.定义：高阶组件是将组件作为参数并生成另一个组件的组件。
>
> 2.作用：封装并分离组件的通用逻辑(放在高阶组件中)，让通用逻辑在组件间更好的复用。
>
> 3.约定：
>
> 1. 不能以任何方式改变原始组件，使用compose组合高阶组件
> 2. 将不相关的props传递给被包裹的组件
> 3. 最大化可组合性
> 4. 包装显示名字以便于调试
>
> 注意：
>
> 1. 必须复制静态方法
> 2. 不能在函数式组件中使用ref属性，因为没有实例
> 3. 不要再render方法中使用高阶组件
>
> 博客：[高阶组件 – React (docschina.org)](https://react.docschina.org/docs/higher-order-components.html)

## 12.react三件套

#### state

> 1.在constructor中要对状态进行初始化，并且使用bind函数改写this的指向
>
> 2.state 必须要自己去初始化 
>
> 3.setState来改变里面的值，从而更新组件内部数据，在调用render。
>
> 4.setState还可以接受第二个参数，是一个函数，会在setState调用完成并且组件开始重新渲染时调用。
>
>  setState使用：
>
> ```
> //  正确方式
> this.setState({name:"some name"})
> // 正确方式
> this.setState((state, props) => {
>     timesVisited: state.timesVisited + props.count
> });
> ```

#### props

> 1. props 是用来传递外部数据的，主要作用：从父组件向子组件传值。
>
> 2. props是只读的，数据传进来之后不许修改
>
> 3. prototypes：为组件提供类型检查，并未其他开发人员提供很好的开发文档
>
>    ```
>    UserDisplay.propTypes = {
>        name: PropTypes.string.isRequired,
>        address: PropTypes.objectOf(PropTypes.string),
>        age: PropTypes.number.isRequired
>    }
>    ```
>

#### state和props

- 相同

  > 都是javascript对象，都用于保存信息，都能触发渲染更新

- 区别

  > props是外部传递给组件内部的，state是组件内部自己管理的。
  >
  > props在组件内不可修改，state在组件内部可以进行修改。

- refs


## 13.super和super(props)

- 写super()才能初始化this

- 在调用props时，一般需要传入props，如果不传，react内部也会将其定义在组件内部。

- 但是，不建议写super()，因为react会在类组件构造函数生成实例后再给this.props赋值。

- 总结

  1.类组件基于 `ES6`，所以在 `constructor` 中必须使用 `super`

  2.在调用 `super` 过程，无论是否传入 `props`，`React` 内部都会将 `porps` 赋值给组件实例 `porps` 属性中

  3.如果只调用了 `super()`，那么 `this.props` 在 `super()` 和构造函数结束之间仍是 `undefined`

## 14.服务端渲染-同构-SPA

[服务端渲染&Nextjs渲染流程 - 掘金 (juejin.cn)](https://juejin.cn/post/7090118780491137037)

[客户端渲染, 服务端渲染和同构 - 掘金 (juejin.cn)](https://juejin.cn/post/6844903958331260936)

- **是什么：**是指在服务端完成页面的html 拼接处理， 然后再发送给浏览器，将不具有交互能力的html结构绑定事件和状态，在客户端展示为具有完整交互能力的应用程序。

- **流程：**

  - 客户端发起请求拿资源 ,

  - 前端node服务器接收到请求，根据路径加载各种组件,

  - 编译生成一个有网页内容的html字符串返回给客户端，

  - 浏览器拿到这个html字符串就可以直接渲染页面，

  - 此时的页面没有交互功能，浏览器解析html字符串的时候当解析到js代码时，就会加载执行js，js执行完毕，页面就有了交互功能。

    ![服务端渲染流程.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8eda22be154249ccb45ff72991f91bde~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?)

- **使用场景：**

  - 有助于SEO优化：优势在于同步，搜索引擎爬虫是不会等待异步请求数据结束后再抓取信息的；服务端编译生成html字符传给到客户端直接渲染，那么就可以在node服务端生成字符串的时候做SEO优化。
  - 需要更快的到达时间：优势在于**慢网络和运行缓慢的设备场景**。传统 SPA 需完整的 JS 下载完成才可执行，而SSR 服务器渲染标记在服务端渲染 html 后即可显示，用户会更快的看到首屏渲染页面。

- 难点：实现的难点是同构，需要客户端服务端同时编译复用一套代码，面临各种问题；

- 对比分析：

  - 前端无论采用什么样的渲染方式,都是为了增强用户体验,按照目前的发展趋势,同构和spa会是目前的主流；
  - 首屏渲染,代码分割和骨架图可以解决；
  - SEO只能是同构和服务端渲染：
    - 通过meta的元属性进行关键字的SEO
    - 提供一套静态HTML模版供浏览器抓取用以SEO（比如prerender.io）
  - 同构的缺点是除了增加代码的复杂度,还会增加服务器的负载, 一般推荐首屏或者个别页面进行ssr,其他页面仍然是spa

- 三者的区别和联系：

  - 服务端渲染, 服务端直接生成html,返回给浏览器,但是交互能力有限, 可以联想到node应用的时候,我们使用模板语言比如ejs,把数据和模板绑定, node端直接返回html代码, 我们平常所说的node中间层,BFF,如果提供的数据请求以及模板渲染, 那就是后端渲染, 如果只是提供数据层的处理, 而对于静态资源只是做一次转发, 那就不是服务端渲染,适用于任何的后端语言, 比如php,java执行吐出html代码

    ![image-20220511215158138](C:\Users\cuiyue\AppData\Roaming\Typora\typora-user-images\image-20220511215158138.png)

  - 客户端渲染, spa应用基本都是,浏览器首先渲染的是一套空的html,然后请求js,ajax请求, 最后返回完整的html

    ![image-20220511215222101](C:\Users\cuiyue\AppData\Roaming\Typora\typora-user-images\image-20220511215222101.png)

  - 同构, 是客户端渲染和服务端渲染的整合,代码总共执行2次, 在服务端执行一次,用于服务端渲染,在客户端执行一次,用于接管页面的交互,可以在服务端和客户端都可以运行的程序;

  
  

## 15.生命周期（新版）

![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/12/15/16f0a0b3e20fa9aa~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)

#### 创建 

- constructor  构建函数
- getDerivedStateFromProps 静态方法：将父组件传递过来的 `props` **映射** 到子组件的 `state` 上面，这样组件内部就不用再通过 `this.props.xxx` 获取属性值了，统一通过 `this.state.xxx` 获取。映射就相当于拷贝了一份父组件传过来的 `props` ，作为子组件自己的状态。
- render  渲染
- componentDidMount 组件挂载完成

#### 更新  

- getDervedStateFromProps   ：将父组件传递过来的 `props` **映射** 到子组件的 `state` 上面，


- componentShouldUpdate 可以用来阻断父组件更新 子组件更新的问题


- render 渲染


- getSnapShotBeforeUpdate：接收父组件传递过来的 `props` 和组件之前的状态，此生命周期钩子必须有返回值，返回值将作为第三个参数传递给 `componentDidUpdate`。必须和`componentDidUpdate` 一起使用，否则会报错
- componentDidUpdate 组件更新结束后渲染

#### 卸载

- componentWillUnmount

#### HOOKS模拟生命周期

- componentDidMount

  ```
  function Example() {
    useEffect(() => console.log('mounted'), []);
    return null;
  }
  ```

- componentDidUpdate

  ```
  useEffect(() => console.log('mounted or updated'));
  ```

- componentWillUnmount

  ```
  useEffect(() => {
    return () => {
      console.log('will unmount');
    }
  }, []);
  ```

## 16.样式

> 1.在组件内直接使用：定义一个样式对象obj，赋值给style={obj}。
>
> ​	缺点：驼峰、没有提示、某些无法编写
>
> 2.组件中引入.css文件（注意使用className）
>
> ​	缺点：样式全局生效
>
> 3.组件中引入.module.css文件，只作用于当前组件，不会影响后代；
>
> ​	缺点：类名不能使用连接符， className 都必须使用 {style.className} 的形式
>
> 4.CSS in JS 一种模式，CSS由JS生成不是在外部文件中定义，第三方库定义的。

## 17.事件机制

- dom1 直接处理


- IE事件：处理事件  冒泡 attachEvent() dettachEvent()


- dom 2：捕获 处理 冒泡 addEventListener('type',function,true/false) 


- 事件委托:添加到父类上，event.target 是真实的发生点击的对象；event.currentTarget 父类的对象


- **合成事件**：事件注册、合成、冒泡、派发

> 1. 事件代理绑定到结构的最外层document对象上，而不是组件对应的dom，使用一个统一的事件去监听。通过这种方式减少内存的开销，类似于事件的委托
>
> 2. 监听器：
>
>    1. 维持了映射 保存内部事件监听和处理函数
>    2. 组件卸载和挂载——在监听器中插入和删除
>
> 3. 为什么：
>
>    1. 兼容，实现更好的跨平台，顶层事件代理，保证冒泡一致
>    2. 避免垃圾回收，React引入**事件池**，在事件池中获取或释放事件对象；
>       React事件对象不会被释放掉，而是**存入一个数组**中；当事件触发，就从这个数组中弹出，避免频繁地创建和销毁（垃圾回收）；
>    3. 方便管理
>
> 4. 结论：
>
>    > react事件挂载到document对象上
>    >
>    > 真实dom元素触发后，会冒泡到document对象后，在处理react
>    >
>    > 先执行原生的 在处理react 最后处理document上的事件
>    >
>    > **原生事件 —— > React事件 —— > document事件**
>    >
>    > 在页面上点击按钮，事件开始在**原生DOM上走捕获冒泡流程**，React监听的是**document上的冒泡阶段**；事件冒泡到document后，React将事件再派发到组件树中，然后事件开始在组件树DOM中走**捕获冒泡**流程。（React上监听的是document上的事件）
>
>    

[(13条消息) React中的合成事件_WindrunnerMax的博客-CSDN博客_react合成事件](https://blog.csdn.net/qq_40413670/article/details/112913155)

## 18.redux

- redux将所有的状态进行管理的容器，遵循 单一数据源、state是只读的，使用纯函数来执行修改；

- redux，将数据均存放在store公共存储空间；一个组件改变了store里的数据内容，其他组件就能感知到store的变化，再来取数据，从而间接实现数据传递的功能；

- 类似于react组件树，构建一个**中心化的状态树**，这个状态树与react组件树一一对应，相当于react组件树进行了状态化建模；

  <img src="C:\Users\cuiyue\AppData\Roaming\Typora\typora-user-images\image-20220424204420596.png" alt="image-20220424204420596" style="zoom: 50%;" />

  我们将组件的 state 去掉，取而代之的是一棵状态树，它是一个普通的 JavaScript 对象。通过对象的嵌套来类比组件的嵌套组合，这棵由 JavaScript 对象建模的状态树就是 Redux 中的 Store。

  当我们将组件的状态抽离出去之后，我们在使用组件 B 操作组件 C 就变得相当简单且高效。

  ![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/12/15/16f09bf051ebff69~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)

  我们在组件B中发起一个更新状态C的动作，此动作对应的更新函数更新store状态树，之后将更新状态c传递给组件c，触发组件c的重新渲染；

- 优点：

  - 解决状态危机，通过共同的父组件的回调函数来操作另一个组件；
  - 

#### 中间件

- 中间件（Middleware）是介于应用系统和系统软件之间的一类软件，它使用系统软件所提供的基础服务（功能）

- redux-thunk：用于异步操作

- redux-logger：用于日志记录

- ```
  //上述的中间件都需要通过applyMiddlewares进行注册，作用是将所有的中间件组成一个数组，依次执行
  const store = createStore(
    reducer,
    applyMiddleware(thunk, logger)
  );
  ```

#### react-redux

- provider：在`redux`中存在一个`store`用于存储`state`，如果将这个`store`存放在顶层元素中，其他组件都被包裹在顶层元素之上，那么所有的组件都能够受到`redux`的控制，都能够获取到`redux`中的数据

  ```
  <Provider store = {store}>
      <App />
  <Provider>
  ```

  

- connection


## 19.react-router

两种模式：

HashRouter： URL中采用的是hash(#)部分去创建路由，类似[www.example.com/#/](https://link.juejin.cn/?target=http%3A%2F%2Fwww.example.com%2F%23%2F)

BrowerRouter：  URL采用真实的URL资源 

- 使用

  - 使用BrowserRouter在最外层做一个包裹

    ```
    <BrowserRouter>
          <App />
    </BrowserRouter>
    ```

    |             |                |                                                              |
    | ----------- | -------------- | ------------------------------------------------------------ |
    | `<Routers>` | 一组路由       | 代替原有`<Switch>`，所有子路由都用基础的Router children来表示 |
    | `<Router>`  | 基础路由       | Router是可以嵌套的，解决原有V5中严格模式，后面与V5区别会详细介绍 |
    | `<Link>`    | 导航组件       | 在实际页面中跳转使用                                         |
    | `<Outlet/>` | 自适应渲染组件 | 根据实际路由url自动选择组件                                  |

## 20.原生diff算法

- 传统diff算法通过循环递归对节点进行依次对比，效率低下，算法复杂度达到 O(n^3)，`react`将算法进行一个优化，复杂度姜维`O(n)`


## 21.<u>react diff原理</u>

- 假设：不同类型的元素产生不同的树；元素在不同的渲染下不保持稳定
- 策略：跨层级的平移少；相同类型产生相同的树，不同类型产生不同的树；同一层级可通过key区分
- tree diff 优化：只针对同一层级的dom比较；跨层级的平移少，不平移 而是删除新建；
- component diff 优化：不同类型不进行比较 直接删除创建；相同类型通过 shouldComponnetUpdate来进行比较；
- element diff 优化：通过key判断旧集合是否存在相同的节点，无  创建，有 平移 顺序优化；

## 22.<u>Fiber原理</u>

[阿里三面：灵魂拷问——有react fiber，为什么不需要vue fiber呢？ - 掘金 (juejin.cn)](https://juejin.cn/post/7077545184807878692)

- 问题：JS引擎和渲染引擎互斥，一个执行另一个只能等待;JS长时间占据，页面就会一直不渲染。

- fiber没办法让比较的时间缩短，但是可以让diff的过程分成一段一段的，因为有”保存工作进度的能力“，js会比较一部分虚拟dom，然后让渡主线程，给浏览器去做其他工作，然后继续比较，依次往复，等到最后比较完成，一次性更新到视图上。

- 因为之前的diff的过程是 树的深度遍历的后序遍历，在遍历中被中断就没办法继续进行下去；改为fiber之后，每个节点有三个指针，分别指向第一个子节点、下一个兄弟、父节点。

- 遍历的规则：

  - 从根节点开始，依次遍历该节点的子节点、兄弟节点，均遍历完，回到父节点；
  - 当一个节点的所有子节点均遍历完，才认为该节点遍历完；
  - fiber是链表

- react fiber改写：
  - 为每个任务增加了优先级，优先级高的任务可以中断优先级低的任务，然后再重新执行优先级低的任务；
  - 增加了异步任务，调用requestldleCallback api，浏览器空闲时执行；每隔16ms调用一次；
  - dom diff树变成了链表，一个dom对应两个fiber，对应两个队列，都是为找到被中断的任务；

- 是什么：

  - 架构：fiber是对react核心算法的重写；

  - 编码：fiber是react内部所定义的一种数据结构，是一个JS对象，包含了元素的信息、该元素的更新操作队列、类型。其数据结构如下：

    ```
    type Fiber = {
      // 用于标记fiber的WorkTag类型，主要表示当前fiber代表的组件类型如FunctionComponent、ClassComponent等
      tag: WorkTag,
      // ReactElement里面的key
      key: null | string,
      // ReactElement.type，调用`createElement`的第一个参数
      elementType: any,
      // The resolved function/class/ associated with this fiber.
      // 表示当前代表的节点类型
      type: any,
      // 表示当前FiberNode对应的element组件实例
      stateNode: any,
    
      // 指向他在Fiber节点树中的`parent`，用来在处理完这个节点之后向上返回
      return: Fiber | null,
      // 指向自己的第一个子节点
      child: Fiber | null,
      // 指向自己的兄弟结构，兄弟节点的return指向同一个父节点
      sibling: Fiber | null,
      index: number,
    
      ref: null | (((handle: mixed) => void) & { _stringRef: ?string }) | RefObject,
    
      // 当前处理过程中的组件props对象
      pendingProps: any,
      // 上一次渲染完成之后的props
      memoizedProps: any,
    
      // 该Fiber对应的组件产生的Update会存放在这个队列里面
      updateQueue: UpdateQueue<any> | null,
    
      // 上一次渲染的时候的state
      memoizedState: any,
    
      // 一个列表，存放这个Fiber依赖的context
      firstContextDependency: ContextDependency<mixed> | null,
    
      mode: TypeOfMode,
    
      // Effect
      // 用来记录Side Effect
      effectTag: SideEffectTag,
    
      // 单链表用来快速查找下一个side effect
      nextEffect: Fiber | null,
    
      // 子树中第一个side effect
      firstEffect: Fiber | null,
      // 子树中最后一个side effect
      lastEffect: Fiber | null,
    
      // 代表任务在未来的哪个时间点应该被完成，之后版本改名为 lanes
      expirationTime: ExpirationTime,
    
      // 快速确定子树中是否有不在等待的变化
      childExpirationTime: ExpirationTime,
    
      // fiber的版本池，即记录fiber更新过程，便于恢复
      alternate: Fiber | null,
    }
    ```

    

- 如何解决

## 23.<u>渲染效率 避免不必要的render</u>

> 背景：`react` 基于虚拟 `DOM` 和高效 `Diff`算法的完美配合，实现了对 `DOM`最小粒度的更新，
>
> 但是：父组件渲染子组件就会渲染，其实子组件是没有发生改变的(render触发时机）
>
> 解决办法：
>
> 1. shouldComponentUpdate: 对比state和props，来确定是否需要重新渲染
> 2. PureComponent：
> 3. React.memo：缓存组件的渲染，避免不必要的更新，本质是一个高阶组件，只可用于函数组件。

## 24.如何提高性能

- 避免使用内联函数——每次render调用都会产生一个新函数
- 使用Fragments避免额外的标记
- 事件绑定方式：render使用bind和箭头函数，每次渲染会生成新实例
- 使用Immutable，减少渲染次数
- 懒加载
- 事件绑定
- 服务端渲染

## 25.key有什么作用——性能优化

> - key为每个元素赋予一个标识——见于list.map()
> - diff算法，key用于判断是新创建的还是被移动的，从而减少不必要的渲染。
> - 注意：
>   - 唯一的
>   - 不要是随机值，再次render会生成一个数字
>   - 使用index作为key，后面的key都需要变化，会导致后面的都重新渲染；比如头部插入的话，所有组件都需要重新的渲染；

## 26.如何在页面加载时保留数据

> 每当重新加载应用程序时，我们使用浏览器`localstorage`来保存应用程序的状态。
>
> 我们将整个存储数据保存在`localstorage`中，每当有页面刷新或重新加载时，我们从`localstorage`加载状态。

## 27.错误边界

> - 原因：在react中，有组件树；如何任何一个组件发生错误，将破坏整个组件树
>
> - 作用：如果发生错误，显示回退UI，记录错误
>
> - example：如果类实现了 `getDerivedStateFromError`或`componentDidCatch` 这两个生命周期方法的任何一下，那么这个类就会成为**ErrorBoundary**。

## 28.Fragments

> - 需要一个父元素，单纯的包裹组件，添加额外的节点很烦人，可以使用fragment
>
> - 只需要用 `React.Fragment` 或才简写 `<>` 来包裹内容就行

## 29.传送门

> - 将子节点渲染到存在于父组件以外的DOM节点的方法
>
> - 原理
>
> - 用法

## 30.Immutable

> 1.是什么：Immutable 不可改变的，指一旦创建，就不能在被改变的数据。
>
> 2.原理：`Immutable` 实现的原理是 `Persistent Data Structure`（持久化数据结构）:
>
> - 用一种数据结构来保存数据
> - 当数据被修改时，会返回一个对象，但是新的对象会尽可能的利用之前的数据结构而不会对内存造成浪费
>
> 3.使用
>
> ```javascript
> /*immutable.js库
> 1.fromJS() js——>immutable
> 2.toJS() immutable——>js
> 3.is() 对两个对象进行比较
> 4.get(key)对数据对象取值
> 5.getInt([])嵌套中对象数组取值
> */
> let abs = Immutable.fromJS({a: {b:2}});
> abs.getIn(['a', 'b']) // 2
> abs.getIn(['a', 'c']) // 子级没有值
> ```
>
> 4.react中使用  带来性能优化，主要体现减少渲染的次数
>
> ​	在做react性能优化时，为了避免重复渲染，会在shouldComponentUpdate()中做对比，返回true时执行render方法。
>
> ​	`Immutable`通过`is`方法则可以完成对比。

## React 18

#### 合并渲染 batching

- React 会执行全部事件处理函数，然后触发一个单独的re-render，合并所有的更新。这样既可以减少程序数据状态存在中间值导致的不稳定性，也可以提高渲染性能。
- 在React 18 之前，如果在回调函数的异步调用中，执行setState，由于丢失上下文，无法做合并处理，所以每次setState调用都会触发一次re-[render](https://so.csdn.net/so/search?q=render&spm=1001.2101.3001.7020)。
- **React 18中，任何情况下都可以合并渲染！**
- 如果仍然希望setState之后立即重新渲染，只需要使用`flushSync`包裹。

```
function handleClick() {
	// React 18
	fecth(/*...*/).then(() => {
		ReactDOM.flushSync(() => {
			setCount(c => c + 1); // 立刻重新渲染
			setFlag(f => !f);
		})
	})
}
```

#### concurrent APIs

- 并发渲染的并发新特性，开发者希望能够在Web Platform引入并发渲染，来实现多个渲染任务的并行渲染，其中Suspense就是基于此诞生的。
- startTransition()：被startTransition包裹的setState触发的渲染被标记为**不紧急渲染**，意味着它们可以被其他紧急渲染所抢占，这种渲染优先级的调整手段可以帮助我们解决各种性能伪瓶颈，提升用户体验。
- useDeferredValue()
- useTransition()

#### SSR for Suspense

- 在React 18 之前，Server Rendering的流程就是服务端请求所有数据，然后发送HTML到客户端或者说浏览器，然后由客户端的hydrate内容（可以搜索同构渲染进行学习），每个环节必须按部就班的执行。
- 当Suspense可以在服务器端使用之后，一旦某个组件加载慢，就可以将fallback的内容传输到客户端（例如loading态），保证用户可以尽可能早的可进行交互。
  

#### New Render API 新的更好的语义化render方式

```
const container = document.getElementById('app');

// 旧的render API
ReactDOM.render(<App />, container);

// 新的 createRoot API
const root = ReactDOM.createRoot(container);
root.render(<App />);
```

[(12条消息) React 18 新特性_showbuger的博客-CSDN博客_react18新特性](https://blog.csdn.net/zulvyinggaitong/article/details/123877746)

# 2.some points

- React 在Dev mode下会刻意的渲染两次，以防止组件内有什么side effect引起bug，提前预防。

  <img src="C:\Users\cuiyue\AppData\Roaming\Typora\typora-user-images\image-20220419213253909.png" alt="image-20220419213253909" style="zoom:50%;" />
