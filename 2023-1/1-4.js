var addStrings = function (num1, num2) {
  let list1 = num1.split("");
  let list2 = num2.split("");
  let i = list1.length - 1,
    j = list2.length - 1;
  let temp = 0;
  let list3 = [];
  while (i >= 0 || j >= 0) {
    if (i >= 0 && j >= 0) {
      let res = Number(list1[i]) + Number(list2[j]) + temp;
      console.log(res);
      if (res < 10) {
        list3.push(res);
        temp = 0;
      } else {
        list3.push(res - 10);
        temp = Math.floor(res / 10);
      }
      i--;
      j--;
    } else if (i == -1 && j >= 0) {
      let res = 0 + Number(list2[j]) + temp;
      if (res < 10) {
        list3.push(res);
        temp = 0;
      } else {
        list3.push(res - 10);
        temp = Math.floor(res / 10);
      }
      j--;
    } else if (j == -1 && i >= 0) {
      let res = Number(list1[i]) + 0 + temp;
      if (res < 10) {
        list3.push(res);
        temp = 0;
      } else {
        list3.push(res - 10);
        temp = Math.floor(res / 10);
      }
      i--;
    }
  }
  if (temp > 0) {
    list3.push(temp);
  }
  console.log(list3);
};
addStrings("0", "91");
