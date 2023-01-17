function set16ToRgb(str) {
  const reg = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
  if (!reg.test(str)) {
    return;
  }
  let newStr = str.toLowerCase().replace(/\#/g, "");
  const len = newStr.length;
  if (len == 3) {
    let t = "";
    for (let i = 0; i < len; i++) {
      t += newStr.slice(i, i + 1).concat(newStr.slice(i, i + 1));
    }
    newStr = t;
  }
  const arr = []; //将字符串分隔，两个两个的分隔
  let s = "";
  for (let i = 0; i < 6; i = i + 2) {
    s = newStr.slice(i, i + 2);
    arr.push(parseInt("0x" + s));
  }
  return "rgb(" + arr.join(",") + ")";
}

console.log(set16ToRgb("#BAC7CB")); // rgb(255,255,0)
