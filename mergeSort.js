function mergeSort(arr) {
  // base case: array with less than 1 element is considered sorted
  if (arr.length <= 1) return arr;

  // divide unsorted array and divide into 2 halves
  const half = Math.ceil(arr.length / 2);
  const left = arr.slice(0, half);
  const right = arr.slice(half);

  // recursively sort each half
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // merge sorted halves
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  const sortedArr = [];

  // while both halves have elements
  while (left.length > 0 && right.length > 0) {
    // compare both first elements of left and right and push min value to sortedArr
    if (left[0] <= right[0]) {
      // shift() removes the first element from left array and returns the value of the returned element
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }

  // concatenate (join) any remaining left and right array elements to sortedArr
  return sortedArr.concat(left).concat(right);
}
