var b = 0;
(function b() {
  b = 4;
  console.log(b); //function b
})();
console.log(b); //0
//个人理解
//立即执行函数中有b=function了，执行到b=4 查找到了b但是不可以修改函数本身， 所以本句不起作用，但是因为找到了b 就不会继续向上查找了 所以b=0也没被修改

// setInterval(
//   (function () {
//     var n = 0;
//     return function () {
//       console.log(++n);
//     };
//   })(),
//   1000
// );
var c = function () {
  c = 123;
  console.log(c);
};
c();

let data = [
  { name: 1, type: 0 },
  { name: 2, type: 0 },
  { name: 3, type: 2 },
  { name: 4, type: 2 },
  { name: 5, type: 3 },
  { name: 6, type: 3 },
];
/*
转换为：
[
  { type: 0, values: [ { name: 1, type: 0 },{ name: 2, type: 0 } ]},
  { type: 2, values: [ { name: 3, type: 2 }, { name: 4, type: 2 } ] },
  { type: 3, values: [ { name: 5, type: 3 }, { name: 6, type: 3 } ] }
]
*/
let res = Array.from(new Set(data.map((val) => val.type))).map((item) => {
  return {
    type: item,
    values: data.filter((e) => {
      if (item == e.type) {
        return e;
      }
    }),
  };
});
console.log(res);
