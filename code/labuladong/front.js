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
//卡拷贝
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


const flatten2=list=>{
  let res=[];
  for(let i=0;i<list.length;i++){
    if(Array.isArray(list[i])){
      res.concat(...list[i])
    }else{
      res.push(list[i])
    }
  }
  return res;
}
/**
 * 数组转对象
 * 对象转数组
 * 数组转树
 * 树转数组
 */

/**
 * 观察者
 * 发布订阅者
 */

/**
 * promise.all
 * promise.race
 */

/**
 * 柯里化
 *
 */
