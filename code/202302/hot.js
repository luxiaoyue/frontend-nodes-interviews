var canJump = function (nums) {
  let cover = 0;
  for (let i = 0; i <= cover; i++) {
    cover = Math.max(i + nums[i], cover);
    if (cover >= nums.length - 1) return true;
  }
  return false;
};
console.log(canJump([3, 2, 1, 0, 4]));

var canJump = function (nums) {
  if (nums.length == 1) return true;
  if (nums[0] == 0) return false;
  let dp = new Array(nums.length).fill(0);
  dp[0] = nums[0];
  for (let i = 1; i < nums.length - 1; i++) {
    dp[i] = Math.max(dp[i - 1], nums[i] + i);
    if (dp[i] == i) {
      return false;
    }
  }
  return true;
};
