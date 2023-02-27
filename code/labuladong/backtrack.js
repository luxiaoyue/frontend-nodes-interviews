/**
 * 组合问题：一个集合找出数目为n的数量的数字
 * 切割问题：一个字符串按照规则有几种切割方式
 * 子集问题：一个N个数的集合按照规则有几个符合规则的子集
 * 排列问题：N个数按照一定规则全排列，有几种排列方式
 * 棋盘问题：N皇后、数独
 *
 * 集合大小构成树的宽度 递归的深度构成树的深度
 */

/*
const backtracking=()=>{
    if (终止条件) {
        存放结果;
        return;
    }

    for (选择:本层集合中元素(树中节点孩子的数量就是集合的大小)) {
        处理节点;
        backtracking(路径,选择列表); // 递归
        回溯,撤销处理结果
    }
}
*/

//组合问题  查找组合的话 就是找出不同的子集 也就是
function combine(n, k) {
  let result = [];
  let path = [];
  const backtracking = (start) => {
    if (path.length == k) {
      result.push([...path]);
      return;
    }
    //n-i>=k-path.length => i<=n-(k-path.length)+1 剪枝
    for (let i = start; i <= n - (k - path.length) + 1; i++) {
      path.push(i);
      backtracking(i + 1);
      path.pop();
    }
  };
  backtracking(1);
  return result;
}
console.log(combine(4, 3));

//和为k的组合
function sumCombine(k, n) {
  let result = [];
  let path = [];
  const backtracking = (start, sum) => {
    if (path.length == k && sum == 0) {
      result.push([...path]);
      return;
    }
    for (let i = start; i <= 9; i++) {
      path.push(i);
      backtracking(i + 1, sum - i);
      path.pop();
    }
  };
  backtracking(1, n);
  return result;
}
console.log(sumCombine(3, 7));

//电话号码字母组合
function letterCombinations(digits) {
  const k = digits.length;
  let result = [],
    path = [];
  const map = [
    "",
    "",
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "pqrs",
    "tuv",
    "wxyz",
  ];
  if (k == 0) return [];
  if (k == 1) return map[digits].split("");
  const backtracking = (a) => {
    if (path.length === k) {
      result.push(path.join(""));
      return;
    }
    for (let v of map[digits[a]]) {
      path.push(v);
      backtracking(a + 1);
      path.pop();
    }
  };
  backtracking(0);
  return result;
}

//39 找出candidates中和为target的组合
const get = (candidates, target) => {
  let res = [];
  let path = [];
  candidates.sort();
  const backtracking = (start, sum) => {
    if (sum < 0) return;
    if (sum == 0) {
      res.push([...path]);
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      path.push(candidates[i]);
      //start i可重复 i+1不可重复
      backtracking(i, sum - candidates[i]);
      path.pop();
    }
  };
  backtracking(0, target);
  return res;
};
console.log(get([2, 3, 6, 7], 7));

const getSumNoRepaeat = (candidates, target) => {
  let res = [];
  let path = [];
  candidates.sort();
  const backtracking = (start, sum) => {
    if (sum < 0) return;
    if (sum == 0) {
      res.push([...path]);
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      //使用过的元素不可以重复 在同一个组合内可以重复 但是两个组合不可以重复  去重 同一树层使用过的
      //树层去重需要对数组排序
      if (i > start && candidates[i] == candidates[i - 1]) continue;
      path.push(candidates[i]);
      backtracking(i + 1, sum - candidates[i]); //start i可重复 i+1不可重复
      path.pop();
    }
  };
  backtracking(0, target);
  return res;
};
console.log(getSumNoRepaeat([2, 5, 2, 1, 2], 5));

//分割回文子串

const cutStr = (s) => {
  let result = [];
  let path = [];
  const isPalindrome = (s, l, r) => {
    for (let i = l, j = r; i < j; i++, j--) {
      if (s[i] !== s[j]) return false;
    }
    return true;
  };
  const backtracking = (start) => {
    //终止条件？
    if (start >= s.length) {
      result.push([...path]);
      return;
    }
    for (let i = start; i < s.length; i++) {
      if (!isPalindrome(s, start, i)) continue;
      path.push(s.slice(start, i + 1));
      backtracking(i + 1);
      path.pop();
    }
  };
  backtracking(0);
  return result;
};
console.log(cutStr("aab"));

//复原IP地址  

