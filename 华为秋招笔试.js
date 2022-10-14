let str = "101+(2*3)+4";
let list1 = str.split("");
console.log(list1);
let num = [];
let fh = [];
let temp = "";
for (let i = 0; i < list1.length; i++) {
  if (
    list1[i] == "+" ||
    list1[i] == "-" ||
    list1[i] == "*" ||
    list1[i] == "/" ||
    list1[i] == "(" ||
    list1[i] == ")"
  ) {
    if (temp != "") num.push(temp);
    temp = "";
    fh.push(list1[i]);
  } else {
    temp += list1[i];
  }
}
num.push(temp);
console.log(num, fh);
let res;
while (fh.length > 0) {
  res = cal(num[0], num[1], fh[0]);
  console.log(res);
  num.splice(0, 2);
  fh.splice(0, 1);
  num.unshift(res);
}
function cal(l, r, c) {
  let a = parseInt(l);
  let b = parseInt(r);
  if (c == "+") {
    return a + b;
  } else if (c === "-") {
    return a - b;
  } else if (c === "*") {
    return a * b;
  } else if (c === "/") {
    return a / b;
  }
}
console.log(cal("1", "2", "+"));
