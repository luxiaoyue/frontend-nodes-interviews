var bestCoordinate = function (towers, radius) {
  let minX = towers[0][0],
    maxX = towers[0][0],
    minY = towers[0][1],
    maxY = towers[0][1];
  let map = new Map();
  for (let i = 1; i < towers.length; i++) {
    if (towers[i][0] < minX) minX = towers[i][0];
    if (towers[i][0] > maxX) maxX = towers[i][0];
    if (towers[i][1] < minY) minY = towers[i][1];
    if (towers[i][1] > maxY) maxY = towers[i][1];
  }
  const cal = function (x, y, towers) {
    let res = 0;
    for (let i = 0; i < towers.length; i++) {
      let tx = towers[i][0] - x > 0 ? towers[i][0] - x : x - towers[i][0];
      let ty = towers[i][1] - y > 0 ? towers[i][1] - y : y - towers[i][1];
      let distance = Math.sqrt(tx * tx + ty * ty);
      let power = Math.floor(towers[i][2] / (1 + distance));
      res += distance > radius ? 0 : power;
    }
    return res;
  };
  for (let a = minX; a <= maxX; a++) {
    for (let b = minY; b <= maxY; b++) {
      let res = cal(a, b, towers);
      if (map.get(res)) {
        map.set(res, map.get(res)[0] > a ? [a, b] : map.get(res));
      } else {
        map.set(res, [a, b]);
      }
    }
  }
  console.log(map.keys());
  let value = 0;
  for (let key of map.keys()) {
    console.log(key);
    if (key >= value) {
      value = key;
    }
  }
  console.log(map.get(value));
};

let towers = [
    [2, 1, 9],
    [0, 1, 9],
  ],
  radius = 2;
bestCoordinate(towers, radius);
