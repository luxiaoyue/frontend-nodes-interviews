//0420 快手面经看到的一个题
console.log(0);
setTimeout(() => {
  console.log(1);
  new Promise((resolve) => {
    console.log(2);
    resolve();
  }).then(() => {
    console.log(3);
  });
}, 1000);

new Promise((resolve) => {
  console.log(4);
  for (let i = 0; i < 9; i++) {
    i == 7 && resolve();
  }
  console.log(5);
}).then(() => {
  console.log(6);
});

setTimeout(() => {
  console.log(7);
  new Promise((resolve) => {
    console.log(8);
    resolve();
  }).then(() => {
    console.log(9);
  });
}, 1000);
console.log(10);

//0 4 5 10
//6 1 2 3
//7 8 9

var name = "南玖";
var person = {
  name: "nanjiu",
  say: function () {
    console.log("say:", this.name);
  },
  say2: () => {
    console.log("say2:", this.name);
  },
};
person.say(); // say: nanjiu
person.say2(); // say2: 南玖
