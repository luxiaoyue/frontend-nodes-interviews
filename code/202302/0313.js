function createBase(baseNumber) {
  //使用了闭包 存在了一个baseNumber
  return function (N) {
    return baseNumber + N;
  };
}
var addSix = createBase(6);
console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27

/**
 * 实现两个对象的深层次比较
 * @param {*} obj1
 * @param {*} obj2
 * @returns
 */
const deepEqual = (obj1, obj2) => {
  let o1 = obj1 instanceof Object;
  let o2 = obj2 instanceof Object;
  if (!o1 || !o2) return obj1 === obj2;
  if (
    Object.getOwnPropertyNames(obj1).length !==
    Object.getOwnPropertyNames(obj2).length
  ) {
    return false;
  }
  for (let key in obj1) {
    let a1 = Object.prototype.toString.call(obj1[key]) == "[object Object]";
    let a2 = Object.prototype.toString.call(obj2[key]) == "[object Object]";
    let arr = Object.prototype.toString.call(obj1[key]) == "[object Array]";
    if (a1 && a2) {
      let flag = deepEqual(obj1[key], obj2[key]);
      if (!flag) return false;
    } else if (arr) {
      if (obj1[key].toString() !== obj2[key].toString()) return false;
    } else {
      if (obj1[key] !== obj2[key]) return false;
    }
  }
  return true;
};
let t1 = { a: 1, b: 2, c: { d: 1 }, d: [1, 2, 3] };
let t2 = { a: 1, b: 2, c: { d: 1 }, d: [1, 2, 3, 4] };
console.log(deepEqual(t1, t2));
