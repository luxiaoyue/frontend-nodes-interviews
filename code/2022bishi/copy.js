function cal(str) {
  //存放数字的栈
  let numStack = new Stack();
  //存放运算符的栈
  let expStack = new Stack();
  //获取表达式的值
  let expression = str;
  while (expression) {
    let value = parseInt(expression);
    if (!isNaN(value)) {
      let len = value.toString().length;
      //将提取的数字在字符串中删除
      expression = expression.substring(len);
      //将数字压入栈中
      numStack.push(Number(value));
    } else {
      //如果是运算符
      value = expression.charAt(0);
      //将提取的运算符在字符串中删除
      expression = expression.substring(1);
      if (expStack.isEmpty()) {
        expStack.push(value);
      } else if (priority(value) <= priority(expStack.stackTop())) {
        //如果当前优先级小于或等于栈中的运算符就对数字栈中的两个数进行运算
        //如果大于则存放在运算符栈中
        let num2 = numStack.pop();
        let num1 = numStack.pop();
        let operator = expStack.pop();
        //对两个数进行运算
        let result = calculator(num1, num2, operator);
        expStack.push(value);
        numStack.push(result);
      } else if (priority(value) > priority(expStack.stackTop())) {
        expStack.push(value);
      }
    }
  }
  //最后对两个栈中的元素进行运算
  while (!expStack.isEmpty()) {
    let num2 = numStack.pop();
    let num1 = numStack.pop();
    let operator = expStack.pop();
    let result = calculator(num1, num2, operator);
    numStack.push(result);
  }
  console.log("运算结果是：", numStack.stackTop());
}
class Stack {
  constructor() {
    this.top = -1;
    this.stack = [];
  }
  push(value) {
    this.top++;
    this.stack[this.top] = value;
  }
  pop() {
    if (this.top < 0) throw new Error("栈空，无法打印栈");
    let value = this.stack[this.top];
    this.top--;
    return value;
  }
  isEmpty() {
    if (this.top < 0) {
      return true;
    } else {
      return false;
    }
  }
  stackTop() {
    return this.stack[this.top];
  }
  show() {
    if (!this.isEmpty()) {
      for (let i = this.top; i >= 0; i--) {
        console.log(`stack[${i}]=${this.stack[i]}`);
      }
    }
  }
}
//比较优先级
function priority(char) {
  if (char == "+" || char == "-") return 0;
  if (char == "*" || char == "/") return 1;
}
function calculator(num1, num2, operator) {
  if (operator == "+") {
    return num1 + num2;
  } else if (operator == "-") {
    return num1 - num2;
  } else if (operator == "*") {
    return num1 * num2;
  } else if (operator == "/") {
    return num1 / num2;
  }
}

cal("1+23+34");
