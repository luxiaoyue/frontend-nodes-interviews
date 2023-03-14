/**
 *
 * @param {*} p1
 * @param {*} p2
 * @param {*} p3
 * @param {*} p4
 * 01-10 12-21 23-32 30-03
 * SUM(1-n)=Xi*Yi+1-Xi+1Yi
 * s=1/2*|sum|
 * return s
 * @returns
 */
function getArea(p1, p2, p3, p4) {
  let xArray = [p1.x, p2.x, p3.x, p4.x];
  let yArray = [p1.y, p2.y, p3.y, p4.y];
  for (let i = 1; i < 4; i++) {
    s += xArray[i - 1] * yArray[i] - xArray[i] * yArray[i - 1];
  }
  s += xArray[3] * yArray[0] - xArray[i] * yArray[3];
  s = Math.abs(0.5 * s);
  return s;
}

/**
 *
 * @param {} s
 * @param {} t
 * d[i][j]表示 s[i:]的子序列中t[j:]出现的次数   s[i:]表示从i到末尾的序列
 * j=n t为空 是任何序列的子序列
 * i=m s为空 不存在任何子序列
 * 0<i<m,0<j<n 时，
 *      s[i]=t[j] 考虑t[j+1:]作为s[i+1:]的子序列，子序列数为dp[i+1][j+1];可还可以选择和不匹配
 *          dp[i][j] = dp[i + 1][j + 1] + dp[i + 1][j];
 *      s[i]!=t[j] 考虑t[j:]作为s[i+1:]的子序列
 *          dp[i][j] = dp[i + 1][j];
 * @returns
 */
var numDistinct = function (s, t) {
  const m = s.length,
    n = t.length;
  if (m < n) return 0;
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) {
    dp[i][n] = 1;
  }
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (s[i] == t[j]) {
        dp[i][j] = dp[i + 1][j + 1] + dp[i + 1][j];
      } else {
        dp[i][j] = dp[i + 1][j];
      }
    }
  }
  return dp[0][0];
};
console.log(numDistinct("iflytekiflytek"));
