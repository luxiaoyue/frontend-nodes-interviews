const binarySearch = (list, target) => {
  let left = 0,
    right = list.length - 1;
  let mid = parseInt((left + right) / 2);
  while (left <= right) {
    mid = parseInt((left + right) / 2);
    if (list[mid] == target) {
      return mid;
    } else if (list[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};
console.log(binarySearch([1, 2, 3, 4, 6, 7, 8, 9], 3));
