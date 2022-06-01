//map+sort的方法做的
function sort() {
  let array = [];
  let arr = array[0].split(" ");
  let topN = arr[0];
  let M = arr[1];
  let map = new Map();

  for (let i = 1; i < Array.length; i++) {
    let temp = array[i].split(" ");
    for (let j = 0; j < temp.length; j++) {
      if (map.has(temp[j])) {
        let value = map.get(temp[j]);
        if (j % 2 == 1) {
          map.set(temp[j], value + 3);
        } else {
          map.set(temp[j], value + 1);
        }
      } else {
        if (j % 2 == 1) {
          map.set(temp[j], 3);
        } else {
          map.set(temp[j], 1);
        }
      }
    }
  }
  let list = [];
  map.forEach((key, value) => {
    arr.push([key, value]);
  });
  //写的不太对 快排 是不稳定的
  //list.sort((a, b) => a[1] - b[1]);
  //自定义排序算法 保持稳定
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length - i - 1; j++) {
      if (list[j][1] < list[j + 1][1]) {
        let temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
      }
    }
  }
  let res = [];
  for (let i = 0; i < topN; i++) {
    res.push(list[i]);
  }
  console.log(res.join(" "));
}

function mysort(data) {
  //二维数组排序
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length - i - 1; j++) {
      if (data[j][1] < data[j + 1][1]) {
        let temp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = temp;
      }
    }
  }
  console.log(data);
}
let list = [
  ["a", 2],
  ["b", 3],
  ["b1", 3],
  ["c", 4],
];
//mysort(list);

//map 但是 没判断出来
//list 就是那个服务器的依赖的项目
var canFinish = function (target, list) {
  let num = list.length;
  let indrgee = new Array(num).fill(0); //统计所有服务器的入度
  const map = new Map(); //用来存放  pre服务器 [服务器1，服务器2]

  for (let j = 0; j < list.length; j++) {
    //[n,pre]  cur 服务器 i ,其余的 依赖项目
    let cur = j; //服务器编号
    let item = list[j];
    indrgee[cur] = item[0]; //第一个数是 依赖了多少个其他的服务器
    //对应课程的入度+1
    for (let i = 1; i < list.length; i++) {
      if (!map.has(item[i])) {
        //let set = new Set(cur);
        map.set(item[i], [cur]);
      } else {
        let set = map.get(item[i]);
        //set.add(cur);
        set.push(cur);
        map.set(item[i], set);
      }
    }
  }
  console.log(indrgee);
  console.log(map);

  let queue = []; //记录哪些入度为0的服务器
  let flag = 0;
  for (let i = 0; i < indrgee.length; ++i) {
    if (indrgee[i] === 0) {
      queue.push(i); //此时的服务器是可以直接开始的
    }
  }

  while (queue.length) {
    let pre = queue.shift(); //空闲的服务器
    if (pre == target) {
      flag = 1;
      break;
    }
    let l = map.get(pre);
    for (let i = 0; i < l.length; i++) {
      indrgee[l[i]]--;
      if (indrgee[l[i]] === 0) {
        queue.push(l[i]);
      }
    }
    console.log(indrgee);
  }
  console.log(flag);
  return flag == 1 ? true : false;
};

// let target = 2;
// let t = [[0], [1, 0], [2, 1, 0]];
// canFinish(target, t);

const dp = new Array(5).fill(new Array(5).fill(0));
console.log(dp);
