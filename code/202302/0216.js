// 明翰距离
const HMdistance = (x, y) => {
  const tobinary = (num) => {
    let res = "";
    let a = 0,
      i = 0;
    while (num != 0) {
      a = num % 2;
      num = parseInt(num / 2);
      res = a + res + "";
      i = i * 10;
    }
    return res;
  };
  let num1 = tobinary(x);
  let num2 = tobinary(y);
  console.log(num1, num2);
  let len =
    num1.length > num2.length
      ? num1.length - num2.length
      : num2.length - num1.length;
  for (let i = 0; i < len; i++) {
    if (num1.length > num2.length) {
      num2 = "0" + num2;
    } else {
      num1 = "0" + num1;
    }
  }
  console.log(num1, num2);
  let res = 0;
  for (let i = 0; i < num1.length; i++) {
    res = res + Number(num1.charAt(i) ^ num2.charAt(i));
    console.log(res);
  }
  return res;
};

// console.log(HMdistance(7, 8));
// var findAnagrams = function (s, p) {
//   let list = p.split("");
//   let list1 = s.split("");
//   let res = new Map();
//   let r = [];
//   const dfs = (path) => {
//     if (path.length == list.length) {
//       res.set(path.join(""), 1);
//       return;
//     }
//     for (let i = 0; i < list.length; i++) {
//       if (path.includes(list[i])) continue;
//       path.push(list[i]);
//       dfs(path);
//       path.pop();
//     }
//   };
//   dfs([]);
//   console.log(res);
//   for (let i = 0; i < list1.length - p.length + 1; i++) {
//     if (res.has(s.substring(i, i + p.length))) {
//       r.push(i);
//     }
//   }
//   return r;
// };
// console.log(findAnagrams("baa", "aa"));
// //超出时间限制
// const isCompare1 = (s1, s2) => {
//   let s3 = s1.split("").sort().join("");
//   let s4 = s2.split("").sort().join("");
//   console.log(s3, s4);
//   return s3 == s4;
// };
// //
// const isCompare = (s1, s2) => {
//   let arr = new Array(26).fill(0);
//   for (let i = 0; i < s2.length; i++) {
//     let num = s2.charAt(i) - "a";
//     arr[num] += 1;
//   }
//   console.log(arr);
//   for (let i = 0; i < s1.length; i++) {
//     let num = s1.charAt(i) - "a";
//     arr[num] -= 1;
//   }
//   for (let i = 0; i < 26; i++) {
//     if (arr[i] != 0) return false;
//   }
//   return true;
// };
// console.log(isCompare("bc", "ab"));

var minWindow = function (s, t) {
  let need = new Map(),
    window = new Map();
  let left = 0,
    right = 0;
  let vaild = 0;
  let start = 0,
    len = Infinity;
  for (let c of t) {
    need.set(c, need.has(c) ? need.get(c) + 1 : 1);
  }
  console.log(need);
  while (right < s.length) {
    let c = s.charAt(right);
    right++;
    if (need.has(c)) {
      window.set(c, window.has(c) ? window.get(c) + 1 : 1);
      if (window.get(c) === need.get(c)) {
        vaild++;
      }
    }
    //右侧目前达到标准
    while (vaild == need.size) {
      console.log(left, right, need, window);
      if (right - left <= len) {
        start = left;
        len = right - left;
      }
      let c1 = s.charAt(left);
      left++;
      if (need.has(c1)) {
        if (window.get(c1) === need.get(c1)) {
          vaild--;
        }
        window.set(c1, window.get(c1) - 1);
      }
    }
  }
  console.log(start, len);
  return len == Infinity ? "" : s.substring(start, start + len);
};
console.log(minWindow("aa", "aa"));
