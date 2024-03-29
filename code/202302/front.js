// deep clone
function deepClone(target) {
  let obj;
  if (Object.toString.call(target) == "[object Array]") {
    obj = [];
  } else if (Object.prototype.toString.call(target) == "[object Object]") {
    obj = {};
  } else {
    return target;
  }
  for (let key in target) {
    let item = target[key];
    if (
      Object.prototype.toString.call(item) == "[object Array]" ||
      Object.prototype.toString.call(item) == "[object Object]"
    ) {
      obj[key] = deepClone(item);
    } else {
      obj[key] = item;
    }
  }
  return obj;
}
//浅拷贝
function shadowClone(target) {
  let obj;
  if (Object.toString.call(target) == "[object Array]") {
    obj = [];
  } else if (Object.prototype.toString.call(target) == "[object Object]") {
    obj = {};
  } else {
    return target;
  }
  for (let key in target) {
    obj[key] = target[key];
  }
  return obj;
}

//深度冻结
function deepFreeze(target) {
  Object.freeze(target);
  for (let key in target) {
    let item = target[key];
    if (
      Object.prototype.toString.call(item) == "[object Array]" ||
      Object.prototype.toString.call(item) == "[object Object]"
    ) {
      deepFreeze(item);
    }
  }
}

//防抖节流
function fangdou(fun, delay) {
  let timer;
  return function () {
    if (timer) {
      clearTimeout(fun, delay);
    } else {
      timer = setTimeout(() => fun, delay);
    }
  };
}
function jieliu(func, delay) {
  let timer;
  return function () {
    if (timer) {
      return;
    } else {
      timer = setTimeout(() => func, delay);
    }
  };
}
/**
 * call
 * apply
 * bind
 */
function mycall(context) {
  context = context || window;
  context.fn = this;
  let args = arguments.slice(1);
  let result = context.fn(...args);
  delete context.fn;
  return result;
}

function myApply(context) {
  context = context || window;
  context.fn = this;
  let args = arguments[1] || [];
  let res = context.fn(...args);
  delete context.fn;
  return res;
}

function myBind(context, ...outArgs) {
  let that = this; //匿名函数无法访问外部this
  let res = function (...innerArgs) {
    if (this instanceof res) {
      that.call(this, ...outArgs, ...innerArgs);
    } else {
      that.call(context, ...outArgs, ...innerArgs);
    }
  };
  return res;
}

/**
 * instanceof
 * new
 */
