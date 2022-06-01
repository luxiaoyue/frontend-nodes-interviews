var maxProduct = function (nums) {
  if (nums.length == 1) return nums[0];
  // let dp = new Array(nums.length).fill([]);
  let dp = [];
  dp[0] = [nums[0], nums[0]];
  for (let i = 1; i < nums.length; i++) {
    let temp = [];
    temp[0] = Math.max(nums[i], dp[i - 1][0] * nums[i], dp[i - 1][1] * nums[i]);
    temp[1] = Math.min(nums[i], dp[i - 1][0] * nums[i], dp[i - 1][1] * nums[i]);
    dp.push(temp);
  }
  dp.sort((a, b) => a[0] - b[0]);
  let m1 = dp[nums.length - 1][0];
  dp.sort((a, b) => a[1] - b[1]);
  let m2 = dp[nums.length - 1][1];
  console.log(dp);
  return m1 > m2 ? m1 : m2;
};
let arr1 = [2, -5, -2, -4, 3];

//为什么连续改变
var maxProduct1 = function (nums) {
  if (nums.length == 1) return nums[0];
  let dp = new Array(nums.length).fill([0, 0]);
  dp[0] = [nums[0], nums[0]];
  for (let i = 1; i < nums.length; i++) {
    dp[i][0] = Math.max(nums[i], dp[i - 1][0] * nums[i]);
    dp[i][1] = dp[i - 1][1] * nums[i];
  }
  console.log(dp);
};
//console.log(maxProduct1(arr));
//

// [ ['a', 1], ['b', 2], ['c', 3] ]
//Object.keys(obj);
let list = [];
function objToArr() {
  const obj = { a: 1, b: 2, c: 3 };
  //const arr = Object.entries(obj);
  let arr = [];
  for (let o of Object.entries(obj)) {
    arr.push(o);
  }
  console.log(arr);
}
objToArr();

function sort() {
  let data = [{ a: 1 }, { a: 5 }, { a: 3 }, { a: 6 }];
  for (let i = 0; i < data.length; i++) {
    for (let j = i; j < data.length; j++) {
      if (data[i].a > data[j].a) {
        let temp = data[i];
        data[i] = data[j];
        data[j] = temp;
      }
    }
  }
  console.log(data);
}
sort();
