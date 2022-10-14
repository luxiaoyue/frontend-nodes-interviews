var setZeroes = function (matrix) {
  let m = matrix.length - 1;
  let n = matrix[0].length - 1;
  console.log(m, n);
  const bfs = function (i, j) {
    if (i < 0 || i > m || j < 0 || j > n) return;
    console.log(matrix[i][j]);
    for (let a = 0; a <= m; a++) {
      matrix[a][j] = "*";
    }
    for (let a = 0; a <= n; a++) {
      matrix[i][a] = "*";
    }
  };
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (matrix[i][j] == 0) {
        bfs(i, j);
      }
    }
  }
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (matrix[i][j] == "*") {
        matrix[i][j] = 0;
      }
    }
  }
  console.log(matrix);
};

let data = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];
setZeroes(data);
