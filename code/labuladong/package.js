//0-1背包 二维解法 
function testWeightBagProblem(weight, value, size) {
  let m = weight.length,
    n = size + 1;
  let dp = new Array(m).fill(new Array(n).fill(0));
  for (let j = weight[0]; j < n; j++) {
    dp[0][j] = value[0];
  }
  for (let i = 1; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (j < weight[i]) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i]);
      }
    }
  }
  return dp[weight.length - 1][size];
}

//0-1背包 一维解法
function testWeightBagProblem1(weight, value, size) {
  let m = weight.length,
    n = size + 1;
  let dp = new Array(n).fill(0);
  for (let i = 0; i < m; i++) {
    for (let j = size; j >= weight[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i]);
    }
  }
  return dp[size];
}

//完全背包  物品可以多次选择
function testWeightBagProblem1(weight, value, size) {
  let m = weight.length,
    n = size + 1;
  let dp = new Array(n).fill(0);
  for (let i = 0; i < m; i++) {
    for (let j = weight[i]; j <= size; j++) {
      dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i]);
    }
  }
  return dp[size];
}
