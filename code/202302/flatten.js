const flattenAndRemoveSame = (list) => {
  let res = [];
  for (let item of list) {
    if (Array.isArray(item)) {
      res.push(...flattenAndRemoveSame(item));
    } else {
      res.push(item);
    }
  }
  return [...new Set(res)].sort((a, b) => a - b);
};
const flattenAndRemoveSame1 = (list) => {
  let res = list.toString().split(",").map(Number);
  return [...new Set(res)].sort((a, b) => a - b);
};
console.log(
  flattenAndRemoveSame1([
    [1, 2, 2],
    [3, 4, 5, 5],
    [6, 7, 8, 9, [11, 12, [12, 13, [14]]]],
    10,
  ])
);
