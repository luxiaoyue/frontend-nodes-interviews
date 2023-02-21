for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(new Date(), i);
  }, 1000);
}

console.log(new Date(), i);
/**
 * 输出5  隔一秒输出55555 5-5，5，5，5，5
 */

//改造成 5-0-1-2-3-4
for (var i = 0; i < 5; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(new Date(), i);
    }, 1000);
  })(i);
}

//2
const output = function (j) {
  setTimeout(function () {
    console.log(new Date(), j);
  }, 1000);
};
for (var i = 0; i < 5; i++) {
  output(i);
}
console.log(new Date(), i);

//3
for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(new Date(), i);
  }, 1000);
}
console.log(new Date(), i);

// 模拟其他语言中的 sleep，实际上可以是任何异步操作
const sleep = (timeountMS) =>
  new Promise((resolve) => {
    setTimeout(resolve, timeountMS);
  });

(async () => {
  // 声明即执行的 async 函数表达式
  for (var i = 0; i < 5; i++) {
    if (i > 0) {
      await sleep(1000);
    }
    console.log(new Date(), i);
  }

  await sleep(1000);
  console.log(new Date(), i);
})();
