/**
 * 数组的常用的思想 双指针
 *  快慢指针
 * 原地操作数组
 */
//去除重复元素
const removeSameItem = (list) => {
  if (list.length == null) return list;
  let slow = (fast = 0);
  while (fast < list.length) {
    if (list[fast] !== list[slow]) {
      slow++;
      list[slow] = list[fast];
    }
    fast++;
  }
  console.log(list);
};
// removeSameItem([1, 2, 3, 3, 3, 4, 6, 6, 7, 8, 8]);

//移除指定元素
const removeTargetItem = (list, target) => {
  let slow = 0,
    fast = 0;
  while (fast < list.length) {
    if (list[fast] !== target) {
      slow++;
      list[slow] = list[fast];
    }
    fast++;
  }
};
//将0 移动到数组末尾
const removeZero = (list) => {
  let slow = 0,
    fast = 1;
  while (fast < list.length) {
    if (list[fast] !== 0) {
      slow++;
      list[slow] = list[fast];
    }
    fast++;
  }
  //末尾置为0
  for (let i = slow + 1; i < list.length; i++) {
    list[i] = 0;
  }
  console.log(list);
};
removeZero([1, 0, 2, 0, 3, 4]);

/**
 * 左右指针
 * 二分查找
 *
 */
const binarySearch = (list, target) => {
  let left = 0,
    right = list.length - 1;
  let temp = (left + right) / 2;
  while (left <= right) {
    temp = Math.floor((left + right) / 2);
    if (list[temp] > target) {
      right = temp - 1;
    } else if (list[temp] < target) {
      left = temp + 1;
    } else {
      return list[temp];
    }
  }
  return -1;
};

console.log(binarySearch([1, 2, 3, 5, 7, 9, 4], 9));
/**
 * 两数之和
 * @param {*} list
 * @param {*} target
 * @returns
 */

const twoNumSum = (list, target) => {
  let left = 0,
    right = list.length - 1;
  let sum = list[left] + list[right];
  while (left <= right) {
    sum = list[left] + list[right];
    if (sum > target) {
      right--;
    } else if (sum < target) {
      left++;
    } else {
      return [left + 1, right + 1];
    }
  }
  return [-1, -1];
};

console.log(twoNumSum([1, 2, 2, 6], 9));

/**
 * 翻转字符串
 * @param {*} str
 * @returns
 */

const reverseString = (str) => {
  const list = str.split("");
  let left = 0,
    right = list.length - 1;
  while (left < right) {
    let temp = list[right];
    list[right] = list[left];
    list[left] = temp;
    left++;
    right--;
  }
  return list.join("");
};
console.log(reverseString("asdfghj"));

/*
  最长回文子串
  思路：从中心点开始 向左右找
  但是因为奇数和偶数 中线点不同，奇数只有一个 偶数有两个

*/

const longReverseSubString = (str) => {
  let res = "";
  const get = (str, l, r) => {
    while (l >= 0 && r < str.length && str.charAt(l) === str.charAt(r)) {
      l--;
      r++;
    }
    return str.substring(l + 1, r);
  };
  for (let i = 0; i < str.length; i++) {
    let s1 = get(str, i, i);
    let s2 = get(str, i, i + 1);
    res = res.length > s1.length ? res : s1;
    res = res.length > s2.length ? res : s2;
  }
  return res;
};
console.log(longReverseSubString("abcbaba"));

var twoSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  console.log(nums);
};
console.log(twoSum([1, 4, 5, 3, 6], 5));

/**
 *
 */
var maxArea = function (height) {
  let res = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      let temp = Math.min(height[i], height[j]) * (j - i);
      res = Math.max(temp, res);
    }
  }
  return res;
};
maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);

var spiralOrder = function (matrix) {
  let m = matrix.length,
    n = matrix[0].length;
  let left = 0,
    right = n - 1;
  let top = 0,
    bottom = m - 1;
  let res = [];
  while (res.length <= m * n) {
    if (left <= right) {
      if (res.length == m * n) break;
      for (let i = left; i <= right; i++) {
        res.push(matrix[top][i]);
      }
      console.log("res", res);
      top++;
    }
    if (top <= bottom) {
      if (res.length == m * n) break;
      for (let i = top; i <= bottom; i++) {
        res.push(matrix[i][right]);
      }
      console.log("res", res);
      right--;
    }
    if (left <= right) {
      if (res.length == m * n) break;
      for (let i = right; i >= left; i--) {
        res.push(matrix[bottom][i]);
      }
      bottom--;
      console.log("res", res);
    }
    if (top <= bottom) {
      if (res.length == m * n) break;
      for (let i = bottom; i >= top; i--) {
        res.push(matrix[i][left]);
      }
      console.log("res", res);
      left++;
    }
  }
  return res;
};

console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
);
