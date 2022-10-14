var minTest= function (intervals) {
  let res=0
  intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < intervals.length - 1; i++) {
    if (intervals[i][1] < intervals[i + 1][0]) {
      res+=1
    }
  }
  console.log(res);
};

var minMeetingRooms = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < intervals.length - 1; i++) {
    if (intervals[i][1] < intervals[i + 1][0]) {
      intervals.splice(i, 2, [
        intervals[i][0],
        Math.max(intervals[i][1], intervals[i + 1][1]),
      ]);
      i--;
    }
  }
  console.log(intervals.length);
};
let d = [
  [0, 30],
  [5, 10],
  [15, 20],
];
let d1 = [
  [9, 10],
  [1, 4],
  [3, 6],
  [8, 12],
];
minTest(d);

//单调栈
function stackDesc(arr, m) {
  //处理掉地面上的部分
  arr = arr.map((v) => {
    return v > 0 ? 0 : v;
  });
  //解决第一个和最后一个为负数的情况
  arr.push(0);
  arr.unshift(0);
  console.log(arr);
  let stack = [];
  let count = 0;
  stack.push(0);
  for (let i = 0; i < arr.length; i++) {
    while (stack.length != 0 && arr[stack[stack.length - 1]] < arr[i]) {
      //一直出栈，直到栈顶》=入栈元素
      let pre = stack.pop();
      let top = stack[stack.length - 1];
      let width = i - top - 1;
      let height = Math.min(arr[i], arr[top] - arr[pre]);
      count += ((width / m) >> 0) * height;
    }
    stack.push(i);
  }
  console.log({ count });
  return count;
}
// let data = [1, 2, -1, -2, 3];
// let m = 2;
// stackDesc(data, 2);
