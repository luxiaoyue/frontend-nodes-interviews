const nextGeaterElement = (list) => {
  let n = list.length;
  let res = [];
  let stack = [];
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length > 0 && stack[stack.length - 1] <= list[i]) {
      stack.pop();
    }
    res[i] = stack.length > 0 ? -1 : stack[stack.length - 1];
    stack.push(list[i]);
  }
  return res;
};
