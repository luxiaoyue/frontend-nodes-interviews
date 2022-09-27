//非0左移
function move(data) {
  for (let i = 0; i < data.length; i++) {
    if (data[i] !== 0) {
      let temp = data[i];
      data.splice(i, 1);
      data.unshift(temp);
    }
  }
  return data;
}

function move1(data) {
  let j = -1;
  for (let i = 0; i < data.length; i++) {
    if (data[i] !== 0) {
      j++;
      if (j != i) {
        let temp = data[j];
        data[j] = data[i];
        data[i] = temp;
      }
    }
  }
  console.log(data);
}
let arr = [1, 0, 3, 0, 4];
let arr1 = [1, 2, 3, 0];
let arr2 = [0, 0, 0];
let arr3 = [1, 2, 3];
let arr4 = [];
move1(arr);
