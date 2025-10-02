let fibArray = [];

// iterative fibonacci sequence
function fibs(n) {
  for (let i = 0; i <= n; i++) {
    if (i === 0) {
      fibArray.push(0);
    } else if (i === 1 || i === 2) {
      fibArray.push(1);
    } else {
      fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
    }
  }
  return fibArray;
}

// recursive fibonacci sequence
function fibsRec(n) {
  if (n <= 0) return [0];
  if (n === 1) return [0, 1];
  if (n === 2) return [0, 1, 1];

  // stores previous fib array
  const prev = fibsRec(n - 1);

  // spread operator creates new array with all previous elements + new one
  // prev.length = number of elements in the array
  // prev[prev.length - 1] = index of last element; prev[prev,length - 2] = index of second last element
  return [...prev, prev[prev.length - 1] + prev[prev.length - 2]];
}
