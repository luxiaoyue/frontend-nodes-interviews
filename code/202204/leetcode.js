var minPathSum = function (grid) {
  let m = grid.length;
  let n = grid[0].length;
  let temp = new Array(n).fill(0);
  let dp = new Array(m).fill(temp);
  dp[0][0] = grid[0][0];
  for (let i = 1; i < m; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }
  for (let j = 1; j < n; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j];
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
      //console.log(dp[i][j]);
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      console.log(dp[i][j]);
    }
  }
  return dp[m - 1][n - 1];
};
let temp = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
];
minPathSum(temp);
