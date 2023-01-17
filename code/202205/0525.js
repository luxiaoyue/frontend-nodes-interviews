// const arr = [1, 2, 3];
// let res = Object.prototype.toString.call(arr);
// console.log(res);

// const promise1 = Promise.resolve("First");
// const promise2 = Promise.resolve("Second");
// const promise3 = Promise.reject("Third");
// const promise4 = Promise.resolve("Fourth");
// const runPromises = async () => {
//   const res1 = await Promise.all([promise1, promise2]);
//   const res2 = await Promise.all([promise3, promise4]);
//   return [res1];
// };
// runPromises()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// // 说出下面代码的输出
// async function async1() {
//   console.log("async1 start");
//   await async2();
//   console.log("async1 end");
// }
// async function async2() {
//   console.log("async2");
//   return new Promise((resolve, reiejct) => {
//     resolve();
//   });
// }
// console.log("script start");
// async1();
// new Promise(function (resolve) {
//   console.log("promise1");
//   resolve();
// }).then(function () {
//   console.log("promise2");
// });
// console.log("script end");
//输出 先promise2再 async1 end  因为async函数本身返回的就是一个promise，而return了一个 所以是两层的promise函数

// async function timeout() {
//   return "hello word";
// }

// timeout();
// //  Promise   __proto__: Promise  [[PromiseStatus]]: "resolved"   [[PromiseValue]]: "hello word"
// //async返回的是 promise 对象
// console.log(timeout());
// // 我在后面，但是我是先执行的
// console.log("我在后面，但是我是先执行的");

// //  hello world11
// async function f1() {
//   return "hello world11";
// }
// f1().then((v) => console.log(v));

async function timeout2(flag) {
  if (flag) {
    return "hello world";
  } else {
    throw "failed";
  }
}

// 如果函数内部抛出错误， promise 对象有一个catch 方法进行捕获
timeout2(false).catch((err) => {
  console.log(err);
});

// hello word
// 调用Promise.resolve() 返回promise 对象
console.log(timeout2(true));
// Uncaught (in promise) failed
// 调用Promise.reject() 返回promise 对象
console.log(timeout2(false));
