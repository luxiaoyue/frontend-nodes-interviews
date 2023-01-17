let s = "(0123)";
// let list = s.split("(")[1].split(")")[0].split("");
// console.log(list);
let numStr = s.split("(")[1].split(")")[0];
let list = numStr.split("");
let numList = [];
const cal = function (s1, str, type) {
  let list = str.split("");
  let res = [];
  if (list.length > 1) {
    // 可以插入.
    for (let i = 1; i < list.length; i++) {
      // 分割
      let firstStr = str.substr(0, i);
      let secondStr = str.substr(i, list.length - i + 1);
      let temp = [firstStr, secondStr];
      let ts = temp[0] + "." + temp[1];
      if (type == "r") {
        res.push([s1, ts]);
      } else {
        res.push([ts, s1]);
      }
      //   console.log(ts);
      if (firstStr == "0") {
        break;
      }
    }
  } else {
    // 不用插入.
    return [];
  }
  return res;
};
for (let i = 1; i < list.length; i++) {
  let temp = [numStr.substr(0, i), numStr.substr(i, list.length - i + 1)];
  numList.push(temp);
  let listl = cal(temp[1], temp[0], "l");
  let listr = cal(temp[0], temp[1], "r");
  listl = listl.concat(listr);
  numList = numList.concat(listl);
}
// let res=[]
// for(let i=0;i<numList.length;i++){
//     if(numList[0])
// }
console.log(numList);
