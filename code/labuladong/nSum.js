/**
 *
 */

//two Number 将所有等于target的放到res 去除重复的e
var twoSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  let left = 0,
    right = nums.length - 1;
  let sum = 0;
  let res = [];
  while (left < right) {
    sum = nums[left] + nums[right];
    let temp1 = nums[left],
      temp2 = nums[right];
    if (sum > target) {
      while (left < right && nums[right] == temp2) right--;
    } else if (sum < target) {
      while (left < right && nums[left] == temp1) left++;
    } else {
      res.push([left, right]);
      while (left < right && nums[left] == temp1) left++;
      while (left < right && nums[right] == temp2) right--;
    }
  }
  return res;
};

var threeSum = function (nums, t) {
  nums.sort((a, b) => a - b);
  let result = [];
  let twoSum = (nums, start, target) => {
    nums.sort((a, b) => a - b);
    let left = start,
      right = nums.length - 1;
    let sum = 0;
    let res = [];
    while (left < right) {
      sum = nums[left] + nums[right];
      let temp1 = nums[left],
        temp2 = nums[right];
      if (sum > target) {
        while (left < right && nums[right] == temp2) right--;
      } else if (sum < target) {
        while (left < right && nums[left] == temp1) left++;
      } else {
        res.push([nums[left], nums[right]]);
        while (left < right && nums[left] == temp1) left++;
        while (left < right && nums[right] == temp2) right--;
      }
    }
    return res;
  };
  for (let i = 0; i < nums.length; i++) {
    let temp = twoSum(nums, i + 1, t - nums[i]);
    console.log(nums[i], temp);
    for (let j = 0; j < temp.length; j++) {
      result.push([nums[i], temp[j][0], temp[j][1]]);
    }
    while (i < nums.length && nums[i] == nums[i + 1]) i++;
  }
  return result;
};

console.log(threeSum([1, 2, -2, -1], 0));

//n个数字之和

var nSum = function (nums, n, start, target) {
  nums.sort((a, b) => a - b);
  let result = [];
  let sz = nums.length();
  if (n < 2 || sz < n) return res;
  if (n == 2) {
    let left = start,
      right = nums.length - 1;
    let sum = 0;
    let res = [];
    while (left < right) {
      sum = nums[left] + nums[right];
      let temp1 = nums[left],
        temp2 = nums[right];
      if (sum > target) {
        while (left < right && nums[right] == temp2) right--;
      } else if (sum < target) {
        while (left < right && nums[left] == temp1) left++;
      } else {
        res.push([nums[left], nums[right]]);
        while (left < right && nums[left] == temp1) left++;
        while (left < right && nums[right] == temp2) right--;
      }
    }
    return res;
  } else {
    for (let i = start; i < nums.length; i++) {
      let temp = nSum(nums, n - 1, i + 1, target - nums[i]);
      for (let j = 0; j < temp.length; j++) {
        result.push([nums[i], temp[j][0], temp[j][1]]);
      }
      while (i < nums.length && nums[i] == nums[i + 1]) i++;
    }
  }
  return result;
};
