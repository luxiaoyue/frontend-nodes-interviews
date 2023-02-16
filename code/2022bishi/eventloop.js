// for (let i = 0; i < 3; i++) {
//   console.log("for中i的值：" + i);
//   var time = setTimeout(() => {
//     console.log("setTimeout中i的值：" + i);
//   }, 300);
// }

// const p1 = new Promise((resolve, reject) => {
//   console.log("1");
//   setTimeout(() => {
//     console.log("2");
//     resolve("result");
//   }, 1000);
// });

// p1.then(
//   (res) => console.log("3", res),
//   (err) => console.log(err)
// );

// function* gen() {
//   const num1 = yield 1;
//   console.log(num1);
//   const num2 = yield 2;
//   console.log(num2);
//   return 3;
// }
// const g = gen();
// console.log(g.next()); // { value: 1, done: false }
// console.log(g.next(11111));
// // 11111
// //  { value: 2, done: false }
// console.log(g.next(22222));
// // 22222
// // { value: 3, done: true }

var minPathSum = function (grid) {
  let m = grid.length,
    n = grid[0].length;
  let dp = new Array(m).fill(new Array(n).fill(0));
  dp[0][0] = grid[0][0];
  console.log(dp);
  for (let i = 1; i < m; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }
  console.log(dp);
  for (let i = 1; i < n; i++) {
    dp[0][i] = dp[0][i - 1] + grid[0][i];
  }
  console.log(dp);
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j]) + grid[i][j];
    }
  }
  console.log(dp);
  return dp[m - 1][n - 1];
};

console.log(
  minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ])
);
