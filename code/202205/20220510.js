// 1 使用setTimeout 实现setInterval
// function myInterval(fn, delay) {
//   let timer = null;
//   function interval() {
//     fn();
//     timer = setTimeout(interval, delay);
//   }
//   timer = setTimeout(interval, delay);
// }

// let cancel = myInterval(() => {
//   console.log(222);
// }, 1000);
// cancel();

// 2？？？？
let data = ["a", "b"];
console.log(data.join(""));
console.log(data.reverse().join(""));
console.log(data.reverse().join("") === data.join(""));

// 3  pipe管道 从左往右
const pipeFunctions = (...fns) =>
  fns.reduce((f, g) => {
    return (...args) => {
      return g(f(...args));
    };
  });

const add5 = (x) => x + 5;
const multiply1 = (x, y) => x * y;
const add1 = (x) => x + 1;
const multiplyAndAdd5 = pipeFunctions(multiply1, add5, add1); // 15
console.log(multiplyAndAdd5(5, 2));

//4 compose 从右往左实现
const add = (x) => x + 10;
const multiply = (x) => x * 10;
const compose = function () {
  // 将接收的参数存到一个数组， args == [multiply, add]
  const args = [].slice.apply(arguments);
  return function (x) {
    return args.reduceRight((res, cb) => cb(res), x);
  };
};
const compose2 =
  (...args) =>
  (x) =>
    args.reduceRight((res, cb) => cb(res), x);

const compose1 = (...fns) =>
  fns.reduceRight((f, g) => {
    return (...args) => {
      return g(f(...args));
    };
  });
// 我们来验证下这个方法
let calculate = compose1(multiply, add);
let res = calculate(10);
console.log(res); // 结果还是200

//5 对象的探究
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

/*6 async和await
async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}

async function async1() {
    console.log('async1 start');
    Promise.resolve(async2()).then(() => {
      console.log('async1 end');
  })
}

作者：axuebin
链接：https://juejin.cn/post/6844904116339261447
*/
async function async1() {
  console.log("1");
  await async2();
  console.log("2");
}
async function async2() {
  console.log("3");
}
console.log("4");
setTimeout(() => {
  console.log("5");
}, 0);
async1();
new Promise((resolve) => {
  console.log("6");
  resolve();
}).then(() => {
  console.log("7");
});
console.log("8");

// 4 1 3 6 8 2 7 5
async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}
async function async2() {
  console.log("async2");
}
console.log("script start");
setTimeout(() => {
  console.log("setTimeout");
}, 0);
async1();
new Promise((resolve) => {
  console.log("promise1");
  resolve();
}).then(() => {
  console.log("promise2");
});
console.log("script end");
