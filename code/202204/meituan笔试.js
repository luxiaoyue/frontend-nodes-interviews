let n = 4;
let s1 = "176 170 176 176";
let s2 = "beta tom alpha bamma";
let height = s1.split(" ").map((a) => {
  return parseInt(a);
});
let names = s2.split(" ");
let arr = [];
for (let i = 0; i < n; i++) {
  //存到二维数组
  arr.push([height[i], names[i]]);
}
arr.sort((a, b) => {
  if (a[0] != b[0]) {
    return a[0] - b[0];
  } else {
    return a[1].localeCompare(b[1], "zh-CN");
  }
});
console.log(arr);

typeof null; // "object"
typeof undefined; // "undefined"
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof false);
console.log(typeof "123");
console.log(typeof {});
console.log(typeof []);
