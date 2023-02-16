//最长连续子数组 利用set 对数据进行筛选，同时在O(1)时间复杂度内得到数字
//如果有 则查找从本数字开始的 下一个值 直到不存在为止，计算出maxLen
//返回maxLen的最大值
var longestConsecutive = function (nums) {
  let len = nums.length;
  if (len < 2) return len;
  let myset = new Set(nums);
  let res = 0;
  for (let num of myset) {
    if (!myset.has(num - 1)) {
      let start = num;
      let maxLen = 1;
      while (myset.has(start + 1)) {
        start++;
        maxLen++;
        console.log(start);
      }
      res = Math.max(maxLen, res);
    }
  }
  return res;
};
console.log(longestConsecutive([1, 2, 3, 4]));
