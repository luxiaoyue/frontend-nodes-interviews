/**
 * 前中后序
 * 递归遍历
 * 迭代的遍历
 *
 * 层序遍历
 */

const preOrderTraverse = (root) => {
  let result = [];
  const traverse = (node) => {
    if (node == null) return;
    result.push(node.val);
    traverse(node.left);
    traverse(node.right);
  };
  traverse(root);
  return result;
};

const midOrderTraverse = (root) => {
  let result = [];
  const traverse = (node) => {
    if (node == null) return;
    traverse(node.left);
    result.push(node.val);
    traverse(node.right);
  };
  traverse(root);
  return result;
};

const postOrderTraverse = (root) => {
  let result = [];
  const traverse = (node) => {
    if (node == null) return;
    traverse(node.left);
    traverse(node.right);
    result.push(node.val);
  };
  traverse(root);
  return result;
};

const preOrderTraverse1 = (root) => {
  let res = [];
  let stack = [];
  if (root) res.push(root);
  while (stack.length > 0) {
    let top = stack.pop();
    if (top) {
      res.push(top.val);
    }
    //入栈 右左  出栈才可以是中左右
    if (top.right) stack.push(top.right);
    if (top.left) stack.push(top.left);
  }
  return res;
};

const midOrderTraverse1 = (root) => {
  let res = [];
  let stack = [];
  let cur = root;
  while (stack.length || cur) {
    if (cur) {
      stack.push(cur);
      cur = cur.left;
    } else {
      cur = stack.pop();
      res.push(cur.val);
      cur = cur.right;
    }
  }
  return res;
};

const postOrderTraverse1 = (root) => {
  let res = [];
  let stack = [];
  if (root) res.push(root);
  while (stack.length > 0) {
    let top = stack.pop();
    res.push(top.val);
    top.left && stack.push(top.left);
    top.right && stack.push(top.right);
  }
  return res.reverse();
};

/**
 * 前序 可以接收到父节点传过来的参数
 * 后序 可以接收到父节点和子节点的参数
 *
 * 例如：
 * 计算目前节点所处的层高--前序遍历  每次传参level+1
 * 打印出左右子树各有多少个节点--后序遍历  每次递归返回节点数目
 * 记录出节点的最大深度--
 *
 */

const maxDept = (root) => {
  let res = 0;
  let dept = 0;
  const traverse = (node) => {
    if (node == null) return;
    dept++;
    if (node.left == null && node.right == null) {
      res = Math.max(res, dept);
    }
    traverse(node.left);
    traverse(node.right);
    dept--;
  };
  traverse(root);
  return res;
};

const maxDept1 = (root) => {
  let res = 0;
  const traverse = (node) => {
    if (node == null) return 0;
    let maxLeft = traverse(node.left);
    let maxRight = traverse(node.right);
    return Math.max(maxLeft, maxRight) + 1;
  };
  res = traverse(root);
  return res;
};

const calLevel = (root) => {
  const traverse = (node, level) => {
    if (node == null) return;
    console.log("层高", level);
    traverse(node.left, level + 1);
    traverse(node.right, level + 1);
  };
  traverse(root, 1);
};

const countNode = (root) => {
  if (root == null) return 0;
  let left = countNode(root.left);
  let right = countNode(root.right);
  return left + right + 1;
};

const maxDiamte = (root) => {
  let res = 0;
  let dept = 0;
  const traverse = (node) => {
    if (node == null) return 0;
    let left = traverse(node.left);
    let right = traverse(node.right);
    dept = left + right;
    res = Math.max(dept, res);
    return 1 + Math.max(left, right);
  };
  traverse(node);
  return res;
};
