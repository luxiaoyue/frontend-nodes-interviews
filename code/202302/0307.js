/**
 * 路径搜索
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let m = board.length,
    n = board[0].length;
  let visited = new Array(m);
  visited.map((item) => (item = new Array(n).fill(0)));
  const backtrack = (i, j, k) => {
    if (board[i][j] !== word[k]) {
      return false;
    }
    if (k == word.length - 1) {
      return true;
    }
    for (let i = k; i < word.length; i++) {
      backtrack(i);
    }
  };
};

var cuttingRope = function (n) {
  let dp = new Array(n + 1).fill(1);
  for (let i = 0; i <= n + 1; i++) dp[i] = i;
  dp[0] = 1;
  if (n == 2) return 1;
  if (n == 3) return 2;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      dp[i] = Math.max(dp[i] % 1000000007, (dp[j] * dp[i - j]) % 1000000007);
    }
  }
  return dp[n];
};
console.log(cuttingRope(120));
// console.log("1111");
var cuttingRope1 = function (n) {
  if (n <= 3) return n - 1;
  let remin = n % 3;
  let count = Math.floor(n / 3);
  if (remin == 2) {
    return (Math.pow(3, count) * 2) % 1000000007;
  } else if (remin == 1) {
    return (Math.pow(3, count - 1) * 4) % 1000000007;
  } else {
    return Math.pow(3, count) % 1000000007;
  }
};
console.log(cuttingRope1(120));
