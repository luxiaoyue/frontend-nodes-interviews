const quanpailie = (list) => {
  let res = [];
  const dfs = (path) => {
    if (path.length == list.length) {
      res.push([...path]);
      return;
    }
    for (let i = 0; i < list.length; i++) {
      if (path.includes(list[i])) continue;
      path.push(list[i]);
      dfs(path);
      path.pop();
    }
  };
  dfs([]);
  return res;
};
console.log(quanpailie([1, 2, 3]));

const subArray = (list) => {
  let res = [];
  let path = [];
  const backtrack = (list, start) => {
    res.push([...path]);
    for (let i = start; i < list.length; i++) {
      path.push(list[i]);
      backtrack(list, i + 1);
      path.pop();
    }
  };
  dfs(list, 0);
  return res;
};
console.log(subArray([1, 2, 3]));