function myInstanceof(left, right) {
  let proto = Object.getPrototypeOf(left);
  let prototype = right.prototype;
  while (proto) {
    if (proto == prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
  return false;
}

function myNew(func, ...args) {
  let obj = {};
  obj._proto_ = func.prototype;
  let res = func.call(obj, ...args);
  return res instanceof Object ? res : obj;
}

/**
 * 封装ajax
 * 图片懒加载
 * jsonp
 */

/**
 * 数组去重
 * 扁平化
 */
const removeSame1 = (list) => {
  return [...new Set(list)];
};

const removeSame2 = (list) => {
  let rs = [];
  list.forEach((element) => {
    if (!res.includes(element)) {
      res.push(element);
    }
  });
  return res;
};

const removeSame3 = (list) => {
  list.filter((value, index) => {
    data.indexOf[value] == index;
  });
};

const flatten1 = (list) => {
  return list
    .toString()
    .split(",")
    .map((element) => Number(element));
};
console.log(flatten1([1, 2, 3, [1, 4, [7, 8]]]));

const flatten2 = (list) => {
  let res = [];
  for (let i = 0; i < list.length; i++) {
    if (Array.isArray(list[i])) {
      res.concat(...list[i]);
    } else {
      res.push(list[i]);
    }
  }
  return res;
};

const flatten3 = (arr) => {
  arr = arr.flat();
  for (let item of arr) {
    if (Object.getPrototypeOf(arr) == "[object Array]") {
      arr = flatten3(arr);
    }
  }
  return arr;
};
/**
 * 数组转对象
 * 对象转数组
 * 数组转树
 * 树转数组
 */
const arrayToObj = (list) => {
  let obj = {};
  console.log("11");
  for (let i = 0; i < list.length; i++) {
    let item = list[i];
    if (Object.prototype.toString.call(item) == "[object Array]") {
      obj[i] = arrayToObj(item);
    } else {
      obj[i] = item;
    }
  }
  return obj;
};
console.log(arrayToObj(["a", "b", ["c", "d"]]));

const objtoArray = (obj) => {
  let res = [];
  for (let key in obj) {
    let item = obj[key];
    let temp = [];
    if (Object.prototype.toString.call(item) == "[object Object]") {
      let a = objtoArray(item)[0];
      temp = [key, a];
    } else {
      temp = [key, item];
    }
    res.push(temp);
  }
  return res;
};
console.log(objtoArray({ a: 1, b: 2, d: { e: { g: 5 } } }));

//数组转为树
const listToThree = (list) => {
  let result = [];
  let map = {};
  list.forEach((item) => {
    map[item.id] = item;
  });
  list.forEach((item) => {
    let parent = map[item.parentId];
    if (parent) {
      (parent.children || (parent.children = [])).push(item);
    } else {
      result.push(item);
    }
  });
  return result;
};

//二叉树转为数组
const binaryThreeToList = (root) => {
  let queue = [root];
  let result = [];
  while (queue.length > 0) {
    let item = queue.shift(); //顶部元素
    result.push({
      id: item.id,
      parentId: item.parentId,
    });
    let children = itme.children;
    if (children) {
      for (let i = 0; i < children.length; i++) {
        queue.push(children[i]);
      }
    }
  }
  return result;
};

/**
 * 观察者
 * 发布订阅者
 */
class Subject {
  constructor(name) {
    this.name = name;
    this.state = "正常的";
    this.observer = [];
  }
  attach(o) {
    this.observer.push(o);
  }
  setNewState(state) {
    this.state = state;
    this.observer.forEach((o) => o.update(this));
  }
}
class Observer {
  constructor(name) {
    this.name = name;
  }
  update(obj) {
    console.log(this.name, "被通知了 观察者的状态是", obj.state);
  }
}

//发布订阅者模式 就多了事件的分发中心
let eventEmitter = {
  list: {}, //监听队列
  on(event, fn) {
    //订阅 fn都订阅了event
    if (!this.list[event]) {
      this.list[event] = [];
    }
    this.list[event].push(fn);
  },
  emittrt() {
    let key = [].shift.call(arguments);
    fns = this.list[key];
    if (fns.length == 0 || !fns) {
      return false;
    }
    fns.forEach((fn) => {
      fn.apply(this, arguments);
    });
  },
  remove(key, fn) {
    let fns = this.list[key];
    if (!fns) return false;
    fns.forEach((item, i) => {
      if (item == fn) {
        fns.slice(i, 1);
      }
    });
  },
};

/**
 * promise.all
 * promise.race
 */
Promise.prototype.all = function (promises) {
  return new Promise((resove, reject) => {
    let count = 0;
    let arr = [];
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(
        (v) => {
          count++;
          arr[i] = v;
          if (count == promises.length) resove(arr);
        },
        (r) => {
          reject(r);
        }
      );
    }
  });
};
Promise.prototype.race = function (promises) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(
        (v) => {
          resolve(v);
        },
        (r) => {
          reject(r);
        }
      );
    }
  });
};
/**
 * 柯里化
 *
 */

const myJSONP = (url, data, callback) => {
  return new Promise((resolve, rejected) => {
    url += url.indexOf("?") === -1 ? "?" : "&";
    url += `callback=${callback}`;
    if (data) {
      data.forEach((item) => {
        url += `&${item}=${date[item]}`;
      });
    }
    const jNode = document.createElement("script");
    jNode.src = url;
    window[callback] = (result) => {
      if (result) {
        resolve(result);
      } else {
        rejected("没有数据");
      }
      document.body.removeChild(jNode);
    };
    document.body.removeChild(jNode);
  });
};
