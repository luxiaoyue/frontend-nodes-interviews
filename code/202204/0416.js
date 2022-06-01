// let num = 2;
// let arr = [];
// //n
// for (let j = 0; j < num; j++) {
//   let res = "";
//   for (let i = 1; i <= 4 * num; i++) {
//     if (i <= num - j) {
//       res += ".";
//     } else if (i > num - j && i <= 3 * num + j) {
//       res += "*";
//     } else {
//       res += ".";
//     }
//   }
//   arr.push(res);
// }
// //2 3
// for (let i = 0; i < 2 * num; i++) {
//   let res = "";
//   for (let i = 1; i <= 4 * num; i++) {
//     if (i <= num) {
//       res += "*";
//     } else if (i > num && i <= 3 * num) {
//       res += ".";
//     } else {
//       res += "*";
//     }
//   }
//   arr.push(res);
// }
// for (let j = 1; j <= num; j++) {
//   let res = arr[num - j];
//   arr.push(res);
// }

// console.log(arr);

function count(n1, line1) {
  let count = 0;
  for (let i = 0; i < n1; i++) {
    for (let j = 0; j < n1; j++) {
      let num = line1[i] * line1[j];
      count += cal(num);
    }
  }
}
function cal(num) {
  let string = num + "";
  console.log(typeof string);
  let count = 0;
  for (let s of string) {
    if (s == "0") count++;
  }
  console.log(count);
  return count;
}
