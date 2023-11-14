function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

console.log(mergeSort([])); // []
console.log(mergeSort([1, 2])); // [1,2]
console.log(mergeSort([1])); // [1]
console.log(mergeSort([3, 1, 98, 23, 33, 78, 69, 200, 191, 2000, 6, 9, 33])); // [1, 3, 6, 9, 23, 33, 33, 69, 78, 98, 191, 200, 2000]
console.log(mergeSort([9, 7, 5, 3, 8, 6, 1, 4, 2, 0])); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
