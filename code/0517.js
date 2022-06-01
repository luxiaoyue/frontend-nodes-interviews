//在{a:{b:{c:1}},d:{}} 查找a.b.c
function getObjValue(object, str) {
  let strArr = str.split(".");
  for (let i = 0; i < strArr.length; i++) {
    if (object[strArr[i]]) {
      object = object[strArr[i]];
    } else {
      return false;
    }
  }

  return object ? true : false;
}
let obj = { a: { b: { c: 1 } }, e: {} };
let str = "a.b.c";
console.log(getObjValue(obj, str));

//对象扁平化
function flatten(data) {
  var result = {};
  function recurse(key, value) {
    if (Object(value) !== value) {
      result[key] = value;
    } else if (Array.isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        recurse(key + "[" + i + "]", value[i]);
      }
      if (value.length == 0) result[key] = [];
    } else {
      let objArr = Object.keys(value);
      objArr.forEach((item) => {
        recurse(key ? key + "." + item : item, value[item]);
      });
      if (objArr.length === 0 && key) {
        result[key] = {};
      }
    }
  }
  recurse("", data);
  return result;
}

const obj1 = { a: 1, b: { d: 2 }, c: 3, f: [1, 2, 3] };
console.log(flatten(obj1));

//对象转数组
function objToArr(obj) {
  let arr = [];
  for (let o in obj) {
    let res = [];
    let key = o;
    let value = obj[o];
    if (Object(value) !== value) {
      //基本类型
      res = [key, value];
    } else if (Array.isArray(value)) {
      //数组
      res = [o, value];
    } else {
      //对象
      console.log(objToArr(value));
      let temp = [];
      temp = objToArr(value)[0];
      res = [key, temp];
    }
    arr.push(res);
  }
  return arr;
}
console.log(objToArr(obj1));

/*
返回一个排序后的数组
let input = [
    {id:1},
    {id:2, before:1},
    {id:3, after:2},
    {id:4, first:true},
    {id:5, last:true},
    {id:6, after:7},
    {id:7}
]
*/
function sort(data) {
  let map = new Map();
  for (let i = 0; i < data.length; i++) {
    map.set(data[i].id, data[i].id);
  }
  let res = [];
  for (let i = 0; i < data.length; i++) {
    //res.splice(getIndex(data[i]), 0, data[i]);//改变了一些
    let index = getIndex(data[i]);
    map.set(data[i].id, index);
  }
  function getIndex(obj) {
    if (obj["before"]) {
      return map.get(obj["before"]) - 1;
    } else if (obj["after"]) {
      return map.get(obj["after"]) + 1;
    } else if (obj["first"]) {
      return 0;
    } else if (obj["last"]) {
      return data.length - 1;
    } else {
      return obj.id;
    }
  }
  let temp = [];
  map.forEach((value, key) => {
    temp.push([key, value]);
  });
  temp.sort((a, b) => a[1] - b[1]);
  for (let i = 1; i < data.length; i++) {
    if (temp[i][1] == temp[i - 1][1]) {
      let t = temp[i];
      temp[i] = temp[i - 1];
      temp[i - 1] = t;
    }
  }
  for (let i = 1; i < data.length; i++) {
    res[i] = data[temp[i]];
  }
  console.log(map);
  console.log(temp);
}
let input = [
  { id: 1 },
  { id: 2, before: 1 },
  { id: 3, after: 2 },
  { id: 4, first: true },
  { id: 5, last: true },
  { id: 6, after: 7 },
  { id: 7 },
];
sort(input);
//生成16进制的随机颜色
function getRandomColor() {
  let str = "#";
  let arr = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  for (var i = 0; i < 6; i++) {
    var num = parseInt(Math.random() * 16);
    str += arr[num];
  }
  return str;
}

console.log(getRandomColor());
