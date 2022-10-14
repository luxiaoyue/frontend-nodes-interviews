/*给定一个包含了一些 0 和 1 的非空二维数组 grid 。

一个 岛屿 是由一些相邻的 1 (代表土地) 构成的组合，这里的「相邻」要求两个 1 必须在水平或者竖直方向上相邻。你可以假设 grid 的四个边缘都被 0（代表水）包围着。

找到给定的二维数组中最大的岛屿面积。(如果没有岛屿，则返回面积为 0 。)

示例 1:
[[0,0,1,0,0,0,0,1,0,0,0,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,1,1,0,1,0,0,0,0,0,0,0,0],
 [0,1,0,0,1,1,0,0,1,0,1,0,0],
 [0,1,0,0,1,1,0,0,1,1,1,0,0],
 [0,0,0,0,0,0,0,0,0,0,1,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,0,0,0,0,0,0,1,1,0,0,0,0]]
对于上面这个给定矩阵应返回 6。注意答案不应该是 11 ，因为岛屿只能包含水平或垂直的四个方向的 1 。 */

function cal(grid) {
  let m = gird.length;
  let n = gird[0].length;
  let count = 0;
  let num = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (gird[i][j] == 1) {
        let temp = dfs(i, j, gird);
        num = Math.max(temp, num);
      }
    }
  }
  return num;

  function dfs(i, j, grid) {
    if (
      i < 0 ||
      j < 0 ||
      i >= gird.length ||
      j >= grid[0].length ||
      gird[i][j] != 1
    ) {
      //跳出递归
      return;
    }
    let count = 0;
    if (gird[i][j] != 0) {
      //相连的
      // gird[i][j] == 2;
      count += grid[i][j];
      gird[i][j] == 0;
    }

    let n1 = dfs(i - 1, j, gird);
    let n2 = dfs(i + 1, j, gird);
    let n3 = dfs(i, j - 1, gird);
    let n4 = dfs(i, j + 1, gird);
    return count + n1 + n2 + n3 + n4;
  }
}
