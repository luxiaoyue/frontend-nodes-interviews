/**
 * map.set(k,v)
 * map.get(k)
 * map.has(k)
 * map.delete(k)
 * map.values()
 */
let map = new Map();
map.set("a", "111");
map.set("b", "222");
map.set("c", "333");
let list = [...map];
//map转为对象
const toObj = (map) => {
  let obj = {};
  map.forEach((v, k) => {
    obj[k] = v;
  });
  return obj;
};
console.log(toObj(map));
//map转为JSON
const toJSON = (map) => {
  return JSON.stringify(toObj(map));
};
console.log("json", toJSON(map));

//对象转map
let obj = {
  a: "ccc",
  b: "ddd",
};
console.log(new Map(Object.entries(obj)));
//数组转map
let list1 = [
  ["1", "111"],
  ["2", "222"],
];
console.log(new Map(list1));
