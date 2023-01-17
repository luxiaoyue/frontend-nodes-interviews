//判断标签是否闭合的题
const str1 = "<html><div>123</div></html>";
const str2 = "<div><div>123</div><div></div></div>"; // true
const str3 = "<html><div>123</html></div>"; // false
function check(str1) {
  let str = str1.split("");
  let stack = [];
  for (let i = 0; i < str.length - 1; i++) {
    let temp = "";
    if (str[i] == "<" && str[i + 1] != "/") {
      i++;
      while (str[i] != ">") {
        temp += str[i];
        i++;
      }
      stack.push(temp);
    } else if (str[i] == "<" && str[i + 1] == "/") {
      i++;
      i++;
      while (str[i] != ">") {
        temp += str[i];
        i++;
      }
      if (temp != stack.pop()) {
        return false;
      }
    } else {
      continue;
    }
    // console.log(temp);
  }
  return true;
  // console.log(stack);
}
//check(str1);
//check(str2);
console.log(check(str3));

//发布订阅模式
let eventEmitter = {
  list: {}, //监听队列
  //订阅
  on(event, fn) {
    if (!this.list[event]) {
      //没有event的值说明没有订阅过 就创建一个
      this.list[event] = [];
    }
    this.list[event].push(fn);
  },
  //发布
  emit() {
    let key = [].shift.call(arguments); //第一个参数是event的值
    fns = this.list[key]; //event的对应的队列
    if (!fns || fns.length == 0) {
      return false;
    }
    // 遍历 event 值对应的缓存列表，依次执行 fn
    fns.forEach((fn) => {
      fn.apply(this, arguments);
    });
  },
  //取消订阅
  remove(key, fn) {
    let fns = this.list[key];
    if (!fns) return false;
    if (!fn) {
      fns && (fns.length = 0);
    } else {
      fns.forEach((item, i) => {
        if (item == fn) {
          fns.splice(i, 1);
        }
      });
    }
  },
};

// function user1(content) {
//   console.log("用户1订阅了:", content);
// }

// function user2(content) {
//   console.log("用户2订阅了:", content);
// }

// // 订阅
// eventEmitter.on("article", user1);
// eventEmitter.on("article", user2);

// // 发布
// eventEmitter.emit("article", "Javascript 发布-订阅模式");
// 订阅
function user1(content) {
  console.log("用户1订阅了:", content);
}

function user2(content) {
  console.log("用户2订阅了:", content);
}

function user3(content) {
  console.log("用户3订阅了:", content);
}

function user4(content) {
  console.log("用户4订阅了:", content);
}

eventEmitter.on("article1", user1);
eventEmitter.on("article1", user2);
eventEmitter.on("article1", user3);
eventEmitter.emit("article1", "Javascript 发布-订阅模式");
// 取消user2方法的订阅
eventEmitter.remove("article1", user2);

// 发布
eventEmitter.emit("article1", "Javascript 发布-订阅模式");
// eventEmitter.emit('article2', 'Javascript 观察者模式');
// eventEmitter.emit('article2', 'Javascript 观察者模式');
