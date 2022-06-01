console.log(typeof typeof typeof null);
// 其中还问了typeof为什么识别null 为object

let mySet = new Set(); // set 有什么特点
mySet.add({});
console.log(mySet.size); // size ??
mySet.add({}); //size ??
console.log(mySet);

// 运行什么结果
for (let i = 0; i < 9; i++) {
  console.log(i); //会报错 因为暂时性死区的原因
  let i = "9";
}
// 运行什么结果
for (let i = 0; i < 9; i++) {
  let i = "9";
  console.log(i);
} // 运行结果
var a = 1;
function fn() {
  console.log(a);
  var a = 2;
}
fn();

// 解构结果
let [foo] = [];
console.log(foo);

let [bar, foo1] = [1];
console.log(bar);
console.log(foo1);

// 实现并集、交集、差集
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);

//并
let union = new Set([...a, ...b]);
console.log(union);
//交
let intersect = new Set([...a].filter((x) => b.has(x)));
console.log(intersect);
//非
let difference = new Set([...a].filter((x) => !b.has(x)));
console.log(difference);
