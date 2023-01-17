var maximalSquare = function (matrix) {
  let m = matrix.length;
  let n = matrix[0].length;
  let dp = new Array(m);
  let maxside = 0;
  for (let i = 0; i < m; i++) {
    dp[i] = new Array(n).fill(0);
    dp[i][0] = parseInt(matrix[i][0]);
    if (matrix[i][0] == 1) maxside = 1;
  }

  for (let i = 0; i < n; i++) {
    dp[0][i] = parseInt(matrix[0][i]);
    if (matrix[0][i] == 1) maxside = 1;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] == 0) {
        dp[i][j] = 0;
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - 1], dp[i][j - 1]) + 1;
      }
      maxside = Math.max(maxside, dp[i][j]);
    }
  }
  console.log(dp);
};
let data = [
  ["1", "0", "1", "0", "0"],
  ["1", "0", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["1", "0", "0", "1", "0"],
];
//maximalSquare(data);

//得到对象的item
const obj = { a: 1, b: 2, c: 3 };
const arr = Object.entries(obj);
console.log(arr); // [ ['a', 1], ['b', 2], ['c', 3] ]
console.log(Object.keys(obj));
