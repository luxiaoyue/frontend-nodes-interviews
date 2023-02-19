const bubleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
};
console.log(bubleSort([1, 3, 5, 2, 6, 4, 7, 9, 8]));

const insertSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    //插入的节点
    for (let j = i - 1; j >= 0; j--) {
      //从插入节点开始，向前排序
      //给确定的数组排序
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      } else {
        break;
      }
    }
  }
  return arr;
};
console.log(insertSort([1, 3, 2, 4, 8, 7, 9, 6, 5]));

//选择排序  找到i之后 小于arr[i]也就是最小的index，交换
const selectSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let index = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        index = j;
      }
    }
    [arr[index], arr[i]] = [arr[i], arr[index]];
  }
  return arr;
};
console.log(selectSort([1, 3, 2, 4, 8, 7, 9, 6, 5]));

//快排
const quickSort = (arr) => {
  if (arr.length == 0) return arr;
  let index = arr.shift();
  let left = [],
    right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < index) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(index, quickSort(right));
};
console.log(quickSort([1, 3, 2, 4, 8, 7, 9, 6, 5]));

//归并排序
const mergeSort = (arr, start = 0, end = arr.length - 1) => {
  const merge = (arr, start, mid, end) => {
    let i = start,
      j = mid + 1,
      p = 0;
    let temp = [];
    while (i <= mid && j <= end) {
      if (arr[i] < arr[j]) {
        temp[p] = arr[i];
        p++;
        i++;
      } else {
        temp[p] = arr[j];
        p++;
        j++;
      }
    }
    while (i <= mid) {
      temp[p] = arr[i];
      p++;
      i++;
    }
    while (j <= end) {
      temp[p] = arr[j];
      p++;
      j++;
    }
    for (let k = start; k <= end; k++) {
      arr[k] = temp[k - start];
    }
    return arr;
  };
  // let start=0,end=arr.length-1;
  if (start < end) return;
  let mid = parseInt((start + end) / 2);
  mergeSort(arr, start, mid);
  mergeSort(arr, mid + 1, end);
  merge(arr, start, mid, end);
  return arr;
};
console.log(mergeSort([1, 3, 2, 4, 8, 7, 9, 6, 5]));
